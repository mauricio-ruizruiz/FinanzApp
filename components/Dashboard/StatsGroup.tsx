import { Group, Paper, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconCoin,
  IconWallet,
  IconPigMoney,
  IconChartPie,
} from '@tabler/icons-react';

const icons = {
  active: IconWallet,
  income: IconArrowUpRight,
  expense: IconArrowDownRight,
  saving: IconPigMoney,
  investment: IconChartPie,
};

const data = [
  { title: 'Ingresos', icon: 'income', value: '$13,456', diff: 34, color: 'teal' },
  { title: 'Gastos', icon: 'expense', value: '$4,145', diff: -13, color: 'red' },
  { title: 'Ahorros', icon: 'saving', value: '$745', diff: 18, color: 'cyan' },
  { title: 'Inversiones', icon: 'investment', value: '$188', diff: -30, color: 'grape' },
];

export function StatsGroup() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon as keyof typeof icons];

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" fw={700} tt="uppercase">
            {stat.title}
          </Text>
          <ThemeIcon color={stat.color} variant="light" size={38} radius="md">
            <Icon size="1.8rem" stroke={1.5} />
          </ThemeIcon>
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text fw={700} size="xl">{stat.value}</Text>
          <Text c={stat.diff > 0 ? 'teal' : 'red'} fz="sm" fw={500}>
            <span>{stat.diff}%</span>
            <IconArrowUpRight size="1rem" style={{ marginBottom: 4, display: stat.diff > 0 ? 'inline' : 'none' }} stroke={1.5} />
            <IconArrowDownRight size="1rem" style={{ marginBottom: 4, display: stat.diff < 0 ? 'inline' : 'none' }} stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Comparado con el mes anterior
        </Text>
      </Paper>
    );
  });

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
  );
}
