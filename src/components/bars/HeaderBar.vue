<template>
  <div class="flex items-center justify-between bg-white px-8 py-4">
    <div>{{ title }}</div>
    <nav class="flex items-center text-xl md:text-sm gap-4">
      <a href="#">
        <i class="fas fa-bell md:hidden"></i>
        <span class="hidden md:block"> Notifications </span>
      </a>
      <a href="#">
        <i class="fas fa-cog md:hidden"></i>
        <span class="hidden md:block"> Settings </span>
      </a>
      <a href="#" class="md:hidden" @click.prevent="openSidebar">
        <i class="fas fa-bars"></i>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    openSidebar() {
      this.$emit('openSidebar')
    }
  }
}
</script>
