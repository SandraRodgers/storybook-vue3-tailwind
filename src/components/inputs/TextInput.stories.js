require('../../styles/main.css');

import TextInput from './TextInput.vue';

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    type: { control: { type: 'select', options: ['text', 'password', 'email', 'search'] } },
    placeholder: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    error: { control: 'text' },
    labelHidden: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { TextInput },
  setup() {
    return { args };
  },
  template: '<text-input v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text Input',
  type: 'text',
  placeholder: 'Enter something here...'
};

export const hasErrors = Template.bind({});
hasErrors.args = {
  label: 'Text Input',
  error: 'This field is required'
};

export const hiddenLabel = Template.bind({});
hiddenLabel.args = {
  label: 'Text Input',
  labelHidden: true
};