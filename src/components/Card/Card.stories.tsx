import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderRadius: { control: 'text' },
    padding: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle',
    children: 'This is the card content. It can contain any React elements.',
    shadow: true,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    subtitle: 'This card is disabled',
    children: 'This card cannot be interacted with.',
    disabled: true,
    shadow: true,
  },
};