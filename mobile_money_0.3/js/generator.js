class Generator {

  constructor(props) {
    this.name = props.name
    this.cost = props.cost
    this.mult = props.mult
    this.amount = props.amount
    this.bought = props.bought
    this.tier = props.tier
  }

  get canBuy() {
    return this.cost <= player.money
  }

  buy() {
    if (!this.canBuy) return
    player.money -= this.cost
    this.cost *= 1 + (this.tier+1)*0.25
    this.amount += 1
    this.bought += 1
    if (this.bought%100 == 0) this.mult *= 5
    else if (this.bought%25 == 0) this.mult *= 3
  }

  get productionPerSecond() {
    let ret = this.amount * this.mult
    if (this.tier !== 0) ret /= 5
    return ret
  }
}

function getColumn(type) {
  switch (type) {
    case "marketing":
    return 1;

    case "artists":
    return 2;

    case "lootboxTeam":
    return 3
  }
}

const marketing_names = ["Facebook Ad Campaign"]
const artist_names = ["Deviantart Artist"]
const lootboxTeam_names = ["Valve Interns"]

function generateGeneratorName(tier, type) {
  switch (type) {
    case "marketing":
    return marketing_names[tier%marketing_names.length];

    case "artists":
    return artist_names[tier%artist_names.length];

    case "lootboxTeam":
    return lootboxTeam_names[tier%lootboxTeam_names.length];
  }
}

function createGenerator(tier, type) {
  let col = getColumn(type)

  const g = {
    name: generateGeneratorName(tier, type),
    cost: Math.pow(10, tier * (col + 1)),
    mult: 1,
    amount: 0,
    bought: 0,
    tier: tier
  }

  return new Generator(g)
}