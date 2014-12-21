var app = angular.module('rotator', []);

app.directive('imagerotator', function(){
    return {
        restrict : 'E',
        templateUrl : 'rotator.html',
        link : function(scope, element, attrs) {
            var i = 1;

            scope.images = attrs.urls.split(',');
            scope.rotateLeft = function() {
                --i === 0? i = 51 : i;
                scope.image = scope.images[i];
            };

            scope.rotateRight = function() {
                ++i === 53? i = 0 : i;
                scope.image = scope.images[i];
            };

            scope.FORMAT = '.png';
            scope.image = 1;
        },
        replace : true
    };
});
