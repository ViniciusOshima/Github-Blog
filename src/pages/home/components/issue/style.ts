import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const IssueContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  text-decoration: none;

  width: 26rem;
  height: 16.25rem;

  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['base-background']};

  padding: 2rem;

  background-color: ${(props) => props.theme['base-post']};

  transition: all 0.5s;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const TitleIssueContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  p {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 160%;
    width: 17rem;
  }

  span {
    line-height: 240%;
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const ContentIssueContainer = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
`
