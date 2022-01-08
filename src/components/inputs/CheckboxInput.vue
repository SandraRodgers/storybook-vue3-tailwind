<template>
  <div class="flex items-center gap-2">
    <input
      class="
        h-4
        w-4
        rounded-sm
        transition
        duration-200
        cursor-pointer
        text-indigo-600
      "
      type="checkbox"
      :value="value"
      :name="name"
      :id="id"
    />
    <label class="inline-block text-black text-sm" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>
