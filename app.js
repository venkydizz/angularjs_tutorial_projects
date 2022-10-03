(function(){
    console.log('hello!')
    angular.module('MyFirstApp',[]).controller('MyFirstController', function($scope){
        $scope.name = "MYName";
        $scope.returnName = function(){
            return "The Given is " + $scope.name;
        };

    });    
})();
