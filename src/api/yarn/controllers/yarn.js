'use strict';

/**
 * yarn controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::yarn.yarn');
