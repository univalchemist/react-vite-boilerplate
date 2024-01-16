import React, { useCallback, useState } from 'react'
import { useAsyncFn } from 'react-use'
import { SubmitHandler } from 'react-hook-form'
import classNames from 'classnames'
import * as yup from 'yup'

import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import { Button, Checkbox, Form, FormAlert, TextInput } from '@/components'
import { useAuth, useHookForm } from '@/hooks'
import { t } from '@/i18n'
import { loginFormSchema } from '@/utils'

interface Props {}

export const SignInPage: React.FC<Props> = () => {
  const { onSignIn } = useAuth()
  const {
    handler: {
      register,
      handleSubmit,
      formState: { errors },
    },
  } = useHookForm(loginFormSchema)

  const [keepSignin, toggleKeepSignin] = useState(false)

  const [{ loading, error }, signIn] = useAsyncFn(onSignIn)

  const onSubmit: SubmitHandler<yup.InferType<typeof loginFormSchema>> =
    useCallback(
      data => {
        signIn({ ...data, keepSignin })
      },
      [signIn, keepSignin],
    )

  return (
    <div
      className={classNames('login-page', {
        loading: false,
      })}
    >
      <div className="login-form">
        <Form className="content-box" onSubmit={handleSubmit(onSubmit)}>
          <div className="logo">
            <Button>
              <Logo />
            </Button>
          </div>
          <div className="title">
            <h1>{t('loginToYourAccount')}</h1>
            <p>{t('welcomeBackEnterDetails')}</p>
          </div>

          {error && (
            <FormAlert>
              <p>{t('incorrectEmailOrPassword')}</p>
            </FormAlert>
          )}

          <div className="form-data">
            <div className="form-fields">
              <TextInput
                label={t('email')}
                className="w-100"
                placeholder="Enter your email"
                error={errors.email?.message}
                {...register('email')}
              />
              <TextInput
                label={t('password')}
                className="w-100"
                type="password"
                placeholder="••••••••"
                error={errors.password?.message}
                {...register('password')}
              />
            </div>
          </div>
          <div className="keep-signed">
            <div className="form-fields">
              <Checkbox
                checked={keepSignin}
                onChange={toggleKeepSignin}
                label={t('rememberMyLogin')}
              />
            </div>
          </div>
          <div className="form-submit">
            <Button
              type="submit"
              className="main-btn"
              loading={loading}
              disabled={loading}
            >
              {t('signIn')}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SignInPage
