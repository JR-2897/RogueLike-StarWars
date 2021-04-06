import { planets } from '../resources/data/dataPlanets'
import r from './random'

export const getIdList = () => {
  const idList = []
  planets.map(ship => {
    idList.push(ship.id)
  })
  return idList
}

export const transformDataForPlanet = (id, data) => {
  const tmp = planets.filter(p => p.id == id)
  const planet = tmp[0]

  const planetObject = {
    ...planet,
    class: getClass(data.population),
    garrison: data.population === 'unknown' ? 150 : getGarrison(data.population)
  }
  return planetObject
}

const getGarrison = (pop, gar = 0, classe = 0) => {
  var temp = Math.min(pop, Math.pow(7, classe + 1))

  if (classe <= 1) {
    if (pop < 150) {
      return 150
    }
    temp = Math.min(pop, 200)
  }

  pop -= temp
  gar += temp * Math.pow(0.7, classe)
  if (pop === 0) {
    return Math.ceil(gar)
  }
  return getGarrison(pop, gar, classe + 1)
}

const getClass = (pop, classe = 0) => {
  var temp = Math.min(pop, Math.pow(7, classe + 1))

  if (classe <= 1) {
    temp = Math.min(pop, 200)
  }

  pop -= temp
  if (pop === 0) {
    return classe + 1
  }
  return getClass(pop, classe + 1)
}

const chosePlanet = (list, profileState) => {
  var p = list[r(list.length - 1)]
  if (!p) {
    return {
      name: 'Aleen Minor',
      img:
        'https://static.wikia.nocookie.net/starwars/images/f/f6/Aleen_NEGAS.jpg',
      faction: 'Rebel',
      garrison: 100,
      class: 1
    }
  } else if (p.class > Math.max(3 * profileState.visitedPlanets, 4)) {
    list.splice(list.indexOf(p), 1)
    // eslint-disable-next-line no-unused-vars
    return chosePlanet(list)
  } else return p
}
