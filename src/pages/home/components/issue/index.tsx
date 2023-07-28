import { dateFormatter } from '../../../../utils/formatter'
import {
  ContentIssueContainer,
  IssueContainer,
  TitleIssueContainer,
} from './style'

interface IssueProps {
  title: string
  content: string
  createdAt: string
  id: number
}

export function Issue({ title, content, createdAt, id }: IssueProps) {
  return (
    <IssueContainer to={`/post/${id}`} title="post">
      <TitleIssueContainer>
        <p>{title.length > 40 ? title.substring(0, 40) + '...' : title}</p>
        <span>{dateFormatter.format(new Date(createdAt))}</span>
      </TitleIssueContainer>

      <ContentIssueContainer>
        {content.substring(0, 170) + '...'}
      </ContentIssueContainer>
    </IssueContainer>
  )
}
