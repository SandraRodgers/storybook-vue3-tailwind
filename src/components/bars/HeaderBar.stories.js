require('../../styles/main.css');

import HeaderBar from './HeaderBar.vue';

export default {
  title: 'Bars/HeaderBar',
  component: HeaderBar,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { HeaderBar },
  setup() {
    return { args };
  },
  template: '<header-bar v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
