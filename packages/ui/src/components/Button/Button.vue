<script lang="ts" setup>
import { Primitive, type PrimitiveProps } from "radix-vue";
import { computed } from "vue";

export type ButtonProps = {
  /**
   * The element or component the current element should render as. More details: <a target="_blank" rel="noopener noreferrer" href="https://www.radix-vue.com/utilities/primitive.html">Radix Primitive</a>.
   */
  as?: PrimitiveProps["as"];
  type?: "button" | "submit";
  variant?: "default" | "primary" | "error";
  size?: "sm" | "md" | "lg" | "xl";
  pill?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  as: "button",
  asChild: false,
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

// Use this order to prevent attribute injection to the non-button html tag
const isButton = computed(() => props.as === "button");
const buttonAttributes = computed(() =>
  isButton.value ? { type: props.type, disabled: isDisabled.value } : {}
);
</script>

<template>
  <Primitive
    :as
    :class="[
      'p-button',
      `p-button--${variant}`,
      `p-button--${size}`,
      pill && 'p-button--pill',
      isDisabled && 'p-button--disabled',
      loading && 'p-button--loading',
    ]"
    v-bind="buttonAttributes"
  >
    <slot />
    <span
      v-if="loading"
      class="p-button__loader"
      aria-hidden="true"
    />
  </Primitive>
</template>
