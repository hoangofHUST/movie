import { computed } from '@nuxtjs/composition-api'

const useAuth = () => {
  // const context = useContext()
  // const auth = context.$auth

  const loggedIn = computed(() => false)

  return { loggedIn }
}

export default useAuth
