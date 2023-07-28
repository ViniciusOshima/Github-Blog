import { ContentIssueContainer } from './styles'

interface ContentProps {
  content: string
}

export function ContentIssue({ content }: ContentProps) {
  return (
    <ContentIssueContainer>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </ContentIssueContainer>
  )
}
