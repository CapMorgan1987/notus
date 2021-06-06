import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Slider from '../views/Slider.vue'
import Map from '../views/Map.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  }
]

