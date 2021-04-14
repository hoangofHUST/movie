import { ref } from '@nuxtjs/composition-api'
import { useStorage } from '@vueuse/core'

import locationsDefault from '@/utils/locations'
const locationDefault = 1 // Ho Chi Minh

const useLocation = () => {
  const locations = ref(locationsDefault)
  const location = useStorage('location', locationDefault)

  return { locations, location }
}

export default useLocation
