//ng.js
var $base_url = "http://fangmingdesign.net:8080";

$(document).ready(function(){
    $(".content-text img").each(function(){
        var thishref = "";
        thishref = $(this).prop('src');
        //$(this).before('<a class="example-image-link" href="'+thishref+'" data-lightbox="example-set">');
        //$(this).after('</a>');
        $(this).addClass("example-image");
        $(this).wrap('<a class="example-image-link" href="'+thishref+'" data-lightbox="example-1"></a>');
    });
    // $("img.lazy").lazyload();

  //学生列表收起展开 
  $('.student-list').click(function(){
        $(this).parents('.student-box').children('.student-hide').slideToggle().parents('.student-box').siblings('.student-box').children('.student-hide').hide();
    })
    $('#post-now').click(function(){
      $('html,body').animate({scrollTop:$('#post-now').offset().top},500)
    })
    $('#post-2015').click(function(){
      $('html,body').animate({scrollTop:$('#post-2015').offset().top},500)
    })
    $('#post-2014').click(function(){
      $('html,body').animate({scrollTop:$('#post-2014').offset().top},500)
    })
    $('#post-2013').click(function(){
      $('html,body').animate({scrollTop:$('#post-2013').offset().top},500)
    })
    $('#post-2012').click(function(){
      $('html,body').animate({scrollTop:$('#post-2012').offset().top},500)
    })
    $('#post-2011').click(function(){
      $('html,body').animate({scrollTop:$('#post-2011').offset().top},500)
    })
    $('#post-2010').click(function(){
      $('html,body').animate({scrollTop:$('#post-2010').offset().top},500)
    })
    $('#post-2009').click(function(){
      $('html,body').animate({scrollTop:$('#post-2009').offset().top},500)
    })
    $('#under-2014').click(function(){
      $('html,body').animate({scrollTop:$('#under-2014').offset().top},500)
    })
    $('#under-2013').click(function(){
      $('html,body').animate({scrollTop:$('#under-2013').offset().top},500)
    })
    $('#under-2012').click(function(){
      $('html,body').animate({scrollTop:$('#under-2012').offset().top},500)
    })
    $('#under-2011').click(function(){
      $('html,body').animate({scrollTop:$('#under-2011').offset().top},500)
    })
    $('#under-2010').click(function(){
      $('html,body').animate({scrollTop:$('#under-2010').offset().top},500)
    })
    $('#under-2009').click(function(){
      $('html,body').animate({scrollTop:$('#under-2009').offset().top},500)
    })
    $('#intern-now').click(function(){
      $('html,body').animate({scrollTop:$('#itern-now').offset().top},500)
    })

        // 当前标题隐藏其他标题显示
        /*$('.student-list').click(function(){
            $(this).parents('.student-box').children('.student-list').hide().parents('.student-box').siblings('.student-box').children('.student-list').show();
        })*/
});
var uxlab = angular.module('uxlabApp', []);
uxlab.controller('centerCtrl', function($scope, $http) {
    /*$http.get("http://fangmingdesign.net:8080/team/get_students/")
    .success(function(response) {
         $scope.students = response['result'];
    });*/
    $scope.base_url = $base_url;
    //研究生
    $http.get($base_url+"/team/get_students_by_education_and_graduate/postgraduate/now/")
    .success(function(response) {
    $scope.postgraduate_now = response['result'];
    });

    $http.get($base_url+"/team/get_students_by_education_and_graduate/postgraduate/2015/")
    .success(function(response) {
    $scope.postgraduate_2015 = response['result'];
    });

    $http.get($base_url+"/team/get_students_by_education_and_graduate/postgraduate/2014/")
    .success(function(response) {
    $scope.postgraduate_2014 = response['result'];
    });

    $http.get($base_url+"/team/get_students_by_education_and_graduate/postgraduate/2013/")
    .success(function(response) {
    $scope.postgraduate_2013 = response['result'];
    });

    $http.get($base_url+"/team/get_students_by_education_and_graduate/postgraduate/2012/")
    .success(function(response) {
    $scope.postgraduate_2012 = response['result'];
    });

    $http.get($base_url+"/team/get_students_by_education_and_graduate/postgraduate/2011/")
    .success(function(response) {
    $scope.postgraduate_2011 = response['result'];
    });

    $http.get($base_url+"/team/get_students_by_education_and_graduate/postgraduate/2010/")
    .success(function(response) {
    $scope.postgraduate_2010 = response['result'];
    });

    $http.get($base_url+"/team/get_students_by_education_and_graduate/postgraduate/2009/")
    .success(function(response) {
    $scope.postgraduate_2009 = response['result'];
    });

    //本科生
    $http.get($base_url+"/team/get_students_by_education_and_graduate/undergraduate/2014/")
    .success(function(response) {
    $scope.undergraduate_2014 = response['result'];
    })

    $http.get($base_url+"/team/get_students_by_education_and_graduate/undergraduate/2013/")
    .success(function(response) {
    $scope.undergraduate_2013 = response['result'];
    })

    $http.get($base_url+"/team/get_students_by_education_and_graduate/undergraduate/2012/")
    .success(function(response) {
    $scope.undergraduate_2012 = response['result'];
    })

    $http.get($base_url+"/team/get_students_by_education_and_graduate/undergraduate/2011/")
    .success(function(response) {
    $scope.undergraduate_2011 = response['result'];
    })

    $http.get($base_url+"/team/get_students_by_education_and_graduate/undergraduate/2010/")
    .success(function(response) {
    $scope.undergraduate_2010 = response['result'];
    })

    $http.get($base_url+"/team/get_students_by_education_and_graduate/undergraduate/2009/")
    .success(function(response) {
    $scope.undergraduate_2009 = response['result'];
    })

    //实习生
    $http.get($base_url+"/team/get_students_by_education_and_graduate/intern/2015/")
    .success(function(response) {
    $scope.intern_2015 = response['result'];
    })

    $http.get($base_url+"/team/get_scholars/")
    .success(function(response) {
        $scope.scholars = response['result'];
        //$scholar_description = response['result'][0].description;
        // $(".scholar_description").html(response['result'][0].description);
        //console.log(response['result'][0].description);
    });

    $http.get($base_url+"/team/get_teachers/")
    .success(function(response) {
        $scope.teachers = response['result'];
    });
});

uxlab.filter('out_label', function () {
    return function (input) {
        var output = '';
        var array1 = new Array();
        if(input.indexOf("<br>") >= 0){
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

// var design = angular.module('designApp', []);
uxlab.controller('designCtrl', function($scope, $http) {
    $scope.base_url = $base_url;
    $http.get($base_url+"/design/get_designs/innovative/name/")
    .success(function(response) {
         $scope.innovatives = response['result'];
    });

    $http.get($base_url+"/design/get_designs/service/name/")
    .success(function(response) {
         $scope.services = response['result'];
    });

    $http.get($base_url+"/design/get_designs/ui/name/")
    .success(function(response) {
         $scope.uis = response['result'];
    });

    $http.get($base_url+"/design/get_design_content")
    .success(function(response) {
        $scope.design_content = response['result'];
    });
});

// uxlab.filter('design_content_filter', function () {
//     return function (input) {
//         var output = '';
//         if(input == '.0'){
//           output = '';
//         }else{
//           output = input;
//         }
//         return output;
//     }
// });

// uxlab.filter('design_content_title', function () {
//     return function (input) {
//         var output = '';
//         if(input.length > 0){
//           output = '设计内容';
//         }else{
//           output = '';
//         }
//         return output;
//     }
// });

uxlab.filter('filter1', function(){
    return function(item){
        angular.forEach(items,function(item, i){
            item = i+'.'+ item;
            console.log(item);
            items[i] = item;
        });
        return items;
    }
});

    /*$(function(){
    $("img.lazy").lazyload({effect:"fadeIn"});
    }*/

uxlab.controller('researchCtrl', function($scope, $http) {
    $scope.base_url = $base_url;
    $http.get($base_url+"/achievement/get_country_projects/")
    .success(function(response) {
         $scope.country_projects = response['result'];
    });

    $http.get($base_url+"/achievement/get_company_projects/")
    .success(function(response) {
         $scope.company_projects = response['result'];
    });

    $http.get($base_url+"/achievement/get_essays/")
    .success(function(response) {
         $scope.essays = response['result'];
    });

    $http.get($base_url+"/achievement/get_patents/")
    .success(function(response) {
         $scope.patents = response['result'];
    });

    $http.get($base_url+"/achievement/get_softwares/")
    .success(function(response) {
         $scope.softwares = response['result'];
    });

    $http.get($base_url+"/achievement/get_prizes/")
    .success(function(response) {
         $scope.prizes = response['result'];
    });
});

uxlab.controller('educationCtrl', function($scope, $http) {
    $scope.base_url = $base_url;
    $http.get($base_url+"/team/get_books/")
    .success(function(response) {
         $scope.books = response['result'];
    });
    $http.get($base_url+"/team/get_meetings/")
    .success(function(response) {
         $scope.meetings = response['result'];
    });
    $http.get($base_url+"/team/get_links_for_resource/")
    .success(function(response) {
         $scope.resources = response['result'];
    });
    $http.get($base_url+"/team/get_links_for_research_institute/")
    .success(function(response) {
         $scope.institutes = response['result'];
    });
});

uxlab.controller('newsCtrl', function($scope, $http) {
    $scope.base_url = $base_url;
    $http.get($base_url+"/info/get_info_list")
    .success(function(response) {
      $scope.news = response['result'];
    });
});

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

    uxlab.controller('pCtrl', function($scope, $http){
    $scope.base_url = $base_url;
    $http.get($base_url+"/info/get_info_by_id/"+$news_id)
    .success(function(response) {
      // $scope.news = response['result'];
      // $scope.news_id = response['result'][0]._id;
      $scope.news_title = response['result'][0].title;
      $news_cover_url = response['result'][0].thumbnail;
      // $scope.news_cover_url = response['result'][0].thumbnail;//图片
      // $scope.news_summary = response['result'][0].brief;//摘要
      // $scope.news_date = response['result'][0].idate;
      // $scope.news_content = response['result'][0].article;//正文
      $(".content-text").html(response['result'][0].article);
      $(".news_cover_url").attr("src",$base_url + $news_cover_url);

      if($(".content-text img").length){
        $(".content-text img").each( function() {
          if($(this).attr("src").substring(0,4) == "http"){

          }else{
            $(this).attr("src",$base_url+$(this).attr("src"));
            $(this).css({"height":"auto", "width":"100%" });
          }
        });
      }
    });
    });
//旧的mobile.js
$(function() {
    


    //菜单栏选择 -------------------------------------------------------------------------------
    $(".header").click(function() {
        if ($(".header").hasClass('down')) {         
            slideUp();
        } else {            
            slideDown();
        }        
    });

    var current = -1;
    var itemOffset = new Array();
    $(".nav-title").each(function(index) {
        var top = $(this).offset().top;
        //alert("top:"+top);
        var height = $(this).height();
        //alert("height:"+height);
        itemOffset[index] = {
            offset : top + height,
            nav_title : $(this),
            header_title : $("#chooseChannel ul li").eq(index)
        };
    });
    //bind function
    $(window).bind("scroll", scrollItem);

    $("#chooseChannel ul li a").click(function(e) {
        e.preventDefault();
        var element = $(this);
        var target = $(this).attr("href");
        if ($(target)[0]) {
            $(window).unbind("scroll");
            $('html, body').animate({
                scrollTop : $(target).offset().top - 30
            }, 600, function() {
                $("#chooseChannel ul li a").removeClass('ui-btn-active');
                element.addClass("ui-btn-active");
                $(window).bind("scroll", scrollItem);
                scrollItem();
            });
            slideUp();
        }
    });

    //PC Version
    $(".pc_version").click(function(e) {
        e.preventDefault();
        $.cookie("UXLAB_VERSION", "PC", {
            expires : 7
        });
        var href = $(this).find("a").attr("href");
        location.href = href;
    });
    $(".container").click(function(){
        $(".header").removeClass("down");
        if($(".header img:eq(0)").css("display")=="none"){
        	$(".header img").toggle();
        }
        $("#chooseChannel").stop(true,true).animate({"top":"-100%"},200);
    });

    function scrollItem() {
        //slideUp();
        var top = $(window).scrollTop();
        for (var i = 0; i < itemOffset.length; i++) {
            if (top > itemOffset[i].offset - 120) {
                if (current != i) {
                    current = i;
                    $("#chooseChannel ul li a").removeClass('ui-btn-active');
                    itemOffset[i].header_title.find("a").addClass("ui-btn-active");
                    var title = itemOffset[i].header_title.find("a").text();
                    $(".header img").each(function(){
                    	var img_src = $(this).attr("src");
                    	var img_style=$(this).attr("style");
                   		 title += "<img style='"+img_style+"' src='" + img_src + "' />";
                    });
                    
                    $(".header").html(title);
                }
            }
        }
    }
    function slideUp(){
        $(".header").removeClass("down");
        $(".header img").toggle();
        $("#chooseChannel").stop(true,true).animate({"top":"-100%"},200);
    }
    function slideDown(){
        $(".header").addClass("down");
        $(".header img").toggle();
        $("#chooseChannel").stop(true,true).animate({"top":"45px"},200);
    }
    //PC Version
    $(".pc_version").click(function(e){
        e.preventDefault();
        var ua = navigator.userAgent, mobileAgents = ["240x320", "acer", "acoon", "acs-", "abacho", "ahong", "airness", "alcatel", "amoi", "android", "anywhereyougo.com", "applewebkit/525", "applewebkit/532", "asus", "audio", "au-mic", "avantogo", "becker", "benq", "bilbo", "bird", "blackberry", "blazer", "bleu", "cdm-", "compal", "coolpad", "danger", "dbtel", "dopod", "elaine", "eric", "etouch", "fly ", "fly_", "fly-", "go.web", "goodaccess", "gradiente", "grundig", "haier", "hedy", "hitachi", "htc", "huawei", "hutchison", "inno", "ipad", "ipaq", "ipod", "jbrowser", "kddi", "kgt", "kwc", "lenovo", "lg ", "lg2", "lg3", "lg4", "lg5", "lg7", "lg8", "lg9", "lg-", "lge-", "lge9", "longcos", "maemo", "mercator", "meridian", "micromax", "midp", "mini", "mitsu", "mmm", "mmp", "mobi", "mot-", "moto", "nec-", "netfront", "newgen", "nexian", "nf-browser", "nintendo", "nitro", "nokia", "nook", "novarra", "obigo", "palm", "panasonic", "pantech", "philips", "phone", "pg-", "playstation", "pocket", "pt-", "qc-", "qtek", "rover", "sagem", "sama", "samu", "sanyo", "samsung", "sch-", "scooter", "sec-", "sendo", "sgh-", "sharp", "siemens", "sie-", "softbank", "sony", "spice", "sprint", "spv", "symbian", "tablet", "talkabout", "tcl-", "teleca", "telit", "tianyu", "tim-", "toshiba", "tsm", "up.browser", "utec", "utstar", "verykool", "virgin", "vk-", "voda", "voxtel", "vx", "wap", "wellco", "wig browser", "wii", "windows ce", "wireless", "xda", "xde", "zte"];
        for (var i = 0; i < mobileAgents.length; i++) {
            if (ua.toLowerCase().indexOf(mobileAgents[i]) > -1) {
                $.cookie("UXLAB_VERSION","PC", { expires: 1 });            
                break;
            }            
        }        
        var href=$(this).find("a").attr("href");
        location.href=href;
    });   
});