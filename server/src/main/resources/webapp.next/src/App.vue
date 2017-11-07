<template lang="html">
  <div id="app">
    <div class="header">
      <nav>{{$t("window.title")}}</nav>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script type="text/javascript">
  import store from '@/vuex/store'

  export default {
    store,
    name: 'app'
  }
</script>
