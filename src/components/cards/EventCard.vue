<template>
  <div class="w-full lg:w-1/2 xl:w-1/3 flex flex-col p-3">
    <div
      v-if="invitedBy"
      class="rounded-t-lg border-x border-t border-gray-100 p-4"
    >
      <a href="#" class="text-indigo-700 flex items-center gap-4">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50?d=mm"
          alt="avatar"
          class="rounded-full w-8 h-8 shadow-md"
        />
        <div>
          Invited by
          <strong>{{ invitedBy }}</strong>
        </div>
      </a>
      <div class="flex justify-around items-center mt-4">
        <a href="#" class="text-green-500 hover:opacity-80">Accept</a>
        <a href="#" class="text-red-600 hover:opacity-80">Decline</a>
      </div>
    </div>
    <div
      class="
        bg-white
        border border-gray-100
        rounded-b-lg
        shadow-md
        hover:shadow-lg
      "
    >
      <div class="relative">
        <img
          src="https://picsum.photos/300/200"
          class="w-full h-40 object-cover"
        />
        <div
          :class="{
            'bg-indigo-700 hover:bg-indigo-600': !going,
            'bg-green-500 hover:bg-green-400': going,
            'bg-red-600 hover:bg-red-500': declined
          }"
          class="
            w-6
            h-6
            flex
            items-center
            justify-center
            rounded-full
            shadow-md
            text-white
            absolute
            -bottom-6
            right-6
            p-6
            z-10
            cursor-pointer
            text-3xl
            font-bold
            hover:shadow-lg hover:-translate-y-1
            transition
            duration-200
            ease-in-out
          "
        >
          <span
            class="fas"
            :class="{
              'fa-plus': !going && !declined,
              'fa-check': going,
              'fa-minus': declined
            }"
          ></span>
        </div>
      </div>
      <div class="flex flex-col gap-3 p-4">
        <div class="font-bold text-lg">
          <a href="#">Title of the Event</a>
        </div>
        <div class="flex flex-col gap-2 text-sm">
          <div class="font-bold text-indigo-700">Fri, Dec 17, 10:00 PM</div>
          <div class="text-gray-600">
            3243 Players Club Cir, Memphis, TN, 38618
          </div>
          <div class="text-green-600 text-xs">Cost: $15</div>
          <div class="flex items-center justify-between font-bold mt-3">
            <div>John David Smith</div>
            <div class="text-indigo-700">
              <i class="fas fa-users"></i> 24 Going
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    going: {
      type: Boolean,
      default: false
    },
    declined: {
      type: Boolean,
      default: false
    },
    invitedBy: {
      type: String,
      default: ''
    }
  }
}
</script>
