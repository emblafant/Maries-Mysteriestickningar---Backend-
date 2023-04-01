'use strict';

/**
 * yarn router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::yarn.yarn');
