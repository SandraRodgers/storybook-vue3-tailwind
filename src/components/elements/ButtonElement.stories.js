require('../../styles/main.css');

import ButtonElement from './ButtonElement.vue';

export default {
  title: 'Elements/ButtonElement',
  component: ButtonElement,
  argTypes: {
    label: { control: 'text' },
    secondary: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { ButtonElement },
  setup() {
    return { args };
  },
  template: '<button-element v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  secondary: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Create',
  icon: 'fas fa-plus-circle'
};