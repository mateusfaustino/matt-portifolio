import React from 'react'
import {Container, Title} from './styles'
const header = ({category}) => {
    return(
        <Container>
          <Title>{category.title}</Title>
          <h4>{category.description}</h4>
        </Container>
    )
}
export default header