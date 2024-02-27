import React from 'react';
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from './Header.style';
import {useBooksContext} from '../../context/BooksContext';

const Header = () => {
  const printType = ['all', 'books', 'magazines'];
  const {searchInfo, setSearchInfo, getData} = useBooksContext ();
  const handleChange = e => {
    console.log(e.target)
  }
  return (
    <HeaderContainer>

      <HeaderTitle> Årets Beste Bøker </HeaderTitle>

      <HeaderForm>
        <SearchInput type="search" placeholder="søk...." value={searchInfo.query} />
        <SelectBox value={ searchInfo.selectType} onChange= {handleChange}>

          {printType.map (item => (
            <option key={item} value={item}>{item} </option>
          ))}
        </SelectBox>
        <HeaderButton>Søk....</HeaderButton>

      </HeaderForm>

    </HeaderContainer>
  );
};

export default Header;
