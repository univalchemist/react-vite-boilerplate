import { Button } from '@/components'
import { useAuth } from '@/hooks'

export const HomePage = () => {
  const { onSignOut } = useAuth()

  return (
    <div>
      <p>Home Page</p>
      <Button onClick={onSignOut} className="main-btn outline">
        Sign Out
      </Button>
    </div>
  )
}

export default HomePage
