import type { NextPage } from 'next'
import styled from 'styled-components'
import { usePlaceholdersQuery } from '../generated/graphql'
import withApollo from '../lib/withApollo'

const Placeholders: NextPage = () => {
  const { loading, data, refetch } = usePlaceholdersQuery()

  return (
    <Wrapper>
      <button onClick={() => refetch()}>refresh</button>
      {loading
        ? 'loading ...'
        : data?.placeholders.map(({ id, text }) => (
            <Placeholder key={id}>
              <p>{text}</p>
            </Placeholder>
          ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`

const Placeholder = styled.div`
  background: #c2c2c2;
`

export default withApollo(Placeholders)
