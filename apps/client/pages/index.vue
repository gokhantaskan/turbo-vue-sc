<script setup lang="ts">
import { Button } from "@acme/ui";

const { data, error, status, execute } = useFetch("/api/test", {
  method: "get",
  immediate: false,
});

async function handleApiCall() {
  await execute();

  if (error.value) {
    alert(`Error: ${error.value?.message}`);
    return;
  }

  alert(JSON.stringify(data.value));
}
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
      <span class="text-gray-500">Lorem ipsum dolor sit amet.</span>
      <Button
        variant="primary"
        :loading="status === 'pending'"
        @click="handleApiCall"
      >
        <Icon
          name="heroicons:bolt"
          mode="svg"
        />
        Button
      </Button>
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
