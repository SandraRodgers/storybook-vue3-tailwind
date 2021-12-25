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
        <h1 class="font-bold text-2xl">My Invites</h1>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-4">
        <x-select-input name="sort" id="sort">
          <option value="">Sort by</option>
          <option value="ca">Cost (Asc)</option>
          <option value="cd">Cost (Desc)</option>
          <option value="da">Date (Asc)</option>
          <option value="dd">Date (Desc)</option>
          <option value="ga"># Going (Asc)</option>
          <option value="gd"># Going (Desc)</option>
          <option value="ib">Invited By</option>
        </x-select-input>
        <x-text-input type="search" placeholder="Search for plans..." />
      </div>
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap -m-3">
      <x-event-card invited-by="John David Smith" going />
      <x-event-card invited-by="John David Smith" not-going />
      <x-event-card invited-by="John David Smith" />
      <x-event-card invited-by="John David Smith" />
      <x-event-card invited-by="John David Smith" />
      <x-event-card invited-by="John David Smith" />
      <x-event-card invited-by="John David Smith" />
      <x-event-card invited-by="John David Smith" />
      <x-event-card invited-by="John David Smith" />
      <x-event-card invited-by="John David Smith" />
    </div>
  </x-with-sidebar-layout>
</template>

<script>
import ButtonElement from '../components/elements/ButtonElement.vue'
import EventCard from '../components/cards/EventCard.vue'
import SelectInput from '../components/inputs/SelectInput.vue'
import TextInput from '../components/inputs/TextInput.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'InvitesPage',
  components: {
    'x-button-element': ButtonElement,
    'x-event-card': EventCard,
    'x-select-input': SelectInput,
    'x-text-input': TextInput,
    'x-with-sidebar-layout': WithSidebarLayout
  }
}
</script>
