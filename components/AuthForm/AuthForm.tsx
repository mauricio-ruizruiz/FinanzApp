'use client';

import React from 'react';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { Box, Button, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const schema = z.object({
  email: z.string().email({ message: 'Correo inválido' }),
  password: z.string().min(6, { message: 'Mínimo 6 caracteres' }),
});

const AuthForm = ({ type }: { type: string }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema),
  });

  return (
    <Box maw={400} mx="auto" mt={200}>
      <Paper withBorder shadow="md" p={30} radius="md">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <div style={{ marginBottom: 16 }}>
            <TextInput
              label="Correo electrónico"
              placeholder="tu@email.com"
              {...form.getInputProps('email')}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <PasswordInput
              label="Contraseña"
              placeholder="Tu contraseña"
              {...form.getInputProps('password')}
            />
          </div>
          <Button type="submit" fullWidth>
            {type === 'sign-in' ? 'Iniciar sesión' : 'Registrarse'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AuthForm;
