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
