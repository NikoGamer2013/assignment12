import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    overlayColor: { control: 'color' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero Image',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing content',
    height: '400px',
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Disabled Hero Image',
    title: 'Disabled Hero',
    subtitle: 'This hero is disabled',
    disabled: true,
  },
};