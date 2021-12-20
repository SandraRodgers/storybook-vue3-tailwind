require('../styles/main.css');

import FriendRequestsPage from './FriendRequestsPage.vue';

export default {
  title: 'Pages/FriendRequestsPage',
  component: FriendRequestsPage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { FriendRequestsPage },
  setup() {
    return { args };
  },
  template: '<friend-requests-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
