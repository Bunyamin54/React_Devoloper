import React from 'react';
import LoginContainer, {
  FormContainer,
  Header,
  StyledButton,
  StyledForm,
  StyledInput,
} from './Login.style';

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm>
          <Header>Login Here</Header>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password"  required/>
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
