angular.module('starter.directives', [])



.directive('chi', function () {
    return {
        restrict: "C",
        templateUrl: 'directives/weather.html',
        controller: function ($scope, $ionicPlatform, $http) {
            $scope.temp = "Loading location..";

            $ionicPlatform.ready(function () {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            });


            function onSuccess(position) {
                $http.get('http://api.wunderground.com/api/1eeb77d59779ed35/geolookup/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json').then(function (response) {
                    $scope.location = response.data.location.city;
                    $scope.temp = "Loading weather data..";
                    $http.get('http://api.wunderground.com/api/1eeb77d59779ed35/conditions/q/' + response.data.location.state + '/' + response.data.location.city + '.json').then(function (response) {
                        $scope.temp = response.data.current_observation.feelslike_string;
                        $scope.icon = response.data.current_observation.icon_url;
                    });
                });

            }

            function onError(error) {
                $scope.location = 'Doesnt work';
            }
        }
    };
});