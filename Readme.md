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

### Example e-book file tree:

your-ebook
├── .vuepress
│   ├── public <-- publically available files
│   │   ├── fonts
│   │   └── images
│   ├── config.js <-- configuration file, example content posted above
│   ├── override.styl  <-- use this to override default stylus variables
│   └── style.styl <-- put your own CSS here
├── chapters <-- actual e-book content here
│   ├── 01-lorem-ipsum.md
│   ├── 02-dolor-sit.md
│   └── 03-amet-consectetur.md
└── package.json

### Chapter format

Each chapter file has to start with the following [Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html):
```
---
layout: chapter
title: "Example title of Chapter 2"
chapter_number: "02"
---

# Example title of Chapter 2

Chapter content goes here.
```

- All fields: `layout`, `title` and `chapter_number` are required.
- Make sure that `title` in front matter corresponds to the primary heading - as in the above example.
- Use only one H1 heading (`# ...`).

See [example chapter](https://raw.githubusercontent.com/netguru/design-process/vuepress/chapters/01-project-introduction-and-setup.md) for reference.

### Available components

1. `BaseImage`

If you need to use an image, place it in folder `.vuepress/public/images`. You can
then use it using the `<BaseImage />` component, e.g.:

```html
<BaseImage img="sample.png" img2x="sample@2x.png" alt="Sample image" />
```

The `img2x` property is optional. If you want you can also use regular markdown image syntax.

2. `BaseQuote`

You can insert quotes by using following syntax:

```html
<BaseQuote
  text="Quote text goes here"
  author="Quote author goes here"
/>
```

This will produce a following quote:
![BaseQuote](docs-assets/base-quote.png?raw=true)

3. `BaseQA`

You can insert Q&A sections by using following syntax:
```html
<BaseQA
  question="Why do you want to know the business model?"
  answer="This will allow us some amount of lorem ipsum dolor sit amet conscetur blah blah"
/>
```
This will produce a following outcome:
![BaseQA](docs-assets/base-qa.png?raw=true)

4. `BaseComparison`

You can insert DOs and DONT's sections by using following syntax:

```html
<BaseComparison
  intro="There are a couple of things we need to cover:"
  :good="[
    'Create your wireframes based on a muted color pallete',
    'Use color only if it helps defining the idea behind the design',
  ]"
  :bad="[
    'Don't use color in your wireframe designs unless it has a solid purpose',
    'Don't use various tints of grey',
  ]"
/>
```

This will produce a following outcome:
![BaseComparison](docs-assets/base-comparison.png?raw=true)

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
