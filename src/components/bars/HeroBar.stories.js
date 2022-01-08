require('../../styles/main.css');

import HeroBar from './HeroBar.vue';

export default {
  title: 'Bars/HeroBar',
  component: HeroBar,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { HeroBar },
  setup() {
    return { args };
  },
  template: '<hero-bar v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
