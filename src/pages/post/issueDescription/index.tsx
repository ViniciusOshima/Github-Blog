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

export function IssueDescription() {
  return (
    <IssueDescContainer>
      <NavigationContainer>
        <NavLink to="/">
          <CaretLeft size={16} weight="bold" />
          <span>VOLTAR</span>
        </NavLink>
        <a href="">
          <p>VER NO GITHUB</p>
          <ArrowSquareOut size={16} weight="bold" />
        </a>
      </NavigationContainer>

      <TitlePropsContainer>
        <p>JavaScript data types and data structures</p>
        <PropsContainer>
          <div>
            <GithubLogo weight="fill" size={19} />
            <span>cameronwll</span>
          </div>
          <div>
            <Calendar weight="fill" size={19} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <ChatCircle weight="fill" size={19} />
            <span>5 comentários</span>
          </div>
        </PropsContainer>
      </TitlePropsContainer>
    </IssueDescContainer>
  )
}
