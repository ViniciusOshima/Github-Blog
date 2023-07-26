import styled from 'styled-components'

export const ContentIssueContainer = styled.div`
  padding: 2.5rem 2rem;

  color: ${(props) => props.theme['base-text']};
  line-height: 160%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    padding-bottom: 1.5rem;
  }

  h3 {
    color: ${(props) => props.theme.blue};
    line-height: 100%;
    font-weight: 400;

    border-bottom: 1px solid ${(props) => props.theme.blue};

    width: 8.5rem;
  }
`

export const CodeContainer = styled.img``
