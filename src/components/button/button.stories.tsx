import type { Meta, StoryObj } from '@storybook/react'

import { IButtonProps } from './types'
import { Button } from '.'

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    iconLeft: { control: { type: 'text' } },
    iconRight: { control: { type: 'text' } },
    className: {
      description:
        '"outline" is another preset for this component, and please not that the className "outline" is dependent on the className "main-btn"',
      control: { type: 'text' },
    },
    loading: { options: [true, false], control: { type: 'select' } },
    disabled: { options: [true, false], control: { type: 'select' } },
    title: { description: 'Button title', control: { type: 'text' } },
  },
  args: {
    className: 'main-btn',
    title: 'Sample button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IButtonProps) => {
    return (
      <div className="btn-box">
        <Button {...props}>{props.title}</Button>
      </div>
    )
  },
}
