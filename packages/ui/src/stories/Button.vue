<script lang="ts" setup>
export interface ButtonProps {
  type?: "button" | "submit";
  variant?: "default" | "primary" | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  variant: "primary",
  size: "md",
  disabled: false,
});

defineSlots<{
  default(props: any): any;
}>();
</script>

<template>
  <button
    :class="['p-button', `p-button--${variant}`, `p-button--${size}`]"
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
    @apply bg-blue-500 text-white;
  }

  &--default {
    @apply bg-transparent text-gray-500 border;
  }

  &--destructive {
    @apply bg-red-500 text-white;
  }

  // Sizes
  &--sm {
    @apply py-1 px-2 text-sm;
  }
  &--md {
    @apply py-2 px-3 text-base;
  }
  &--lg {
    @apply py-3 px-4 text-lg;
  }
  &--xl {
    @apply py-4 px-5 text-xl;
  }

  // States
  &:disabled,
  &--disabled {
    @apply opacity-50;
  }
}
</style>
