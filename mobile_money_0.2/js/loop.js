function gameLoop(that) {
  let diff = (Date.now() - that.player.lastUpdate)/1000
  that.player.money += that.player.marketing[0].amount * that.player.marketing[0].mult * diff

  that.player.lastUpdate = Date.now()
}