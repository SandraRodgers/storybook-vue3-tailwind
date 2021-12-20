require('../../styles/main.css');

import UserCard from './UserCard.vue';

export default {
  title: 'Cards/UserCard',
  component: UserCard,
  argTypes: {
    friend: { control: 'boolean' },
    request: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { UserCard },
  setup() {
    return { args };
  },
  template: '<user-card v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};

export const isFriend = Template.bind({});
isFriend.args = {
  friend: true,
};

export const isRequest = Template.bind({});
isRequest.args = {
  request: true,
};