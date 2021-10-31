import { App } from 'vue';

const install = (app: App) => {
  const requireComponent = require.context(
    './components',
    true,
    /V[\w-]+.vue$/,
  );

  requireComponent.keys().forEach((filename) => {
    const componentConfig = requireComponent(filename);
    const componentName = `${filename
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .replace(/(.+)\//, '')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replace('v', 'v-')}`;

    app.component(componentName, componentConfig.default || componentConfig);
  });
};

export default install;

export { default as vAvatar } from './components/Avatar';
export { default as vBadge } from './components/Badge';
export { default as vBtn } from './components/Btn';
export { default as vCard } from './components/Card';
export { default as vCode } from './components/Code';
export { default as vContainer } from './components/Container';
export { default as vDivider } from './components/Divider';
export { default as vDropdown } from './components/Dropdown';
export { default as vFooter } from './components/Footer';
export { default as vForm } from './components/Form';
export { default as vFrame } from './components/Frame';
export { default as vGrid } from './components/Grid';
export { default as vColumn } from './components/Column';
export { default as vHeadline } from './components/Headline';
export { default as vLink } from './components/Link';
export { default as vMenu } from './components/Menu';
export { default as vModal } from './components/Modal';
export { default as vNavbar } from './components/Navbar';
export { default as vNextPrev } from './components/NextPrev';
export { default as vPagination } from './components/Pagination';
export { default as vParallax } from './components/Parallax';
export { default as vParallaxElement } from './components/ParallaxElement';
export { default as vPlaceholder } from './components/Placeholder';
export { default as vSidebar } from './components/Sidebar';
export { default as vSnackbar } from './components/Snackbar';
export { default as vSpace } from './components/Space';
export { default as vTabs } from './components/Tabs';
export { default as vTag } from './components/Tag';
export { default as vTile } from './components/Tile';
export { default as vToast } from './components/Toast';
