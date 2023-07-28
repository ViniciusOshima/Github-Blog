import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, InputContainer, PostsStatusContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { fetchIssues, issues } = useContext(IssuesContext)

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInput) {
    await fetchIssues(data.query)
  }

  return (
    <InputContainer>
      <PostsStatusContainer>
        <p>Publicações</p>
        <span>{issues.length} publicações</span>
      </PostsStatusContainer>
      <FormContainer onChange={handleSubmit(handleSearchIssues)} action="">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </FormContainer>
    </InputContainer>
  )
}
