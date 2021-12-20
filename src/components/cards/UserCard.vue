<template>
  <div class="w-full lg:w-1/2 xl:w-1/3 flex flex-col p-3">
    <div
      class="
        flex flex-col
        gap-4
        bg-white
        border border-gray-100
        shadow-md
        hover:shadow-lg
        rounded-lg
        p-4
      "
    >
      <div class="flex gap-4">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50?d=mm"
          alt="Avatar"
          class="rounded-full w-12 h-12 shadow-md"
        />
        <div>
          <a href="#" class="font-bold text-lg">John David Smith</a>
          <div class="text-indigo-700">
            <div class="text-xs">Member since Fri Nov 13th, 2021</div>
            <div v-if="request" class="flex items-center text-sm gap-8 mt-4">
              <a href="#" class="text-green-500 hover:opacity-80">Accept</a>
              <a href="#" class="text-red-600 hover:opacity-80">Decline</a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="friend" class="text-sm text-center text-gray-400">
        Friends since Fri Nov 13th, 2021
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    friend: {
      type: Boolean,
      default: false
    },
    request: {
      type: Boolean,
      default: false
    }
  }
}
</script>
