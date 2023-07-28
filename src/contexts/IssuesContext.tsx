import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface Issue {
  title: string
  content: string
  createdAt: string
  id: number
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(query?: string) {
    setIssues([])

    const response = await axios.get('https://api.github.com/search/issues', {
      params: {
        q: query
          ? `repo:ViniciusOshima/Github-Blog ${query}`
          : `repo:ViniciusOshima/Github-Blog`,
      },
    })

    for (let i = 0; i < response.data.total_count; i++) {
      const issues = {
        title: response.data.items[i].title,
        content: response.data.items[i].body,
        createdAt: response.data.items[i].created_at,
        id: response.data.items[i].id,
      }

      setIssues((issue) => [...issue, issues])
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  useEffect(() => {
    console.log(issues)
  }, [issues])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
