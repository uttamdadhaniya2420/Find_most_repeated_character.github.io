const app = angular.module('myApplication', []);
app.controller('myController', function ($scope) {
    $scope.name;

    $scope.value;

    $scope.SubmitClick = function () {
        let string = $scope.name;
        let charCount = {};
        let maxChar = '';
        let maxCount = 0;

        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            charCount[char] = (charCount[char] || 0) + 1;
            if (charCount[char] > maxCount) {
                maxChar = char;
                maxCount = charCount[char];
            }
        }
        $scope.value = maxChar;
        $scope.name = '';
    }
});
