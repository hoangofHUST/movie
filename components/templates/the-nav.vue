<template>
  <nav class="space-x-2">
    <a
      v-for="item in items"
      :key="item.href"
      :href="item.href"
      class="hover:text-primary capitalize"
    >
      {{ item.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'TheNav',
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style scoped></style>
