
var player = {
  money: 10,
  graphics: 0,
  marketing: [],
  artists: [],
  lootboxTeam: [],
  lastUpdate: Date.now()
}

var firstMarketing = {
  tier: 0,
  cost: 10,
  mult: 1,
  amount: 0,
  bought: 0,
  name: "Facebook Ad Campaign I"
}

var firstArtist = {
  tier: 0,
  cost: 30,
  mult: 1,
  amount: 0,
  bought: 0,
  name: "Deviantart Artist I"
}

player.marketing.push(new Generator(firstMarketing))
player.artists.push(new Generator(firstArtist))