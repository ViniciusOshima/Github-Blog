import { Profile } from './components/profile'
import { HomeContainer, HomeInfosContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeInfosContainer>
        <Profile />
        <div>input</div>
        <div>posts</div>
      </HomeInfosContainer>
    </HomeContainer>
  )
}
