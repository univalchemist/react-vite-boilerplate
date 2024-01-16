import { ENDPOINT } from '@/constants'

export const notFoundPath = '/404'
export const signInPath = '/sign-in'
export const homePath = '/'

export const publicPath: string[] = []

export const isActiveLink = (locationPath: string, path: string): boolean => {
  const _path = locationPath.split('/')

  return _path.includes(path)
}

export const generatePath = (
  path: string,
  params: { [x: string]: string | number | undefined | null } = {},
): string => {
  let newPath: string = path
  Object.keys(params).forEach(param => {
    newPath = newPath.replace(`:${param}`, `${params[param] || ''}`)
  })

  return newPath
}

export const getFileUrl = (
  path: Maybe<string>,
  defaultFile?: string,
): string => {
  if (!path) return defaultFile || ''

  const regex = /^(http|https)/
  if (regex.test(path)) {
    return path
  }

  return `http://${ENDPOINT}/media/${path}`
}

export const generateUrl = (
  pathData: string[],
  queryData?: Record<string, string>[],
): string => {
  const baseUrl = `${window.location.protocol}//${window.location.host}`
  let path = pathData.join('/')
  if (queryData && queryData.length > 0) {
    const query = queryData
      .map(item => Object.keys(item)[0] + '=' + Object.values(item)[0])
      .join('&')
    path = path + '?' + query
  }

  return `${baseUrl}/${path}`
}
