import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@freitas-software-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}