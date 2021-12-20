require('../../styles/main.css');

import EventCard from './EventCard.vue';

export default {
  title: 'Cards/EventCard',
  component: EventCard,
  argTypes: {
    going: { control: 'boolean' },
    declined: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { EventCard },
  setup() {
    return { args };
  },
  template: '<event-card v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};

export const isGoing = Template.bind({});
isGoing.args = {
  going: true
};

export const isDeclined = Template.bind({});
isDeclined.args = {
  declined: true
};

export const invitedBy = Template.bind({});
invitedBy.args = {
  invitedBy: 'John David Smith'
};