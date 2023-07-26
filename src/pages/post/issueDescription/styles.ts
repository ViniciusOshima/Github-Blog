import styled from 'styled-components'

export const IssueDescContainer = styled.div`
  width: 54rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem 2.5rem;
  margin-top: -30px;

  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  margin-top: -6.25rem;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 160%;

    display: flex;
    align-items: flex-start;
    gap: 8px;

    border-bottom: 1px solid ${(props) => props.theme['base-profile']};

    transition: all 0.3s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const TitlePropsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }
`

export const PropsContainer = styled.div`
  display: flex;
  gap: 2rem;

  div {
    color: ${(props) => props.theme['base-span']};

    display: flex;
    align-items: center;
    gap: 8px;
  }
`
