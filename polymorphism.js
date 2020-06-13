class Play {
  constructor(args={}) {
    let collaborators = []
    collaborators.push(args.collaborator.includes('ATTACK') && new Attack)
    collaborators.push(args.collaborator.includes('ATTACK MONSTER') && new AttackMonster)
    this.button = args.button || console.log("no button here")
    this.play(args.collaborators)  
    Object.freeze(this)
  }

  play(collaborators)  { 
    console.log(collaborators)
    collaborators.forEach( collaborator => console.log( collaborator.attack(this) ) )   
  }
}

class Attack {
  attack(arg) { console.log(arg.button + 'fish')  }
}

class StrongAttack {
  attack(arg) { console.log(arg.button + 'chips')  }
}

const playerFactory = {
  play(){
    new Play()
  }
}

function PlayerFactory(){}
PlayerFactory.play = function() {
  const text = this.textContent
  new Play({
    button: this.textContent,
    collaborators: [text.includes("ATTACK") ? new Attack : new StrongAttack]
  })
}

