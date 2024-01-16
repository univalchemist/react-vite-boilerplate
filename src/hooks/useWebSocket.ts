import { useEffect, useState, useRef, useCallback } from 'react'
import { AUTH_TOKEN_KEY, WEBSOCKET_ENDPOINT } from '@/constants'
import { getStorageValue } from '@/utils'

const retryLimit = 5

export const useWebSocket = <T = any>(
  path: string,
  onEvent: (_command: string, _pk: number, _data: T | undefined) => void,
) => {
  const timer = useRef<NodeJS.Timeout | null>(null)
  const socketRef = useRef<WebSocket | null>(null)
  const retry = useRef<number>(retryLimit)
  const [isConnected, setIsConnected] = useState<boolean | undefined>()

  const connect = useCallback(() => {
    if (socketRef.current) return
    const token = getStorageValue(AUTH_TOKEN_KEY)
    if (!token) return
    socketRef.current = new WebSocket(
      `${WEBSOCKET_ENDPOINT}/ws/${path}?token=${token}`,
    )
    socketRef.current.onopen = () => {
      setIsConnected(true)
      retry.current = retryLimit
      if (timer.current) clearTimeout(timer.current)
      console.log(
        `WebSocket connection established for [${path}]`,
        new Date().toString(),
      )
    }

    socketRef.current.onmessage = (event: any) => {
      const res = JSON.parse(event.data || '{}')
      if (res.message?.command) {
        const _data = Array.isArray(res.message?.data)
          ? res.message?.data[0]
          : res.message?.data
        onEvent(res.message?.command, _data.pk, _data.fields as T)
      }
    }

    socketRef.current.onclose = () => {
      socketRef.current = null
      if (retry.current === 0) return
      if (isConnected === undefined) {
        timer.current = setTimeout(() => {
          retry.current = Math.max(0, retry.current - 1)
          connect()
        }, 2000)
      }
      console.log('WebSocket connection closed', new Date().toString())
    }

    socketRef.current.onerror = () => {
      socketRef.current = null
      retry.current = Math.max(0, retry.current - 1)
      console.log('WebSocket connection error', new Date().toString())
    }
  }, [isConnected, onEvent, path, retry])

  useEffect(() => {
    if (socketRef.current) return
    connect()
  }, [connect])

  useEffect(() => {
    return () => {
      setIsConnected(false)
      socketRef.current?.close()
    }
  }, [])

  return {
    closeSocket: () => {
      setIsConnected(false)
      socketRef.current?.close()
    },
  }
}
