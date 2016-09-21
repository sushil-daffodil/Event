/**
 * Created with IntelliJ IDEA.
 * User: Sushil
 * Date: 5/6/14
 * Time: 10:30 AM
 * To change this template use File | Settings | File Templates.
 */

app.directive('find',[function($scope)
{
    return{
        restrict:"E",
        replace:true,
        template:'<div class="box"> '+
           ' <h2>  Find the record in database <br> </h2>'+
            'Name:   <select ng-options="value.name for value in a" ng-model="selectedName" required >'+

               ' <option value="">-- choose Name--</option>'+

           ' </select>  <br>'+

           ' Id:       <select ng-options="value.id for value in a" ng-model="selectedName" required >'+
                   ' <br>'+
                       ' <option value="">-- choose Id--</option>'+

                    '</select>'+
               ' </div>'
    }
}])

app.directive('insert',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:' <div class="box">'+
           ' <h2>Insert User <br> </h2>' +

       'Name:    <input type="text" ng-model="text1">  <br>'+
           ' Email:    <input type="text" ng-model="email">   <br>'+
        'Password:    <input type="text" ng-model="id">   <br>'+
                   ' <button ng-click="insert()">Insert</button>'+
             '<div ng-model="msg">'+"{{msg}}"+'</div>'+
        '<div> <a href='+"/index.html"+'>Login</a></div>'+
                '</div>'
    }
}])
app.directive('login',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:'<div class="box">'+
        ' <h2>Login <br> </h2>' +

        'Name:    <input type="text" ng-model="text1">  <br>'+
        'Password:    <input type="text" ng-model="id">   <br>'+
        ' <button ng-click="login()">Login</button>'+
        '<div ng-model="msg">'+"{{msg}}"+'</div>'+
        '<div> <a href='+"/insert.html"+'>Reigster</a></div>'+
        '</div>'

    }
}])

app.directive('logout',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:'<div class="box">'+
        ' <button ng-click="logout()">Logout</button>'+
        '<div ng-model="msg">'+"{{msg}}"+'</div>'+
        '<div> <a href='+"/index.html"+'>Login</a></div>'+
        '</div>'

    }
}])

app.directive('delete',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:' <div class="box">'+
           ' <h2> Delete a record in database <br> </h2>'+

            '<select ng-options="value.name for value in a" ng-model="selectedName1" required >'+

                '<option value="">-- choose Name--</option>'+

            '</select>'+

            '<button ng-click="delete(selectedName1)">Delete</button> '+
        '</div>'
    }
}])




app.directive('update',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:' <div class="box"> '+
            '<h2>  Update a record in database <br>   </h2>'+

       'Name:    <input type="text" ng-model="text3">  <br>'+
           ' Password:    <input type="text" ng-model="id">   <br>'+
                    '<button ng-click="update()">Login</button>' +
               ' </div>'
    }
}]) ;


