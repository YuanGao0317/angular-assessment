function ImageProcessService() {
    this.renderImage = function (file) {
		  // generate a new FileReader object
		  var reader = new FileReader();

		  // inject an image with the src url
		  reader.onload = function(event) {
		    src_url = event.target.result
		    $('#uploaded-image').html("<img src='" + src_url + "' alt='uploaded' height='300' width='400' />")
		  }
		 
		  // when the file is read it triggers the onload event above.
		  reader.readAsDataURL(file);
		}
}

angular
	.module('app')
	.service('ImageProcessService', ImageProcessService);