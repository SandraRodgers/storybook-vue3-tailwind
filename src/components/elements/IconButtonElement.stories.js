require('../../styles/main.css');

import IconButtonElement from './IconButtonElement.vue';

export default {
  title: 'Elements/IconButtonElement',
  component: IconButtonElement,
  argTypes: {
    color: { control: 'text' },
    borderColor: { control: 'text' },
    icon: { control: 'text' },
    iconColor: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { IconButtonElement },
  setup() {
    return { args };
  },
  template: '<icon-button-element v-bind="args" />',
});

export const isGoing = Template.bind({});
isGoing.args = {
  color: 'bg-green-500',
  borderColor: 'border-white',
  icon: 'fas fa-plus-circle',
  iconColor: 'text-white',
};

export const isNotGoing = Template.bind({});
isNotGoing.args = {
  color: 'bg-red-500',
  borderColor: 'border-white',
  icon: 'fas fa-minus-circle',
  iconColor: 'text-white',
};