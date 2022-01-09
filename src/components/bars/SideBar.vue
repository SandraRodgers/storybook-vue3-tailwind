<template>
  <div
    class="
      flex flex-col
      bg-indigo-700
      border-r-8 border-indigo-900
      text-white
      w-full
      p-8
      gap-4
    "
  >
    <div class="flex justify-between text-2xl">
      <h1 class="font-bold"><a href="#">Outplans</a></h1>
      <div class="md:hidden">
        <a href="#" @click.prevent="closeSidebar">
          <i class="fas fa-times"></i>
        </a>
      </div>
    </div>
    <hr />
    <div class="flex flex-col h-full justify-between gap-4">
      <div>
        <ul class="text-lg space-y-3">
          <li>
            <a href="#" class="block w-full hover:opacity-80">
              <i class="fas fa-tachometer-alt" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#" class="block w-full hover:opacity-80">
              <i class="fas fa-calendar-alt"></i> Plans
            </a>
          </li>
          <li>
            <a href="#" class="block w-full hover:opacity-80">
              <i class="fas fa-user-plus"></i> Invites
            </a>
          </li>
          <li>
            <a href="#" class="block w-full hover:opacity-80">
              <i class="fas fa-history"></i> Attended
            </a>
          </li>
          <li>
            <a href="#" class="block w-full hover:opacity-80">
              <i class="fas fa-users"></i> Friends
            </a>
          </li>
        </ul>
      </div>
      <div class="text-xs">&copy; Outplans 2021</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    closeSidebar() {
      this.$emit('closeSidebar')
    }
  }
}
</script>
