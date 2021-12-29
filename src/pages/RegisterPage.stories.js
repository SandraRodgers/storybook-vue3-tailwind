require('../styles/main.css');

import RegisterPage from './RegisterPage.vue';

export default {
  title: 'Pages/RegisterPage',
  component: RegisterPage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { RegisterPage },
  setup() {
    return { args };
  },
  template: '<register-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
