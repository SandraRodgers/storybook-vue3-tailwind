<template>
  <x-with-sidebar-layout>

    <div
      v-if="isPrivate"
      class="
        flex flex-col
        items-center
        justify-center
        gap-2
        text-gray-600
        my-12
      "
    >
      <i class="fas fa-lock text-8xl text-gray-200"></i>
      <p class="font-bold text-lg">This event is private.</p>
      <p class="text-md">You will not be able to view this event unless you are invited.</p>
    </div>
  </x-with-sidebar-layout>
</template>

<script>
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'EventPage',
  props: {
    isPrivate: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'x-with-sidebar-layout': WithSidebarLayout,
  },
  data() {
    return {
      selection: 'plans'
    }
  }
}
</script>
