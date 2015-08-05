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

    $urlRouterProvider.otherwise("/aboutus");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            $element.after("<img src='img/loading.gif' class='loading' />");
            var $loading = $element.next(".loading");
            $element.load(function() {
                $loading.remove();
                $(this).addClass("doneLoading");
                console.log($element.css("opacity"));
            });
        }
    };
});
