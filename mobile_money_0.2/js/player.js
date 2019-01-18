
var player = {
  money: 10,
  graphics: 0,
  marketing: [],
  artists: [],
  lootboxTeam: [],
  lastUpdate: Date.now()
}

var firstMarketing = {
  cost: 10,
  mult: 1,
  amount: 0,
  bought: 0,
  name: "Facebook Ad Campaign I"
}

player.marketing.push(firstMarketing)