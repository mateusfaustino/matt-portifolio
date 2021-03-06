import styled from "styled-components"
import { useSpacing } from "../../../../contexts/SpacingContext"
import { palette } from "../../atoms/colors"
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    max-width:700px;
    padding: 0 ${({padding})=>padding ||0};

`
export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:10000;
    position:fixed;
    top:0;
    width:100%;
    right:0;
    background:${props=>props.isActive? palette.primary.dark :palette.primary.main};
    transition:0.5s;
    transform: translateY(${props=>props.isDisplayed?`0`:'-52px'});
    padding:2px 0;

`

const Nav = (props)=>{
    const { spacing } = useSpacing()
    const margin = spacing.margin
    return(
        <StyledContainer padding={margin}  isActive={props.isActive} isDisplayed={props.isDisplayed} spacing={spacing}>
            {props.children}
        </StyledContainer>
    )
}
export default Nav