import React from 'react'
import { useLocation, Navigate, Location, Outlet } from 'react-router-dom'

import { homePath, signInPath } from '@/utils/index'
import { useAuth } from '@/hooks'
import { AppLayout } from '../app-layout'

export const AuthWrapper: React.FC = () => {
  const { authenticated, authenticating } = useAuth()
  const location: Location = useLocation()

  if (authenticating) {
    return null
  }
  if (!authenticated) {
    return (
      <Navigate
        to={signInPath}
        state={{ from: location || homePath }}
        replace
      />
    )
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}

export default AuthWrapper
