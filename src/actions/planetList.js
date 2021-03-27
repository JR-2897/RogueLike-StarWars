import axios from 'axios'
import { getIdList, transformDataForPlanet } from '../utils/funcPlanet'
export const UPDATE_PLANETLIST = 'UPDATE_PLANETLIST'

export const updatePlanetList = planetList => ({
  type: UPDATE_PLANETLIST,
  payload: planetList
})

export const getPlanetList = () => dispatch => {
  let list = []
  getIdList().forEach(id => {
    axios({
      method: 'GET',
      url: `https://swapi.dev/api/planets/${id}`
    })
      .then(res => {
        const planet = transformDataForPlanet(id, res.data)
        list.push(planet)
      })
      .catch(err => {
        console.log(err)
      })
  })
  console.log(list)
  dispatch(updatePlanetList(list))
}
