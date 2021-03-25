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
            jour
          </ChangeDayNightMode>
          <ChangeDayNightMode onClick={() => dispatch(updateTheme(dark_theme))}>
            nuit
          </ChangeDayNightMode>
        </DivChangeDayNightMode>
      </NavBar>
    </HeaderBalise>
  )
}

const HeaderBalise = styled.header``
const NavBar = styled.nav``
const DivChangeLanguage = styled.div``
const ChangeLanguage = styled.button``
const DivTitleWebSite = styled.div``
const TitleWebSite = styled.h1``
const DivChangeDayNightMode = styled.div``
const ChangeDayNightMode = styled.button``

export default Header
