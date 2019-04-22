// Add page1 and page2 as dependency injection
angular.module("myApp", ['ngRoute', 'myApp.page1', 'myApp.page2'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .otherwise({
            redirectTo:"/page1"
        })
}]);