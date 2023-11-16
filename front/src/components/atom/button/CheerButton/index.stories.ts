import type { Meta, StoryObj } from '@storybook/vue3';
import CheerButton from './CheerButton.vue';
import { ButtonVariantProp, type ButtonProps } from './type';

type Story = StoryObj<typeof CheerButton>;

export default {
  title: 'Atom/Button/CheerButton',
  component: CheerButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: Object.values(ButtonVariantProp) },
    type: { control: 'select', options: ['button', 'reset', 'submit'] },
    onClick: { action: 'clicked' }
  },
} as Meta<typeof CheerButton>

const Story: Story = {
  render: (args) => ({
    components: { CheerButton },
    setup() {
      return { args };
    },
    template: '<CheerButton v-bind="args" />',
  }),
};

const defaultArgs: ButtonProps = {
  text: 'ボタンテキスト',
  type: 'button',
  isOutline: false,     
}

export const Primary: Story = {
    args: {
      ...defaultArgs,
      variant: ButtonVariantProp.Primary,
    }
}

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    variant: ButtonVariantProp.Secondary,  
  }
}
