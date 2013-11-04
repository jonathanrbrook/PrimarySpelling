angular.module("Spelling", []).controller("ReadController",
    function($window, $scope, spellingList) {
    $scope.spellings = spellingList;
    $scope.spellingIndex = 0;
    $scope.word = $scope.spellings[$scope.spellingIndex].spelling;
    $scope.wordScreen = $scope.word;
    $scope.score = 0;
    $scope.imageName = 'blank.gif';
    $scope.results = [];
    $scope.finishedTest = false;
    $scope.scoreoutof = $scope.spellings.length;
    $scope.resultImageName = "owlReading.jpg";
    $scope.resultText = "Not quite. Try again!";
    $scope.debugoutput = "n/a";
    $scope.showWord = true;
    $scope.userInputActivate = false;

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
            $scope.imageName = "tick.jpg";
            $scope.results.push({text: typedText, imageName: "tick.jpg"})
        }
        else
        {
            $scope.imageName = "cross.jpg";
            $scope.results.push({text: typedText, imageName: "cross.jpg"})
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
                //$scope.resultImageName = "thumbsup.jpg";
                $scope.resultText = "Well done. Top speller!"
            }
            else
            {
                $scope.resultImageName = "thumbsdown.jpg";
            }
        }
    }
});
