import NavStyled from "./styled/NavStyled"
import Button from './styled/Button';

const Nav = () => {
  return (
    <NavStyled>
      <div>

        <img src="./images/logo.png" width="250px" alt="logo" />
      </div>

  <div>
  <Button >Apply Coursess</Button> 
      <Button primary>Talk To Adviser</Button>

  </div>
    </NavStyled>
  );
};

export default Nav;
