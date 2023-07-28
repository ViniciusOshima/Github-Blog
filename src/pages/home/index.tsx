import { useContext } from 'react'
import { SearchForm } from './components/input'
import { Issue } from './components/issue'
import { Profile } from './components/profile'
import { HomeContainer, HomeInfosContainer, IssuesContainer } from './styles'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Home() {
  const { issues } = useContext(IssuesContext)

  return (
    <HomeContainer>
      <HomeInfosContainer>
        <Profile />
        <SearchForm />
        <IssuesContainer>
          {issues.map((issue) => {
            return (
              <Issue
                key={issue.id}
                title={issue.title}
                content={issue.content}
                createdAt={issue.createdAt}
                id={issue.id}
              />
            )
          })}
        </IssuesContainer>
      </HomeInfosContainer>
    </HomeContainer>
  )
}
