<template lang="html">
  <div>
    <h2>Project '{{name}}'</h2>
    <ul>
      <router-link
        tag="li"
        v-for="(repository, index) in repositories"
        :key="index"
        :to="{ name: 'repositories', params: { name: repository.name } }">
        {{repository.name}}
      </router-link>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'project',
    props: {
      name: {
        type: String
      }
    },
    data () {
      return {}
    },
    computed: {
      repositories () {
        return this.$store.getters.repositories
      }
    },
    watch: {
      $route: 'fetchData'
    },
    methods: {
      fetchData () {
        this.$store.dispatch('getRepositories')
      }
    },
    created () {
      this.fetchData()
    }
  }
</script>


