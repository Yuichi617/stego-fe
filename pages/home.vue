<template>
  <div class="home-wrapper">
    <!-- <h1>記録した映画：{{ count }}</h1> -->
    <PostList :posts="posts" @openAddModal="(showAddModal = true)" @openDeleteModal="(showDeleteModal = true)" />
    <AddModal v-if="showAddModal" @close="(showAddModal = false)" />
    <DeleteModal v-if="showDeleteModal" @close="(showDeleteModal = false)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAddModal: false,
      showDeleteModal: false
    }
  },
  async asyncData({ $axios, $config: { baseURL } }) {
    const posts = await $axios.$get(`${baseURL}/internal_api/v1/movies`)
    const count = posts.length
    return { posts, count }
  },
}
</script>

<style lang="scss" scoped>
.home-wrapper{
  margin-top: 50px;
  @include mobile {
    margin-top: 20px;
  }
}
</style>
