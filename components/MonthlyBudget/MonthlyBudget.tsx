'use client';

import React, { useState } from 'react';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import { SimpleGrid, Paper, Text, UnstyledButton, Group, Menu, rem, Stack, ActionIcon } from '@mantine/core';
import { IconPlus, IconCalendar } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import classes from './MonthlyBudget.module.css';
import MonthSetupForm from './MonthSetupForm/MonthSetupForm';

// Mock data: Set of "YYYY-MM" strings that have records
const EXISTING_RECORDS = new Set(['2025-12']);

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const MonthButton = ({ month, year, hasRecord }: { month: string, year: number, hasRecord: boolean }) => {
    const router = useRouter();
    const monthIndex = months.indexOf(month);
    // Format for comparison/route: YYYY-MM (e.g., 2025-12)
    const monthKey = `${year}-${(monthIndex + 1).toString().padStart(2, '0')}`;
    
    // Route format according to user request /jan25 (short month + 2 digit year)
    // Or clean /monthly-budget/2025-12. User asked for /jan25 example.
    const routeUrl = `/monthly-budget/${month.toLowerCase()}${year.toString().slice(-2)}`;

    if (hasRecord) {
        return (
            <UnstyledButton 
                className={classes.monthButtonActive}
                onClick={() => router.push(routeUrl)}
            >
                <Text fw={500}>{month}</Text>
            </UnstyledButton>
        )
    }

    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <UnstyledButton className={classes.monthButtonInactive}>
                    <Text>{month}</Text>
                </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Option</Menu.Label>
                <Menu.Item leftSection={<IconPlus style={{ width: rem(14), height: rem(14) }} />}>
                    Create New Budget
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

const MonthlyBudget = () => {
  const [year, setYear] = useState(2025);

  return (
    <section className={classes.container}>
      <HeaderBox type="title" title="Monthly Budget Table" subtitle={`Budget for ${year}`} />
      
      <div className={classes.pickerContainer}>
         <div className={classes.controls}>
             <UnstyledButton onClick={() => setYear(y => y - 1)} className={classes.controlArrow}>{'<'}</UnstyledButton>
             <Text fw={700} size="lg">{year}</Text>
             <UnstyledButton onClick={() => setYear(y => y + 1)} className={classes.controlArrow}>{'>'}</UnstyledButton>
         </div>

         <SimpleGrid cols={3} spacing="md" verticalSpacing="md" mt="xl">
            {months.map((month, index) => {
                const monthKey = `${year}-${(index + 1).toString().padStart(2, '0')}`;
                const hasRecord = EXISTING_RECORDS.has(monthKey);
                
                return (
                    <MonthButton key={month} month={month} year={year} hasRecord={hasRecord} />
                );
            })}
         </SimpleGrid>
         <MonthSetupForm />
      </div>
    </section>
  );
};

export default MonthlyBudget;
