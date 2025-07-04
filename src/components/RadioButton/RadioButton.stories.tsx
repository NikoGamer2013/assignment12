import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'option',
    value: 'option1',
    label: 'Option 1',
  },
};

export const Disabled: Story = {
  args: {
    name: 'option',
    value: 'option1',
    label: 'Disabled Option',
    disabled: true,
  },
};