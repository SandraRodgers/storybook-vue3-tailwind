require('../../styles/main.css');

import SelectInput from './SelectInput.vue';

export default {
  title: 'Inputs/SelectInput',
  component: SelectInput,
  argTypes: {
    label: { control: 'text' },
    type: { control: { type: 'select', options: ['text', 'password', 'email', 'search'] } },
    placeholder: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    error: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { SelectInput },
  setup() {
    return { args };
  },
  template: '<select-input v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select Input',
};

export const hasErrors = Template.bind({});
hasErrors.args = {
  label: 'Select Input',
  error: 'This field is required'
};
