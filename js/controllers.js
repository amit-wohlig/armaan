angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select'])

.controller('AboutusCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("aboutus");
    $scope.menutitle = NavigationService.makeactive("About Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('AvailableatCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("availableat");
    $scope.menutitle = NavigationService.makeactive("Available At");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('MediaCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("media");
    $scope.menutitle = NavigationService.makeactive("Media");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ProductCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("Product");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
    .controller('FeedbackCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("feedback");
    $scope.menutitle = NavigationService.makeactive("FEEDBACK");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
})

;