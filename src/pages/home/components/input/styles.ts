import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 4.5rem auto 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const PostsStatusContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const FormContainer = styled.form`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;

  input {
    width: 100%;
    height: 3.125rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};

    padding: 0 1rem;

    background-color: ${(props) => props.theme['base-input']};

    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 1rem;
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
      outline: none;
    }
  }
`
