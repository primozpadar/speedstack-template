import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
  return <Wrapper>index pageee</Wrapper>
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`

export default Home
