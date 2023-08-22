import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import {
  IssueDescContainer,
  NavigationContainer,
  PropsContainer,
  TitlePropsContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { dateFormatter } from '../../../../utils/formatter'

interface PostProps {
  title: string
  userName: string
  comments: number
  createdAt: Date
  urlIssue: string
}

export function IssueDescription({
  title,
  userName,
  comments,
  createdAt,
  urlIssue,
}: PostProps) {
  return (
    <IssueDescContainer>
      <NavigationContainer>
        <NavLink to="/Github-Blog">
          <CaretLeft size={16} weight="bold" />
          <span>VOLTAR</span>
        </NavLink>
        <a href={urlIssue} target="blank">
          <p>VER NO GITHUB</p>
          <ArrowSquareOut size={16} weight="bold" />
        </a>
      </NavigationContainer>

      <TitlePropsContainer>
        <p>{title}</p>
        <PropsContainer>
          <div>
            <GithubLogo weight="fill" size={19} />
            <span>{userName}</span>
          </div>
          <div>
            <Calendar weight="fill" size={19} />
            {<span>{dateFormatter.format(new Date(createdAt))}</span>}
          </div>
          <div>
            <ChatCircle weight="fill" size={19} />
            <span>{comments} comentários</span>
          </div>
        </PropsContainer>
      </TitlePropsContainer>
    </IssueDescContainer>
  )
}
