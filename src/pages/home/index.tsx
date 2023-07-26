import { Input } from './components/input'
import { Issue } from './components/issue'
import { Profile } from './components/profile'
import { HomeContainer, HomeInfosContainer, IssuesContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeInfosContainer>
        <Profile />
        <Input />
        <IssuesContainer>
          <Issue />
          <Issue />
          <Issue />
          <Issue />
        </IssuesContainer>
      </HomeInfosContainer>
    </HomeContainer>
  )
}
