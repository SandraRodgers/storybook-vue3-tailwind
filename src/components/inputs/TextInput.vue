<template>
  <div class="w-full flex flex-col gap-1 text-indigo-700 uppercase text-sm">
    <label :class="{ hidden: labelHidden }" :for="id || name">
      {{ label }}
    </label>
    <input
      :name="name"
      :id="id || name"
      :type="type"
      :placeholder="placeholder"
      class="
        w-full
        rounded-lg
        bg-white
        border-2 border-gray-400
        text-black
        py-2
        px-4
        h-12
      "
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
    },
    labelHidden: {
      type: Boolean,
      default: false
    }
  }
}
</script>
