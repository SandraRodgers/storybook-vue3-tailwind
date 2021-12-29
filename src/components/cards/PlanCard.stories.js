require('../../styles/main.css');

import PlanCard from './PlanCard.vue';

export default {
  title: 'Cards/PlanCard',
  component: PlanCard,
  argTypes: {
    going: { control: 'boolean' },
    notGoing: { control: 'boolean' },
    isMine: { control: 'boolean' },
    invitedBy: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { PlanCard },
  setup() {
    return { args };
  },
  template: '<plan-card v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};

export const isGoing = Template.bind({});
isGoing.args = {
  going: true
};

export const isNotGoing = Template.bind({});
isNotGoing.args = {
  notGoing: true
};

export const isMine = Template.bind({});
isMine.args = {
  isMine: true
};

export const invitedBy = Template.bind({});
invitedBy.args = {
  invitedBy: 'John David Smith'
};