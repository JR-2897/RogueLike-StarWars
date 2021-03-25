import {getEmpireShips, getRebelShips, transformDataForStarship} from '../utils/funcStarship'
import axios from 'axios'

export const UPDATE_STARSHIPLIST = 'UPDATE_STARSHIPLIST'

export const updateStarshipList = (starshipList) => ({
  type: UPDATE_STARSHIPLIST,
  payload: starshipList
})

export const getStarshipList = (faction) => dispatch => {
  const listShip = faction === 'Rebel'? getRebelShips() : getEmpireShips()
  let list = [] 
  listShip.forEach(id => {
    axios({
      method: 'GET',
      url: `https://swapi.dev/api/starships/{id}`
      })
      .then(res => {
        console.log(`resource : {res}`)
        const starship = transformDataForStarship(id,res)
        console.log(`transform : {starship}`)
        list.push(starship)
      }).catch(err => {
        console.log(err)
      })
  })
  dispatch(updateStarshipList(list))
}