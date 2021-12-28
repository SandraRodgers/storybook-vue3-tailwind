<template>
  <x-layout.with-sidebar>
    <div
      class="
        flex flex-col
        space-y-2
        md:flex-row
        lg:space-y-0
        items-center
        justify-between
        mb-4
      "
    >
      <div class="flex flex-col lg:flex-row items-center gap-4">
        <h1 class="font-bold text-2xl">Friend Requests</h1>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-4">
        <x-input.select name="sort" id="sort">
          <option value="">Sort by</option>
          <option value="ca">Name (Asc)</option>
          <option value="cd">Name (Desc)</option>
          <option value="da">Date (Asc)</option>
          <option value="dd">Date (Desc)</option>
        </x-input.select>
        <x-input.text type="search" placeholder="Search for friends..." />
      </div>
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap -m-3">
      <x-card.user friend-request />
      <x-card.user friend-request />
      <x-card.user friend-request />
      <x-card.user friend-request />
      <x-card.user friend-request />
      <x-card.user friend-request />
      <x-card.user friend-request />
      <x-card.user friend-request />
      <x-card.user friend-request />
      <x-card.user friend-request />
    </div>
  </x-layout.with-sidebar>
</template>

<script>
import ButtonElement from '../components/elements/ButtonElement.vue'
import UserCard from '../components/cards/UserCard.vue'
import SelectInput from '../components/inputs/SelectInput.vue'
import TextInput from '../components/inputs/TextInput.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'FriendRequestsPage',
  components: {
    'x-element.button': ButtonElement,
    'x-card.user': UserCard,
    'x-input.select': SelectInput,
    'x-input.text': TextInput,
    'x-layout.with-sidebar': WithSidebarLayout
  }
}
</script>
