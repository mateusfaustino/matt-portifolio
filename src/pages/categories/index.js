import React,{useEffect, useState, useContext} from "react";
import Container from './styles'
import List from '../../components/posts-list/ListPerCategory'
import Header from "./header";
import { categoryModel } from "../../models/Category";
import {useParams} from "react-router-dom";
import { useSpacing } from "../../contexts/SpacingContext";



const Category = () => {
    let { urlSlug } = useParams();
    const {spacing, maxWidth} = useSpacing()
    const margin = spacing.margin
    const category = categoryModel.showBySlug(urlSlug);
    return(
        <Container padding={margin} maxWidth={maxWidth}>
            <Header category={category}/>
            <List category={category}/>
        </Container>
    )
}
export default Category