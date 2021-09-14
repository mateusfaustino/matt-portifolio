import styled from 'styled-components'
import { palette } from '../../atoms/colors'
export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background:${palette.primary.main};
min-height:100px;
color:${palette.primary.onDarkText};
`
