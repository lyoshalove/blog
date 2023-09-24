import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import imageExample from 'shared/assets/tests/image-for-storybook.png';
import { Country } from '../../../../entities/country';
import { Currency } from '../../../../entities/currency';
import { ProfileCard } from './profile-card';

const meta = {
  title: 'features/ProfileCard',
  component: ProfileCard,
  tags: ['autdocs'],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithData: Story = {
  args: {
    data: {
      firstname: 'Alex',
      lastname: 'Snus',
      age: 22,
      currency: Currency.RUB,
      country: Country.RUSSIA,
      city: 'Moscow',
      username: 'admin',
      avatar: imageExample,
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'Some error',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
