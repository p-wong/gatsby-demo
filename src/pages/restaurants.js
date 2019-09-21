import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import CardExample from "../components/card"
import { Card } from 'semantic-ui-react';

export default ({ data }) => {
  return (
    <Layout>
      <Header headerText="Restaurants in New York" />
      <Card.Group>
      {data.yelp.search.business.map(business =>
        <CardExample image={business.photos[0]}
              name={business.name}
              location={business.location.formatted_address}
              category={business.categories[0].title}
              rating={business.rating}
              review_count={business.review_count}
        />)}
      </Card.Group>
    </Layout>
  )
}

export const query = graphql`
  query {
    yelp {
      search(location: "new york", limit: 20) {
        total
        business {
          name
          review_count
          rating
          photos
          categories {
            title
          }
          location {
            formatted_address
          }
        }
      }
    }
  }
`
