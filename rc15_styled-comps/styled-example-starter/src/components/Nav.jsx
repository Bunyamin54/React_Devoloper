import NavStyled from './styled/NavStyled';
import Button from './styled/Button';

const Nav = () => {
  return (
    <NavStyled>
      <div>

        <img src="./images/logoUIA.png" width="250px" alt="logo" />
      </div>

      <div>
        <Button>IT og informasjonssystemer</Button>
        <Button primary>Hva lærer du?</Button>

      </div>
    </NavStyled>
  );
};

export default Nav;
