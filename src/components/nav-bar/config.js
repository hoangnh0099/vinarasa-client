/**
 * @format
 */

import uuid from 'uuid/v4';

const menuData = [
  {
    id: uuid(),
    title: 'Home',
    path: '/',
  },
  {
    id: uuid(),
    title: 'Shop',
    path: '/shop',
  },
  {
    id: uuid(),
    title: 'About us',
    path: '/about-us',
  },
];

export { menuData };
