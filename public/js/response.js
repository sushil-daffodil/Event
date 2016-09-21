

var app=angular.module("myApp",[]);
app.controller("ctrl",function($scope, $http,$log, $window)
{
    $scope.hello="hello to response file";
    $scope.text="enter a word";
    $scope.a=[];
  //  $scope.msg='';
    $scope.get=function()
    {
        var url="http://127.0.0.1:5000/get";
       if(window.XMLHttpRequest){
            request=new XMLHttpRequest();
        }
        else if(window.ActiveXObject){
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }
        try
        {
            request.onreadystatechange=getInfo;
            request.open("GET",url,false);
            request.send();
        }
        catch(e)
        {
            alert("Unable to connect to server");
        }


    function getInfo(){
        if(request.readyState==4){
            var val=request.responseText;

            $scope.a=angular.fromJson(val);

        }
    }
    }

    $scope.insert=function()
    {
        var name=$scope.text1;
        var id=$scope.id;
        var email = $scope.email;
        var json={"options":{"name":name,"pass":id,"email":email}}
        $http.post('/insert', json)
            .success(function(response) {
                // clear the form so our user is ready to enter another
                console.log(response);

                if (response['code'] == '200') {
                    if(response['msg']){
                        $scope.msg=response['msg']
                    }
                }
                //else {
                //    if(response['msg']){
                //        $scope.msg=response['msg']
                //    }
                //}
            })
            .error(function(response) {
                console.log('Error: ' + response);
            });
    }


    $scope.login=function()
    {
        var name=$scope.text1;
        var id=$scope.id;
        var json={"options":{"name":name,"pass":id}}
        $http.post('/connect', json)
            .success(function(response) {
                // clear the form so our user is ready to enter another
                console.log(response);
                if (response['code'] == '200') {
                    var url = "http://" + $window.location.host + "/firstpage.html";
                    $log.log(url);
                    $window.location.href = url;
                }
                else {
                    if(response['msg']){
                        $scope.msg=response['msg']
                        console.log($scope.msg)
                    }
                }
            })
            .error(function(response) {
                console.log('Error: ' + response);
            });
    }

    $scope.logout=function()
    {

        $http.post('/disconnectWithPromise')
            .success(function(response) {
                // clear the form so our user is ready to enter another
                console.log(response);
                    if(response['msg']){
                        $scope.msg=response['msg']
                        console.log($scope.msg)

                }
            })
            .error(function(response) {
                console.log('Error: ' + response);
            });
    }

    $scope.delete=function(h)
    {
        var name= h.name;
        var url="http://127.0.0.1:5000/delete?name="+name;
        alert("hello to "+url)
        if(window.XMLHttpRequest){
            request=new XMLHttpRequest();
        }
        else if(window.ActiveXObject){
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }

        try
        {
            request.onreadystatechange=getInfo;
            request.open("GET",url,false);
            request.send();
        }
        catch(e)
        {
            alert("Unable to connect to server");
        }
    }

    $scope.update=function()
    {

        var name=$scope.text3;
        var id=$scope.id;
        var url="http://127.0.0.1:5000/update?name="+name+"&id="+id;
        alert("hello to "+url);
        $scope.text3="";
        $scope.id="";
        if(window.XMLHttpRequest){
            request=new XMLHttpRequest();
        }
        else if(window.ActiveXObject){
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }

        try
        {
            request.onreadystatechange=getInfo;
            request.open("GET",url,false);
            request.send();
        }
        catch(e)
        {
            alert("Unable to connect to server");
        }
    }

    function getInfo(){
        if(request.readyState==4){
            var val=request.responseText;
            alert(val);
            $scope.get();
            // document.getElementById('data').innerHTML=val;

        }
    }



    $scope.set=function(i)
    {

         name2= i.name;
        alert("index is "+ name2);
        for(var i=0;i<$scope.a.length;i++){
            if(angular.equals($scope.a[i].name, name2)){
                alert("record Exist in the data base");
                return true;
            }

        }
        alert("record not exist in database");
        return false;

    }

})