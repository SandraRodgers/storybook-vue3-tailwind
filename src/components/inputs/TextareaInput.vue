<template>
  <div class="w-full flex flex-col gap-1">
    <label :for="id || name">{{ label }}</label>
    <textarea
      :name="name"
      :id="id || name"
      :placeholder="placeholder"
      :rows="rows"
      :cols="cols"
      class="w-full rounded-lg bg-white border border-black text-black p-2"
    >
    </textarea>
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
  name: 'TextareaInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
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
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    }
  }
}
</script>
