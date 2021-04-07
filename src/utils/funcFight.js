import { updateProfile } from '../actions/profile'
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
  if (playerTroops > 0) {
    console.log(`victoire`)
  } else {
    console.log(`défaite`)
  }
  return playerTroops
}

export const fight = (profile, currentPlanet, dispatch, setHasLost) => {
  console.log('profil dans fight', profile)
  var enemy = currentPlanet.garrison
  var initTroops = profile.crew
  var remainingTroops = calcfight(initTroops, enemy)
  var credits = 0
  var nbPl = profile.visitedPlanets

  if (remainingTroops === 0) {
    setHasLost(true)
  } else {
    nbPl = nbPl + 1
    credits = Math.ceil((Math.random() + 0.5) * 10 * initTroops)
  }

  dispatch(
    updateProfile({
      ...profile,
      crew: remainingTroops,
      credit: profile.credit + credits,
      visitedPlanets: nbPl
    })
  )
}
