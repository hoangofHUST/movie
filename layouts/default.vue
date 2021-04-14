<template>
  <div id="__default">
    <the-header ref="refHeader"></the-header>

    <main :style="mainStyles">
      <nuxt></nuxt>
    </main>

    <the-footer></the-footer>
  </div>
</template>

<script>
import { ref, computed } from '@nuxtjs/composition-api'
import { useElementSize } from '@vueuse/core'
import TheHeader from '@/components/templates/the-header'
import TheFooter from '@/components/templates/the-footer'
import { canonical, facebook, twitter, appLdJson } from '@/utils/headData'

export default {
  components: { TheFooter, TheHeader },
  setup() {
    const refHeader = ref(null)
    const { height } = useElementSize(refHeader)
    const mainStyles = computed(() => {
      return { 'padding-top': height.value + 'px' }
    })

    return { mainStyles, refHeader }
  },
  head() {
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`

    return {
      meta: [...facebook(pathWithSlash), ...twitter()],
      link: [...canonical(pathWithSlash)],
      script: [...appLdJson(pathWithSlash)],
    }
  },
}
</script>
