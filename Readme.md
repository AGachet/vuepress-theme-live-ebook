# vuepress-theme-live-ebook

This repository contains theme for [Vuepress](https://vuepress.vuejs.org), made specifically for creating live ebooks, like this one with ease: [https://design-process.netguru.co](https://design-process.netguru.co)

> It's compatible with `vuepress 0.x`.

## Usage

1. Create new vuepress project.

2. Install theme:
```sh
yarn add vuepress-theme-live-ebook
```

3. Install required peer dependencies:
```sh
yarn add vue-svg-loader
```

4. Create config `.vuepress/config.js`, here's the example one:
```js
// .vuepress/config.js
module.exports = {
  title: 'Design Process by Netguru', // Page title
  description: 'Live E-Book with useful informations about Design Process',
  theme: 'live-ebook', // Important! This is the name of this theme
  redirectToFirstSection: false, // Important! Control if `/` should redirect to 1st chapter or not
  base: '/', // Base URL, leave as is if you don't serve the book from a folder
  contactUrl: '/', // Url on which user will be redirected after click on contact
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  ga: 'UA-259047-66', // Google Analytics ID
  themeConfig: {
    bookTitle: 'Design Process for pros', // Book title
    baseUrl: 'https://design-process.netguru.co', // Used for sharing in social media and for meta tags
    exitUrl: 'https://www.netguru.co/design-process',
    company: {
      name: 'Netguru',
      url: 'https://www.netguru.co',
      logo: '/images/netguru.svg'
      logoMobile: '/images/netguru_letter.svg',
      copyRights: '© 2019 Copyrights by Netguru. All rights reserved.'
    },
    socials: {
      facebook: 'netguru',
      twitter: 'netguru',
      dribbble: 'netguru',
      behance: 'netguru',
    },
    bodyScripts: [ // Allows to pass additional scripts at the end of body
      {
        tagName: 'script', // required
        attributes: { id: 'some-analytics', async: true, defer: true, src: '//some-analytics.js' } // required
      },
      {
        tagName: 'noscript', // required
        attributes: {}, // required (can be empty)
        innerHTML: '<h1>Any content</h1>' // optional
      }
    ],
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

5. Create `index.md` file with the following content:

```
---
layout: home
---
```
Everything that goes under will be displayed on home page. You may add any content, use [existing sections](#LandingHeader) designed for a landing page or create your own within the project. Out of the box, you will see rendered header and footer.

Example of home layout code
```html
---
layout: home
---
<LandingChapters
  intro="Short intro text"
  img="image.svg"
  imgAlt="image is displayed under intro text"
/>
<h1>Your own tag</h1>
...
```
Important! If you don't need landing page, set `redirectToFirstSection` property in `config.js` to true.

> Alternatively you can also fork one of our E-Books, e.g. [PM Book](https://github.com/netgurupm-ebook) and tweak it to your liking.

### Example e-book file tree:

```
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
├── index.md <-- home page (required, although when you set redirectToFirstSection to true, it's there only to redirect users to 1st chapter) 
└── package.json
```

### Chapter format

Each chapter file has to start with the following [Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html):
```
---
layout: chapter
title: "Example title of Chapter 2"
chapter_number: "02"
description: In this chapter you will ...
---

# Example title of Chapter 2

Chapter content goes here.
```

- Fields: `layout`, `title` and `chapter_number` are required.
- `description` field is optional, if present - it will be places in proper meta tags on the page. Defaults to the description from `.vuepress/config.js`
- Make sure that `title` in front matter corresponds to the primary heading - as in the above example.
- Use only one H1 heading (`# ...`).

See [example chapter](https://raw.githubusercontent.com/netguru/design-process/master/chapters/01-project-introduction-and-setup.md) for reference.


### Landing page example
```
---
layout: home
---

<LandingHeader
  title="Some title to be render"
  subtitle="Short subtitle"
  intro="Any text e.g. Learn new things about your design process."
  tag="Version 1.0"
  :imgDesktop="{
    img: 'banner-desktop.png',
    img2x: '',
    imgAlt: '',
  }"
  :imgMobile="{
    img: 'banner-mobile.png',
    img2x: '',
    imgAlt: '',
  }"
/>

<LandingChapters
  intro="Short intro text"
  img="image.svg"
  imgAlt="image is displayed under intro text"
/>

...
```

## Available components

### BaseImage

If you need to use an image, place it in folder `.vuepress/public/images`. You can
then use it using the `<BaseImage />` component, e.g.:

```html
<BaseImage img="sample.png" img2x="sample@2x.png" alt="Sample image" />
```

The `img2x` property is optional. If you want you can also use regular markdown image syntax.

### BaseQuote

You can insert quotes by using following syntax:

```html
<BaseQuote
  text="Quote text goes here"
  author="Quote author goes here"
/>
```

This will produce a following quote:
![BaseQuote](docs-assets/base-quote.png?raw=true)

### BaseQA

You can insert Q&A sections by using following syntax:
```html
<BaseQA
  question="Why do you want to know the business model?"
  answer="This will allow us some amount of lorem ipsum dolor sit amet conscetur blah blah"
/>
```
This will produce a following outcome:
![BaseQA](docs-assets/base-qa.png?raw=true)

### BaseComparison

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

### LandingHeader

Section is designed to be used on the home page. You can start `index.md` with this section.

```html
<LandingHeader
  title="Some title to be render"
  subtitle="Short subtitle"
  intro="Any text e.g. Learn new things about your design process."
  tag="Version 1.0"
  :imgDesktop="{
    img: 'banner-desktop.png',
    img2x: '',
    imgAlt: '',
  }"
  :imgMobile="{
    img: 'banner-mobile.png',
    img2x: '',
    imgAlt: '',
  }"
/>
```

The `imgMobile` property is optional. If not passed, on mobile version, first image will be used.
Also, the `img2x` property is optional.

This will produce a following outcome:
![BaseComparison](docs-assets/landing-header.png?raw=true)

### LandingChapters

Section will display first three chapters with sections.

```html
<LandingChapters
  intro="Short intro text"
  img="image.svg"
  imgAlt="image is displayed under intro text"
/>
```

The `intro` and image related properties are optional.

This will produce a following outcome:
![BaseComparison](docs-assets/landing-chapters.png?raw=true)

### LandingRecommendations

Section is designed to display three testimonial/recommendation blocks. Passing less than three won't break the layout though.

```html
<LandingRecommendations
  title="Recommendations"
  subtitle="users"
  intro="Learn new things about your design process."
  :recommendations="[
    {
      name: 'Grzegorz',
      position: 'Some Text',
      recommendation: 'Proin ut condimentum augue, in dignissim orci. Praesent vulputate venenatis.',
      photo: 'test.jpg'
    },
    {
      name: 'Some Grzegorz',
      position: 'Can Be Position',
      recommendation: 'Proin ut condimentum augue, in dignissim orci. Praesent vulputate venenatis.',
      photo: 'test.jpg'
    },
    {
      name: 'Any Name',
      position: 'Frontend Developer',
      recommendation: 'Proin ut condimentum augue, in dignissim orci. Praesent vulputate venenatis.',
      photo: 'test.jpg'
    }
  ]"
  :images="[
    {
      img: 'calendar.svg',
      imgAlt: 'Calendar Ilustaration',
    },
    {
      img: 'desk.svg',
      imgAlt: 'Desk Ilustaration',
    },
  ]"
/>
```

The `images` property is optional. No image will be displayed if empty. You are also good to go to pass only one. Properties `name, position, recommendation, photo` are required.

This will produce a following outcome:
![BaseComparison](docs-assets/landing-recommendations.png?raw=true)

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
