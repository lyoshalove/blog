import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Select label',
    options: [
      {
        label: '123',
        value: 'Первый пункт',
      },
      {
        label: '321',
        value: 'Второй пункт',
      },
    ],
  },
};
