export const useBrowserNotification = () => {
  const showBrowserNotification = (title: string, body?: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      return new Notification(title, {
        body,
        icon: '',
      })
    }
  }

  return showBrowserNotification
}
