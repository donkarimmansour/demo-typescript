const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    // webpack: (config, context) => {
    //   // Enable polling based on env variable being set
    //  // if(process.env.NEXT_WEBPACK_USEPOLLING) {
    //     config.watchOptions = {
    //       poll: 500,
    //       aggregateTimeout: 300
    //     }
    // //  }
    //   return config
    // },


    experimental: {
        typedRoutes: true,

        turbotrace: {
            logLevel:"info",
            logDetail: true,
            logAll: true
          },
    },


      async redirects() {
        return [
          {
            source: '/home',
            destination: '/',
            permanent: true,
          },
        ]
      },




}
  
module.exports = nextConfig