require('../styles/main.css');

import PlanPage from './PlanPage.vue';

export default {
    title: 'Pages/PlanPage',
    component: PlanPage,
    argTypes: {
        isPrivate: { control: 'boolean' },
    },
    parameters: {
        layout: 'fullscreen'
    }
};

const Template = (args) => ({
    components: { PlanPage },
    setup() {
        return { args };
    },
    template: '<plan-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};

export const isPrivate = Template.bind({});
isPrivate.args = {
    isPrivate: true,
};