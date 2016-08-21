'use strict';

var CustomHeader = {
	templateUrl: 'customHeader/templates/views/customHeader.html'
}


angular
	.module('app')
	.component('customHeader', CustomHeader);