# Vue 3 + Tailwind 3 + Storybook 6

> This is a base project for using Vue 3 with Tailwind 3 and Storybook 6. In order to make them all compatible, there were a few steps that I had to take. This project will work on its own, but if you would like to get it working yourself, the steps I took are below:

### Start a Vue 3 project. Select the Vue 3 preset from the list after running the following command:

```
vue create your_project_name
```

### Upgrade to the latest version of Vue:

```
vue upgrade --next
```

### Install and initialize Storybook:

```
npx sb init
```

### Install Tailwind:

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Create a `postcss.config.js` in your project's root directory and paste the following:

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### Create your `tailwind.config.js` file with the following command:

```
npx tailwindcss init
```

### Update the `tailwind.config.js` in your project's root directory with this:

```
module.exports = {
  content: ["./src/**/*.{html,js,vue}"], // Make sure 'vue' is added here since this is a Vue project
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Create a `styles` directory in your `src` directory and create a `main.css` file there, then add the following:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Import `main.css` in your `main.js` file:

```
import { createApp } from 'vue'
import App from './App.vue'

import './styles/main.css' // Make sure this line is added so Tailwind will be globally available in your Vue components

createApp(App).mount('#app')
```

### Install the PostCSS add-on for Storybook:

```
npm install -D @storybook/addon-postcss
```

### In `.storybook/main.js`, add the following in the `"addons"` section:

```
{
  name: "@storybook/addon-postcss",
  options: {
    postcssLoaderOptions: {
      implementation: require("postcss")
    }
  }
}
```

### If you try to run `npm run serve` at this point you may get an error. Installing the latest Webpack (Webpack 5) with the following command should help:

```
npm install webpack@latest
```

### Webpack 5 breaks the default Storybook, so you have to add the Webpack 5 add-on packages with the following command:

```
npx sb@next upgrade --prerelease
```

### After running the Storybook upgrade above, it may ask you if you want to run the Webpack 5 fix, and if you answer yes, it'll fix everything for you, and you're all done!

### Otherwise you will need to install these additional dependencies:

```
npm i -D @storybook/builder-webpack5@next @storybook/manager-webpack5@next webpack@5
```

### And then in `.storybook/main.js`, add the following to the `module.exports`:

```
core: {
  builder: "webpack5",
},
```

## Once you've gotten everything installed:

### Run your Vue project's development server:

```
npm run serve
```

### Or run Storybook:

```
npm run storybook
```
# outplans-storybook
