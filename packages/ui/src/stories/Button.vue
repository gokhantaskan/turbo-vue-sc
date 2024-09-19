<script lang="ts" setup>
export interface ButtonProps {
  type?: "button" | "submit";
  variant?: "default" | "primary" | "error";
  size?: "sm" | "md" | "lg" | "xl";
  /* Corner round of the button */
  pill?: boolean;
  disabled?: boolean;
}

const {
  type = "button",
  variant = "primary",
  size = "md",
  pill = false,
  disabled = false,
} = defineProps<ButtonProps>();

defineSlots<{
  default(props: any): any;
}>();
</script>

<template>
  <button
    :class="['p-button', `p-button--${variant}`, `p-button--${size}`, pill && `p-button--pill`]"
    :type
    :disabled
  >
    <slot />
  </button>
</template>

<style lang="scss">
.p-button {
  @apply inline-block cursor-pointer border border-transparent rounded font-bold;

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
    @apply opacity-50 cursor-not-allowed;
  }
}
</style>
