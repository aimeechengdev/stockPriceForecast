
    dspsjApp.controller('resultsCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.chartData = {
            "key": "Series 1",
            "values": $rootScope.analysisData
        };

        $scope.prediction = $rootScope.analysisData;

    }]);
