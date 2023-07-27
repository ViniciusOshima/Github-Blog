import { useEffect, useState } from 'react'
import { Input } from './components/input'
import { Issue } from './components/issue'
import { Profile } from './components/profile'
import { HomeContainer, HomeInfosContainer, IssuesContainer } from './styles'

interface Issue {
  title: string
  content: string
  createdAt: string
  id: number
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function loadIssues() {
    const response = await fetch(
      'https://api.github.com/search/issues?q=repo:ViniciusOshima/Github-Blog',
    )
    const data = await response.json()

    for (let i = 0; i < data.total_count; i++) {
      const Issues = {
        title: data.items[i].title,
        content: data.items[i].body,
        createdAt: data.items[i].created_at,
        id: data.items[i].id,
      }

      setIssues((issue) => [...issue, Issues])
    }
  }

  useEffect(() => {
    loadIssues()
  }, [])

  useEffect(() => {
    console.log(issues)
  }, [issues])

  return (
    <HomeContainer>
      <HomeInfosContainer>
        <Profile />
        <Input />
        <IssuesContainer>
          {issues.map((issue) => {
            return (
              <Issue
                key={issue.id}
                title={issue.title}
                content={issue.content}
                createdAt={issue.createdAt}
              />
            )
          })}
        </IssuesContainer>
      </HomeInfosContainer>
    </HomeContainer>
  )
}
