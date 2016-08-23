var NewPostController = function($rootScope, $http, ImageProcessService){
	var self = this;
	//a simple model to bind to and send to the server
    self.model = {
        title: "",
        content: "",
        image: ""
    };

    //an array of files selected
    self.files = [];

    //listen for the file selected event
    $rootScope.$on("fileSelected", function (event, args) {
    		// console.log(args.file)
        $rootScope.$apply(function () {            
            //add the file object to the scope's files collection
            self.files.push(args.file);
            self.renderImage(args.file);
        });
    });

    this.renderImage = function (file) {
      // generate a new FileReader object
      var reader = new FileReader();

      // inject an image with the src url
      reader.onload = function(event) {
        src_url = event.target.result;
        self.model.image = src_url;
        $('#uploaded-image').html("<img src='" + src_url + "' alt='uploaded' height='300' width='400' />")
      }
     
      // when the file is read it triggers the onload event above.
      reader.readAsDataURL(file);
    }


    
    //the save method
    self.save = function() {
    		self.model.title = this.title;
        self.model.content = this.content;

        $http({
            method: 'POST',
            url: "/Api/PostStuff",
            //IMPORTANT!!! You might think self should be set to 'multipart/form-data' 
            // but this is not true because when we are sending up files the request 
            // needs to include a 'boundary' parameter which identifies the boundary 
            // name between parts in this multi-part request and setting the Content-type 
            // manually will not set this boundary parameter. For whatever reason, 
            // setting the Content-type to 'false' will force the request to automatically
            // populate the headers properly including the boundary parameter.
            headers: { 'Content-Type': false },
            //This method will allow us to change how the data is sent up to the server
            // for which we'll need to encapsulate the model data in 'FormData'
            transformRequest: function (data) {
                var formData = new FormData();
                //need to convert our json object to a string version of json otherwise
                // the browser will do a 'toString()' on the object which will result 
                // in the value '[Object object]' on the server.
                formData.append("model", angular.toJson(data.model));
                //now add all of the assigned files
                for (var i = 0; i < data.files.length; i++) {
                    //add each file to the form data and iteratively name them
                    formData.append("file" + i, data.files[i]);
                }
                return formData;
            },
            //Create an object that contains the model and files which will be transformed
            // in the above transformRequest method
            data: self.model
        }).
        success(function (data, status, headers, config) {
            alert("success!");
        }).
        error(function (data, status, headers, config) {
            alert("failed!");
        });
    };
}

angular
	.module('app')
	.controller('NewPostController', NewPostController);