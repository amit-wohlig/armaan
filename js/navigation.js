//var admin_url = "http://www.powerforone.org/admin/index.php/";
 var admin_url = "http://localhost/armaan/index.php/";
var adminbase = "http://localhost/armaan/";
var imgpath = adminbase + "uploads/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "About Us",
            classis: "active",
            link: "#/aboutus",
            subnav: []
    }, {
            name: "Products",
            active: "active",
            link: "#/product",
            classis: "",
            subnav: []
    },
        {
            name: "Media",
            active: "active",
            link: "#/media",
            classis: "",
            subnav: []
            }
    ,
//        {
//            name: "AVAILABLE AT",
//            active: "active",
//            link: "#",
//            classis: "",
//            subnav: []
//    },
        {
            name: "Contact",
            active: "active",
            link: "#/contact",
            classis: "",
            subnav: []
    },
        {
            name: "Feedback",
            active: "active",
            link: "#/feedback",
            classis: "",
            subnav: []
    } ];
    
  
            
    return {
           getproducttype: function () {
            return $http.get(admin_url + 'json/getproducttype', {});
        },
         viewprojectbyprojecttype: function (producttype,callback) {
//            var projecttype = 0;
            return $http.get(admin_url + 'json/viewprojectbyprojecttype?producttype=' + producttype, {}).success(callback);
        }, 
        getsingleproductdetail: function (id,callback) {
//            var projecttype = 0;
            return $http.get(admin_url + 'json/getproductbyid?id=' + id, {}).success(callback);
        },
        getnav: function () {
            return navigation;
        },
         addfeedback: function (feedback) {
            return $http({
                url: admin_url + "json/addfeedback",
                method: "POST",
                data: {
                    'name': feedback.name,
                    'email': feedback.email,
                    'phone': feedback.phone,
                    'feedback': feedback.feedback,
                    'address1': feedback.address1,
                    'address2': feedback.address2,
                    'city': feedback.city,
                    'country': feedback.country,
                    'postcode': feedback.postcode
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    }
});