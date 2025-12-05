import React from 'react';
import { Container } from '@mantine/core';
import AuthForm from '@/components/AuthForm/AuthForm';

const SignIn = () => {
  return (
    <>
      <Container>
        <AuthForm type="sign-in" />
      </Container>
    </>
  );
};

export default SignIn;
