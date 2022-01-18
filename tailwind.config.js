module.exports = {
  content: ['./src/**/*.{html,js,vue}'], // Make sure vue is added here
  theme: {
    extend: {
      spacing: {
        120: "30rem",
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
