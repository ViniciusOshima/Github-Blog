import styled from 'styled-components'
import logoBG from '../../assets/background-logo.svg'

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  height: 18.5rem;

  background-image: url(${logoBG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
