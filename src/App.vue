<script setup  lang="ts">
import ArticleList from './components/ArticleList.vue'
import BlogHeader from './components/BlogHeader.vue'
import BlogFooter from './components/BlogFooter.vue'
</script>

<template>
  <BlogHeader />
  <ArticleList />
  <BlogFooter />
</template>

<style scoped>
#app {
  font-family: Georgia, Arial, sans-serif;
  margin-left: 40px;
  margin-right: 40px;
}
</style>
