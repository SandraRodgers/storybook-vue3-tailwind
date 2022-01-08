<template>
  <div
    id="hero"
    class="h-96 bg-gray-200 border-b-8 border-indigo-900 py-8 px-8 lg:px-32"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HeroBar'
}
</script>

<style scoped>
#hero {
  background-image: repeating-linear-gradient(
      135deg,
      rgba(172, 176, 216, 0.08) 0px,
      rgba(172, 176, 216, 0.08) 1px,
      transparent 1px,
      transparent 9px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(172, 176, 216, 0.08) 0px,
      rgba(172, 176, 216, 0.08) 1px,
      transparent 1px,
      transparent 9px
    ),
    linear-gradient(90deg, rgb(183, 70, 156), rgb(8, 33, 155));
}
</style>