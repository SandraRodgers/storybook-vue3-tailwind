require('../styles/main.css');

import FriendsPage from './FriendsPage.vue';

export default {
  title: 'Pages/FriendsPage',
  component: FriendsPage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { FriendsPage },
  setup() {
    return { args };
  },
  template: '<friends-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
