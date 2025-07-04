import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Sample Image',
    width: '300px',
    height: '200px',
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Disabled Image',
    width: '300px',
    height: '200px',
    disabled: true,
  },
};