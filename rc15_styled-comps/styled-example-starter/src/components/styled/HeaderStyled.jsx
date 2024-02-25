import styled from 'styled-components';

const HeaderStyled = styled.div`

 display:flex;
  justify-content:center;
  align-items:center;
  gap:1rem;
  @media (max-width:  ${({theme}) => theme.breakpoints.md}) {
    flex-direction:column;
}
& div {
  flex:2;
}
&div,
img{
  flex: 1;
}

`;

export default HeaderStyled;
