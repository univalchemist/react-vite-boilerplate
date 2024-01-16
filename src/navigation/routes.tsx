import React, { useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { Wrapper } from '@/layout'
import { SignInPage, NotFoundPage, HomePage } from '@/pages'

import { signInPath, notFoundPath } from '@/utils'

const AppRoutes: React.FC = () => {
  const onError = useCallback((e: Error) => {
    console.log({ appError: e })
  }, [])

  return (
    <ErrorBoundary onError={onError} fallback={<div />}>
      <Routes>
        <Route path={notFoundPath} element={<NotFoundPage />} />
        <Route element={<Wrapper />}>
          <Route path={signInPath} element={<SignInPage />} />
          {/* <Route element={<AuthWrapper />}> */}
          <Route>
            <Route path="/" element={<HomePage />} />

            {/* Routes that require login */}
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default AppRoutes
