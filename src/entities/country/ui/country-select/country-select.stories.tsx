import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './country-select';

const meta = {
  title: 'shared/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs'],
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
