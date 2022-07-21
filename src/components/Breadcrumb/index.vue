<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ label }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ label2 }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    label2: {
      type: String,
      required: true
    }
  },
  created () {
  },
  data () {
    return {

    }
  },
  methods: {
  },
  computed: {},
  watch: {
  },
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
