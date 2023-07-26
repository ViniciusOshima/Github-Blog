import { IssueDescription } from './issueDescription'
import { PostContainer, PostInfosContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfosContainer>
        <IssueDescription />

        <div>content</div>
      </PostInfosContainer>
    </PostContainer>
  )
}
