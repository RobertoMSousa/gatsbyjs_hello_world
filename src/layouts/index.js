import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/header'
import './index.css'

const IndexWrapper = styled.div `
  height: 100vh;
`

const ChildIndexWrapper = styled.div `
  grid-area: ChildIndexWrapper;
  margin: '0 auto';
  padding: '0px 1.0875rem 1.45rem';
  paddingTop: 0;
`

const Layout = ({ children, data }) => (
  <IndexWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

    <ChildIndexWrapper
      style={{
      }}
    >
      {children()}
    </ChildIndexWrapper>
  </IndexWrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
