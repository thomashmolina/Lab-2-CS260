angular.module('News', [])
    .controller('MainCtrl', ['$scope',
        function($scope) {
            $scope.test = "hello world";
            $scope.addPost = function() {
                $scope.posts.push({
                    title: $scope.formContent,
                    upvotes: 0

                });
            }
        }
    ]);
