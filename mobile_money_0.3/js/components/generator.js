Vue.component('generator', {
  props: {
    generator: Generator
  },
  data: function() {
    return {

    }
  },
  methods: {
    format(amount) {
      return format(amount)
    }
  },
  template:
  `<div>
      <h4>{{ generator.name }}</h4>
      <span class="generator-amount">{{ format(generator.amount) }}</span>
      <span class="generator-multiplier">x{{ format(generator.mult) }}</span>
      <span class="generator-cost">Cost: {{ format(generator.cost) }}</span>
      <button @click="generator.buy()">Buy 1</button>
    </div>`
})