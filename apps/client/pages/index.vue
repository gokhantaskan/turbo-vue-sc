<script setup lang="ts">
import { Button } from "@acme/ui";
</script>

<template>
  <div class="container">
    <h1>Home</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam explicabo autem eos?
      Reprehenderit dolor incidunt ullam ducimus earum recusandae nisi modi deserunt enim!
      Doloremque hic voluptatibus dignissimos voluptatem quisquam cupiditate.
    </p>
    <div class="space-x-2">
      <Button variant="primary">Button</Button>
      <Button
        as="a"
        href="https://google.com"
        target="_blank"
      >
        Link
      </Button>
    </div>
  </div>
</template>
