require('../../styles/main.css');

import TextareaInput from './TextareaInput.vue';

export default {
  title: 'Inputs/TextareaInput',
  component: TextareaInput,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    error: { control: 'text' },
    rows: { control: 'number' },
    cols: { control: 'number' },
  },
};

const Template = (args) => ({
  components: { TextareaInput },
  setup() {
    return { args };
  },
  template: '<textarea-input v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text Input',
  placeholder: 'Enter something here...',
  rows: 10
};

export const hasErrors = Template.bind({});
hasErrors.args = {
  label: 'Description',
  placeholder: "Enter something here...",
  error: 'This field is required'
};
