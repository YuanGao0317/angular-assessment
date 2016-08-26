var ItemComponent = {
	bindings: {
		item: '='
	},
	transclude: true,
	templateUrl: 'blog/templates/partials/item.html',
	controller: function ($scope, $state, GlobalFactory) {
		$scope.post = this.item;

		$scope.formatDate = function(date) {
    	return GlobalFactory.formatDate(date);
    };
	}
}

angular
	.module('app')
	.component('item', ItemComponent);