<template>
  <div
    class="
      flex flex-col
      gap-2
      bg-gray-100
      border border-gray-200
      shadow-md
      rounded-lg
      text-gray-600
      p-4
    "
  >
    <div
      class="
        flex
        items-center
        justify-between
        gap-4
        border-b border-gray-200
        pb-2
      "
    >
      <h4 class="block font-bold">
        <i class="mr-2" :class="readClasses"></i>
        This is the message title
      </h4>
      <i
        class="
          block
          fas
          fa-trash
          text-gray-400
          cursor-pointer
          hover:brightness-90
          transition
          duration-200
          ease-in-out
        "
      ></i>
    </div>

    <p class="text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      exercitationem aperiam eaque, amet ipsam magni et similique illum alias
      non accusantium qui? Ipsum sit, nostrum numquam nihil iste incidunt error,
      quos ex odio dolorum quam cumque cupiditate consectetur. Fuga, voluptate!
    </p>
    <div class="flex justify-between items-center text-xs mt-4">
      <a href="#" class="block font-bold">Read More...</a>
      <div>Yesterday</div>
    </div>
  </div>
</template>

//fas fa-envelope text-indigo-600

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'NotificationCard',
  props: {
    read: {
      type: Boolean,
      required: false
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      readClasses: computed(() => ({
        'fas fa-envelope-open text-gray-400': props.read,
        'fas fa-envelope text-indigo-700': !props.read
      }))
    }
  }
}
</script>
