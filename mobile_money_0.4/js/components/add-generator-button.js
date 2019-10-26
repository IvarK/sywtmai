Vue.component('add-generator-button', {
  props: {
    target: String
  },
  methods: {
    format(amount) {
      return format(amount)
    },
    addGenerator() {
      if (!this.canBuy) return
      player.graphics -= this.tierCost();
      player[this.target].push(createGenerator(player[this.target].length, this.target))
    },
    tierCost() {
      return Math.pow(10, player[this.target].length * (player[this.target].length + 1) * getColumn(this.target))
    }
  },
  computed: {
    canBuy() {
      return player.graphics >= this.tierCost();
    }
  },
  template:
  `<div 
    class="add-generator-button"
    :class="{ 'add-generator-button--unavailable': !canBuy}"
    @click="addGenerator()">
    <h1>+</h1>
    <div>One more tier, costs {{ format(tierCost()) }} graphics</div>
  </div>
  `
})