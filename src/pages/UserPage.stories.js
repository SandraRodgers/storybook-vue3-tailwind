require('../styles/main.css');

import UserPage from './UserPage.vue';

export default {
    title: 'Pages/UserPage',
    component: UserPage,
    argTypes: {
        isPrivate: { control: 'boolean' },
        isFriend: { control: 'boolean' },
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

export const isPrivate = Template.bind({});
isPrivate.args = {
    isPrivate: true,
};

export const isFriend = Template.bind({});
isFriend.args = {
    isFriend: true,
};