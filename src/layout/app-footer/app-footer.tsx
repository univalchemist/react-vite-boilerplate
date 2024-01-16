import React from 'react'
import { t } from '@/i18n'

export const AppFooter: React.FC = () => (
  <div className="copyright">
    <p>
      ©&nbsp;{t('boulder')}&nbsp;{new Date().getFullYear()}
    </p>
  </div>
)
