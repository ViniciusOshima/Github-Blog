import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;

  padding-bottom: 14.625rem;
  padding-top: 10px;

  background-color: ${(props) => props.theme['base-background']};
`

export const HomeInfosContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
`

export const IssuesContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`
