import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '.'
import { ISelectProps } from './types'
import { IOption } from '@/types'

const meta = {
  title: 'Component/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    disabled: { options: [true, false], control: { type: 'radio' } },
    className: { control: { type: 'text' } },
    options: { control: { type: 'array' } },
  },
  args: {
    label: 'Select Status',
    placeHolder: 'Example placeholder',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Pending', value: 'pending' },
      { label: 'Disabled', value: 'disabled' },
      { label: 'Removed', value: 'Removed' },
    ],
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<ISelectProps<string>>

export const Primary: Story = {
  render: (props: ISelectProps<string>) => {
    const [data, setData] = useState<IOption<string> | undefined>()

    return (
      <Select<string>
        {...props}
        value={data?.value}
        onChange={val => setData(val)}
      />
    )
  },
}
