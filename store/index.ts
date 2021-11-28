import { transformArray } from '~/logic/dataTransformer/capitals'

export const state = () => ({
  capitals: [],
  images: transformArray([
    '/0.jpg',
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/11.jpg'
  ])
})

export const mutations = {
  setCapitals(state: any, value: any) {
    if (!state.capitals.length) {
      state.capitals = value
    }
  },
  setImages(state: any, value: any) {
    if (!state.images.length) {
      state.images = value
    }
  },
}
export const getters = {
  getCapitals(state: any){
    return state.capitals
  },
  getImages(state: any){
    return state.images
  }
}
