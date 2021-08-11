<template>
    <div class="click-me-button" @click="sayHello">
      <p>{{message}}</p>
    </div>
</template>
<script>
import routes from '../routes'
export default {
  name: 'Home',
  title: 'Home',
  data: () => ({
    message: 'Click me if the express server is on'
  }),
  methods: {
    async sayHello () {
      const { getHello } = routes
      const {data} = await this.$http.get(getHello)

      this.message = data.message
    }
  }
}
</script>
<style lang="scss">
  .click-me-button {
    padding: 1rem;;
    width: 15rem;
    border-radius: 1rem;
    cursor: pointer;

    color: white;
    background: #00bcd4;
    
  }
</style>