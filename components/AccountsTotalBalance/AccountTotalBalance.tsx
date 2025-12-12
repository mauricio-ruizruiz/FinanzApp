import React from 'react';
import { Container, Paper, SimpleGrid } from '@mantine/core';
import TotalBalanceCard from '../TotalBalanceCard/TotalBalanceCard';

const AccountTotalBalance = () => {
  const accounts = [
    { id: 1, name: 'Efectivo', balance: 1500, color: 'green' },
    { id: 2, name: 'Debito Azul', balance: 3000, color: 'blue' },
    { id: 3, name: 'Credito Azul', balance: -500, color: 'cyan' },
    { id: 4, name: 'Debito NU', balance: 12000, color: 'grape' },
    { id: 5, name: 'Credito NU', balance: 25000, color: 'violet' },
    { id: 6, name: 'Vales', balance: 200, color: 'pink' },
  ];
  return (
    <>
      <Container my="xl" size={'md'}>
        <SimpleGrid cols={{ base: 3, sm: 3, lg: 4 }} spacing="lg" mb="md">
          {accounts.map((account) => (
            <div key={account.id}>
              <TotalBalanceCard
                totalCurrentBalance={account.balance}
                account={account.name}
                accountColor={account.color}
              />
            </div>
            //   <Paper key={account.id} radius={15} h={100} shadow="sm" p="md" withBorder>
            //     <span>
            //       {account.name}: {account.balance}
            //     </span>
            //   </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default AccountTotalBalance;
