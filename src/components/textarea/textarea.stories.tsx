import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '.'
import { ITextAreaProps } from './types'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
/**
 *  Examples of `Control`. You can use one of these control types for other components
 *  - control: { type: 'number', min: 1, step: 1 },
 *  - options: ['small', 'large', 'full'], control: { type: 'select' },
 *  - options: ['top', 'right', 'bottom', 'left'], control: { type: 'check' },
 *  - control: { type: 'boolean' },
 *  - control: { type: 'date' },
 *  - control: { type: 'object' },
 */
const meta = {
  title: 'Component/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    label: { defaultValue: 'Message', control: { type: 'text' } },
    required: {
      control: { type: 'radio' },
      options: [true, false],
    },
    placeholder: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
    className: { control: { type: 'text' } },
    disabled: { options: [true, false], control: { type: 'radio' } },
  },
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: ITextAreaProps) => {
    const [value, setValue] = useState<string>('')

    return (
      <div className="form-fields">
        <TextArea
          {...props}
          value={value}
          onChange={_e => setValue(_e.currentTarget.value)}
        />
      </div>
    )
  },
}
