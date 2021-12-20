<template>
  <button
    class="
      rounded-full
      shadow-lg
      px-4
      py-2
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
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'bg-white text-black border border-black': props.secondary,
        'bg-indigo-700 text-white border border-indigo-900': !props.secondary
      }))
    }
  }
}
</script>
