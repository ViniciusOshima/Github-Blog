import {
  ContentIssueContainer,
  IssueContainer,
  TitleIssueContainer,
} from './style'

export function Issue() {
  return (
    <IssueContainer to="/post" title="post">
      <TitleIssueContainer>
        <p>JavaScript data types and data structures</p>
        <span>Há 1 dia</span>
      </TitleIssueContainer>

      <ContentIssueContainer>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </ContentIssueContainer>
    </IssueContainer>
  )
}
