<template>
  <div
    class="
      flex flex-col
      gap-10
      bg-gray-100
      border-t border-gray-300
      px-8
      pt-16
      pb-8
    "
  >
    <div class="flex flex-col gap-2">
      <div class="text-center text-2xl text-gray-500 font-bold">Outplans</div>
      <div class="text-center text-sm text-gray-400">
        Simplify the way you make plans!
      </div>
    </div>

    <div
      class="
        text-gray-500 text-sm
        flex flex-col
        items-center
        md:flex-row md:justify-center
        gap-2
        md:gap-8
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
