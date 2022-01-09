<template>
  <div class="flex items-center justify-between bg-white px-8 py-4">
    <div>{{ title }}</div>
    <nav class="flex items-center text-xl sm:text-sm gap-4">
      <a href="#">
        <i class="fas fa-bell sm:hidden"></i>
        <span class="hidden sm:block"> Notifications </span>
      </a>
      <a href="#">
        <i class="fas fa-cog sm:hidden"></i>
        <span class="hidden sm:block"> Settings </span>
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
