var myApp = angular.module("myApp", ['myService', 'myService1']);
myApp.controller('myController', ['$scope', 'myFactory', 'myFactory1', function($scope, myFactory, myFactory1) {
  var emptyArray = [];


  $scope.options = [{
    label: 'Headlines',
    value: 'h'
  }, {
    label: 'World ',
    value: 'w'
  }, {
    label: 'Business',
    value: 'b'
  }, {
    label: 'Nation',
    value: 'n'
  }, {
    label: 'Science and Technology',
    value: 't'
  }, {
    label: 'Entertainment',
    value: 'e'
  }, {
    label: 'Election',
    value: 'el'
  }, {
    label: 'Politics',
    value: 'p'
  }, {
    label: 'sports',
    value: 's'
  }, {
    label: 'Health',
    value: 'm'
  }];

  function callback(data) {
    console.log(data);
    emptyArray.push(data.responseData.results);
    $scope.list = emptyArray;
  }
  var query = 0;
  $scope.btn = function() {
    if (query < 63) {
      query = query + 8;

    } else {
      query = 0;
    }
    console.log($scope.selectedItem.value);
    myFactory.getResponse($scope.selectedItem.value, query, callback);
  };

  $scope.btn1 = function() {
    emptyArray = [];
    query = 0;
    myFactory.getResponse($scope.selectedItem.value, query, callback);

  };

  myFactory1.getResponse1(function(data) {
    $scope.show = data;
  });

}]);
