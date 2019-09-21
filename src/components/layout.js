import React from "react"
import { Link } from "gatsby"
import 'semantic-ui-less/semantic.less'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style = {{ margin: `3rem` }}>
    <ul style={{ listStyle: `none`, marginLeft: `0` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/news/">News</ListLink>
      <ListLink to="/restaurants/">Restaurants</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
    <hr/>
    <div style = {{ margin: `3rem 0 0 3rem` }}>
      {children}
    </div>
  </div>
)
