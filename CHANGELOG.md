# Changelog

All notable changes to this project will be documented in this file.

## [0.7.3] - 2021-10-31

### ⚡️ Changed
- Drop support for Vue 3
- Fix issue with `v-model` in input field


## [0.7.01] - 2021-05-29

### ⚡️ Changed
- Revert back to old version
- Fixed components declaration


## [0.6.27] - 2021-05-24

### ⚡️ Changed
- Fixed components import that are using slots or children elements

## [0.6.25] & [0.6.26] - 2021-05-24

### 🔨 Added
- Add Vue 3 support with `yarn add vue@next`


## [0.6.24] - 2021-01-08

### 🔨 Added
- Added attributes and listeners to card component
- Added event for opening navbar on small devices

### ⚡️ Changed
- Fix code colored for dashed css classes
- Fix code inline css attributes

## [0.6.23] - 2021-01-04

### ⚡️ Changed
- Removed console log statement and added value attribute to vetur config

## [0.6.22] - 2021-01-04

### ⚡️ Changed
- Fixed crucial bug with non reactivity for code component

## [0.6.21] - 2021-01-02

### ⚡️ Changed
- Fixed crucial bug for header menu button on small devices not clickable

## [0.6.2] - 2020-12-14

### 🔨 Added
- Add vetur recommendations
- Add avatar size validator
- Add size and animation validators for modal
- Add new grid component

### ⚡️ Changed
- npmignore file for lowering package
- Fix undefined size classes for avatar component
- Change grid to column directory

## [0.6.12] - 2020-11-20

### ⚡️ Changed
- Removed title prop for input field
- Removed title and subtitle props for footer
- Fixed slots and classes if they are not used

## [0.6.11] - 2020-11-19

### ⚡️ Changed
- Fixed card image binding

## [0.6.1] - 2020-11-19

### 🔨 Added
- Added card body

### ⚡️ Changed
- Card image fixes

## [0.6.0] - 2020-11-17

### 🔨 Added
- Added more colorful components supported by Cirrus
- Added attributes and listeners for mostly all components where it is useful

### ⚡️ Changed
- Fixed margin top with icon on input field (might be removed later, because future version of Cirrus it is already fixed)
- Cleaned up a lot of components
- Minor changes to props for all components
- Null classes for some props

## [0.5.31] - 2020-11-08

### ⚡️ Changed
- HOTFIX: export install function for library

## [0.5.3] - 2020-11-08

### ⚡️ Changed
- Bump version of Cirrus to 0.6.0
- Fix Code component issues
- Refactor classes for Cirrus 0.6.0

## [0.5.28] - 2020-05-07

### ⚡️ Changed
- Fix modal footer placement
- Set modal sizes to one string
- Set modal animations to one string

## [0.5.27] - 2020-04-28

### 🔨 Added
- Added click event for v-card component

### ⚡️ Changed
- Fix v-input-field model value not updating for dynamic component

## [0.5.26] - 2020-04-15

### ⚡️ Changed
- HOTFIX: input field v-model and input event
- HOTFIX: search bar v-model and input event

## [0.5.25] - 2020-04-15

### 🔨 Added
- Add keyup event for search bar and input field

### ⚡️ Changed
- Clean up some event emitting for components

## [0.5.24] - 2020-03-29

### ⚡️ Changed
- Remove formGroup prop from v-button component
- Fixed toLowerCase error on v-form-group component

## [0.5.23] - 2020-03-18

### 🔨 Added
- Add 'formGroup' property to button component

### ⚡️ Changed
- Rename noControl to formGroup in input field component


## [0.5.22] - 2020-02-28

### 🔨 Added
- Add single way of installing components to readme

### ⚡️ Changed
- Avatar size property is now a single string
- Fix Navbar disableMobileNavbar is now completly working


## [0.5.21] - 2020-02-14

### 🔨 Added
- Add paused prop to animations mixin

### ⚡️ Changed
- Fix null image in parallax component
- Fix empty div in horizontal divider
- Refactor tooltips & animations usage


## [0.5.2] - 2020-01-08

### 🔨 Added
- Add click event for dropdown item
- Add menus, parallax link to readme file
- Add id property for sidebar dropdown component
- Add form group input as a class to input field
- Add devmode script for easy dev setup
- Add selected status to sidebar dropdown item

### ⚡️ Changed
- Drop not useful links in readme file
- Fix usage of disabled prop for checkbox component
- Fix placeholder empty in input field


## [0.5.11] - 2019-12-13

### ⚡️ Changed
- Hotfix for default column grid
- Fix custom body issue in parallax component


## [0.5.1] - 2019-12-10

### ⚡️ Changed
- Hotfix for sidebar content


## [0.5.0] - 2019-12-10

### 🔨 Added
- Added menu component
- Added single import functionality for each component
- Added new logo

### ⚡️ Changed
- Optimize all components


## [0.4.0] - 2019-12-01

### 🔨 Added
- Add keyword 'add' to bash code script
- Optimize Sidebar title to have its own html
- Add new nav-region component
- Optimize prop names for headline component
- Add a better way to install Vue-Cirrus and made some performance tweaks

### ⚡️ Changed
- Drop not useful properties in v-badge component
- Drop title prop
- Drop spinner component
- Change default value in headline for h1 to false
- Drop not useful props for v-card


## [0.3.1] - 2019-11-02

### 🔨 Added
- Added darkmode to dropdown
- Added darkmode to checkbox
- Added yarn to bash code coloring
- Added value property to search bar

### ⚡️ Changed
- Refactored link to href in pagination item


## [0.3.0] - 2019-10-23

### 🔨 Added
- Added nobutton property to v-searchbar
- Added darkmode 😃

### ⚡️ Changed
- Fixed code component
- Updated readme file
- Fixed local image on parallax component
- Renamed placeholder input to placeholder


## [0.2.6] - 2019-10-08

### 🔨 Added
- Added selected property to navbar item
- Added more flexible way to create a footer
- Added click event to tab
- Added click event for code component
- Added v-next-btn and v-prev-btn for the v-next-prev component

### ⚡️ Changed
- Fixed parallax unused div element
- Renamed link to href in tab
- Fixed error with tooltip in footer list item
- Fixed frame component


## [0.2.55] - 2019-10-02

### 🔨 Added
- Added pilled property to input field
- Added pilled and circle property to button
- Added rounded property to tag container

### ⚡️ Changed
- Cleaned up button component


## [0.2.54] - 2019-09-30

### 🔨 Added
- Added click event to dropdown item

### ⚡️ Changed
- Fixed disabled button style


## [0.2.53] - 2019-09-22

### ⚡️ Changed
- Fixed Dropdown Menu
- Fixed clickable on disabled buttons


## [0.2.52] - 2019-09-15

### ⚡️ Changed
- Fixed snackbar functionality


## [0.2.51] - 2019-09-13

### 🔨 Added
- Added v-model ability to input field

### ⚡️ Changed
- Fixed icon alignment on input field


## [0.2.5] - 2019-09-06

### 🔨 Added
- Added equal height property to animated cards

### ⚡️ Changed
- Fixed and updated performance for parallax component
- Updated card to all in one card
- Updated sizes of avatar image


## [0.2.4] - 2019-09-01

### 🔨 Added
- Added change event for radio, toggler and checkbox component

### ⚡️ Changed
- Updated colors of snackbar


## [0.2.3] - 2019-08-30

### 🔨 Added
- Added v-parallax-element to get a good parallax experience
- Added colors for badges
- Added checkbox component
- Added toggler input component
- Added checkbox component

### ⚡️ Changed
- Changed arrow position on sidebar dropdown
- Combined parallax and fullscreen component
- Fixed column fluid
- Updated link to href and added blank property to navbaritem
- Changed xsmall property to tiny


## [0.2.2] - 2019-08-27

### 🔨 Added
- Added style for short divider
- Added bordered property for pagination
- Added enableBoxShadow property to tiles
- Added disabled property to textarea

### ⚡️ Changed
- Fixed tooltips
- Fixed pagination
- Fixed modal style
- Changed modal close button size
- Fixed tile style
- Fixed form style


## [0.2.1] - 2019-08-27

### ⚡️ Changed
- Fixed crucial divider bug


## [0.2.0] - 2019-08-27

### 🔨 Added
- Added mixins to container component
- Added href to buttons
- Added blank attribute for links
- Added mixins to divider
- Added @click event for a lot of components
- Added image card component
- Added local images binding support
- Added a way to add height to card
- Added input color component
- Added icon to input field
- Added handle close to toast component
- Added arrow for dropdown on sidebar item

### ⚡️ Changed
- Updated all components to Cirrus version 0.5.5
- Changed link attribute to href
- Removed sidebar spacing
- Updated button :onClick to @click event
- Updated sidebar icon on mobile view
- Fixed data language in code component
- Updated animation for code copying



## [0.1.93] - 2019-08-08

### 🔨 Added
- Added input event for input fields
- Added height property for card
- Added level property for row

### ⚡️ Changed
- Formatted code
- Updated readme


## [0.1.92] - 2019-06-07

### 🔨 Added
- Added value property for input field

### ⚡️ Changed
- Fixed security issues
- Fixed navbar centering items, if there is no title
- Renamed title to brandTitle


## [0.1.91] - 2019-04-16

### 🔨 Added
- Added mixins for card component
- Added mixins for date picker
- Added bottom badge option

### ⚡️ Changed
- Updated readme
- Updated colors of code components

## [0.1.9] - 2019-04-03

### 🔨 Added
- Added bash language - code component
- Added title, subtitle and information property to date picker

### ⚡️ Changed
- Updated readme
- Updated color of comment - code component
- Updated color of normal text - code component 


## [0.1.86] - 2019-03-28

### 🔨 Added
- Code component: Added true, false to special words
- Added datepicker form
- Added Vue syntax highlighting

### ⚡️ Changed
- Code component: Changed color of special words
- Fixed error in NavBar

## [0.1.85] - 2019-03-24

### 🔨 Added
- Added dark mode for code component
- Added css code highlighting

### ⚡️ Changed

- Updated README file
- Updated margin of code component
- Fixed string issue with javascript code component

## [0.1.84] - 2019-03-17

### 🔨 Added

- Added SearchBar component

### ⚡️ Changed

- Added mixins to drop caps component
- Updated html syntax highlighter
- Fixed language name

## [0.1.83] - 2019-03-16

### 🔨 Added

- Added brandLink and disableMobileNavbar property for Navbar component
- Added DropCaps component

### ⚡️ Changed

- Updated list of keyword highlights for JavaScript
- Updated colors for JavaScript
- Formatted code component

## [0.1.82] - 2019-03-13

### ⚡️ Changed

- Fixed code highlighting (only works with javascript for now!)

## [0.1.81] - 2019-03-13

### 🔨 Added

- Added container component

### ⚡️ Changed

- Styling props of v-btn has changed (no need to use btnStyle anymore)
- Fixed active navbar item (selected class not exists)
- Fixed multiple copyable code components with the same name
- Fixed colored code

## [0.1.8] - 2019-03-10

### 🔨 Added

- GitHub page

### ⚡️ Changed

- Code component is now fully working
- Removed not necessary props

## [0.1.71] - 2019-03-01

### 🔨 Added

- Spinner component

### ⚡️ Changed

- Fixed overflow in v-code

## [0.1.71] - 2019-03-01

### ⚡️ Changed

- Fixed some styling issues with footer
- Renamed button sizes
- Fixed issue with href in sidebar item
- Fixed issue with v-code component

## [0.1.7] - 2019-03-01

### 🔨 Added

- Added sidebar dropdown item
- Added default title and subtitle for placeholder
- Added input field component
- Added dropdown select menu component
- Added text area component
- Added badges
- Added fullscreen component

### ⚡️ Changed

- Updated colors for snackbar

## [0.1.6] - 2019-02-27

### 🔨 Added

- Added button click event with :onClick
- Added snackbars (top, bottom)
- Added pagination
- Added parallax component
- Added divider component
- Added frame component
- Added button dropdown
- Added footer component
- Added loading animation to mixins
- Added placeholder component

### ⚡️ Changed

- Fixed layout for sidebar
- Fixed responsive design of sidebar
- Fixed not necessary classes for space
- Updated nextprev button, so you can disable the prev or next button

## [0.1.52] - 2019-02-26

### 🔨 Added

- Added copyable code with animation
- Added hamburger menu for mobile view in navbar component
- Added GitHub page

### ⚡️ Changed

- Fixed some issues with the code component

## [0.1.51] - 2019-02-24

### ⚡️ Changed

- Fixed issues with dropdown (not customizable)

## [0.1.5] - 2019-02-21

### 🔨 Added

- Added Sidebar
- Added next previous buttons
- Added Navbar
- Added animations for components
- Added 10-grid layout
- Added tile component
- Added SimpleCard as a component

### ⚡️ Changed

- Fixed MinCard component issue
- Renamed components

## [0.1.4] - 2019-02-21

### 🔨 Added

- Added code coloring for code component
- Added toast component
- Added tabs component
- Added avatar component
- Added normal card component
- Added animated card component
- Added minimized card component

### ⚡️ Changed

- Formatted code and overall components

[0.1.4]: https://www.npmjs.com/package/vue-cirrus/v/0.1.4
[0.1.5]: https://www.npmjs.com/package/vue-cirrus/v/0.1.5
[0.1.51]: https://www.npmjs.com/package/vue-cirrus/v/0.1.51
[0.1.52]: https://www.npmjs.com/package/vue-cirrus/v/0.1.52
[0.1.6]: https://www.npmjs.com/package/vue-cirrus/v/0.1.6
[0.1.7]: https://www.npmjs.com/package/vue-cirrus/v/0.1.7
[0.1.71]: https://www.npmjs.com/package/vue-cirrus/v/0.1.71
[0.1.72]: https://www.npmjs.com/package/vue-cirrus/v/0.1.72
[0.1.8]: https://www.npmjs.com/package/vue-cirrus/v/0.1.8
[0.1.81]: https://www.npmjs.com/package/vue-cirrus/v/0.1.81
[0.1.82]: https://www.npmjs.com/package/vue-cirrus/v/0.1.82
[0.1.83]: https://www.npmjs.com/package/vue-cirrus/v/0.1.83
[0.1.84]: https://www.npmjs.com/package/vue-cirrus/v/0.1.84
[0.1.85]: https://www.npmjs.com/package/vue-cirrus/v/0.1.85
[0.1.86]: https://www.npmjs.com/package/vue-cirrus/v/0.1.86
[0.1.9]: https://www.npmjs.com/package/vue-cirrus/v/0.1.9
[0.1.91]: https://www.npmjs.com/package/vue-cirrus/v/0.1.91
[0.1.92]: https://www.npmjs.com/package/vue-cirrus/v/0.1.92
[0.1.93]: https://www.npmjs.com/package/vue-cirrus/v/0.1.93
[0.2.0]: https://www.npmjs.com/package/vue-cirrus/v/0.2.0
[0.2.1]: https://www.npmjs.com/package/vue-cirrus/v/0.2.1
[0.2.2]: https://www.npmjs.com/package/vue-cirrus/v/0.2.2
[0.2.3]: https://www.npmjs.com/package/vue-cirrus/v/0.2.3
[0.2.4]: https://www.npmjs.com/package/vue-cirrus/v/0.2.4
[0.2.5]: https://www.npmjs.com/package/vue-cirrus/v/0.2.5
[0.2.51]: https://www.npmjs.com/package/vue-cirrus/v/0.2.51
[0.2.52]: https://www.npmjs.com/package/vue-cirrus/v/0.2.52
[0.2.53]: https://www.npmjs.com/package/vue-cirrus/v/0.2.53
[0.2.54]: https://www.npmjs.com/package/vue-cirrus/v/0.2.54
[0.2.55]: https://www.npmjs.com/package/vue-cirrus/v/0.2.55
[0.2.6]: https://www.npmjs.com/package/vue-cirrus/v/0.2.6
[0.3.0]: https://www.npmjs.com/package/vue-cirrus/v/0.3.0
[0.3.1]: https://www.npmjs.com/package/vue-cirrus/v/0.3.1
[0.4.0]: https://www.npmjs.com/package/vue-cirrus/v/0.4.0
[0.5.0]: https://www.npmjs.com/package/vue-cirrus/v/0.5.0
[0.5.11]: https://www.npmjs.com/package/vue-cirrus/v/0.5.11
[0.5.2]: https://www.npmjs.com/package/vue-cirrus/v/0.5.2
[0.5.21]: https://www.npmjs.com/package/vue-cirrus/v/0.5.21
[0.5.22]: https://www.npmjs.com/package/vue-cirrus/v/0.5.22
[0.5.23]: https://www.npmjs.com/package/vue-cirrus/v/0.5.23
[0.5.24]: https://www.npmjs.com/package/vue-cirrus/v/0.5.24
[0.5.25]: https://www.npmjs.com/package/vue-cirrus/v/0.5.25
[0.5.26]: https://www.npmjs.com/package/vue-cirrus/v/0.5.26
[0.5.27]: https://www.npmjs.com/package/vue-cirrus/v/0.5.27
[0.5.28]: https://www.npmjs.com/package/vue-cirrus/v/0.5.28
[0.5.3]: https://www.npmjs.com/package/vue-cirrus/v/0.5.3
[0.5.31]: https://www.npmjs.com/package/vue-cirrus/v/0.5.31
[0.6.0]: https://www.npmjs.com/package/vue-cirrus/v/0.6.0
[0.6.1]: https://www.npmjs.com/package/vue-cirrus/v/0.6.1
[0.6.11]: https://www.npmjs.com/package/vue-cirrus/v/0.6.11
[0.6.12]: https://www.npmjs.com/package/vue-cirrus/v/0.6.12
[0.6.2]: https://www.npmjs.com/package/vue-cirrus/v/0.6.2
[0.6.21]: https://www.npmjs.com/package/vue-cirrus/v/0.6.21
[0.6.22]: https://www.npmjs.com/package/vue-cirrus/v/0.6.22
[0.6.23]: https://www.npmjs.com/package/vue-cirrus/v/0.6.23
[0.6.24]: https://www.npmjs.com/package/vue-cirrus/v/0.6.24
[0.6.25]: https://www.npmjs.com/package/vue-cirrus/v/0.6.25
[0.6.26]: https://www.npmjs.com/package/vue-cirrus/v/0.6.26
[0.6.27]: https://www.npmjs.com/package/vue-cirrus/v/0.6.27
