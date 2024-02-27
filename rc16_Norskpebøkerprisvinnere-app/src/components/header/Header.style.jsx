// Header Style
import styled from "styled-components"
import Flex from "../../styles/Flex"

export const HeaderContainer = styled(Flex)`
flex-direction:column;

`

export const HeaderTitle = styled.h1`
margin-top:1rem;
font-size:3rem;
color: ${({theme}) => theme.colors.detailColor};
@media (max-width:${({theme})=> theme.screens.lg}) {
    font-size:1.5rem;
}
`

export const HeaderForm = styled.form`


`

export const SearchInput= styled.input`

`

export const SelectBox= styled.box`


`

export const HeaderButton = styled.button`

`