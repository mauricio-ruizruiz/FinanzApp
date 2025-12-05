import React from 'react';
import { Container } from '@mantine/core';
import AuthForm from '@/components/AuthForm/AuthForm';

const SignUp = () => {
  return (
    <>
      <Container>
        <AuthForm type="sign-up" />
      </Container>
    </>
  );
};

export default SignUp;
