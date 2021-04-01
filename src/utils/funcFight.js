import { incPlanets, updateCrew } from '../actions/profile'
import r from './random'

const kill = (units, unitsToKill) => {
  if (unitsToKill > units) {
    return 0
  } else {
    return units - unitsToKill
  }
}

export const calcfight = (playerTroops, enemyTroops) => {
  console.log(
    `Start : attacking troups : ${playerTroops}\tdefending troups : ${enemyTroops}`
  )
  const pctg = 20
  let i = 0,
    unitsToDie
  while (playerTroops > 0 && enemyTroops > 0) {
    unitsToDie = Math.ceil(
      Math.min(playerTroops, enemyTroops) * ((pctg + i) / 100)
    )
    let randAtk = r(5),
      randDef = r(5)
    if (randAtk >= randDef) {
      enemyTroops = kill(enemyTroops, unitsToDie)
    } else {
      playerTroops = kill(playerTroops, unitsToDie)
    }
    i++
    // AFFICHAGE TEST
    if (i % 5 === 0 || i === 0) {
      console.log(
        `Tour ${i}\nAttacking : ${playerTroops}\t|\tDefending : ${enemyTroops}`
      )
    }
  }
  // Voir quoi return (objet avec valeurs des deux ? / booleen victoire)
  if (playerTroops > 0) {
    console.log(`victoire`)
  } else {
    console.log(`défaite`)
  }
  return playerTroops
}

export const fight = (profile, currentPlanet, dispatch, setHasLost) => {
  var enemy = currentPlanet.garrison
  var initTroops = profile.profile.crewNb
  var remainingTroops = fight(initTroops, enemy)
  if (remainingTroops === 0) {
    setHasLost(true)
  } else {
    dispatch(incPlanets())
  }
  dispatch(updateCrew(remainingTroops))
}
