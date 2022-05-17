require('../../styles/main.css')

import Button from './Button.vue'

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' }
  }
}

const Template = args => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Test'
}
