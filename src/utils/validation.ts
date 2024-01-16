import { t } from '@/i18n'
import * as yup from 'yup'

export const loginFormSchema = yup
  .object()
  .shape({
    email: yup.string().email(t('invalidEmail')).required(t('emailRequired')),
    password: yup
      .string()
      .required(t('passwordRequired'))
      .min(6, t('invalidPassword')),
  })
  .required()
