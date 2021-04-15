<template>
  <section class="play-video">
    <slot v-bind="{ open }"></slot>

    <el-dialog :visible.sync="dialogVisible" width="700px" append-to-body>
      <youtube :video-id="internalVideoId" :player-vars="playerVars"></youtube>
    </el-dialog>
  </section>
</template>

<script>
import ElDialog from 'element-ui/lib/dialog'

export default {
  name: 'UsePlayVideo',
  components: { ElDialog },
  props: {
    url: {
      type: String,
      default: '',
    },
    videoId: {
      type: String,
      default: '',
    },
    playerVars: {
      type: Object,
      default: () => ({
        autoplay: 1,
      }),
    },
  },
  data() {
    return {
      dialogVisible: false,
      internalVideoId: '',
    }
  },
  created() {
    this.getVideoId()
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    getVideoId() {
      if (this.videoId) {
        this.internalVideoId = this.videoId
        return
      }

      if (this.url) {
        this.internalVideoId = this.$youtube.getIdFromURL(this.url)
        return
      }

      throw new Error('Props url or videoId is required.')
    },
  },
}
</script>

<style scoped></style>
