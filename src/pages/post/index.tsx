import { ContentIssue } from './components/contentIssue'
import { IssueDescription } from './components/issueDescription'
import { PostContainer, PostInfosContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfosContainer>
        <IssueDescription />

        <ContentIssue />
      </PostInfosContainer>
    </PostContainer>
  )
}
