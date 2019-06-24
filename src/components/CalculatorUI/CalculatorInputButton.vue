<template>
  <button
    v-on="$listeners"
    :class="`calculator-input__button calculator-input__button--${color} calculator-input__button--${size}`"
  >{{ buttonLabel }}</button>
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
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss">
$dark-gray: #737373;
$light-gray: #9b9b9b;
$orange: #fd9426;
.calculator-input__button {
  font-size: 3rem;
  outline: none;
  position: relative;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: ease-out;
  transition-duration: 0.1s;
  &--1 {
    grid-column: span 1;
  }
  &--2 {
    grid-column: span 2;
    text-align: left;
    // This is so we can get that 0 right on the halfway line of the 1 button
    padding-left: calc(25% - 0.5ch);
  }
  &--dark {
    background-color: $dark-gray;
    border: none;
    font-size: 2.5rem;
    &:hover {
      background-color: lighten($dark-gray, 4);
    }
  }
  &--light {
    background-color: $light-gray;
    border: none;
    &:hover {
      background-color: lighten($light-gray, 4);
    }
  }
  &--accent {
    background-color: $orange;
    border: none;
    font-size: 4rem;
    &:hover {
      background-color: lighten($orange, 4);
    }
  }
  &:nth-last-child(3) {
    border-bottom-left-radius: 10%;
  }
}
</style>
