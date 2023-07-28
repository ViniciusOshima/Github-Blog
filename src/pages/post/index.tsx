import { useParams } from 'react-router-dom'
import { ContentIssue } from './components/contentIssue'
import { IssueDescription } from './components/issueDescription'
import { PostContainer, PostInfosContainer } from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Post {
  title: string
  userName: string
  comments: number
  createdAt: Date
  content: string
  urlIssue: string
}

export function Post() {
  const { issueNumber } = useParams()

  const [post, setPost] = useState<Post>()

  async function fetchPost() {
    const url = `https://api.github.com/repos/ViniciusOshima/Github-Blog/issues/${issueNumber}`

    const response = await axios.get(url)

    setPost({
      title: response.data.title,
      userName: response.data.user.login,
      comments: response.data.comments,
      createdAt: response.data.created_at,
      content: response.data.body,
      urlIssue: response.data.html_url,
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  useEffect(() => {
    console.log(post)
  }, [post])

  return (
    <PostContainer>
      <PostInfosContainer>
        {post && (
          <>
            <IssueDescription
              title={post.title}
              userName={post.userName}
              comments={post.comments}
              createdAt={post.createdAt}
              urlIssue={post.urlIssue}
            />

            <ContentIssue content={post.content} />
          </>
        )}
      </PostInfosContainer>
    </PostContainer>
  )
}
