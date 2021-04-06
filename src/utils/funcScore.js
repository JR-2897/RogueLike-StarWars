import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
export const getScoreList = setScoreList => {
  let tab = JSON.parse(localStorage.getItem('scoreList'))
  if (tab == null) {
    //Test, à supprimer à la fin du dev et mettre tab = []
    tab = [
      {
        id: 1,
        admiral: 'Albator',
        nameStarship: 'W-Victory',
        credit: 9999999999999,
        visitedPlanet: 50
      }
    ]
  }
  setScoreList(tab)
}

export const addNewScore = (admiral, nameStarship, credit, visitedPlanets) => {
  let isAlreadyAdd = localStorage.getItem('isAlreadyAdd')
  if (!isAlreadyAdd) {
    let tmp = localStorage.getItem('scoreList')
    if (tmp) {
      tmp = JSON.parse(tmp)
    } else {
      tmp = []
    }
    let playerScore = {
      id: uuidv4(),
      admiral: admiral,
      nameStarship: nameStarship,
      credit: credit,
      visitedPlanets: visitedPlanets
    }
    tmp.push(playerScore)
    let tab = _.sortBy(tmp, [
      o => {
        return o.score
      }
    ])
    localStorage.setItem(`scoreList`, JSON.stringify(tab))
    localStorage.setItem('isAlreadyAdd', true)
  }
}
