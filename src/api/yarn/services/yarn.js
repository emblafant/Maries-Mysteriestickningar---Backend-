'use strict';

/**
 * yarn service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yarn.yarn');
