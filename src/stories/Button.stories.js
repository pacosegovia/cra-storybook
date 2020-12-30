import React from 'react'

// import { Button } from './Button'
import { Button } from '@modulz/radix'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  size: 1,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
