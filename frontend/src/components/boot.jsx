import React from 'react'
import { MediaContextProvider } from './mediaStyles'

export const Boot = ({ element }) => {
  return <MediaContextProvider>{element}</MediaContextProvider>
}
