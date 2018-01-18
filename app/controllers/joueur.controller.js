app.controller('JoueurController', JoueurController);

JoueurController.$inject = ['$rootScope', '$location'];

function JoueurController($rootScope, $location) {
    if (typeof $rootScope.selected_player === "undefined") {
        $location.path('home');
    }
    //Inject team pictures urls to $scope  
    $rootScope.team_img_urls = winnipeg['team_extra_info']['url'];

}