import React from 'react';
import classes from './TotalBalanceCard.module.css';

const TotalBalanceCard = ({ accounts = [], totalCurrentBalance }: totalBalanceCardProps) => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.chart}></div>
      </section>
    </>
  );
};

export default TotalBalanceCard;
