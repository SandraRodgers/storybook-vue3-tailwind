<template>
  <div class="w-full flex flex-col gap-1">
    <label :for="id || name">{{ label }}</label>
    <input
      :type="search"
      :placeholder="placeholder"
      class="w-full rounded-lg bg-white border border-black text-black p-2 h-12"
    />
    <div
      class="text-red-400 text-xs"
      :class="{
        hidden: !error
      }"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  }
}
</script>
