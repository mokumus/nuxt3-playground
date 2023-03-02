import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // your config will come here
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
