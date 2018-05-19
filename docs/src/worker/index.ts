/* eslint-disable no-console */

import { register } from 'register-service-worker'
import banner from './banner'

export function registerServiceWorker() {
  if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
      ready () {
        banner()
      },
      cached () {
        console.log('Content has been cached for offline use.')
      },
      updated () {
        console.log('New content is available; please refresh.')
      },
      offline () {
        console.log(
          'No internet connection found. App is running in offline mode.'
        )
      },
      error (error: Error) {
        console.error('Error during service worker registration:', error)
      }
    })
  }
}
