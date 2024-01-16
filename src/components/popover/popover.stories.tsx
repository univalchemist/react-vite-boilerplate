import type { Meta, StoryObj } from '@storybook/react'

import { Placement } from '@/types'
import { Checkbox, Button, Icon } from '@/components'
import { IPopoverProps } from './types'
import { Popover } from '.'

const placements: Placement[] = [
  'top',
  'top-start',
  'top-end',
  'top-center',
  'bottom',
  'bottom-start',
  'bottom-end',
  'bottom-center',
  'right',
  'right-start',
  'right-end',
  'right-center',
  'left',
  'left-start',
  'left-end',
  'left-center',
]

const meta = {
  title: 'Component/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    button: { control: { type: false } },
    className: {
      control: { type: 'text' },
    },
    distance: {
      control: { type: 'number' },
    },
    disabled: { options: [true, false], control: { type: 'radio' } },
    initialOpen: { options: [true, false], control: { type: 'radio' } },
    trigger: { options: [true, false], control: { type: 'radio' } },
    positioning: { options: ['absolute', 'fixed'], control: { type: 'radio' } },
    placement: {
      options: placements,
      control: { type: 'select' },
    },
    closeOnOutside: { options: [true, false], control: { type: 'radio' } },
    onOpened: { control: false },
    onClosed: { control: false },
  },
  args: {
    button: <div />,
    disabled: false,
    initialOpen: undefined,
    trigger: 'on-click',
    positioning: 'fixed',
    children: null,
    placement: 'bottom-start',
    closeOnOutside: true,
    distance: 0,
    onOpened: () => undefined,
    onClosed: () => undefined,
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IPopoverProps) => {
    return (
      <div className="data-filters storybook">
        <ul>
          <li>
            <Popover
              {...props}
              WrapEl="div"
              className="filter-box"
              button={
                <div className="label">
                  <h4>
                    Status({props.placement}) <Icon name="chevron-down" />
                  </h4>
                </div>
              }
            >
              {onClose => (
                <div className="drop-item">
                  <div className="item-bg">
                    <div className="options-list">
                      <div className="form-fields">
                        <Checkbox label="Pending" />
                        <Checkbox label="Resolved" />
                        <Checkbox label="Expired" />
                        <Checkbox label="Starred" />
                        <Checkbox label="Archived" />
                      </div>
                      <div className="action-btn">
                        <Button
                          className="main-btn"
                          text="Apply"
                          onClick={onClose}
                        />
                        <Button
                          className="main-btn light"
                          text="Clear all"
                          onClick={onClose}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Popover>
          </li>
        </ul>
      </div>
    )
  },
}
