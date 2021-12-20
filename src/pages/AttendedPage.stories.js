require('../styles/main.css');

import AttendedPage from './AttendedPage.vue';

export default {
  title: 'Pages/AttendedPage',
  component: AttendedPage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { AttendedPage },
  setup() {
    return { args };
  },
  template: '<attended-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
