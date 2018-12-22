# vuepress-theme-live-ebook

This repository contains theme for [Vuepress](https://vuepress.vuejs.org), made specifically for creating live ebooks, like this one with ease: [https://design-process.netguru.co/chapters/01-project-introduction-and-setup.html](https://design-process.netguru.co)

> It's compatible with `vuepress 0.x`.

## Usage

1. Install theme:
```sh
yarn add vuepress-theme-live-ebook
```

2. Install required peer dependencies:
```sh
yarn add vue-svg-loader
```

3. Create config `.vuepress/config.js`, here's the example one:
```js
module.exports = {
  title: 'Design Process For Pros',
  theme: 'live-ebook',
  themeConfig: {
    baseUrl: 'https://design-process.netguru.co',
    exitUrl: 'https://www.netguru.co/design-process',
    company: {
      name: 'Netguru',
      url: 'https://www.netguru.co',
      logo: '/images/netguru.svg'
    },
    twitter: 'netguru',
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
}
```

## Customization

In order to customize basic informations, update `themeConfig` properties in  `.vuepress/config.js`.

You can also override [styles/variables.stylus](default stylus variables), in order to do so create `.vuepress/override.styl` and override them there. Recommended variables to override:
```
$ff-base = Helvetica
$ff-serif = Georgia, sans-serif
$c-primary = #ff9a57
```

> Do NOT put regular CSS inside `override.styl` - it's only for overriding variables.

If you want to add custom CSS, create `.vuepress/style.styl`.
