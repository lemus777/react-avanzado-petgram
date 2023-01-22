import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => { // esta funcion declara el estado inicial
    try {
      const item = window.localStorage.getItem(key) // intenta obtener key del localStorage y guardarla como item
      return item !== null ? JSON.parse(item) : initialValue // si hay algo guardado item no es null y lo parsea (porque será una string). Si no existe retorna el initialValue
    } catch (e) {
      return initialValue // si da algun error también retorna el inicialValue (recordar que está declarado como un parámetro de la función)
    }
  })

  const setLocalStorage = value => { // para actualizar el localStorage
    try {
      window.localStorage.setItem(key, JSON.stringify(value)) // le damos de parámetros key y el string de value
      setValue(value) // va a actualizar el valor con value
    } catch (e) {
      console.error(e)
    }
  }
  return [storedValue, setLocalStorage] // necesita retornar dos cosas: el valor guardado y un actualizador del valor
}
