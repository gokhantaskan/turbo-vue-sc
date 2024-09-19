<script lang="ts" setup>
import { computed } from "vue";

export type ButtonProps = {
  type?: "button" | "submit";
  variant?: "default" | "primary" | "error";
  size?: "sm" | "md" | "lg" | "xl";
  /**
   *  Rounded to the max!
   **/
  pill?: boolean;
  disabled?: boolean;
  /**
   * Loading state also triggers <strong>disabled</strong> state.
   **/
  loading?: boolean;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  variant: "primary",
  size: "md",
  pill: false,
  disabled: false,
  loading: false,
});

defineSlots<{
  default(props: any): any;
}>();

const isDisabled = computed(() => props.loading || props.disabled);
</script>

<template>
  <button
    :class="[
      'p-button',
      `p-button--${variant}`,
      `p-button--${size}`,
      pill && 'p-button--pill',
      isDisabled && 'p-button--disabled',
      loading && 'p-button--loading',
    ]"
    :type
    :disabled="loading || disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.p-button {
  @apply relative inline-flex items-center justify-center;
  @apply border border-transparent rounded;
  @apply cursor-pointer font-bold;

  // Variants
  &--primary {
    @apply bg-primary-500 text-white;
  }

  &--default {
    @apply bg-transparent text-gray-500 border-gray-300;
  }

  &--error {
    @apply bg-error-500 text-white;
  }

  // Sizes
  &--sm {
    @apply py-1 px-2 text-sm leading-4;
  }

  &--md {
    @apply py-2 px-3 text-base leading-5;
  }

  &--lg {
    @apply py-3 px-4 text-lg leading-6;
  }

  &--xl {
    @apply py-4 px-5 text-xl leading-7;
  }

  // Pill
  &--pill {
    @apply rounded-full;
  }

  // States
  &:disabled,
  &--disabled {
    @apply cursor-not-allowed;
  }

  &:disabled:not(#{&}--loading),
  &--disabled:not(#{&}--loading) {
    @apply opacity-50;
  }
}
</style>
