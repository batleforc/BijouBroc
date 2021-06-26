<template>
  <div>
    <div class="columns">
      <div class="column">First column</div>
      <div class="column">Second column</div>
      <div class="column">Third column</div>
      <div class="column">Fourth column</div>
    </div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      message: "patrick",
    };
  },
};
</script>
