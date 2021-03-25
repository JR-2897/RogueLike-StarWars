import {starships} from '../resources/data/dataStarships'

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

export const transformDataForStarship = (id,data) => {
  const starship = starships.filter( p => p.id === id )
  return {...starship, cost: data.cost_in_credits, maxCapacity: data.crew, model: data.model } 
}