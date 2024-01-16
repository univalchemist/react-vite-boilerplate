import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { t } from 'i18next'

import { Icon } from '@/components'
import { INavItem } from '@/types'

const navItems: INavItem[] = [
  {
    id: 'alerts',
    label: 'alerts',
    action: '/',
  },
]

export const CustomerAppNav: React.FC = () => {
  const navigate = useNavigate()
  const pathname = window.location.pathname

  return (
    <div className="surface-nav">
      <ul>
        {navItems.map(item => (
          <li
            key={item.id}
            onClick={() => (item.action ? navigate(item.action) : null)}
            className={pathname.startsWith(item.action || '') ? 'active' : ''}
          >
            <NavLink
              to={item.action || ''}
              onClick={e => {
                e.preventDefault()
              }}
            >
              <Icon name={item.icon} />
              {t(item.label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
