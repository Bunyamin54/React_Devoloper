import React from 'react';
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>

      <HeaderTitle> Årets Beste Bøker </HeaderTitle>

      <HeaderForm>
        <SearchInput type='search'placeholder='søk....' />
        <SelectBox>
          <option>Alle</option>
        </SelectBox>
        <HeaderButton>Søk....</HeaderButton>

      </HeaderForm>

    </HeaderContainer>
  );
};

export default Header;
