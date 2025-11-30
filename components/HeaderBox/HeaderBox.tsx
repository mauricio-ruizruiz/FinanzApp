import React from 'react';
import { Anchor, Table, Text, Title } from '@mantine/core';
import classes from './HeaderBox.module.css';

const HeaderBox = ({ type = 'title', title, subtitle, user }: HeaderBoxProps) => {
  return (
    <div className={classes.container}>
      <Title className={classes.title} ta="center" mt={10}>
        {title}
        {type === 'welcome' ? (
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'violet' }}
          >
            &nbsp; {user}
          </Text>
        ) : (
          ''
        )}
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mt="xs">
        {subtitle}
      </Text>
    </div>
  );
};

export default HeaderBox;
