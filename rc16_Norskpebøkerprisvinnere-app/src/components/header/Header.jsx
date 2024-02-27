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
        <SearchInput />
        <SelectBox>
          <option>Alle</option>
        </SelectBox>
        <HeaderButton>Søk....</HeaderButton>

      </HeaderForm>

    </HeaderContainer>
  );
};

export default Header;
