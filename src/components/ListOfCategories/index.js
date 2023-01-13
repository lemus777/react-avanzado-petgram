import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
import db from '../../../api/db.json'

export const ListOfCategories = () => {
  // const [categories, setCategories] = useState(db)
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () { // onScroll comprueba si se da un determinado scroll en Y. Si el estado fixed es diferente a newFixed cambia el estado
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll) // Este evento es el que comprueba cada vez que se hace scroll que se ejecute la funcion

    return () => document.removeEventListener('scroll', onScroll) // esto limpia el efecto cada vez que se ejecuta
  }, [showFixed]) // este efecto depende de showFixed porque queremos que se ejecute cada vez que ese estado cambie

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        db.categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

// así sería si funcionara la API

/* import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
} */
