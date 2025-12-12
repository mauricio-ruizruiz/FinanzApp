import {
  Code,
  Group,
  ScrollArea,
  Text,
  NavLink,
  Box,
} from '@mantine/core';
import {
  IconHome2,
  IconBuildingBank,
  IconFingerprint,
  IconChartBar,
  IconCalendarEvent,
  IconWallet,
  IconSettings,
  IconCategory,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@/components/UserButton/UserButton';

interface NavbarLinkData {
  label: string;
  link?: string;
  icon?: React.ElementType;
  links?: NavbarLinkData[];
}

const data: NavbarLinkData[] = [
  { link: '/', label: 'Dashboard', icon: IconHome2 },
  {
    label: 'Budget',
    icon: IconBuildingBank,
    links: [
      { link: '/budget/records', label: 'Records', icon: IconFingerprint },
      { link: '/budget/analytics', label: 'Analytics', icon: IconChartBar },
      {
        label: 'Planning',
        icon: IconCalendarEvent,
        links: [
          { link: '/monthly-budget', label: 'Monthly Budget' },
        ],
      },
    ],
  },
  { link: '/accounts', label: 'Accounts', icon: IconWallet },
  { link: '/categories', label: 'Categories', icon: IconCategory },
];

export function Navbar() {
  const pathname = usePathname();

  const renderLinks = (links: NavbarLinkData[]) => {
      return links.map((item) => {
          const hasLinks = Array.isArray(item.links);
          
          if (hasLinks) {
              return (
                  <NavLink
                    key={item.label}
                    label={item.label}
                    leftSection={item.icon && <item.icon size="1rem" stroke={1.5} />}
                    childrenOffset={28}
                  >
                      {renderLinks(item.links!)}
                  </NavLink>
              )
          }

          return (
            <NavLink
                component={Link}
                href={item.link || '#'}
                key={item.label}
                active={item.link === pathname}
                label={item.label}
                leftSection={item.icon && <item.icon size="1rem" stroke={1.5} />}
            />
          );
      })
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between" mb="md">
            <Group>
                <IconBuildingBank size={28} color='var(--mantine-color-blue-6)' />
                 <Text size="xl" fw={700} c="blue">
                    FinanzApp
                </Text>
            </Group>
          {/* <Code fw={700}>v1.0.0</Code> */}
        </Group>
        <UserButton />
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
            {renderLinks(data)}
        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <NavLink
            component="a"
            href="#"
            onClick={(event) => event.preventDefault()}
            label="Settings"
            leftSection={<IconSettings size="1rem" stroke={1.5} />}
        />
      </div>
    </nav>
  );
}
