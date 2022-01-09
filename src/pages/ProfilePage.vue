<template>
  <x-layout.with-sidebar>
    <div class="flex justify-center">
      <div class="w-full sm:w-96">
        <h2 class="text-3xl font-bold text-center mb-4">Account Information</h2>

        <form class="flex flex-col gap-4">
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
            required
          />
          <x-input.checkbox
            name="show_plans_on_profile"
            label="Show my plans on my profile"
          />
          <x-element.button label="Update Account" primary full-width />
        </form>

        <hr class="my-6" />

        <h2 class="text-3xl font-bold text-center mb-4">Change Password</h2>

        <form class="flex flex-col gap-4">
          <x-input.text
            type="password"
            label="Current Password"
            name="current_password"
            placeholder="Current Password"
            label-hidden
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
          <x-element.button label="Change Password" primary full-width />
        </form>
      </div>
    </div>
  </x-layout.with-sidebar>
</template>

<script>
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'
import ButtonElement from '../components/elements/ButtonElement.vue'
import TextInput from '../components/inputs/TextInput.vue'
import CheckboxInput from '../components/inputs/CheckboxInput.vue'

export default {
  name: 'ProfilePage',
  components: {
    'x-layout.with-sidebar': WithSidebarLayout,
    'x-element.button': ButtonElement,
    'x-input.text': TextInput,
    'x-input.checkbox': CheckboxInput
  }
}
</script>
