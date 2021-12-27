require('../../styles/main.css');

import NotificationCard from './NotificationCard.vue';

export default {
  title: 'Cards/NotificationCard',
  component: NotificationCard,
  argTypes: {
    read: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { NotificationCard },
  setup() {
    return { args };
  },
  template: '<notification-card v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};

export const isRead = Template.bind({});
isRead.args = {
  read: true
};
