/**
 * @flow
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
    title: 'About us',
    path: '/about-us',
  },
  {
    id: uuid(),
    title: 'Shop',
    path: '/shop',
  },
  {
    id: uuid(),
    title: 'Blog',
    path: '/blog',
  },
  {
    id: uuid(),
    title: 'Pages',
    path: '/pages',
  },
  {
    id: uuid(),
    title: 'Vegetable',
    path: '/vegetable',
  },
];

export { menuData };
