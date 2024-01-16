import React, { useCallback, useEffect, useState, useMemo } from 'react'
import {
  useNavigate,
  useLocation,
  NavigateFunction,
  Location,
} from 'react-router-dom'

import {
  getStorageValue,
  setStorageValue,
  removeStorageValue,
  signInPath,
  publicPath,
  homePath,
  waitFor,
} from '@/utils'
import { ISignInPayload, TFunc } from '@/types'
import { AUTH_TOKEN_KEY, KEEP_SIGNIN_KEY } from '@/constants'

interface IAuthContext {
  authenticated: boolean
  signingIn: boolean
  authenticating?: boolean
  error: 'invalid' | 'notFound' | undefined
  me: Maybe<any>
  onUpdateMe: (_data: Maybe<any>) => void
  onClearError: TFunc
  onSignIn: (_payload: ISignInPayload) => Promise<void>
  onSignOut: TFunc
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const navigate: NavigateFunction = useNavigate()
  const { state: rootState, pathname, search }: Location = useLocation()
  const [authenticated, setAuthenticated] = useState<boolean>(true)
  const [me, setMe] = useState<Maybe<any>>(null)
  const [error, setError] = useState<'invalid' | 'notFound' | undefined>()

  const fromPath = rootState?.from?.pathname
  const onSignIn = useCallback(
    async (payload: ISignInPayload) => {
      if (payload.email && payload.password) {
        // TODO Login api call
        await waitFor(1000)
        if (payload.email === 'error@gmail.com') throw new Error()
        setAuthenticated(true)

        // After signin
        setStorageValue(AUTH_TOKEN_KEY, 'your token here', !!payload.keepSignin)
        setStorageValue(KEEP_SIGNIN_KEY, !!payload.keepSignin)
        navigate(fromPath || homePath, {
          replace: true,
        })
      }
    },
    [navigate, fromPath],
  )

  const onSignOut = useCallback(() => {
    removeStorageValue(AUTH_TOKEN_KEY)
    removeStorageValue(KEEP_SIGNIN_KEY)
    setAuthenticated(false)
    navigate(signInPath, { replace: true })
  }, [navigate])

  const onUpdateMe = useCallback(
    (data: Maybe<any>) => {
      if (me) {
        // @ts-ignore
        setMe(prev => ({ ...prev, ...(data || {}) }))
      }
    },
    [me],
  )

  useEffect(() => {
    // if (tokenLoading) return

    if (publicPath.includes(pathname)) return

    if (authenticated) return
    const token = getStorageValue(AUTH_TOKEN_KEY)

    if (!token) return
    setAuthenticated(true)

    const keepSignin = getStorageValue(KEEP_SIGNIN_KEY, 'false') === 'true'
    const fromPath = `${pathname}${search ? search : ''}`

    // TODO Add token login
    // ... ...
    // After login
    setStorageValue(AUTH_TOKEN_KEY, 'your token', keepSignin)
    navigate(fromPath || homePath, { replace: true })
  }, [authenticated, navigate, pathname, search])

  useEffect(() => {
    if (authenticated) {
      // TODO Add function to fetch me
    }
  }, [authenticated])

  const values = useMemo(
    () => ({
      authenticated,
      me,
      signingIn: false,
      authenticating: false,
      error,
      fetchingMe: false,
      onUpdateMe,
      onClearError: () => setError(undefined),
      onSignIn,
      onSignOut,
    }),
    [authenticated, error, me, onSignIn, onSignOut, onUpdateMe],
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
