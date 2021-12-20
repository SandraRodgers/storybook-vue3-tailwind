require('../../styles/main.css');

import SideBar from './SideBar.vue';

export default {
  title: 'Bars/SideBar',
  component: SideBar,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { SideBar },
  setup() {
    return { args };
  },
  template: '<side-bar v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
