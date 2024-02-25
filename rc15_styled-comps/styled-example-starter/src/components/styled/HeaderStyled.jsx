import styled from 'styled-components';

const HeaderStyled = styled.div`

 display:flex;
  justify-content:center;
  align-items:center;

  @media (max-width: 700px) {
    flex-direction:column;
}

&div,
img{
  flex: 1;
}

`;

export default HeaderStyled;
