import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;

  padding-bottom: 14.625rem;
  padding-top: 10px;

  background-color: ${(props) => props.theme['base-background']};
`

export const PostInfosContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
`
