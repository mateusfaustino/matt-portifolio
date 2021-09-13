import styled from "styled-components"
import Spacing from "../../components/styleguide/atoms/spacing"
import { useSpacing } from "../../contexts/SpacingContext"
const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    
    max-width: ${({maxWidth})=>maxWidth ||"none"}; 
    padding: 54px ${({padding})=>padding ||0};
`

const Container = (props)=>{
    const {spacing, maxWidth} = useSpacing()
    const margin = spacing.margin
    return(
        <StyledContainer maxWidth={maxWidth} padding={margin}>
            {props.children}
        </StyledContainer>
    )
}
export default Container