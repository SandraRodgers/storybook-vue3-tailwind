require('../styles/main.css');

import NotificationPage from './NotificationPage.vue';

export default {
    title: 'Pages/NotificationPage',
    component: NotificationPage,
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen'
    }
};

const Template = (args) => ({
    components: { NotificationPage },
    setup() {
        return { args };
    },
    template: '<notification-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
