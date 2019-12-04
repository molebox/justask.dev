import React from 'react'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../useSiteMetadata'
import { Header } from './Header'

const Center = styled.main`
  max-width: 540px;
  margin: 0 auto;
`

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <Center>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </Center>
  )
}