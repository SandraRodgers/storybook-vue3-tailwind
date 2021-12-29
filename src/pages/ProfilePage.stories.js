require('../styles/main.css');

import ProfilePage from './ProfilePage.vue';

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  components: { ProfilePage },
  setup() {
    return { args };
  },
  template: '<profile-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
