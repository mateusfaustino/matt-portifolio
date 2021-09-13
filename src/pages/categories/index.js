import React,{useEffect, useState, useContext} from "react";
import Container from './styles'
import List from '../../components/posts-list/ListPerCategory'
import { useSpacing } from "../../contexts/SpacingContext";


const Category = () => {
    const {spacing, maxWidth} = useSpacing()
    const margin = spacing.margin
    return(
        <Container padding={margin} maxWidth={maxWidth}>
            <List />
        </Container>
    )
}
export default Category