/**
 * @format
 */

import { v4 as uuidv4 } from 'uuid';

const menuData = [
  {
    id: uuidv4(),
    title: 'Home',
    path: '/',
  },
  {
    id: uuidv4(),
    title: 'Shop',
    path: '/shop',
  },
  {
    id: uuidv4(),
    title: 'About us',
    path: '/about-us',
  },
];

export { menuData };
