import { useCallback, useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faker } from '@faker-js/faker'
import moment from 'moment'

import { minutesToTimeStr } from '@/utils'

import { Infinite } from '.'
import { IInfiniteProps } from './types'

const meta = {
  title: 'Component/Infinite',
  component: Infinite,
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: 'text' } },
    WrapEl: { control: { type: 'text' } },
    loading: { options: [true, false], control: { type: 'radio' } },
    hasMore: { options: [true, false], control: { type: 'radio' } },
  },
  args: {
    loading: false,
    className: 'updates-box',
  },
} satisfies Meta<typeof Infinite>

export default meta
type Story = StoryObj<IInfiniteProps>

export const Primary: Story = {
  render: (props: IInfiniteProps) => {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(false)

    useEffect(() => {
      setLoading(!!props.loading)
    }, [props.loading])

    useEffect(() => {
      setHasMore(!!props.hasMore)
    }, [props.hasMore])

    useEffect(() => {
      setHasMore(data.length <= 100)
    }, [data.length])

    const onCreateData = useCallback(() => {
      return {
        company: faker.company.name(),
        time: moment
          .duration(faker.number.int({ min: 10, max: 59 }))
          .humanize(true),
        amount: `$${faker.number.float({
          min: 50,
          max: 300,
          precision: 0.01,
        })}`,
        timeLeft: minutesToTimeStr(faker.number.int({ min: 121, max: 389 })),
      }
    }, [])

    useEffect(() => {
      if (!data.length) {
        const newData = faker.helpers.multiple(onCreateData, { count: 25 })
        setData(newData)
      }
    }, [data.length, onCreateData])

    const onFetchMore = useCallback(() => {
      const newData = faker.helpers.multiple(onCreateData, { count: 25 })
      setLoading(true)
      setTimeout(() => {
        setData(prev => [...prev, ...newData])
        setLoading(false)
      }, 1000)
    }, [onCreateData])

    return (
      <div className="activity-updates story">
        <Infinite
          {...props}
          WrapEl={props.WrapEl || 'div'}
          loading={data.length > 0 && loading}
          hasMore={hasMore}
          onFetchMore={onFetchMore}
        >
          <ul>
            {data.map((a, idx) => (
              <li key={idx}>
                <h4>
                  {a.company} <span>{a.time}</span>
                </h4>
                <p>
                  New alert for <span>{a.amount}</span> - {a.timeLeft} left to
                  resolve
                </p>
              </li>
            ))}
          </ul>
        </Infinite>
      </div>
    )
  },
}
