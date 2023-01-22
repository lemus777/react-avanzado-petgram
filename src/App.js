import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards' // si funcionara vercel no se usa esta
// import { ListOfPhotoCards } from './container/ListOfPhotoCards' si funcionara vercel
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </div>
)
