import React from 'react'
import {Container, Item} from './styles'
import { useSpacing } from '../../../contexts/SpacingContext'
import {FaGithub,FaLinkedin,FaWhatsapp} from 'react-icons/fa'

const SocialBar = (props) => {
  
  return(
        <Container>
          <Item><FaGithub/></Item>
          <Item><FaLinkedin/></Item>
          <Item><FaWhatsapp/></Item>
        </Container>
    )
}
export default SocialBar