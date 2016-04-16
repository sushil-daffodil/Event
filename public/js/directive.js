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
           ' <h2>Insert a record in database <br> </h2>' +

       ' Enter the name:    <input type="text" ng-model="text1">  <br>'+
           ' Enter the id:    <input type="text" ng-model="id">   <br>'+
                   ' <button ng-click="insert()">Insert</button>'+
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

       ' Enter the name:    <input type="text" ng-model="text3">  <br>'+
           ' Enter the id:    <input type="text" ng-model="id">   <br>'+
                    '<button ng-click="update()">Update</button>' +
               ' </div>'
    }
}]) ;


//app.directive('update',[function($scope){
//    return{
//        restrict:"E",
//        replace:true,
//        template:' <div class="box"> '+
//            '<h2>  Update a record in database <br>   </h2>'+
//
//            ' Enter the name:    <input type="text" ng-model="text3">  <br>'+
//            ' Enter the id:    <input type="text" ng-model="id">   <br>'+
//            '<button ng-click="update()">Update</button>' +
//            ' </div>'
//    }
//}]) ;