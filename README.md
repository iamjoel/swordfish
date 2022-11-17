# Swordfish
An admin template build with [Vue3](https://vuejs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [vue-router](https://router.vuejs.org/), [Pinia](https://pinia.vuejs.org/) and [arco.design](https://arco.design/vue/docs/start).

## Feature
* [x] Route.
* [x] Layout. Top bar, breadcrumb, Configurable Menu and main content.
* [ ] Permission. Page permission and function permission.
* [x] Mock api.
* [ ] Ii8n.
* [ ] Common pages.
  * [x] List page. Include create, edit and show detail.
  * [ ] Dashboard.
  * [x] Login page.
  * [x] Register page.
  * [x] Forget password page.
  * [ ] 404 page.
* [x] Lint and prettier code.
  
Inspired by [Arco Design Pro](https://github.com/arco-design/arco-design-pro-vue)

## Project folder structure
* docs. Docs.
* src
  * api. Http API.
  * assets. Common assets, for instance: css, images.
  * components.
  * config.
  * define. Typescript define.
  * hooks.
  * layout.
  * local. I18n.
  * mock. Mock http API.
  * router.
  * store.
  * utils.
  * views.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

Notice: Node version: v16+.

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


## Docs
* [Docs](./docs/README.md)