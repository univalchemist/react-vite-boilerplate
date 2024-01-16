import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from '.'
import { IRadioProps } from './types'

const meta = {
  title: 'Component/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    selected: { options: [true, false], control: { type: 'radio' } },
    disabled: { options: [true, false], control: { type: 'radio' } },
    children: { control: { type: 'string' } },
    label: { control: { type: 'string' } },
  },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const WithChildren: Story = {
  args: {
    children: (
      <>
        <b>All Alerts asap</b>
        <br />
        You'll be notified
      </>
    ),
  },
  render: (props: IRadioProps) => {
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => setChecked(!!props.selected), [props.selected])

    return (
      <div className="notifications-settings">
        <div className="settings-wrap">
          <div className="settings-box">
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <Radio
                        {...props}
                        selected={checked}
                        onSelect={() => setChecked(true)}
                      >
                        {props.children}
                      </Radio>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
}

export const WithLabel: Story = {
  args: {
    label: (
      <>
        Valid:
        <sub>(102)</sub>
      </>
    ),
  },
  render: (props: IRadioProps) => {
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => setChecked(!!props.selected), [props.selected])

    return (
      <div className="form-fields">
        <Radio {...props} selected={checked} onSelect={() => setChecked(true)}>
          {props.children}
        </Radio>
      </div>
    )
  },
}
