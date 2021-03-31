import axios from 'axios'
import { getIdList, transformDataForPlanet } from '../utils/funcPlanet'
export const UPDATE_PLANETLIST = 'UPDATE_PLANETLIST'

export const updatePlanetList = planetList => ({
  type: UPDATE_PLANETLIST,
  payload: planetList
})

export const getPlanetList = () => dispatch => {
  getIdList().forEach(id => {
    axios({
      method: 'GET',
      url: `https://swapi.dev/api/planets/${id}`
    })
      .then(res => {
        const planet = transformDataForPlanet(id, res.data)
        dispatch(updatePlanetList(planet))
      })
      .catch(err => {
        console.log(err)
      })
  })
}
