<template>
  <div class="min-h-screen">
    <x-bar.hero>
      <div
        class="
          h-full
          flex flex-col
          md:flex-row
          items-center
          justify-between
          gap-12
        "
      >
        <div class="text-white">
          <h1 class="text-6xl lg:text-7xl xl:text-8xl font-bold">Outplans</h1>
          <p class="md:ml-2 xl:text-lg xl:mt-2">
            Simplify the way you make plans!
          </p>
        </div>
        <div
          class="
            flex flex-col
            gap-4
            w-full
            sm:w-96
            bg-white
            border border-gray-100
            rounded-md
            shadow-lg
            -mb-24
            md:-mb-64
            py-4
            px-6
          "
        >
          <h2 class="block text-lg font-bold text-indigo-700 text-center">
            Sign In To Get Started!
          </h2>
          <hr class="bg-gray-300" />
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
          <x-input.checkbox name="remember" label="Remember me" id="remember" />
          <x-element.button label="Sign in" primary full-width />
          <div class="text-right text-xs my-2">
            <a href="#">Forgot your password?</a>
          </div>
          <div
            class="
              bg-indigo-700
              -mx-6
              -mb-6
              rounded-b-md
              shadow-lg
              p-5
              text-white text-center text-lg
              border-t-8 border-indigo-900
            "
          >
            or <a href="#" class="underline font-bold">Create An Account!</a>
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

<style>
#hero {
  background-image: repeating-linear-gradient(
      135deg,
      rgba(172, 176, 216, 0.08) 0px,
      rgba(172, 176, 216, 0.08) 1px,
      transparent 1px,
      transparent 9px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(172, 176, 216, 0.08) 0px,
      rgba(172, 176, 216, 0.08) 1px,
      transparent 1px,
      transparent 9px
    ),
    linear-gradient(90deg, rgb(183, 70, 156), rgb(8, 33, 155));
}
</style>