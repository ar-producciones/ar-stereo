<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
});

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const requiredClass = computed(() => {
  return props.required ? "after:content-['*'] after:text-red-500" : "";
});
</script>
<template>
  <div class="flex flex-col space-y-2">
    <label
      v-if="label"
      :for="id"
      :class="`text-sm font-medium text-white ${requiredClass}`"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="p-2 bg-white border rounded-md text-black-light focus:outline-none focus:ring-2 focus:border-gold focus:gold-opacity-50"
      :class="{ 'border-red-500': error }"
      @input="emit('update:modelValue', modelValue)"
    />
    <p v-if="help" class="text-sm text-gray-500">{{ help }}</p>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
