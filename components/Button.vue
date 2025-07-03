<script setup lang="ts">
const emit = defineEmits(["onClick"]);
const props = defineProps({
  size: { type: String, required: true, default: "sm" },
  theme: { type: String, default: "dark" },
  description: { type: String },
  value: { type: String },
  icon: { type: Object },
  disabled: { type: Boolean, default: false },
});
const btnStyle = computed(() => ({
  "btn-dark": props.theme === "dark" ? true : false,
  "btn-light": props.theme === "light" ? true : false,
  "btn-gold": props.theme === "gold" ? true : false,
  "btn-sm": props.size === "sm" ? true : false,
}));
const handleClick = () => {
  emit("onClick");
};
</script>
<template>
  <button
    class="btn disabled:!bg-gray-200 disabled:font-gray-400 disabled:font-bold disabled:cursor-not-allowed disabled:!border-none"
    :class="btnStyle"
    v-bind:disabled="disabled"
    @click="handleClick"
  >
    <span class="icon-box"><icon /></span>
    {{ value }}
  </button>
</template>
<style scoped>
.icon-box {
  margin: 10px;
  padding: 5px;
}
.btn {
  display: flex;
  border-radius: 5px;
  place-items: center;
  margin: 10px;
}
.btn-dark {
  background-color: black;
  color: white;
}

.btn-gold {
  background-color: goldenrod;
  color: black;
}
.btn-light {
  background-color: white;
  color: black;
}
.btn-sm {
  width: 150px;
  height: auto;
  font-size: small;
  margin: 5px;
}
</style>
