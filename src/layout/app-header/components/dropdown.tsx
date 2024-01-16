import { useRef } from 'react'
import classNames from 'classnames'

import { Icon } from '@/components'
import { TFunc, TIconName } from '@/types'
import { useOnClickOutside } from '@/hooks'

interface IProps {
  sections: {
    options: {
      onClick?: TFunc
      label: string
      icon?: TIconName
      className?: string
    }[]
  }[]
  open: boolean
  onDismiss: TFunc
}

export const Dropdown = ({ sections, open, onDismiss }: IProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, true, onDismiss)

  return (
    <div ref={ref} className={classNames('menu-drop', { open })}>
      {sections.map((section, sectionIndex) => (
        <ul key={sectionIndex}>
          {section.options.map((option, optionIndex) => (
            <li className={option.className} key={optionIndex}>
              {option.label}
              <Icon name={option.icon}></Icon>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
