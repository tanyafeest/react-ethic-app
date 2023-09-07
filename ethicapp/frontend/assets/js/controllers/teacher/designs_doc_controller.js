/*eslint func-style: ["error", "expression"]*/
export let DesignsDocController = ($scope, $http, Notification, $timeout) => { 
    var self = $scope;
    self.busy = false;
    self.documents = [];

    self.init = function(){
        self.requestDesignDocuments();
    };

    self.uploadDesignDocument = function (event) { //Work in progress
        self.busy = true;
        var fd = new FormData(event.target);
        $http.post("upload-design-file", fd, {
            transformRequest: angular.identity,
            headers:          { "Content-Type": undefined }
        }).success(function (data) {
            if (data.status == "ok") {
                $timeout(function () {
                    //Notification.success("Documento cargado correctamente");
                    event.target.reset();
                    self.busy = false;
                    //self.shared.updateDocuments();
                    self.requestDesignDocuments();
                }, 2000);
            }
        });
    };
    
    self.requestDesignDocuments = function ( ) {
        var postdata = { dsgnid: designId.id};
        $http({
            url: "designs-documents", method: "post", data: postdata
        }).success(function (data) {
            self.documents = data;
        });
    };


    self.deleteDesignDocument = function (dsgnid) {
        var postdata = { dsgnid: dsgnid };
        $http({
            url: "delete-design-document", method: "post", data: postdata
        }).success(function () {
            self.requestDesignDocuments();
        });
    };

    self.getPathname = function(path){
        var split = path.split("/");
        return split[split.length - 1];
    };

    self.init();
};