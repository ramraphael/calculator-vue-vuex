<template>
  <button :class="`window-header-button window-header-button--${color}`"></button>
</template>

<script>
export default {
  name: "window-button",
  props: {
    color: {
      type: String,
      default: "red"
    },
    clickAction: {
      type: String,
      default: "close"
    },
  }
};
</script>

<style lang="scss" scoped>
.window-header-button {
  border-radius: 50%;
  border-color: rgba(0, 0, 0, 0);
  margin-right: 1rem;
  height: 20px;
  width: 20px;
  &--red {
    background-color: #fd5b57;
  }
  &--yellow {
    background-color: #e5be3c;
  }
  &--green {
    background-color: #58c038;
  }
}
</style>