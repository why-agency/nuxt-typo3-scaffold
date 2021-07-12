# Nuxt Typo3 Starter Kit
This repository is a scaffold for headless CMS projects using Nuxt and Typo3. It comes with a set of packages that are widely used across our projects, e.g.:

* TailwindCSS
* GSAP
* Nuxt Typo3 Module
* GTM
* Axios

## Build Setup

Create a .env file for local development
```bash
$ cp .env.example .env
```

Specify the Typo3 endpoint in .env
```
TYPO3_API=https://api.cms.de
```

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org)


