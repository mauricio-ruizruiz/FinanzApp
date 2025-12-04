import React from 'react';
import { Text } from '@mantine/core';
import { formatAmount } from '@/lib/utils';
import classes from './TotalBalanceCard.module.css';

const TotalBalanceCard = ({ accounts = [], totalCurrentBalance }: totalBalanceCardProps) => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.chart}></div>
        <Text className={classes.totalBalance} size="xl" fw={700}>
          Total Balance: {formatAmount(totalCurrentBalance)}
        </Text>
      </section>
    </>
  );
};

export default TotalBalanceCard;
