'use strict';

var base = module.superModule;
var gtmHelpers = require('*/cartridge/scripts/gtm/gtmHelpers');

module.exports = function (object, apiProduct, type) {
    base.call(this, object, apiProduct, type);

    Object.defineProperty(object, 'gtmData', {
        enumerable: true,
        value: gtmHelpers.getProductObject(apiProduct)
    });
};
