<template>
  <x-layout.with-sidebar>
    <!-- private event -->
    <div
      v-if="isPrivate"
      class="
        flex flex-col
        items-center
        justify-center
        gap-2
        text-gray-600
        my-12
      "
    >
      <i class="fas fa-lock text-8xl text-gray-200"></i>
      <p class="font-bold text-lg">This event is private.</p>
      <p class="text-md">
        You will not be able to view this event unless you are invited.
      </p>
    </div>
    <!-- end private event -->

    <!-- public event -->
    <div
      v-else
      class="
        rounded-lg
        lg:rounded-tr-none lg:rounded-tl-3xl
        shadow-md
        bg-gray-100
      "
    >
      <div class="flex flex-col lg:flex-row">
        <img
          src="https://picsum.photos/800/600"
          class="
            w-full
            lg:w-3/5
            h-80
            object-cover
            rounded-t-lg
            lg:rounded-tr-none lg:rounded-tl-3xl lg:rounded-br-3xl
          "
        />
        <div
          class="
            w-full
            lg:w-2/5
            flex flex-col
            gap-8
            justify-between
            rounded-tr-lg
            font-bold
            px-8
            pt-8
          "
        >
          <div>
            <div class="text-indigo-700">Fri, Dec 17, 10:00 PM</div>
          </div>
          <div>
            <span class="block text-2xl">Title of the Big Event</span>
            <div class="font-normal text-gray-600 text-sm mt-2">
              by <a href="#">John David Smith</a>
            </div>
          </div>
          <div
            class="
              flex flex-col
              xl:flex-row
              items-center
              gap-4
              border-b border-gray-200
              pb-8
            "
          >
            <x-element.button label="I'm Going" success full-width />
            <x-element.button label="I'm Not Going" danger full-width />
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col-reverse lg:flex-row">
          <div class="w-full lg:w-3/5 p-8">
            <div class="text-justify text-gray-500 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit eius sunt aspernatur, possimus nisi totam vitae,
              facilis non officia adipisci ea. Officiis ad sunt consequatur
              nesciunt nobis delectus dolorum. At illo numquam porro facilis
              laboriosam earum facere, repudiandae corporis officia repellendus
              nihil ullam magnam magni pariatur distinctio commodi praesentium
              similique omnis illum dolorum! Eligendi ab, quidem reiciendis
              magnam corporis, iure neque, maiores optio et dignissimos dolor?
              Et labore vero atque itaque beatae optio aliquam minus, corporis,
              libero, commodi officiis laborum nam eius assumenda accusantium
              quibusdam pariatur placeat sit adipisci hic perspiciatis nobis id
              consequuntur? Omnis, molestias. Perspiciatis repellendus earum
              dolor!
            </div>
          </div>
          <div class="flex flex-col gap-8 w-full lg:w-2/5 p-8">
            <div>
              <div class="text-gray-500">
                <p class="font-bold text-indigo-700">
                  <i class="fas fa-map-marker-alt"></i>
                  The Best Place In The World
                </p>
                <div class="text-sm">
                  <p>123 North Main St</p>
                  <p>Memphis, TN, 38618</p>
                </div>
              </div>
            </div>
            <div>
              <div class="font-bold text-indigo-700">
                <i class="fas fa-users"></i> 24 Going
              </div>
            </div>
          </div>
        </div>
        <div>
          <!-- map goes here -->
        </div>
      </div>
    </div>
    <!-- end public event -->
  </x-layout.with-sidebar>
</template>

<script>
import ButtonElement from '../components/elements/ButtonElement.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'EventPage',
  props: {
    isPrivate: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'x-element.button': ButtonElement,
    'x-layout.with-sidebar': WithSidebarLayout
  },
  data() {
    return {
      selection: 'plans'
    }
  }
}
</script>
