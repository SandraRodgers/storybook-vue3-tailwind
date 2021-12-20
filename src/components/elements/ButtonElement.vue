<template>
  <button
    class="
      rounded-full
      shadow-lg
      px-4
      hover:opacity-80
      transition
      duration-200
      ease-in-out
    "
    :class="classes"
  >
    <i
      v-if="icon"
      class="mr-2"
      :class="{
        [`${icon}`]: icon
      }"
    ></i>
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      required: true
    },
    secondary: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'bg-white text-black border border-black': props.secondary,
        'bg-indigo-700 text-white border border-indigo-900': !props.secondary,
        'text-xs py-1': props.small,
        'text-md py-2': !props.small,
        'bg-green-200 text-green-600 border border-green-600': props.success,
        'bg-red-200 text-red-600 border border-red-600': props.danger
      }))
    }
  }
}
</script>
