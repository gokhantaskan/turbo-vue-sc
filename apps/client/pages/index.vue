<script setup lang="ts">
import { Button } from "@acme/ui";
</script>

<template>
  <div class="container">
    <h1>Home</h1>
    <div class="space-x-2">
      <Button
        variant="primary"
        size="md"
      >
        Button
      </Button>
      <Button
        variant="primary"
        size="md"
        as="a"
        href="https://google.com"
        target="_blank"
      >
        Link
      </Button>
    </div>
  </div>
</template>
