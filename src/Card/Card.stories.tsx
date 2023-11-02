import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'UI/Cards/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        { name: 'red', value: 'red' },
        { name: 'dark', value: '#050449' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color', description: 'Background color' },
    padding: {
      control: {
        type: 'select',
        options: ['10px', '20px', '30px'],
      },
      description: 'Padding',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'My Card',
    backgroundColor: 'red',
    padding: '10px',
  },
};

export const Secondary: Story = {
  args: {
    title: 'My Card 222',
    backgroundColor: 'green',
    padding: '30px',
  },
};
