var app = angular.module("Spelling", []);

app.config(function($routeProvider, $locationProvider){
   /* $routeProvider.when('/',
        {
            templateUrl:"index.html",
            controller: "ReadController"
        }
    )*/
    $locationProvider.html5Mode(true).hashPrefix('!');
});

app.controller("ReadController",
    function($scope, $location, $window, $route, spellingList) {
    $scope.spellings = spellingList.getList($location.search().listName);
    $scope.spellingIndex = 0;
    $scope.word = $scope.spellings[$scope.spellingIndex].spelling;
    $scope.wordScreen = $scope.word;
    $scope.score = 0;
    $scope.imageName = 'blank.gif';
    $scope.results = [];
    $scope.scoreoutof = $scope.spellings.length;
    $scope.resultImageName = "blank.gif";
    $scope.resultText = "Not quite. Try again!";
    $scope.debugOutput =  "";
    $scope.showWord = true;

    $scope.$watch('typedText', function() {

        if ($scope.typedText)
        {
            $scope.wordScreen = '';
        }
    });

    $scope.restart = function() {
        location.reload();
    };

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
            $('#resultsModal').modal('show');

            if ($scope.score == $scope.scoreoutof)
            {
                $( "#canvas" ).show();
                $scope.resultText = "Well done. Top speller!"
            }
            else
            {
                $( "#canvas" ).hide();
                $scope.resultImageName = "thumbsdown.jpg";
            }
        }
    }
});
