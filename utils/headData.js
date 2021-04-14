import config from '../config'

export const canonical = (_path = []) => {
  return [
    {
      rel: 'canonical',
      href: config.app.url + _path,
    },
  ]
}

export const facebook = (_path = []) => {
  return [
    {
      hid: 'og:title',
      property: 'og:title',
      content: config.app.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: config.app.description,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: config.app.type,
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: config.app.title,
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: config.app.locale,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: config.app.url + _path,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: config.app.url + require('images/social/fb.jpg'),
    },
  ]
}

export const twitter = () => {
  return [
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: config.app.title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: config.app.description,
    },
    {
      hid: 'twitter:image:src',
      name: 'twitter:image:src',
      content: config.app.url + require('images/social/tw.jpg'),
    },
  ]
}

export const appLdJson = (_path = []) => {
  return [
    {
      hid: 'application/ld+json',
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': config.app.type,
        name: config.app.name,
        url: config.app.url + _path,
        sameAs: [
          'https://www.facebook.com/',
          'https://www.instagram.com/',
          'https://www.twitter.com/',
        ],
      },
    },
  ]
}
