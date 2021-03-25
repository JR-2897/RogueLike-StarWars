import {planets} from '../resources/data/dataPlanets'

export const getIdList = () => {
  const idList = []
  planets.map(ship => {
    idList.push(ship.id)
  })
  return idList
}

export const transformDataForPlanet = (id,data) => {
  const planet = planets.filter( p => p.id === id )
  return {...planet, garrison: data.population / 100, class: getClass(data.population) } 
}


export const getClass = (nb)=>{
  let i = 1
  while(i){
    if(nb<Math.pow(10,i))
    {
      return i
    }
    i++;
  }
}