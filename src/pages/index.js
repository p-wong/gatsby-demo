import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <Header headerText="Welcome!" />
      <p>This website highlights all things food in New York.</p>
      <h4>Check out the top food news:</h4>
      <Link to='/news/'>News!</Link>
      <h4>Check out the top restaurants in New York:</h4>
      <Link to='/restaurants/'>Restaurants!</Link>
    </Layout>
  )
}
