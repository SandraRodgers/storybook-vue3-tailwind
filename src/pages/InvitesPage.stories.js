require('../styles/main.css');

import InvitesPage from './InvitesPage.vue';

export default {
  title: 'Pages/InvitesPage',
  component: InvitesPage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { InvitesPage },
  setup() {
    return { args };
  },
  template: '<invites-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
