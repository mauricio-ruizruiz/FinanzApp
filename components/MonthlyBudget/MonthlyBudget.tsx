import React from 'react';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import TotalBalanceCard from '../TotalBalanceCard/TotalBalanceCard';
import MonthSetupForm from './MonthSetupForm/MonthSetupForm';
import classes from './MonthlyBudget.module.css';

const MonthlyBudget = () => {
  return (
    <>
      <section className={classes.container}>
        <HeaderBox type="title" title="enero" subtitle="Presupuesto Mensual" />
        {/* <TotalBalanceCard totalCurrentBalance={2500} /> */}
        <MonthSetupForm />
      </section>
    </>
  );
};

export default MonthlyBudget;
