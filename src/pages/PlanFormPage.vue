<template>
  <x-layout.with-sidebar>
    <div class="flex justify-center">
      <div class="w-full sm:w-96">
        <h2 class="text-3xl font-bold text-center mb-4">New Plan</h2>

        <form class="flex flex-col gap-4" enctype="multipart/form-data">
          <x-input.text label="Plan Title" name="title" autofocus required />
          <x-input.text label="Location Name" name="location" required />
          <x-input.text label="Address" name="address" required />
          <x-input.textarea label="Description" name="description" required />
          <div class="flex items-center gap-4">
            <x-input.text label="Date/Time" name="when" required />
            <x-input.text label="Cost" name="cost" />
          </div>
          <div>
            <label for="image" class="uppercase text-xs mb-2">Image</label>
            <div
              class="
                w-full
                bg-gray-100
                border-dashed border-gray-200
                px-3
                py-4
                rounded-xl
              "
            >
              <input type="file" name="image" id="image" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </x-layout.with-sidebar>
</template>

<script>
import TextInput from '../components/inputs/TextInput.vue'
import TextareaInput from '../components/inputs/TextareaInput.vue'
import ButtonElement from '../components/elements/ButtonElement.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'UserPage',
  components: {
    'x-input.text': TextInput,
    'x-input.textarea': TextareaInput,
    'x-element.button': ButtonElement,
    'x-layout.with-sidebar': WithSidebarLayout
  }
}
</script>
