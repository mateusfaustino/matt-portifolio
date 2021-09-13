import React,{useEffect, useState, useContext} from "react";
import Container from './styles'
import Brand from './brand/index'
import SocialBar from './SocialBar'
import List from '../../components/posts-list/Main'
import { useSpacing } from "../../contexts/SpacingContext";
import {categoryMoldel} from '../../models/Category'

const Home = () => {
    const {spacing, maxWidth} = useSpacing()
    const margin = spacing.margin
    return(
        <Container padding={margin} maxWidth={maxWidth}>
            <Brand/>
            <SocialBar/>
            <List />
        </Container>
    )
}
export default Home