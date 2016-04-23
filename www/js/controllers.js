angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {



})

.controller('cardCtrl', function ($scope, $compile, $document) {

    $scope.cards = {
        left: [
            {
                template: 'directives/weather.html',
                color: '#ffccff',
                name: 'weather'
            }
        ],
        right: [
        ]
    }

    $document.ready(function () {
        $compile($document.find('div.chi'))($scope);
    });

});