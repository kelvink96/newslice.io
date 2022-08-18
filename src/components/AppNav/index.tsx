import React from 'react';
import {
  createStyles,
  Container,
  Group,
  Burger,
  Title,
  Button,
  TextInput,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));

interface AppNavProps {
  user: { name: string; image: string };
  tabs: string[];
}

const AppNav = ({ user, tabs }: AppNavProps): JSX.Element => {
  const { classes, theme } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  const items = tabs.map((tab) => <Button key={tab}>{tab}</Button>);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position='apart'>
          <Title order={3}>Newslice.io</Title>

          <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />

          <TextInput
            icon={<IconSearch size={14} stroke={1.5} />}
            size='sm'
            rightSection={
              <ActionIcon size={24} color={theme.primaryColor} variant='filled'>
                {theme.dir === 'ltr' ? (
                  <IconArrowRight size={14} stroke={1.5} />
                ) : (
                  <IconArrowLeft size={14} stroke={1.5} />
                )}
              </ActionIcon>
            }
            placeholder='Search'
            rightSectionWidth={42}
          />
        </Group>
      </Container>
      <Container>
        <Group
          pb='md'
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          {items}
        </Group>
      </Container>
    </div>
  );
};

export default AppNav;
