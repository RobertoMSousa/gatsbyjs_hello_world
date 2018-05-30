import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem`, width: '150px', textAlign: 'center'}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


const TopMenuWrapper = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  position: relative;
  padding-top: 20px;
  width: 80%;
  height: 100%;
  display: block;
`;

const TopMenu = ({ siteTitle }) => (
  <TopMenuWrapper>
    <ul style={{ color: `white`, position: 'absolute',  bottom: '0px', textAlign: 'center', listStyle: 'inside' }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
      <ListLink to="/my-files/">My Files</ListLink>
      <ListLink to="/blog">Blog</ListLink>
    </ul>
  </TopMenuWrapper>
)

export default TopMenu