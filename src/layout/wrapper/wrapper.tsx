import React from 'react'
import { Outlet } from 'react-router-dom'

import { FullScreenLoader } from '@/components'
import { AuthContextProvider } from '@/contexts'
import { useAuth } from '@/hooks'

const TokenWrapper: React.FC = () => {
  const { authenticating } = useAuth()

  if (authenticating) {
    return <FullScreenLoader loading />
  }

  return <Outlet />
}

export const Wrapper = () => (
  <AuthContextProvider>
    <TokenWrapper />
  </AuthContextProvider>
)
