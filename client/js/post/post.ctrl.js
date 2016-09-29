var PostController = function($stateParams, GlobalFactory, postsModel, $window, $location, comments){
	// // If we got here from a url of /contacts/42
 //  expect($stateParams).toBe({contactId: "42"});
 var self = this;
 var post_id = $stateParams.id;

  // self.comments = [];
  // self.commentName = "";
  // self.commentContent = "";
  // self.post = postsModel.getPost(post_id);
   

  // self.comments = comments.data
  // console.log(self.comments)
  // $location.hash('top');

 function initCtrl(){
  self.comments = [];
  self.commentName = "";
  self.commentContent = "";
  self.post = postsModel.getPost(post_id);
   

  self.comments = comments.data
  console.log(self.comments)
  $location.hash('top');
 }

 function initComment() {
 	return {
	 	username: "",
	 	content: "",
	 	created_at: new Date().toString('dddd, MMMM ,yyyy hh:mm').replace(/GMT-.*/, ""),
	 	post_id: ""
	 };
 }

 initCtrl()

  

  self.addComment = function() {
  	var comment = initComment();
  	comment.username = self.commentName;
  	comment.content = self.commentContent;
  	comment.post_id = post_id;
  	
  	var res = postsModel.uploadComment(post_id, comment);
  	res.success(function(data){
  		if (data.post_id) {
  			
  			self.comments.push(comment);
        console.log(self.comments)
  			self.commentName = "";
			  self.commentContent = "";
  		}
  	})
    .fail(function(error) {
      console.log(error)
    });
  }

	self.formatDate = function(date) {
		return GlobalFactory.formatDate(date);
	};
}

angular
	.module('app')
	.controller('PostController', PostController);