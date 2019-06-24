<template>
  <section class="window-header">
      <div class="button-container">
        <window-button color="red" clickAction="close"></window-button>
        <window-button color="yellow" clickAction="minimize"></window-button>
        <window-button color="green" clickAction="maximize"></window-button>
      </div>
  </section>
</template>

<script>
import WindowButton from './WindowButton';
export default {
  name: 'window-header',
  components: {
    WindowButton
  }
}
</script>

<style lang="scss" scoped>
  .window-header {
    border: none;
  }
  .button-container {
    display: flex;
    padding: 1rem;
  }
</style>
