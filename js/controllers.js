angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider'])

.controller('AboutusCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("aboutus");
    $scope.menutitle = NavigationService.makeactive("About Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('AvailableatCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("availableat");
    $scope.menutitle = NavigationService.makeactive("Available at");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ContactCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('MediaCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("media");
    $scope.menutitle = NavigationService.makeactive("Media");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.hidenav = 'hidenav';

    $scope.bigmedia = "gGJfbcDNI0A";

    $scope.toBigImage = function (med) {
        $scope.bigmedia = med.image;
    }

    $scope.media = [{
        name: "first image",
        image: "gGJfbcDNI0A"
 }, {
        name: "second image",
        image: "SipKS7W1Xd8"
 }, {
        name: "third image",
        image: "-JKtWOqARa4"
 }]
})

.controller('ProductCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("Products");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.hidenav = 'hidenav';

    $scope.productlist = [{

        name: "bread"
        }, {

        name: "Snacks - Vegetarian"
        }, {

        name: "Snacks - Non Vegetarian"
        }, {

        name: "Herbs and Spices"
        }, {

        name: "Non Vegetarian"
        }, {

        name: "Fish"
        }, {

        name: "Pastry"
        }];


    $scope.product = [{
        image: "img/product/p1.jpg",
        name: "APP5 Plain Paratha1",
        peice: "(5 pieces)"
        }, {
        image: "img/product/p2.jpg",
        name: "APP5 Plain Paratha2",
        peice: "(4 pieces)"
        }, {
        image: "img/product/p3.jpg",
        name: "APP5 Plain Paratha3",
        peice: "(3 pieces)"
        }, {
        image: "img/product/p4.jpg",
        name: "APP5 Plain Paratha4",
        peice: "(2 pieces)"
        }, {
        image: "img/product/p5.jpg",
        name: "APP5 Plain Paratha5",
        peice: "(1 pieces)"
        }, {
        image: "img/product/p6.jpg",
        name: "APP5 Plain Paratha6",
        peice: "(0 pieces)"
        }];


})

.controller('FeedbackCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("feedback");
        $scope.menutitle = NavigationService.makeactive("Feedback");
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

.controller('headerctrl', function ($scope, TemplateService, $rootScope, $timeout) {
    $scope.template = TemplateService;
    $rootScope.$on('$stateChangeStart', function () {
        $timeout(changeBodyZoom, 1000);
    });
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