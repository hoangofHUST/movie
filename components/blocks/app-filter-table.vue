<template>
  <section class="filter-table">
    <div class="filter-table__wrap">
      <div class="filter-item">
        <el-select v-model="model.film" placeholder="Phim">
          <el-option
            v-for="film in films"
            :key="film.id"
            :value="film.id"
            :label="film.name"
          ></el-option>
        </el-select>
      </div>

      <div class="filter-item">
        <el-select v-model="model.cinema" placeholder="Rạp">
          <el-option
            v-for="film in films"
            :key="film.id"
            :value="film.id"
            :label="film.name"
          ></el-option>
        </el-select>
      </div>

      <div class="filter-item">
        <el-select v-model="model.cinema" placeholder="Ngày xem">
          <el-option
            v-for="film in films"
            :key="film.id"
            :value="film.id"
            :label="film.name"
          ></el-option>
        </el-select>
      </div>

      <div class="filter-item">
        <el-select v-model="model.cinema" placeholder="Suất chiếu">
          <el-option
            v-for="film in films"
            :key="film.id"
            :value="film.id"
            :label="film.name"
          ></el-option>
        </el-select>
      </div>

      <div class="filter-item">
        <button class="btn-buy">Mua vé ngay</button>
      </div>
    </div>
  </section>
</template>

<script>
import films from '@/utils/films'

export default {
  name: 'AppFilterTable',
  data() {
    return {
      model: {
        film: '',
        cinema: '',
        dateOfView: '',
        screenings: '',
      },
      films,
    }
  },
}
</script>

<style scoped lang="scss">
.filter-table {
  @apply shadow bg-white p-2 rounded-md;
  width: 800px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1;

  .filter-table__wrap {
    @apply flex justify-between items-center divide-x;
  }

  .filter-item {
    @apply px-4;
  }

  .filter-item .btn-buy {
    @apply bg-primary text-white py-2 px-4 rounded whitespace-nowrap;
  }
}
</style>
