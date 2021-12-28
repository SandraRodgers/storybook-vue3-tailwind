<template>
  <i
    class="
      rounded-full
      border-2
      shadow-md
      p-1
      cursor-pointer
      transition
      duration-200
      ease-in-out
      hover:shadow-lg hover:-translate-y-1 hover:brightness-125
    "
    :class="classes"
  ></i>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'IconButtonElement',
  props: {
    borderColor: {
      type: String,
      default: 'border-white'
    },
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      default: 'text-white'
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        [`${props.borderColor}`]: props.borderColor,
        [`${props.color}`]: props.color,
        [`${props.icon}`]: props.icon,
        [`${props.iconColor}`]: props.iconColor
      }))
    }
  }
}
</script>
