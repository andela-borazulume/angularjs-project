var myApp = angular.module("myApp", ['myService']);
myApp.controller('myController', ['$scope', 'myFactory', function($scope, myFactory) {
  // $scope.btn = function(){

  	function callback(data) {
    // for (var i = 0; i < data.length; i++) {
    //   var domain = "http://" + data[i].domain;
    //   var path = data[i].path;
    //   var total = domain + path;
    //   // console.log(data);

    //   console.log(total);
    //   $scope.total = total;

    // }
    // $scope.list = data;
    // $scope.title1 = title;
    // console.log(data);

    // console.log(data);
    // var title = data[4].title;
    // var path = data[4].path;
    // var domain = data[4].domain;
    // var total = "http://"+domain + path;
    // console.log(total);
    //$scope.list = data;
    console.log(data);
  }

  myFactory.getResponse(callback);

  // };


}]);
