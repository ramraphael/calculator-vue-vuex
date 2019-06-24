<template>
  <button v-on="$listeners" :class="`calculator-input__button calculator-input__button--${color} calculator-input__button--${size}`">{{ buttonLabel }}</button>
</template>

<script>
export default {
  name: 'calculator-input-button',
  props: {
    buttonLabel: String,
    color: {
      type: String,
      default: 'light'
    },
    size: {
      default: 1,
      type: Number
    },
  }
}
</script>

<style lang="scss" scoped>
  $dark-gray: #737373;
  $light-gray: #9B9B9B;
  $orange: #FD9426;
  .calculator-input__button {
    padding: 0;
    font-size: 2.4rem;
    outline: none;
    &--1 {
      grid-column: span 1;
    }
    &--2 {
      grid-column: span 2;
      text-align: left;
      padding-left: calc(25% - 0.5ch);
    }
    &--dark {
      background-color: $dark-gray;
      border-color: $dark-gray;
      &:hover {
        background-color: lighten($dark-gray, 2)
      }
    }
    &--light {
      background-color: $light-gray;
      border-color: $light-gray;
      &:hover {
        background-color: lighten($light-gray, 2)
      }
    }
    &--accent {
      background-color: $orange;
      border-color: $orange;
      &:hover {
        background-color: lighten($orange, 2)
      }
    }
    &:last-child {
      border-bottom-right-radius: 10%;
    }
    &:nth-last-child(3) {
      border-bottom-left-radius: 10%;
    }
  }
</style>
