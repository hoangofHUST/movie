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
import ElSelect from 'element-ui/lib/select'
import ElOption from 'element-ui/lib/option'
import useLocation from '@/composables/useLocation'

export default {
  name: 'AppSelectLocation',
  components: { ElSelect, ElOption },
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

  ::v-deep .el-input__inner {
    @apply pl-0 border-0 text-base;
  }
}
</style>
