<template>
  <x-layout.with-sidebar>
    <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
      <h2 class="block font-bold text-xl">You have 3 messages</h2>
      <div class="flex items-center gap-4">
        <x-element.button label="Mark all as read" />
      </div>
    </div>
    <div class="flex flex-col gap-4 mt-8">
      <x-card.notification />
      <x-card.notification read />
      <x-card.notification read />
    </div>
  </x-layout.with-sidebar>
</template>

<script>
import NotificationCard from '../components/cards/NotificationCard.vue'
import ButtonElement from '../components/elements/ButtonElement.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'NotificationPage',
  components: {
    'x-card.notification': NotificationCard,
    'x-element.button': ButtonElement,
    'x-layout.with-sidebar': WithSidebarLayout
  }
}
</script>
