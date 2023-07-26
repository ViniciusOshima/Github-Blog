import { ContentIssue } from './contentIssue'
import { IssueDescription } from './issueDescription'
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
