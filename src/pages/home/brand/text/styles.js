import styled from 'styled-components'
import  typography  from '../../../../components/styleguide/atoms/typography'
import { palette } from '../../../../components/styleguide/atoms/colors'
const StyledContainer = styled.div `
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    ${typography.header2}
    color: ${palette.primary.dark};
    width:auto;
    .hi_im{
        display:flex;
        #text_ola{
            font-size:18px;
            animation: hi 3s ease 1s both ;
        }
        #text_me_chamo{
            font-size:18px;
            animation: im 3s ease 1s both ;
        }
    }

    #text_Mateus{
        animation: name 4s ease 0.4s both ;
    }
    
    @keyframes hi {
        0%{
            transform: scale(0) ;
        }
        20%{
            transform: scale(1.5) ;
        }
        40%{
            transform: scale(1.5) ;
        }
        60%{
            transform: scale(1) translateX(-20px);
        }
        80%{
            transform: scale(1) translateX(-20px);
        }
        100%{
            transform: scale(1) translateX(0);
        }
    }
    @keyframes im {
        0%{
            transform: scale(0) ;
        }
        20%{
            transform: scale(0) ;
        }
        40%{
            transform: scale(0) ;
        }
        60%{
            transform: scale(1.5) ;
        }
        80%{
            transform: scale(1.5) ;
        }
        100%{
            transform: scale(1);
        }
    }
    @keyframes name{
        0%{
            opacity:0 ;
        }
        20%{
            opacity:0  ;
        }
        40%{
            opacity:0 ;
        }
        60%{
            opacity:0 ;
        }
        80%{
            opacity:0 ;
        }
        100%{
            opacity:1 ;
        }
    }
    
`
const Container = (props) => {
    return ( 
        <StyledContainer > 
            {props.children} 
        </StyledContainer>
    )
}
export default Container