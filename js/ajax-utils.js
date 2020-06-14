(function (global) {

    var ajaxUtils = {};

    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!")
            return(null);
        }   
    }

    ajaxUtils.sendGetRequest =
        function (requestURL, responseHandler) {
            var request = getRequestObject();
            request.onreadystatechange =
            function () {
                handelResponse(request, responseHandler);
        };
        request.open("GET", requestURL, true);
        request.send(null);
    };

    function handelResponse(request, responseHandler) {
        if ((request.readyState == 4) && (request.status == 200)) {
            responseHandler(request);
        }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);