import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar { // esto oculta las lineas de scroll chungas
    display: none;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
