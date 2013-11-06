var app = angular.module("Spelling", []);

app.config(function($locationProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');
});

app.controller("ReadController",
    function($scope, $location, $window, spellingList) {
    $scope.spellings = spellingList.getList($location.search().listName);
    $scope.spellingIndex = 0;
    $scope.word = $scope.spellings[$scope.spellingIndex].spelling;
    $scope.wordScreen = $scope.word;
    $scope.score = 0;
    $scope.imageName = 'blank.gif';
    $scope.results = [];
    $scope.finishedTest = false;
    $scope.scoreoutof = $scope.spellings.length;
    $scope.resultImageName = "fireworks.jpg";
    $scope.resultText = "Not quite. Try again!";
    $scope.debugOutput =  $location.search().listName;
    $scope.showWord = true;
    $scope.userInputActivate = false;
    $scope.myQs = $location.search();

    $scope.$watch('typedText', function() {

        if ($scope.typedText)
        {
            $scope.wordScreen = '';
        }
    });

    $scope.checkSpelling = function(typedText) {

        $("#inputTarget").focus();

        if (typedText === $scope.word)
        {
            $scope.score++;
            $scope.results.push({text: typedText, imageName: "tick.ico"})
        }
        else
        {
            $scope.results.push({text: typedText, imageName: "cross.ico"})
        }

        $scope.typedText = '';

        if ($scope.spellingIndex < $scope.spellings.length -1)
        {
            $scope.spellingIndex++;
            $scope.word = $scope.spellings[$scope.spellingIndex].spelling;
            $scope.wordScreen = $scope.word;
        }
        else
        {
            $scope.finishedTest = true;
            if ($scope.score == $scope.scoreoutof)
            {
                $scope.resultImageName = "unicorn.jpg";
                $scope.resultText = "Well done. Top speller!"
            }
            else
            {
                $scope.resultImageName = "thumbsdown.jpg";
            }
        }
    }
});
