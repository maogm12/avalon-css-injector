'use strict';
/*
 * avalon.cssInjector for avalonjs v1.0.0
 * Written by Garnel Mao
 * fork from https://github.com/Yappli/angular-css-injector/
 * See more at https://github.com/Garnel/avalon-css-injector/
 */
define(["avalon"], function(avalon) {
    var CssInjector = avalon.cssInjector = function() {};

    var scope;

    // Always called by the functions `addStylesheet` and `removeAll` to initialize the variable `scope`
    var _initScope = function() {
        if(scope === undefined) {
            scope = avalon.define({
                $id: "avalon_css_injector",
                injectedStylesheets: []
            });

            if (scope == undefined) {
                throw("avalon.css.injector error : Please initialize your app in the HTML tag and be sure your page has a HEAD tag.");
            }

            var docHead = document.getElementsByTagName('head')[0];
            var rawLink = document.createElement('link');
            rawLink.setAttribute('ms-repeat', 'injectedStylesheets');
            rawLink.setAttribute('type', 'text/css');
            rawLink.setAttribute('rel', 'stylesheet');
            rawLink.setAttribute('ms-href', 'el.href');
            docHead.appendChild(rawLink);
            avalon.scan(docHead, scope);
        }
    };

    // Used to add a CSS files in the head tag of the page
    var _addStylesheet = function(href)
    {
        _initScope();

        for(var i in scope.injectedStylesheets)
        {
            if(scope.injectedStylesheets[i].href == href) // An url can't be added more than once. I use a loop FOR, not the function indexOf to make the code IE < 9 compatible
                return;
        }

        scope.injectedStylesheets.push({href: href});
    };

    var _remove = function(href){
        _initScope();

        if(scope.injectedStylesheets){
            for(var i = 0; i < scope.injectedStylesheets.length; i++){
                if(scope.injectedStylesheets[i].href === href){
                    scope.injectedStylesheets.splice(i, 1);
                    return;
                }
            }
        }
    };

    // Used to remove all of the CSS files added with the function `addStylesheet`
    var _removeAll = function()
    {
        _initScope();

        if(scope.injectedStylesheets !== undefined)
            scope.injectedStylesheets.clear(); // Make it empty
    };

    CssInjector.prototype = {
        constructor: CssInjector,
        add: _addStylesheet,
        remove: _remove,
        removeAll: _removeAll
    }

    avalon.cssInjector = new CssInjector;
});