<template>
  <div class="w-full lg:w-1/2 xl:w-1/3 flex flex-col p-3">
    <div
      class="
        flex flex-col
        gap-4
        bg-white
        border border-gray-100
        shadow-md
        rounded-lg
        p-4
      "
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50?d=mm"
          alt="Avatar"
          class="rounded-full w-12 h-12 shadow-md"
        />
        <div class="text-center">
          <a href="#" class="font-bold text-lg">John David Smith</a>
          <div class="text-indigo-700">
            <div class="text-xs">Member since Fri Nov 13th, 2021</div>
          </div>
        </div>
      </div>
      <div v-if="friend" class="text-sm text-center text-gray-400">
        Friends since Fri Nov 13th, 2021
      </div>
      <div v-if="friendRequest" class="flex items-center justify-center gap-4">
        <x-elements.button label="Accept" small success />
        <x-elements.button label="Decline" small danger />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonElement from '../elements/ButtonElement.vue'

export default {
  name: 'UserCard',
  components: {
    'x-elements.button': ButtonElement
  },
  props: {
    friend: {
      type: Boolean,
      default: false
    },
    friendRequest: {
      type: Boolean,
      default: false
    }
  }
}
</script>
