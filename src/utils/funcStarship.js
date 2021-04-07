import { starships } from '../resources/data/dataStarships'

export const getIdList = () => {
  const idList = []
  starships.map(ship => {
    idList.push(ship.id)
  })
  return idList
}

export const getRebelShips = () => {
  const rebels = []
  starships.map(ship => {
    if (ship.faction === 'Rebel') {
      rebels.push(ship.id)
    }
  })
  return rebels
}

export const getEmpireShips = () => {
  const rebels = []
  starships.map(ship => {
    if (ship.faction === 'Empire') {
      rebels.push(ship.id)
    }
  })
  return rebels
}

export const transformDataForStarship = (id, data) => {
  const tmp = starships.filter(p => p.id === id)
  const starship = tmp[0]
  return {
    ...starship,
    name: data.name,
    cost: data.cost_in_credits,
    maxCapacity: Math.max(150, data.crew),
    model: data.model
  }
}
