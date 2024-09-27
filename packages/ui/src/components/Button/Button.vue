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
  size?: "sm" | "base" | "lg" | "xl";
  pill?: boolean;
  disabled?: boolean;
  /**
   * The component gets `tabIndex: -1` in order to keep the default styles.
   */
  readonly?: boolean;
  loading?: boolean;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  as: "button",
  asChild: false,
  type: "button",
  variant: "default",
  size: "base",
  pill: false,
  disabled: false,
  readonly: false,
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
      size !== 'base' && `p-button--${size}`,
      variant !== 'default' && `p-button--${variant}`,
      pill && 'p-button--pill',
      isDisabled && 'p-button--disabled',
      $props.readonly && 'p-button--readonly',
      loading && 'p-button--loading',
    ]"
    :tabindex="$props.readonly ? -1 : undefined"
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
