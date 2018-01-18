app.controller('HomeController', HomeController);

HomeController.$inject = ['$rootScope', '$location'];
/**
 * Inject team roster into the page rootScope
 * @param {$scope} $rootScope page scope
 */
function HomeController($rootScope, $location) {
    //Inject roster to $scope      
    $rootScope.alignement = winnipeg['roster'];
    //Inject team pictures urls to $scope  
    $rootScope.team_img_urls = winnipeg['team_extra_info']['url'];

    $rootScope.isInjured = function($player) {
        if ($player.phase_status == 'active') {
            return 'injured';
        }
        return;
    }
    /**
     * Redirect's user to player's profile
     * @param  {Javascript object} $player selected player data (from the JSON file)
     * @return {void}         redirect to player page
     */
    $rootScope.loadPlayerProfile = function($player) {

        $rootScope.selected_player = $player;
        $location.path('joueur');
    }
}