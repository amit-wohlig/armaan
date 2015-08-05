var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
    var navigation = [{
            name: "Aboutus",
            classis: "active",
            link: "#/aboutus",
            subnav: []
    }, {
            name: "Products",
            active: "",
            link: "#/products",
            classis: "",
            subnav: []
    },
        {
            name: "Media",
            active: "",
            link: "#/media",
            classis: "",
            subnav: []
    },
        {
            name: "Available At",
            active: "",
            link: "#/availableat",
            classis: "",
            subnav: []
    },
        {
            name: "Contact",
            active: "",
            link: "#/contact",
            classis: "",
            subnav: []
    },
        {
            name: "Feedback",
            active: "",
            link: "#/feedback",
            classis: "",
            subnav: []
    }, ];

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