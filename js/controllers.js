angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider', 'vcRecaptcha'])

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



    $scope.toBigImage = function (med) {
            $scope.bigmedia = med.image;
        }
        //get images
    var getmediasuccess = function (data, status) {
        $scope.media = data;
        $scope.bigmedia = data[0].image;
        console.log(data);
    }
    NavigationService.getmedia().success(getmediasuccess);

    //    $scope.media = [{
    //        name: "first image",
    //        image: "gGJfbcDNI0A"
    // }, {
    //        name: "second image",
    //        image: "SipKS7W1Xd8"
    // }, {
    //        name: "third image",
    //        image: "-JKtWOqARa4"
    // }]
})

.controller('ProductCtrl', function ($scope, TemplateService, NavigationService, $location, $stateParams) {
        $scope.template = TemplateService.changecontent("product");
        $scope.menutitle = NavigationService.makeactive("Products");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.hidenav = 'hidenav';
        productid = $stateParams.id;
        console.log(productid);

        if (productid != 1) {
            $scope.getmultipleproducts = function (id) {
                console.log("in if");
                NavigationService.viewprojectbyprojecttype(productid, viewprojectbyprojecttypesuccess);

            }
        } else {
            console.log("in else");
            $scope.getmultipleproducts = function (id) {
                NavigationService.viewprojectbyprojecttype(id, viewprojectbyprojecttypesuccess);
            }
        }

        // GET PRODUCTS SIDE MENU
        $scope.productlist = {};
        console.log($scope.productlist);
        var getproducttypesuccess = function (data, status) {
            $scope.productlist = data;
            console.log(data);
            $scope.getmultipleproducts(data[0].id);
        }
        NavigationService.getproducttype().success(getproducttypesuccess);


        // GET MULTIPLE PRODUCTS
        var viewprojectbyprojecttypesuccess = function (data, status) {
            $scope.product = data.queryresult;
            console.log($scope.product);
        }

        $scope.getsingleproductdetail = function (id) {
            $location.url("/product-info/" + id);
        }


    })
    .controller('ProductinfoCtrl', function ($scope, TemplateService, NavigationService, $routeParams, $stateParams, $location) {
        $scope.template = TemplateService.changecontent("productinfo");
        $scope.menutitle = NavigationService.makeactive("productinfo");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.hidenav = 'hidenav';
        // get single product detail
        console.log($stateParams.id);
        var getsingleproductdetailsuccess = function (data, status) {
            $scope.singleproductdetail = data;
            console.log($scope.singleproductdetail);
        }
        NavigationService.getsingleproductdetail($stateParams.id, getsingleproductdetailsuccess);
        $scope.getmultipleproducts = function (id) {
            $location.url("/product/" + id);
        }

        //get menu
        var getproducttypesuccess = function (data, status) {
            $scope.productlist = data;
        }
        NavigationService.getproducttype().success(getproducttypesuccess);
    })
    .controller('FeedbackCtrl', function ($scope, TemplateService, NavigationService, vcRecaptchaService) {
        $scope.template = TemplateService.changecontent("feedback");
        $scope.menutitle = NavigationService.makeactive("Feedback");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.feedback = [];
        var getfeedbackdetailscallback = function (data, status) {
            if (data == "This is a spam") {
                console.log("The captcha is missing or wrong!");
            } else {
                console.log("success" + data);
                $scope.feedback = {};
            }
        }
        $scope.getfeedbackdetails = function (feedback) {

            $scope.allvalidation = [{
                field: $scope.feedback.name,
                validation: ""
        }, {
                field: $scope.feedback.email,
                validation: ""
        }, {
                field: $scope.feedback.feedback,
                validation: ""
   }];
            var check = formvalidation($scope.allvalidation);
            //        if (navigator.network.connection.type == Connection.none) {
            //            var myPopup = $ionicPopup.show({
            //                title: 'No Internet Connection',
            //                scope: $scope,
            //            });
            //            $timeout(function () {
            //                myPopup.close(); //close the popup after 3 seconds for some reason
            //            }, 1500);
            //        } else {
            if (check) {
                $scope.feedback = feedback;
                console.log($scope.feedback);
//                NavigationService.addfeedback($scope.feedback).success(getfeedbackdetailscallback);
                NavigationService.addfeedback($scope.feedback,getfeedbackdetailscallback);

            } else {
                console.log("Invalid");
            }
        }
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