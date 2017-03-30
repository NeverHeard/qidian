
//各个页面的angularjs的repeat函数

// angular.element(document).ready(function() {
// 	angular.bootstrap(document.getElementById("center"),["centerApp"]);
// 	angular.bootstrap(document.getElementById("design"),["designApp"]);
// 	angular.bootstrap(document.getElementById("education"),["educationApp"]);
// 	angular.bootstrap(document.getElementById("index"),["indexApp"]);
// 	angular.bootstrap(document.getElementById("new"),["newApp"]);
// 	angular.bootstrap(document.getElementById("p"),["pApp"]);
// 	angular.bootstrap(document.getElementById("research"),["researchApp"]);
// });
var $base_url = "http://fangmingdesign.net:8080/";

$(document).ready(function(){
	$(".content-text img").each(function(){
	var thishref = "";
		thishref = $(this).prop('src');
		$(this).addClass("example-image");
		$(this).wrap('<a class="example-image-link" href="'+thishref+'" data-lightbox="example-1"></a>');
	});
});

var uxlab = angular.module('uxlabApp', []);
    uxlab.controller('indexCtrl', function($scope, $http) {
        $http.get($base_url+"team/get_teachers/")
        .success(function(response) {
            $scope.teachers = response['result'];
            // console.log("-------"+response['result'].length); 获取循环次数
            // 动态设置div高度   教师
            var teachers_num = response['result'].length;
            // alert(teachers_num);
            if (document.getElementById("staff")) {
            var snum = Math.ceil(teachers_num/4);
              document.getElementById("staff").style.height = 420 * snum + 60 +"px";
             /* alert(sunm);*/
            }
            });
      
        $http.get($base_url+"team/get_scholars/")
        .success(function(response) {
          $scope.scholars = response['result'];

          // 动态设置div高度   学者
          var scholars_num = response['result'].length;
            if (document.getElementById("scholars")) {
            var shnum = Math.ceil(scholars_num/4);
              document.getElementById("scholars").style.height = 420 * shnum + 50 +"px";
              // alert(shunm);
            }

        });

        $http.get($base_url+"team/get_students_by_education_and_graduate/postgraduate/2015/")
        .success(function(response) {
          $scope.students = response['result'];

          // 动态设置div高度   2015学生
          var student_num = response['result'].length;
            if (document.getElementById("post-2015")) {
            var stunum = Math.ceil(student_num/4);
              document.getElementById("post-2015").style.height = 420 * stunum + 50 +"px";
              // alert(shunm);
            }
        });
     });

uxlab.filter('out_label', function () {
    return function (input) {
        var output = '';
        var array1 = new Array();
        if(input.indexOf("<br>" ) >= 0){
	        array1 = input.split('<br>');
	        array_length1 = array1.length;
		        for( var i=0; i<array_length1; i++ ) {
		           output = output + array1[i];
		        }
        }else{
          output = input;
        }
       return output;
    }
});

    uxlab.controller('designCtrl', function($scope, $http) {
	    $http.get($base_url+"design/get_designs/innovative/name")
	    .success(function(response) {
	      $scope.innovation = response['result'];

        // 获取了repeat循环的次数，然后动态增加div的高度
        var inn_num = response['result'].length;
            if (document.getElementById("inn_height")) {
              document.getElementById("inn_height").style.height = 440 * inn_num +"px";
              // alert(inn_num);
            }

	    });

	    $http.get($base_url+"design/get_designs/service/name")
	    .success(function(response) {
	      $scope.service = response['result'];
        // 获取了repeat循环的次数，然后动态增加div的高度
        var server_num = response['result'].length;
            if (document.getElementById("ser_height")) {
              document.getElementById("ser_height").style.height = 430 * server_num  +"px";
              // alert(server_num);
            }

	    });

	    $http.get($base_url+"design/get_designs/ui/name")
	    .success(function(response) {
	      $scope.ui = response['result'];
        // 获取了repeat循环的次数，然后动态增加div的高度。
        var ui_num = response['result'].length;
            if (document.getElementById("ui_height")) {
              document.getElementById("ui_height").style.height = 430 * ui_num + 80 +"px";
              // alert(ui_num);
            }

	    });

	    $http.get($base_url+"design/get_design_content")
	    .success(function(response) {
	      $scope.design_content = response['result'];
	    });
    });

uxlab.filter('design_content_filter_1', function () {
    return function (input) {
       	var output = '';
       	if(input == '.0'){
          output = '';
        }else{
          output = input;
        }
       	return output;
    }
});

uxlab.filter('design_content_title', function () {
    return function (input) {
        var output = '';
        if(input.length > 0){
          output = '设计内容';
        }else{
          output = '';
        }
        return output;
    }
});

    uxlab.controller('educationCtrl', function($scope, $http) {
	    $http.get($base_url+"team/get_meetings/")
	    .success(function(response) {
	        $scope.meetings = response['result'];
	    });

	    $http.get($base_url+"team/get_links_for_research_institute")
	    .success(function(response) {
	        $scope.institute = response['result'];
	    });

	    $http.get($base_url+"team/get_links_for_resource")
	    .success(function(response) {
	        $scope.resource = response['result'];
	    });

	    $http.get($base_url+"team/get_books")
	    .success(function(response) {
	        $scope.books = response['result'];
	    });
    });

	uxlab.controller('newCtrl', function($scope, $http) {
	    $http.get($base_url+"info/get_info_list")
	    .success(function(response) {
	      $scope.news = response['result'];
	   	});
  });

// p.html
var $news_id = getParam('news_id');
function getParam(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    return paramValue;
}

uxlab.controller('PCtrl', function($scope, $http) {
  	$http.get($base_url+"info/get_info_by_id/"+$news_id)
    .success(function(response) {
        $scope.news_title = response['result'][0].title;
        $news_cover_url = response['result'][0].thumbnail;
        $(".content-text").html(response['result'][0].article);
        $(".news_cover_url").attr("src",$base_url + $news_cover_url);
        if($(".content-text img").length){
        	$(".content-text img").each( function() {
	          	if($(this).attr("src").substring(0,4) == "http"){

	          	}else{
	            	$(this).attr("src",$base_url+$(this).attr("src"));
	            	$(this).css({"height":"auto"});
	          	}
        	});
      	}
    });
});

// research.html
    uxlab.controller('researchCtrl', function($scope, $http) {
      $http.get($base_url+"achievement/get_country_projects")
      .success(function(response) {
        $scope.country = response['result'];
      });

       $http.get($base_url+"achievement/get_company_projects")
      .success(function(response) {
        $scope.company = response['result'];
      });

       $http.get($base_url+"achievement/get_essays")
      .success(function(response) {
        $scope.essays = response['result'];
      });

      $http.get($base_url+"achievement/get_patents")
      .success(function(response) {
        $scope.patents = response['result'];
      });

      $http.get($base_url+"achievement/get_softwares")
      .success(function(response) {
        $scope.softwares = response['result'];
      });

      $http.get($base_url+"achievement/get_prizes")
      .success(function(response) {
        $scope.prizes = response['result'];
      });
    });