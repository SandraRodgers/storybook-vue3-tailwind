require('../../styles/main.css');

import FooterBar from './FooterBar.vue';

export default {
  title: 'Bars/FooterBar',
  component: FooterBar,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { FooterBar },
  setup() {
    return { args };
  },
  template: '<footer-bar v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
