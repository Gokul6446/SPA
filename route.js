var app=angular.module('app',['ngMaterial','ngMessages','ngRoute']);

app.config(['$routeProvider',function($routeProvider)
{
	$routeProvider


	.when('/',
	{
        template:''
	})

	.when('/about',
	{
        //template:'This is my message'
        templateUrl:'about.html',
        controller:'message',
        caseInsensitiveMatch:true
	})

     .when('/contact',
	{
        templateUrl:'contact.html',
        controller:'con',
        caseInsensitiveMatch:true
        //redirectTo:"/"
	 /*redirectTo:function()
	 {
	 	alert("This page not implemented . will it take to first message");
	 	return '/';
	 }*/
	})
     .when ('/gallery',
     {
     	templateUrl:'gallery.html',
     	controller:'gal',
     	caseInsensitiveMatch:true
     })

	.otherwise({
		template:"Please click the particular links"
	})
}]);

app.controller('message',['$scope',function($scope)
{
	
}]);
app.controller('gal',['$scope',function($scope)
{


  $scope.imagePath='s1.jpg';
  $scope.imagePath1='s2.jpg';
  $scope.imagePath2='s3.jpg';
  $scope.imagePath3='s4.jpg';

}]);
app.controller('con',['$scope',function($scope)
{
 $scope.genders = [ "male","female"];

$scope.submitted=false;

  $scope.submitForm=function()
  {
    $scope.submitted=true;

    if($scope.userForm.$valid)
    {
      alert('OK');
       console.log($scope.user);
    }
    else
    {
      alert('Error');
    }

  };
$scope.user =
 {
    name:"",
    username:"",
    email:"",
    number:""
  }
  var val = angular.copy($scope.user);

  $scope.reset=function()
  {
    $scope.user=angular.copy(val);
    // $scope.userForm.$setPristine();
  };

  
}]);
