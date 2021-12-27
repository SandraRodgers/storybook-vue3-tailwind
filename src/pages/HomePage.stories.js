require('../styles/main.css');

import HomePage from './HomePage.vue';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { HomePage },
  setup() {
    return { args };
  },
  template: '<home-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
