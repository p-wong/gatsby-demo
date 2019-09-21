import React from 'react'
import { Item } from 'semantic-ui-react'
import { Link } from "gatsby"

const ItemExampleItems = props => (
  <Item.Group>
    <Item>
      <Item.Content>
        <Item.Header as='a'><Link to={props.link}>{props.header}</Link></Item.Header>
        <Item.Meta>{props.date}</Item.Meta>
        <Item.Description>{props.excerpt}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleItems
