import React, { useState } from 'react'

import { Icon } from '@/components'
import logo from '@/assets/images/big-logo.svg'
import avatar from '@/assets/images/img_avatar.png'
import { Dropdown } from './components'

export const CustomerAppHeader: React.FC = () => {
  const [menuVisibility, setMenuVisibility] = useState(false)

  return (
    <header>
      <div className="nav-wrap">
        <div className="logo">
          <button type="button">
            <img src={logo} alt="" />
          </button>
        </div>

        <div className="toolbar">
          <div className="nav-links">
            <ul>
              <li>
                <Icon
                  onClick={() => setMenuVisibility(!menuVisibility)}
                  name="settings"
                />
              </li>
              <li>
                <Icon name="bell" />
              </li>
            </ul>
          </div>
          <div className="user-menu">
            <div className="avatar-img">
              <img src={avatar} alt="" />
            </div>
            <Dropdown
              onDismiss={() => setMenuVisibility(false)}
              open={menuVisibility}
              sections={dropdownItems}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

const dropdownItems = [
  {
    options: [{ label: 'Option 1' }],
  },
  {
    options: [{ label: 'Option 2', icon: 'star-outline' as const }],
  },
  {
    options: [
      { label: 'Option 3' },
      { label: 'Option 4', className: 'del', icon: 'trash' as const },
    ],
  },
]
