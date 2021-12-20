<template>
  <div class="flex flex-col gap-10 bg-gray-100 border-t border-gray-300 p-8">
    <div class="flex flex-col gap-2">
      <div class="text-center text-2xl text-gray-500 font-bold">Outplans</div>
      <div class="text-center text-sm text-gray-400">
        Simplifying the way you make plans!
      </div>
    </div>

    <div
      class="
        flex flex-col
        gap-2
        md:flex-row
        items-center
        md:justify-around
        text-gray-500 text-sm
      "
    >
      <a href="#">About Us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Our Terms</a>
      <a href="#">Contact Us</a>
    </div>
    <hr />
    <div class="text-center text-gray-400 text-xs">&copy; Outplans 2021</div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>
