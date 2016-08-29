var PostController = function($stateParams, GlobalFactory, postsModel, $scope, $window, $rootScope, $location){
	// // If we got here from a url of /contacts/42
 //  expect($stateParams).toBe({contactId: "42"});
 var self = this;
 var post_id = $stateParams.id;
 self.commentName = "";
 self.commentContent = "";

 var data = $window.localStorage.getItem("comments");
 self.comments = JSON.parse(data) || [];
 $location.hash('top');

 function initComment() {
	
 	return {
	 	username: "",
	 	content: "",
	 	created_at: new Date().toString('dddd, MMMM ,yyyy hh:mm').replace(/GMT-.*/, ""),
	 	post_id: ""
	 };
 }

  self.post = postsModel.getPost(post_id);

  self.addComment = function() {
  	var comment = initComment();
  	comment.username = self.commentName;
  	comment.content = self.commentContent;
  	comment.post_id = post_id;
  	
  	var res = postsModel.uploadComment(comment);
  	res.success(function(data){
  		if (data.post_id) {
  			console.log(self.comments)
  			self.comments.push(comment);
  			$window.localStorage.setItem("comments", JSON.stringify(self.comments));
  			self.commentName = "";
			  self.commentContent = "";
  		}
  	});
  }

	self.formatDate = function(date) {
		return GlobalFactory.formatDate(date);
	};
}

angular
	.module('app')
	.controller('PostController', PostController);