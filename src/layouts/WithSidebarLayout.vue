<template>
  <div class="relative flex">
    <div
      class="
        flex
        md:items-stretch
        h-screen
        min-h-screen
        w-full
        md:w-72
        absolute
        md:static
        left-0
        transform
        transition
        duration-200
        ease-in-out
        z-40
      "
      :class="{
        '-translate-x-full md:-translate-x-0': !isSidebarOpen
      }"
    >
      <slot name="sidebar">
        <x-side-bar @close-sidebar="onCloseSidebar" />
      </slot>
    </div>
    <div
      class="
        flex-1 flex flex-col
        justify-between
        gap-4
        min-h-screen
        h-screen
        overflow-scroll
      "
    >
      <div class="flex flex-col gap-4">
        <slot name="header">
          <x-header-bar @open-sidebar="onOpenSidebar" />
        </slot>
        <div class="px-8 pb-8">
          <slot>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae,
            nihil, blanditiis velit minus ab numquam labore qui aspernatur
            voluptate odio. Nisi architecto perferendis odio repudiandae illum
            quam, ut repellat nemo in maiores iure voluptatibus adipisci atque
            odit commodi! Dolore doloribus impedit praesentium assumenda
            eligendi perferendis eveniet magni officia necessitatibus voluptatum
            accusamus explicabo dolorem dignissimos, accusantium, sequi
            consectetur totam in quidem. Possimus, delectus quas quaerat quo
            doloremque id autem. Cum porro qui quasi quam eos aperiam minima
            nulla recusandae, ex officia nobis corrupti rem esse iure tempore
            nemo illo sint? Dolorum quo eius possimus nemo fugit! Tempore omnis
            obcaecati vero voluptates ipsum aperiam fuga explicabo nemo porro
            illum, nostrum voluptate facilis possimus fugit, provident ullam
            minus quae reprehenderit cumque! Odit, sapiente! Id illum natus,
            mollitia quia ipsam sequi reprehenderit itaque vel eius quas
            quibusdam quam, magni ab, commodi consequatur veritatis similique
            nulla quisquam? Nam, non? Voluptatem, dolore. Numquam, optio cumque
            maiores vero iste non adipisci eveniet cupiditate quas, et minima
            similique illo dicta ipsam aspernatur quod nostrum ullam commodi
            neque ea delectus modi quos. Aspernatur doloremque eum neque, veniam
            ea sunt, quaerat voluptate numquam, dolor possimus sit ut doloribus.
            Cumque deleniti aspernatur expedita provident, eveniet soluta harum
            tempore voluptatem nobis odio quo facere officiis velit! Tempora
            commodi vitae architecto sed. Optio amet debitis dolorum ea natus in
            alias. Laborum fuga sequi tenetur accusantium nisi ipsam ut rerum
            impedit veritatis iure assumenda architecto nulla repudiandae cum
            praesentium optio, adipisci vero similique. Esse facere deserunt
            repellat ducimus, odit accusantium! Ut consequuntur natus quisquam?
            A rerum cupiditate architecto omnis sapiente velit ea sunt error
            maiores porro culpa, illo eius cumque officia iste ex corrupti, in
            possimus. Pariatur alias, minima molestias iste itaque maiores
            accusantium vero magni illum facere iure earum, dolor rerum expedita
            facilis temporibus possimus ab quod odit! Eos aperiam nostrum ullam
            dicta, sapiente illo beatae molestiae a sequi aut obcaecati error
            nam quia tenetur voluptatum dolores porro voluptate repellat!
            Excepturi optio natus necessitatibus nulla rerum quis, nemo omnis
            ducimus. Molestiae rem, suscipit ipsum dolorum consequatur sunt
            exercitationem ullam reiciendis corporis nisi aliquam optio
            assumenda ratione facere veniam delectus fuga consectetur aliquid
            accusamus officiis! Excepturi nulla ipsam minus adipisci quidem modi
            perferendis suscipit doloremque! Minus unde repellendus animi?
            Eveniet voluptatibus, autem praesentium libero doloremque
            repellendus expedita voluptates, reiciendis voluptatum rem
            necessitatibus aliquam. Ab quaerat quos, vel iste id itaque eligendi
            vitae minus alias! Vitae excepturi, quis, quas voluptate et alias
            tempora deleniti consectetur a repellat sit praesentium! Beatae nisi
            eum ut corrupti repudiandae obcaecati cupiditate deserunt fugiat,
            nobis quia at voluptatibus! Neque facere, iste et, velit voluptates
            aspernatur, magnam vel possimus atque odio ut amet explicabo. Ullam
            blanditiis debitis dolor quas nulla eligendi quam facere, itaque
            iste eius sed at libero assumenda veniam, aliquam beatae ab dicta,
            omnis neque rem tenetur saepe voluptas soluta nobis! Dolore error
            ducimus repellendus commodi nostrum quibusdam rerum aperiam iusto
            magnam quod. Illo, animi! Aliquam qui quod esse ipsum voluptatem
            quo, laborum voluptatum delectus omnis asperiores praesentium? Atque
            mollitia facere error commodi eligendi doloremque quaerat soluta
            eveniet.
          </slot>
        </div>
      </div>
      <div>
        <slot name="footer">
          <x-footer-bar />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/bars/HeaderBar.vue'
import FooterBar from '../components/bars/FooterBar.vue'
import SideBar from '../components/bars/SideBar.vue'

export default {
  name: 'WithSidebarLayout',
  components: {
    'x-header-bar': HeaderBar,
    'x-footer-bar': FooterBar,
    'x-side-bar': SideBar
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    onCloseSidebar() {
      this.isSidebarOpen = false
    },
    onOpenSidebar() {
      this.isSidebarOpen = true
    }
  }
}
</script>
