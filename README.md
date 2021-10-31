<p align="center"><img src="https://i.imgur.com/OETMeDC.png" width="200"></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-cirrus"><img src="https://badge.fury.io/js/vue-cirrus.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/FlorianWoelki/vue-cirrus.svg"></a>
  <a href="https://www.npmjs.com/package/vue-cirrus"><img src="https://img.shields.io/npm/dt/vue-cirrus.svg"></a>
  <a href="https://www.npmjs.com/package/vue-cirrus"><img src="https://img.shields.io/npm/dm/vue-cirrus.svg"></a>
</p>

## 🧐 Introduction

Vue-Cirrus is a component framework for Vue. The goal of Vue-Cirrus is to provide clean readable and reusable components that make building your application easier.

You can build your amazing applications with the Power of Vue, Cirrus and a massive library of beautifully crafted components and features.

This framework uses the <a href="https://github.com/Spiderpig86/Cirrus">Cirrus CSS framework</a> for better styling and it is an adaption of vue components.

The UI library only supports Vue 3. For Vue 2, please use an older version of Vue Cirrus.

## 🔨 Quick Install

1. Install with npm/yarn

```shell
npm install vue-cirrus@latest
# OR
yarn add vue-cirrus@latest
```

2. Include the following in your public.html file

```html
<link href="https://unpkg.com/cirrus-ui" type="text/css" rel="stylesheet" />
```

3a. Import all Vue-Cirrus components by doing:

```javascript
import VueCirrus from 'vue-cirrus';
import 'vue-cirrus/dist/vue-cirrus.css';

createApp(App).use(VueCirrus).mount('#app');
```

3b. Or simply import single components of Vue-Cirrus by doing:

```javascript
import { VNavbar } from 'vue-cirrus';
import 'vue-cirrus/dist/vue-cirrus.css';

createApp(App).use(VNavbar).mount('#app');
```

4. Test, if it works by including the following in a vue file

```html
<v-btn animated animation="loadingLeft">Button Test</v-btn>
```

## 🔮 Framework Components
- [Avatars](https://florianwoelki.github.io/vue-cirrus/#/components/Avatars)
  - Avatars are simple small images for easy displaying pictures of users
- [Badges](https://florianwoelki.github.io/vue-cirrus/#/components/Badges)
  - Badges are there for easily displaying numbers above a text or displaying info cards above some components
- [Buttons](https://florianwoelki.github.io/vue-cirrus/#/components/Buttons)
  - Simple buttons, no explanation needed
- [Cards](https://florianwoelki.github.io/vue-cirrus/#/components/Cards)
  - Simply create some good looking cards with some special effects, if needed
- [Code](https://florianwoelki.github.io/vue-cirrus/#/components/Code)
  - Display your code on your website to demonstrate your framework or library
- [Columns](https://florianwoelki.github.io/vue-cirrus/#/components/Columns)
  - A easy to use and simple 12 grid system
- [Dividers](https://florianwoelki.github.io/vue-cirrus/#/components/Dividers)
  - Divide your content for better structure
- [Dropdown](https://florianwoelki.github.io/vue-cirrus/#/components/Dropdown)
  - Create dropdown menus for structuring your menu points
- [Footer](https://florianwoelki.github.io/vue-cirrus/#/components/Footer)
  - Create an easy footer for displaying your company information or other useful things
- [Forms(SearchBar, DatePicker, Text)](https://florianwoelki.github.io/vue-cirrus/#/components/Forms)
  - Easily create a login form with these components or simply a search bar
- [Frames](https://florianwoelki.github.io/vue-cirrus/#/components/Frames)
  - Simply generate a profile frame for easily displaying information
- [Grid](https://florianwoelki.github.io/vue-cirrus/#/components/Grids)
  - A modern component for using the modern CSS grid system
- [Links](https://florianwoelki.github.io/vue-cirrus/#/components/Links)
  - Easily create nice animated links
- [Menus](https://florianwoelki.github.io/vue-cirrus/#/components/Menus)
  - Display really beautiful looking menus
- [Modals](https://florianwoelki.github.io/vue-cirrus/#/components/Modals)
  - Simple modals for displaying further information
- [Navbar](https://florianwoelki.github.io/vue-cirrus/#/components/Navbars)
  - It is so easy to create a simple navbar with this component
- [NextPrev](https://florianwoelki.github.io/vue-cirrus/#/components/NextPrev)
  - Create next and previous buttons to navigate through your documentation or articles
- [Pagination](https://florianwoelki.github.io/vue-cirrus/#/components/Pagination)
  - Easily paginate your articles, blogs or pages with this component
- [Parallax](https://florianwoelki.github.io/vue-cirrus/#/components/Parallax)
  - Create a parallax effect with this component
- [ParallaxElement](https://florianwoelki.github.io/vue-cirrus/#/components/ParallaxElement)
  - Create some really cool moving parallax elements
- [Placeholder](https://florianwoelki.github.io/vue-cirrus/#/components/Placeholder)
  - If you do not know, what to insert, you can take this placeholder
- [Snackbars](https://florianwoelki.github.io/vue-cirrus/#/components/Snackbars)
  - Create snackbars for displaying information on the top or bottom of the screen
- [Sidebar](https://florianwoelki.github.io/vue-cirrus/#/components/Sidebars)
  - It has never been easier to create a sidebar
- [Spaces](https://florianwoelki.github.io/vue-cirrus/#/components/Spaces)
  - Spaces can be really good to breath
- [Tabs](https://florianwoelki.github.io/vue-cirrus/#/components/Tabs)
  - Create tabs for seperating the content of your page
- [Tiles](https://florianwoelki.github.io/vue-cirrus/#/components/Tiles)
  - Tiles are useful for creating easy small components, like tweets
- [Toasts](https://florianwoelki.github.io/vue-cirrus/#/components/Toasts)
  - Toasts are so easy to create with different colored backgrounds. 

## 💎 Be a part of vue-cirrus
If you want to be a part of vue-cirrus, you can make pull requests and add/edit components.

[Here](https://github.com/FlorianWoelki/vue-cirrus/blob/master/PULL_REQUEST_TEMPLATE.md) is the pull request template.

## 📒 Changelog

If you have fun looking at some changelogs then you can go [here](https://github.com/FlorianWoelki/vue-cirrus/blob/master/CHANGELOG.md).

## 👏 Acknowledgements

Thank you to the following libraries for making this library possible.

- [Cirrus](https://spiderpig86.github.io/Cirrus/)
- [Vue](https://vuejs.org/)
