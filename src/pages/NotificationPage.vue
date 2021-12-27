<template>
  <x-with-sidebar-layout>
    <div class="flex items-center justify-between">
      <h2 class="block font-bold text-xl">You have 3 messages</h2>
      <div class="flex items-center gap-4">
        <x-button-element label="Mark all as read" />
      </div>
    </div>
    <div class="flex flex-col gap-4 mt-8">
      <x-notification-card />
      <x-notification-card />
      <x-notification-card />
    </div>
  </x-with-sidebar-layout>
</template>

<script>
import NotificationCard from '../components/cards/NotificationCard.vue'
import ButtonElement from '../components/elements/ButtonElement.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'NotificationPage',
  components: {
    'x-notification-card': NotificationCard,
    'x-button-element': ButtonElement,
    'x-with-sidebar-layout': WithSidebarLayout
  }
}
</script>
