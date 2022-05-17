<template>
  <button>{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
