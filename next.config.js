module.exports = {
    images: {
      domains: ['i0.wp.com', 'i1.wp.com', 'i2.wp.com','animesama.net'],
    },
    serverRuntimeConfig: {
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      staticFolder: '/static',
    },
  };