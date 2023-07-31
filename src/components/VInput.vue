<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return ['text', 'number'].includes(type);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  });

  const emit = defineEmits({
    'update:modelValue'(value) {
      return ['string', 'number'].includes(typeof value);
    },
  });

  const normalizeValue = (value) => {
    if (props.type === 'number') {
      return +value;
    }
    return value;
  };
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    :disabled="disabled"
    @input="emit('update:modelValue', normalizeValue($event.target.value))"
  />
</template>

<style scoped>
  input {
    border: 1px solid var(--section-border);
    border-radius: 5px;
    font-size: 18px;
    padding: 0 3px;
    color: var(--active);
    margin-left: 5px;
    background: white;
  }

  input[disabled] {
    color: inherit;
  }

  input:hover {
    border-color: var(--inactive);
  }

  input:hover[disabled] {
    border-color: var(--section-border);
  }

  input:focus {
    border-color: var(--active);
  }
</style>
