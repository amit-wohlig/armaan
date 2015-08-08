var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
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
        getnav: function () {
            return navigation;
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