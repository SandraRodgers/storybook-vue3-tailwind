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
      relative
      p-4
    "
  >
    <i
      class="
        fas
        fa-trash
        text-gray-400 text-lg
        absolute
        right-4
        top-2
        cursor-pointer
        hover:brightness-90
        transition
        duration-200
        ease-in-out
      "
    ></i>
    <h4 class="font-bold border-b border-gray-200 pb-2">
      <i class="fas fa-envelope text-gray-400 mr-2"></i>
      This is the message title
    </h4>
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

<script>
export default {
  name: 'NotificationCard',
  props: {
    read: {
      type: Boolean,
      required: false
    }
  }
}
</script>
