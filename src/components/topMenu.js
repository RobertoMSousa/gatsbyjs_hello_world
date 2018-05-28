import React from 'react'
import Link from 'gatsby-link'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


const TopMenu = ({ siteTitle }) => (
    <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <ul style={{ listStyle: `none`, float: `right`, color: `white` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
      <ListLink to="/my-files/">My Files</ListLink>
      <ListLink to="/blog">Blog</ListLink>
    </ul>
  </div>
)

export default TopMenu