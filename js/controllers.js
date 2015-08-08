angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider'])

.controller('AboutusCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("aboutus");
    $scope.menutitle = NavigationService.makeactive("about us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('AvailableatCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("availableat");
    $scope.menutitle = NavigationService.makeactive("available at");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ContactCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('MediaCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("media");
    $scope.menutitle = NavigationService.makeactive("media");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.hidenav = 'hidenav';
})

.controller('ProductCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("products");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    
    $scope.hidenav = 'hidenav';
})

.controller('FeedbackCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("feedback");
    $scope.menutitle = NavigationService.makeactive("feedback");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
    .controller('ProductinfoCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("productinfo");
    $scope.menutitle = NavigationService.makeactive("productinfo");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.hidenav = 'hidenav';
})

.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
})

.controller('sliderctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;

    $scope.slides = [
    'img/slider/1.jpg',
    'img/slider/2.jpg',
    'img/slider/3.jpg',
    'img/slider/4.jpg',
    'img/slider/5.jpg',
    'img/slider/6.jpg',
    'img/slider/7.jpg',
    'img/slider/8.jpg'
   ];
});