import React from 'react';
import { Paper, Text } from '@mantine/core';
import { formatAmount } from '@/lib/utils';
import classes from './TotalBalanceCard.module.css';

const TotalBalanceCard = ({
  account,
  accountColor,
  // accounts = [],
  totalCurrentBalance,
}: totalBalanceCardProps) => {
  return (
    <>
      <section
        className={classes.card}
        style={{ backgroundColor: `var(--mantine-color-${accountColor}-6` }}
      >
        <div className={classes.chart}>
          {/* <Paper withBorder radius={15} w={100} h={100} shadow="sm" p="md"></Paper> */}
        </div>
        <div className={classes.cardinfo}>
          <Text
            className={classes.totalBalance}
            c={`var(--mantine-color-${accountColor}-1)`}
            size="lg"
            fw={500}
          >
            {account}
          </Text>
          <Text className={classes.totalBalance} size="sm" fw={700}>
            {/* Total Balance: {formatAmount(totalCurrentBalance)} */}
            {formatAmount(totalCurrentBalance)}
          </Text>
        </div>
      </section>
    </>
  );
};

export default TotalBalanceCard;
