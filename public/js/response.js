/**
 * Created with IntelliJ IDEA.
 * User: Sushil
 * Date: 5/5/14
 * Time: 11:48 AM
 * To change this template use File | Settings | File Templates.
 */

var app=angular.module("myApp",[]);
app.controller("ctrl",function($scope)
{
          $scope.hello="hello to response file";

            $scope.text="enter a word";
        $scope.a=[];

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
        var url="http://127.0.0.1:5000/insert?name="+name+"&id="+id;
        alert("hello to "+url);
          $scope.text1="";
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

    $scope.delete=function(h)
    {

        var name= h.name;

        var url="http://127.0.0.1:5000/delete?name="+name;
        alert("hello to "+url);


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