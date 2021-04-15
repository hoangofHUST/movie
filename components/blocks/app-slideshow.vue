<template>
  <section class="slideshow">
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide v-for="film in films" :key="film.id" class="swipe-slide">
        <nuxt-link :to="`/phim/${film.id}-${film.unsigned}`">
          <img :src="film.cover" alt="" />

          <client-only>
            <use-play-video v-slot="{ open }" :url="film.trailer">
              <button class="btn-play" @click.prevent="open">
                <img src="@/assets/images/play-video.png" alt="" />
              </button>
            </use-play-video>
          </client-only>
        </nuxt-link>
      </swiper-slide>

      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import UsePlayVideo from '@/components/common/use-play-video'
import films from '@/utils/films'

export default {
  name: 'AppSlideshow',
  components: {
    UsePlayVideo,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
      },
      films,
    }
  },
  methods: {
    playVideo(film) {
      alert(film.name)
    },
  },
}
</script>

<style lang="scss">
$themeColor: #06b6d4 !default;
@import '~swiper/swiper.scss';
@import '~swiper/components/navigation/navigation.scss';
</style>

<style lang="scss" scoped>
.swiper .swipe-slide {
  position: relative;

  &:hover .btn-play {
    display: block;
  }

  .btn-play {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
