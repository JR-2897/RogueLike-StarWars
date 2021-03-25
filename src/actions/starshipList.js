import {getEmpireShips, getIdList, getRebelShips, transformDataForStarship} from '../utils/funcStarship'

export const UPDATE_STARSHIPLIST = 'UPDATE_STARSHIPLIST'

export const updateStarshipList = (starshipList) => ({
  type: UPDATE_STARSHIPLIST,
  payload: starshipList
})

export const getStarshipList = (faction) => dispatch => {
  let list = faction === 'Rebel'? getRebelShips() : getEmpireShips() 
  list.forEach(id => {
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