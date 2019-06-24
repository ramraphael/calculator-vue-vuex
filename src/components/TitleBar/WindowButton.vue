// Currently purely presentational =D.
// I attempted to add close, full screen and switch tab
// but JS is limited by the browser due to security

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
$red: #fd5b57;
$yellow: #e5be3c;
$green: #58c038;
.window-header-button {
  border-radius: 50%;
  border-color: rgba(0, 0, 0, 0);
  height: 23px;
  margin-right: 1rem;
  transition-duration: 0.2s;
  width: 23px;
  &--red {
    background-color: $red;
    &:hover {
      background-color: lighten($red, 8);
    }
  }
  &--yellow {
    background-color: $yellow;
    &:hover {
      background-color: lighten($yellow, 8);
    }
  }
  &--green {
    background-color: $green;
    &:hover {
      background-color: lighten($green, 8);
    }
  }
}
</style>