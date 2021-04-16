<template>
  <div class="page-content">
    <app-slideshow>
      <app-filter-table></app-filter-table>
    </app-slideshow>
  </div>
</template>

<script>
import AppSlideshow from '@/components/blocks/app-slideshow'
import AppFilterTable from '@/components/blocks/app-filter-table'

export default {
  components: { AppFilterTable, AppSlideshow },
  methods: {},
}
</script>

<style scoped></style>
