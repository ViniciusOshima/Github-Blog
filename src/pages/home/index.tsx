import { Input } from './components/input'
import { Profile } from './components/profile'
import { HomeContainer, HomeInfosContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeInfosContainer>
        <Profile />
        <Input />
        <div>posts</div>
      </HomeInfosContainer>
    </HomeContainer>
  )
}
