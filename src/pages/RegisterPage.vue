<template>
  <div class="min-h-screen">
    <x-bar.hero>
      <div class="flex flex-col gap-6 items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-6xl font-bold">Outplans</h1>
          <p class="text-lg">Simplify the way you make plans!</p>
        </div>
        <div
          class="
            bg-white
            w-full
            sm:w-96
            rounded-md
            shadow-lg
            -mb-24
            md:-mb-48
            p-6
          "
        >
          <div class="flex flex-col gap-4">
            <h2 class="block text-lg font-bold text-indigo-700 text-center">
              Register for an account
            </h2>
            <hr class="bg-gray-300" />
            <x-input.text
              label="Name"
              name="name"
              placeholder="Name"
              label-hidden
              autofocus
              required
            />
            <x-input.text
              label="Email address"
              name="email"
              placeholder="Email Address"
              label-hidden
              autofocus
              required
            />
            <x-input.text
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
              label-hidden
              required
            />
            <x-input.text
              type="password"
              label="Confirm Password"
              name="password_confirmation"
              placeholder="Confirm Password"
              label-hidden
              required
            />
            <x-element.button label="Register" primary full-width />
          </div>
        </div>
      </div>
    </x-bar.hero>

    <div class="h-64 px-8 py-4">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/3"></div>
      </div>
    </div>

    <x-bar.footer />
  </div>
</template>

<script>
import ButtonElement from '../components/elements/ButtonElement.vue'
import FooterBar from '../components/bars/FooterBar.vue'
import HeroBar from '../components/bars/HeroBar.vue'
import TextInput from '../components/inputs/TextInput.vue'
import CheckboxInput from '../components/inputs/CheckboxInput.vue'

export default {
  name: 'HomePage',
  components: {
    'x-element.button': ButtonElement,
    'x-bar.footer': FooterBar,
    'x-bar.hero': HeroBar,
    'x-input.text': TextInput,
    'x-input.checkbox': CheckboxInput
  }
}
</script>
