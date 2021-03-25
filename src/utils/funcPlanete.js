import {planetes} from '../resources/data/dataPlanets'

export const getIdList = () => {
  const idList = []
  planetes.map(ship => {
    idList.push(ship.id)
  })
  return idList
}

export const transformDataForPlanete = (id,data) => {
  const planete = planetes.filter( p => p.id === id )
  return {...planete, garrison: data.population / 100, class: getClass(data.population) } 
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