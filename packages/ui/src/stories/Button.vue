<script lang="ts" setup>
import "./button.scss";

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
