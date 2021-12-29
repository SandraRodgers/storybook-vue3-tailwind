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
        <h1 class="font-bold text-2xl">Plans I've Attended</h1>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-4">
        <x-input.select name="sort" id="sort">
          <option value="">Sort by</option>
          <option value="ca">Cost (Asc)</option>
          <option value="cd">Cost (Desc)</option>
          <option value="da">Date (Asc)</option>
          <option value="dd">Date (Desc)</option>
          <option value="ga"># Going (Asc)</option>
          <option value="gd"># Going (Desc)</option>
        </x-input.select>
        <x-input.text type="search" placeholder="Search for plans..." />
      </div>
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap -m-3">
      <x-card.plan />
      <x-card.plan going />
      <x-card.plan declined />
      <x-card.plan />
      <x-card.plan />
      <x-card.plan />
      <x-card.plan />
      <x-card.plan />
      <x-card.plan />
      <x-card.plan />
    </div>
  </x-layout.with-sidebar>
</template>

<script>
import PlanCard from '../components/cards/PlanCard.vue'
import SelectInput from '../components/inputs/SelectInput.vue'
import TextInput from '../components/inputs/TextInput.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'AttendedPage',
  components: {
    'x-card.plan': PlanCard,
    'x-input.select': SelectInput,
    'x-input.text': TextInput,
    'x-layout.with-sidebar': WithSidebarLayout
  }
}
</script>
