require('../../styles/main.css');

import CheckboxInput from './CheckboxInput.vue';

export default {
  title: 'Inputs/CheckboxInput',
  component: CheckboxInput,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    value: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { CheckboxInput },
  setup() {
    return { args };
  },
  template: '<checkbox-input v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Remember me',
  name: 'remember',
  id: 'remember',
};
