angular.module("myApp.page1", ['ngRoute', 'firebase'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/page1', {
        templateUrl: "page1/page1.html",
        controller: "page1Ctrl"
    });
}])

.controller('page1Ctrl', function($scope, $firebaseArray){
    var ref = firebase.database().ref("students");
        
    // Getting reference from firebase database
    $scope.data = $firebaseArray(ref);

    console.log('page1');
})