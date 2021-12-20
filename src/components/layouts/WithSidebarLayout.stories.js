require('../../styles/main.css');

import WithSidebarLayout from './WithSidebarLayout.vue';

export default {
  title: 'Layouts/WithSidebarLayout',
  component: WithSidebarLayout,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { WithSidebarLayout },
  setup() {
    return { args };
  },
  template: '<with-sidebar-layout v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
