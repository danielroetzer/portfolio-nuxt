<template>
  <div class="print">
    <button @click="print">
      <i class="fas fa-print"></i>
      {{ $t("print.text") }}
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    print: function() {
      window.print();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.print {
  padding: 10px 0;
  text-align: center;

  button {
    padding: 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid map-get($colors, primary);
    color: map-get($colors, primary);

    &:hover {
      background-color: map-get($colors, primary);
      color: white;
    }
  }
}

@media print {
  .print {
    display: none;
  }
}
</style>
