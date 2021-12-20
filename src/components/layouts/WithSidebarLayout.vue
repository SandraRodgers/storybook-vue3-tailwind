<template>
  <div class="relative flex">
    <div
      class="
        flex
        md:items-stretch
        h-screen
        min-h-screen
        overflow-scroll
        w-full
        md:w-72
        absolute
        md:static
        left-0
        transform
        transition
        duration-200
        ease-in-out
        z-40
      "
      :class="{
        '-translate-x-full md:-translate-x-0': !isSidebarOpen
      }"
    >
      <slot name="sidebar">
        <x-side-bar @close-sidebar="onCloseSidebar" />
      </slot>
    </div>
    <div
      class="
        flex-1 flex flex-col
        justify-between
        gap-4
        min-h-screen
        h-screen
        overflow-scroll
      "
    >
      <div class="flex flex-col gap-4">
        <slot name="header">
          <x-header-bar @open-sidebar="onOpenSidebar" />
        </slot>
        <div class="px-8 pb-8">
          <slot>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </slot>
        </div>
      </div>
      <div>
        <slot name="footer">
          <x-footer-bar />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../bars/HeaderBar.vue'
import FooterBar from '../bars/FooterBar.vue'
import SideBar from '../bars/SideBar.vue'

export default {
  name: 'WithSidebarLayout',
  components: {
    'x-header-bar': HeaderBar,
    'x-footer-bar': FooterBar,
    'x-side-bar': SideBar
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    onCloseSidebar() {
      this.isSidebarOpen = false
    },
    onOpenSidebar() {
      this.isSidebarOpen = true
    }
  }
}
</script>
