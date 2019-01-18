var app = new Vue({
  el: "#app",
  data: {
    player: player
  },
  methods: {
    buyMarketingGenerator(i) {
      let g = this.player.marketing[i]
      if (g.cost > this.player.money) return
      this.player.money -= g.cost
      this.player.marketing[i].cost *= 1 + (i+1)*0.25
      this.player.marketing[i].amount += 1
      this.player.marketing[i].bought += 1
    },
    buyArtistGenerator(i) {
      let g = this.player.artists[i]
      if (g.cost > this.player.money) return
      this.player.money -= g.cost
      this.player.artists[i].cost *= 1 + (i+1)*0.25
      this.player.artists[i].amount += 1
      this.player.artists[i].bought += 1
    },
    buyLootboxTeamGenerator(i) {
      let g = this.player.lootboxTeam[i]
      if (g.cost > this.player.money) return
      this.player.money -= g.cost
      this.player.lootboxTeam[i].cost *= 1 + (i+1)*0.25
      this.player.lootboxTeam[i].amount += 1
      this.player.lootboxTeam[i].bought += 1
    },
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