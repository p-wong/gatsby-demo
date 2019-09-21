import { Card, Icon, Image } from 'semantic-ui-react';
import React from "react";

const CardExampleCard = props => (
  <Card>
    <Image src={props.image} wrapped ui={false} size='mini' />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.location}</span>
      </Card.Meta>
      <Card.Description>
        {props.category}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name='star' />
      {props.rating}
      <Icon name='user' />
      {props.review_count} Reviews
    </Card.Content>
  </Card>
)

export default CardExampleCard
