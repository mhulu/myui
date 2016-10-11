/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: require('./pages/home.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true
    }
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: require('./pages/dashboard/account.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true
    }
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: require('./pages/auth/login.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true
    }
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: require('./pages/auth/register.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true
    }
  },
  // Reset
  {
    path: '/reset',
    name: 'reset.index',
    component: require('./pages/auth/reset.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/*',
    redirect: '/home'
  }
]
