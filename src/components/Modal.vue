<template>
  <div class="modal">
    <div>
      <slot name="header">
        <h1>Thong bao</h1>
      </slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
