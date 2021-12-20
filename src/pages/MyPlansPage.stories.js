require('../styles/main.css');

import MyPlansPage from './MyPlansPage.vue';

export default {
  title: 'Pages/MyPlansPage',
  component: MyPlansPage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { MyPlansPage },
  setup() {
    return { args };
  },
  template: '<my-plans-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
