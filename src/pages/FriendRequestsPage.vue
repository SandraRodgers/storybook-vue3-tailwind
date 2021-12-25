<template>
  <x-with-sidebar-layout>
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
        <x-select-input name="sort" id="sort">
          <option value="">Sort by</option>
          <option value="ca">Name (Asc)</option>
          <option value="cd">Name (Desc)</option>
          <option value="da">Date (Asc)</option>
          <option value="dd">Date (Desc)</option>
        </x-select-input>
        <x-text-input type="search" placeholder="Search for friends..." />
      </div>
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap -m-3">
      <x-user-card friend-request />
      <x-user-card friend-request />
      <x-user-card friend-request />
      <x-user-card friend-request />
      <x-user-card friend-request />
      <x-user-card friend-request />
      <x-user-card friend-request />
      <x-user-card friend-request />
      <x-user-card friend-request />
      <x-user-card friend-request />
    </div>
  </x-with-sidebar-layout>
</template>

<script>
import ButtonElement from '../components/elements/ButtonElement.vue'
import UserCard from '../components/cards/UserCard.vue'
import SelectInput from '../components/inputs/SelectInput.vue'
import TextInput from '../components/inputs/TextInput.vue'
import WithSidebarLayout from '../components/layouts/WithSidebarLayout.vue'

export default {
  name: 'FriendRequestsPage',
  components: {
    'x-button-element': ButtonElement,
    'x-user-card': UserCard,
    'x-select-input': SelectInput,
    'x-text-input': TextInput,
    'x-with-sidebar-layout': WithSidebarLayout
  }
}
</script>
