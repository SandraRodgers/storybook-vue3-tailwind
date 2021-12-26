<template>
  <x-with-sidebar-layout>
    <div class="flex items-center justify-between">
      <h2 class="block font-bold text-xl">You have 3 messages</h2>
      <div class="flex items-center gap-4">
        <x-button-element label="Mark all as read" />
      </div>
    </div>
    <div class="flex flex-col gap-4 mt-8">
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
          exercitationem aperiam eaque, amet ipsam magni et similique illum
          alias non accusantium qui? Ipsum sit, nostrum numquam nihil iste
          incidunt error, quos ex odio dolorum quam cumque cupiditate
          consectetur. Fuga, voluptate!
        </p>
        <div class="flex justify-between items-center text-xs">
          <a href="#" class="block font-bold mt-4">Read More...</a>
          <div>Yesterday</div>
        </div>
      </div>
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
          <i class="fas fa-envelope-open text-gray-400 mr-2"></i>
          This is the message title
        </h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          exercitationem aperiam eaque, amet ipsam magni et similique illum
          alias non accusantium qui? Ipsum sit, nostrum numquam nihil iste
          incidunt error, quos ex odio dolorum quam cumque cupiditate
          consectetur. Fuga, voluptate!
        </p>
        <div class="flex justify-between items-center text-xs">
          <a href="#" class="block font-bold mt-4">Read More...</a>
          <div>1 month ago</div>
        </div>
      </div>
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
          <i class="fas fa-envelope-open text-gray-400 mr-2"></i>
          This is the message title
        </h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          exercitationem aperiam eaque, amet ipsam magni et similique illum
          alias non accusantium qui? Ipsum sit, nostrum numquam nihil iste
          incidunt error, quos ex odio dolorum quam cumque cupiditate
          consectetur. Fuga, voluptate!
        </p>
        <div class="flex justify-between items-center text-xs">
          <a href="#" class="block font-bold mt-4">Read More...</a>
          <div>3 months ago</div>
        </div>
      </div>
    </div>
  </x-with-sidebar-layout>
</template>

<script>
import ButtonElement from '../components/elements/ButtonElement.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'NotificationPage',
  components: {
    'x-button-element': ButtonElement,
    'x-with-sidebar-layout': WithSidebarLayout
  }
}
</script>
