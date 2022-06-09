const CALLBACK_NAME = 'gmapsCallback'

let initialized = !!window.google
let resolveInitPromise
let rejectInitPromise
// This promise handles the initialization
// status of the google maps script.
const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve
  rejectInitPromise = reject
})

const init = ({ apiKey }) => {
  // If Google Maps already is initialized
  // the `initPromise` should get resolved
  // eventually.
  if (initialized) return initPromise

  initialized = true
  // The callback function is called by
  // the Google Maps script if it is
  // successfully loaded.
  window[CALLBACK_NAME] = () => resolveInitPromise(window.google)

  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${CALLBACK_NAME}`
  script.onerror = rejectInitPromise
  document.querySelector('head').appendChild(script)

  return initPromise
}

export default ({ $config }, inject) => {
  const apiKey =
    $config.googleMapsApiKey || 'AIzaSyD67ePlRX2Kmto-31Iu1c_XqmSKx66oOH4'

  inject('googleMaps', {
    loadApi() {
      return init({ apiKey })
    }
  })
}
