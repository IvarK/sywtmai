var app = new Vue({
  el: "#app",
  data: {
    player: player
  },
  methods: {
    format(amount) {
      return format(amount)
    },
    gameLoop() {
      gameLoop(this)
    }
  },
  mounted() {
    setInterval(this.gameLoop, 50)
  }
})