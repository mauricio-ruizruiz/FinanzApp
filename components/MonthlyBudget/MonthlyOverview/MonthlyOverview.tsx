import React from 'react';
import { Card, Text, Grid, Paper, Group, RingProgress, Center, Stack } from '@mantine/core';
import classes from './MonthlyOverview.module.css';

import { IconArrowUp, IconArrowDown, IconPigMoney, IconChartPie } from '@tabler/icons-react';

const MonthlyOverview = () => {
  // Mock data - eventually will come from props or API
  const data = [
    { label: 'Income', value: 35000, color: 'teal', icon: IconArrowUp },
    { label: 'Expenses', value: 12450, color: 'red', icon: IconArrowDown },
    { label: 'Savings', value: 15000, color: 'blue', icon: IconPigMoney },
    { label: 'Investments', value: 7550, color: 'violet', icon: IconChartPie },
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className={classes.container}>
       <Text fw={700} size="xl" mb="md">Monthly Overview</Text>
       <Paper shadow='md'>
        
       <div className={classes.tableContainer}>
        {/* Header removed for cleaner look, relying on visual hierarchy */}
        <div>
            {data.map((item) => (
                <div key={item.label} className={classes.tableRow}>
                    <Group gap="sm">
                        <div className={classes.iconWrapper} style={{ backgroundColor: `var(--mantine-color-${item.color}-light)`, color: `var(--mantine-color-${item.color}-filled)` }}>
                            <item.icon size={20} stroke={1.5} />
                        </div>
                        <Text fw={500}>{item.label}</Text>
                    </Group>
                    <Text c={item.color} fw={700}>
                        ${item.value.toLocaleString()}
                    </Text>
                </div>
            ))}
        </div>
       </div>
       </Paper>
    </div>
  );
};

export default MonthlyOverview;
