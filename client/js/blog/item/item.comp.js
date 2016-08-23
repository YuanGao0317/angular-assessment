var ItemComponent = {
	bindings: {
		item: '='
	},
	transclude: true,
	templateUrl: 'blog/templates/partials/item.html',
	controller: function ($scope) {
		$scope.post = this.item;
	}
}

angular
	.module('app')
	.component('item', ItemComponent);