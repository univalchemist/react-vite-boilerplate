import type { Meta, StoryObj } from '@storybook/react'

import { useCopy } from '@/hooks'
import { icons } from './constant'
import { IIconProps } from './types'
import { Icon } from '.'

const meta = {
  title: 'Component/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: { type: 'text' } },
  },
  args: {
    name: 'check',
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IIconProps) => {
    return <Icon {...props} />
  },
}

export const Examples: Story = {
  render: () => {
    const { copy } = useCopy()

    const onClickIcon = (icon: string) => {
      const text = `<Icon name="${icon}" />`
      copy(text)
    }
    return (
      <div className="icons-list">
        {icons.map(icon => (
          <div
            className="icon-item"
            title={`ic-${icon}`}
            onClick={() => onClickIcon(icon)}
          >
            <Icon name={icon} key={icon} />
          </div>
        ))}
      </div>
    )
  },
}
