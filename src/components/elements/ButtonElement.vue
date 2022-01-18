<template>
  <button
    class="
      rounded-full
      shadow-lg
      transition
      duration-200
      ease-in-out
      hover:shadow-xl
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
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'bg-black text-white border-2 border-white': props.secondary,
        'bg-indigo-700 text-white border border-indigo-900 hover:brightness-90':
          !props.secondary,
        'text-xs py-1': props.small,
        'text-md py-2': !props.small,
        'bg-green-500 text-white border border-green-600': props.success,
        'bg-red-500 text-white border border-red-600': props.danger,
        'px-4': !props.wide,
        'px-12': props.wide,
        'font-bold': props.bold,
        'w-full': props.fullWidth,
        'hover:-translate-y-1': props.animated
      }))
    }
  }
}
</script>
