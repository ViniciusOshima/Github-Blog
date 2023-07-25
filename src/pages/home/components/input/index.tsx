import { FormContainer, InputContainer, PostsStatusContainer } from './styles'

export function Input() {
  return (
    <InputContainer>
      <PostsStatusContainer>
        <p>Publicações</p>
        <span>6 publicações</span>
      </PostsStatusContainer>
      <FormContainer action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>
    </InputContainer>
  )
}
