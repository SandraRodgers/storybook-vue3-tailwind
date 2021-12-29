require('../styles/main.css');

import LoginPage from './LoginPage.vue';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { LoginPage },
  setup() {
    return { args };
  },
  template: '<login-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
