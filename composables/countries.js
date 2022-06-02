import { ref, onMounted } from '@nuxtjs/composition-api'

const countriesWithoutFilter = ['.pl', '.cz']

export function useCountryPage() {
  const currentCountry = ref('')
  const isCountryWithoutFilter = ref(false)
  onMounted(() => {
    currentCountry.value = window.location.hostname.split('.')[1]
    isCountryWithoutFilter.value = countriesWithoutFilter.some(countryCode =>
      window.location.hostname.includes(countryCode)
    )
  })

  return { isCountryWithoutFilter, currentCountry }
}
