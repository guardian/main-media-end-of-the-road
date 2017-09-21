define([], function() {
    'use strict';

    return {
        boot: function(el, context, config, mediator) {
            var html = '<style>' + 
            '.immersive-main-media__headline-container, .article__header-info {' + 
            '       display: none;' +
            '}' +
            '</style>';

            el.innerHTML = html;
        }
    };
});
