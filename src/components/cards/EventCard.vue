<template>
  <div class="w-full lg:w-1/2 xl:w-1/3 flex flex-col p-3">
    <div
      v-if="invitedBy"
      class="bg-white rounded-t-lg border-x border-t border-gray-100 p-4"
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
        <div
          v-if="!isMine"
          class="absolute top-3 right-3 flex items-center gap-3"
        >
          <x-element.icon-button
            v-if="notGoing || !statusMessage"
            color="bg-green-500"
            border-color="border-white"
            icon="fas fa-check-circle"
            icon-color="text-white"
          />
          <x-element.icon-button
            v-if="going || !statusMessage"
            color="bg-red-500"
            border-color="border-white"
            icon="fas fa-minus-circle"
            icon-color="text-white"
          />
        </div>

        <img
          src="https://picsum.photos/300/200"
          class="w-full h-40 object-cover"
        />
        <div
          v-if="statusMessage"
          :class="{
            'bg-green-500': going,
            'bg-red-500': notGoing
          }"
          class="
            border-4 border-white
            rounded-full
            text-white
            absolute
            -bottom-4
            left-1/2
            transform
            -translate-x-1/2
            py-2
            px-4
            z-10
            text-sm
            font-bold
            select-none
            text-center
            w-48
          "
        >
          {{ statusMessage }}
        </div>
      </div>
      <div class="flex flex-col gap-3 p-4 mt-2">
        <div class="font-bold">
          <a href="#" class="block text-lg">Title of the Big Event</a>
          <div class="text-gray-600 text-xs">by John David Smith</div>
        </div>
        <div class="flex flex-col gap-2 text-sm">
          <div class="font-bold text-indigo-700">Fri, Dec 17, 10:00 PM</div>
          <div class="text-gray-600">
            <strong>Location Name</strong>
            <p class="text-xs">3243 Players Club Cir, Memphis, TN, 38618</p>
          </div>
          <div class="flex items-center justify-between font-bold mt-2">
            <div class="text-green-600">
              Cost:
              <i class="fas fa-dollar-sign"></i>15
            </div>
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
import IconButtonElement from '../elements/IconButtonElement.vue'

export default {
  name: 'EventCard',
  components: {
    'x-element.icon-button': IconButtonElement
  },
  props: {
    going: {
      type: Boolean,
      default: false
    },
    notGoing: {
      type: Boolean,
      default: false
    },
    invitedBy: {
      type: String,
      default: ''
    },
    isMine: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    statusMessage() {
      if (this.going) {
        return 'You are going!'
      } else if (this.notGoing) {
        return "You aren't going."
      }
      return ''
    }
  }
}
</script>
