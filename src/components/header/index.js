import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { updateTheme } from '../../actions/theme'
import { dark_theme, light_theme } from '../../configs/theme'

const Header = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  return (
    <HeaderBalise>
      <NavBar>
        <DivChangeLanguage>
          <ChangeLanguage onClick={() => i18n.changeLanguage('fr')}>
            fr
          </ChangeLanguage>
          <ChangeLanguage onClick={() => i18n.changeLanguage('en')}>
            en
          </ChangeLanguage>
        </DivChangeLanguage>
        <DivTitleWebSite>
          <TitleWebSite>{t('StarWars')}</TitleWebSite>
        </DivTitleWebSite>
        <DivChangeDayNightMode>
          <ChangeDayNightMode
            onClick={() => dispatch(updateTheme(light_theme))}
          >
            {t('DayButton')}
          </ChangeDayNightMode>
          <ChangeDayNightMode onClick={() => dispatch(updateTheme(dark_theme))}>
            {t('NightButton')}
          </ChangeDayNightMode>
        </DivChangeDayNightMode>
      </NavBar>
    </HeaderBalise>
  )
}

const HeaderBalise = styled.header``
const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const DivChangeLanguage = styled.div`
  margin: 2px 20px;
`
const ChangeLanguage = styled.button`
  margin: 5px 0px;
  border: ${props => props.theme.border} solid 1px;
  padding: 5px 10px;
  margin: 0px 5px;
  border-radius: 15px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`
const DivTitleWebSite = styled.div`
  flex: 1;
`
const TitleWebSite = styled.h1``
const DivChangeDayNightMode = styled.div`
  margin: 2px 20px;
`
const ChangeDayNightMode = styled.button`
  margin: 5px 0px;
  border: ${props => props.theme.border} solid 1px;
  padding: 5px 10px;
  margin: 0px 5px;
  border-radius: 15px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`

export default Header
