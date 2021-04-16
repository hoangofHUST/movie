<template>
  <el-select v-model="location">
    <el-option
      v-for="location in locations"
      :key="location.id"
      :value="location.id"
      :label="location.cityName"
    ></el-option>
  </el-select>
</template>

<script>
import useLocation from '@/composables/useLocation'

export default {
  name: 'AppSelectLocation',
  setup() {
    const { location, locations } = useLocation()
    return {
      location,
      locations,
    }
  },
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 130px;
}
</style>
