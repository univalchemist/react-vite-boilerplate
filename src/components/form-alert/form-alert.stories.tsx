import type { Meta, StoryObj } from '@storybook/react'

import { TextLink } from '../textlink'
import { FormAlert } from '.'
import { IFormAlertProps } from './types'

const meta = {
  title: 'Component/FormAlert',
  component: FormAlert,
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: 'text' }, defaultValue: 'error-notice' },
    children: {
      control: { type: 'string' },
    },
  },
  args: {
    className: 'error-notice',
  },
} satisfies Meta<typeof FormAlert>

export default meta
type Story = StoryObj<typeof meta>

export const ErrorNotice: Story = {
  args: {
    className: 'error-notice',
    children: <p className="head">This is an error notice</p>,
  },
  render: (props: IFormAlertProps) => (
    <div className="login-page">
      <div className="login-form">
        <FormAlert {...props}>{props.children}</FormAlert>
      </div>
    </div>
  ),
}

export const NoticeBox: Story = {
  args: {
    className: 'notice-box',
    children: (
      <div className="text">
        <h5>You have exhausted today’s quota!</h5>
        <p>
          Come back tomorrow to create more campaigns or{' '}
          <TextLink href="goto/change-your-plan">change your plan</TextLink>
        </p>
      </div>
    ),
  },
  render: (props: IFormAlertProps) => (
    <div className="alert-notice">
      <FormAlert {...props}>{props.children}</FormAlert>
    </div>
  ),
}

export const Primary: Story = {
  args: {
    children: <p>This is an example</p>,
  },
  render: (props: IFormAlertProps) => (
    <>
      <div className="login-page">
        <div className="login-form">
          <FormAlert>{props.children}</FormAlert>
        </div>
      </div>
    </>
  ),
}
