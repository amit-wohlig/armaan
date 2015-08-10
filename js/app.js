// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider,$httpProvider) {
    
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    
    //Turn the spinner on or off
    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider

    .state('aboutus', {
        url: "/aboutus",
        templateUrl: "views/template.html",
        controller: 'AboutusCtrl'
    })

    .state('availableat', {
        url: "/availableat",
        templateUrl: "views/template.html",
        controller: 'AvailableatCtrl'
    })

    .state('contact', {
        url: "/contact",
        templateUrl: "views/template.html",
        controller: 'ContactCtrl'
    })
    
    .state('feedback', {
        url: "/feedback",
        templateUrl: "views/template.html",
        controller: 'FeedbackCtrl'
    })
    
    .state('media', {
        url: "/media",
        templateUrl: "views/template.html",
        controller: 'MediaCtrl'
    }) 
        .state('product', {
        url: "/product",
        templateUrl: "views/template.html",
        controller: 'ProductCtrl'
    })  
        .state('productinfo', {
        url: "/product-info",
        templateUrl: "views/template.html",
        controller: 'ProductinfoCtrl'
    })

    $urlRouterProvider.otherwise("/aboutus");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('youtube', function ($sce) {
    return {
        restrict: 'A',
        scope: {
            code: '='
        },
        replace: true,
        template: '<iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
        link: function (scope) {
            console.log(scope.code);
            scope.$watch('code', function (newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
                }
            });
        }
    };
});


function changeBodyZoom()
{
    console.log("Changing Zoom");
    $("body").css("zoom",$(window).height()/$("body").height());
}