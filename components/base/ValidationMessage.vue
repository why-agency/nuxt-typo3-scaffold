<template>
  <div v-if="invalidConditions">
    <span
      v-for="condition in invalidConditions"
      :key="condition.text"
      class="block text-forms-info text-error"
      data-testid="errorMessage"
    >
      {{ condition.text }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    conditions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    invalidConditions() {
      return this.conditions.filter(condition => condition.isInvalid)
    }
  }
}
</script>
