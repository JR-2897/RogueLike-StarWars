import axios from 'axios'
import {getIdList, transformDataForPlanete} from '../utils/funcPlanete'
export const UPDATE_PLANETELIST= 'UPDATE_PLANETELIST'

export const updatePlaneteList = (planeteList) =>({
  type: UPDATE_PLANETELIST,
  payload: planeteList
})

export const getPlaneteList = (dispatch) =>{
  let list = [] 
  getIdList().forEach(id => {
    axios({
      method: 'GET',
      url: `https://swapi.dev/api/planets/{id}`
      })
      .then(res => {
        console.log(`resource : {res}`)
        const planete = transformDataForPlanete(id,res)
        console.log(`transform : {planete}`)
        list.push(planete)
      }).catch(err => {
        console.log(err)
      })
  })
  dispatch(updatePlaneteList(list))
}