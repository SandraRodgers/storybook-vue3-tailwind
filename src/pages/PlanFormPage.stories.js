require('../styles/main.css');

import PlanFormPage from './PlanFormPage.vue';

export default {
  title: 'Pages/PlanFormPage',
  component: PlanFormPage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { PlanFormPage },
  setup() {
    return { args };
  },
  template: '<plan-form-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
