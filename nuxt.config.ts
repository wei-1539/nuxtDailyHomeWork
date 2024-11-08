// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components:{
    dirs : [
      {
        path: '~/components/global',
        global:true,
      },
    ]
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css:[
    '@/assets/stylesheets/all.scss'
  ]
})
