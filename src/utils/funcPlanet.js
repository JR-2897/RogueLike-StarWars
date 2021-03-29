import { planets } from '../resources/data/dataPlanets'

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
    garrison:
      data.population === 'unknown'
        ? 100
        : data.population < 100
        ? 100
        : getGarrison(data.population)
  }
  return planetObject
}

const getGarrison = pop => {
  return pop * (100 - 5 * getClass(pop))
}

export const getClass = nb => {
  let i = 1
  while (nb > Math.pow(10, i)) {
    i++
  }
  return i
}
