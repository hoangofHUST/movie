<template>
  <header class="header">
    <div class="header__wrapper">
      <nuxt-link class="w-[50px]" to="/">
        <img src="@/assets/images/web-logo.png" alt="Movie" />
      </nuxt-link>

      <the-nav :items="items"></the-nav>

      <section class="account-group">
        <div class="btn-login">Đăng nhập</div>

        <span>|</span>

        <i class="el-icon-location-outline"></i>
        <app-select-location></app-select-location>
      </section>
    </div>
  </header>
</template>

<script>
import useAuth from '@/composables/useAuth'
import TheNav from '@/components/templates/the-nav'
import AppSelectLocation from '~/components/blocks/app-select-location'

export default {
  name: 'TheHeader',
  components: { AppSelectLocation, TheNav },
  setup() {
    const { loggedIn } = useAuth()

    return { loggedIn }
  },
  data() {
    return {
      items: [
        { name: 'Lịch chiếu', href: '#calendar' },
        { name: 'Cụm rạp', href: '#cinema' },
        { name: 'Tin tức', href: '#news' },
        { name: 'Ứng dụng', href: '#application' },
      ],
    }
  },
}
</script>

<style scoped>
.header {
  @apply fixed top-0 left-0 right-0 bg-white shadow;
}
.header__wrapper {
  @apply flex items-center justify-between px-8 py-2;
}
.account-group {
  @apply flex items-center justify-between space-x-2;
}
.account-group .btn-login {
  @apply cursor-pointer;
}
</style>
