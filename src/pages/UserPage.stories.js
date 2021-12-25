require('../styles/main.css');

import UserPage from './UserPage.vue';

export default {
    title: 'Pages/UserPage',
    component: UserPage,
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen'
    }
};

const Template = (args) => ({
    components: { UserPage },
    setup() {
        return { args };
    },
    template: '<user-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
