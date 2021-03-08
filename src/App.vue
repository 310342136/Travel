<template>
  <div id="app">
    <keep-alive exclude="Detail"><!-- 除了Detail组件之外其他组件都会被缓存 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
