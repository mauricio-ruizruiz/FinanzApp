'use client';

import { useState } from 'react';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Anchor, Avatar, Badge, Group, Table, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import classes from './MonthSetupForm.module.css';

const MonthSetupForm = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className={classes.container}>
      <div id="table-month-setup-form" className={classes.table} style={{ minWidth: 700 }}>
        <div className={classes.header}>
          <div className={classes.row}>
            {/* <div className={classes.cell}>Employee</div> */}
            {/* <div className={classes.cell}>Job title</div> */}
            <div className={classes.cell}></div>
            <div className={classes.cell}>////</div>
            <div className={classes.cell}></div>
            {/* <div className={classes.cell} /> */}
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.row}>
            {/* <div className={classes.cell}>
              <Group gap="sm">
                <Text fz="sm" fw={500}>
                  {'FECHA INICIAL'}
                </Text>
              </Group>
            </div> */}

            <div className={classes.cell}>
              <DatePicker value={value} onChange={setValue} />
            </div>
            <div className={classes.cell}>
              <DatePicker value={value} onChange={setValue} />
            </div>
            {/* <div className={classes.cell}>
              <Group gap={0} justify="flex-end">
                <ActionIcon variant="subtle" color="gray">
                  <IconPencil size={16} stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="red">
                  <IconTrash size={16} stroke={1.5} />
                </ActionIcon>
              </Group>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthSetupForm;
