<template>
  <div class="min-h-screen">
    <x-bar.hero>
      <div class="flex items-center justify-end text-white">
        <nav class="flex items-center gap-6">
          <a href="#"> Login </a>
          <a href="#"> Register </a>
        </nav>
      </div>
      <div
        class="
          h-full
          flex flex-col
          md:flex-row
          items-center
          justify-center
          text-center
          gap-12
        "
      >
        <div class="flex flex-col gap-4 text-white">
          <h1 class="text-6xl sm:text-8xl font-bold">Outplans</h1>
          <h2>
            Making and sharing plans with your friends has never been simpler!
          </h2>
          <div class="mt-8">
            <x-element.button
              label="Get Started!"
              secondary
              wide
              bold
              animated
            />
          </div>
        </div>
      </div>
    </x-bar.hero>

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