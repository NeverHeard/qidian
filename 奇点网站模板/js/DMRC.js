/**
 * @author trhuo
 */
var $base_url = "http://fangmingdesign.net:8080";

$(document).ready(function() {
    var index = 0;

    if ($(window).height() > $(document.body).height()) {
        var off = $(window).height() - $(document.body).height();
        $("#footer").css("margin-top", off + 31);
        $("#bg").css("height", $(window).height());
    }

    $(".fli").hover(function() {
        $("#inner").css("border-bottom", "3px solid #458aae");
    }, function() {
        $("#inner").css("border-bottom", "3px solid #999999");
    });

    $(".re").each(function() {
        var row = 0;
        var num = 0;
        index = $(".re").index(this);
        row = index / 4;
        num = index % 4;
        $(this).css("top", parseInt(row) * 80 + 80 + parseInt(row));
        $(this).css("left", 240 * num);
    });

    var count = $(".re").length;
    var numofrow = (count - 1) / 4;
    $("#module_resources").css("height", (parseInt(numofrow) + 1) * 80 + parseInt(numofrow));
    $(".re").hover(function() {
        $(this).css("background-color", "#458aae").css("color", "#ffffff");
        $(this).find("a").css("color", "#ffffff");
    }, function() {
        $(this).css("background-color", "#f7f7f7").css("color", "#000000");
        $(this).find("a").css("color", "#3867cc");
    });



    $(".link").each(function() {
        var row = 0;
        var num = 0;
        index = $(".link").index(this);
        row = index / 4;
        num = index % 4;
        $(this).css("top", parseInt(row) * 80 + parseInt(row));
        $(this).css("left", 240 * num);
    });

    var count1 = $(".link").length;
    var numofrow1 = (count1 - 1) / 4;
    $("#link").css("height", (parseInt(numofrow1) + 1) * 80 + 80 + parseInt(numofrow1));
    $(".link").hover(function() {
        $(this).css("background-color", "#458aae").css("color", "#ffffff");
        $(this).find("a").css("color", "#ffffff");
    }, function() {
        $(this).css("background-color", "#f7f7f7").css("color", "#000000");
        $(this).find("a").css("color", "#3867cc");
    });

    $(".mate").each(function() {
        var row = 0;
        var num = 0;
        index = $(".mate").index(this);
        row = index / 4;
        num = index % 4;
        $(this).css("top", parseInt(row) * 100 + 80 + parseInt(row));
        $(this).css("left", 240 * num);
    });

    var count2 = $(".mate").length;
    var numofrow2 = (count2 - 1) / 4;
    $("#partner").css("height", (parseInt(numofrow2) + 1) * 100 + 80 + parseInt(numofrow2));


    function disappear() {
        $(".meeting_spread").fadeOut("slow");
        $(".meeting_spread").fadeIn("slow");
    }

    $(".detail6").find(".txt_spread").click(function() {
        $(".innovation_spread").click();
    });
    $(".detail6").find(".txt_fold").click(function() {
        $(".innovation_fold").click();
    });
    $(".detail7").find(".txt_spread").click(function() {
        $(".innovation_fold").click();
    });
    $(".innovation_spread").click(function() {
        $(".detail6").find(".txt_spread").fadeOut("slow");
        $(".detail6").find(".txt_fold").fadeIn("slow");
        $(".detail6").unbind();
        $(".detail6").hover(function() {
            $(this).find(".txt_fold").fadeIn("slow");
        }, function() {
            $(this).find(".txt_fold").fadeOut("slow");
        });
        $(".innovation_fold").fadeIn("slow");
        $(".innovation_spread").fadeOut("slow");
        $(".detail7").slideDown("slow");
    });
    $(".innovation_fold").click(function() {
        $(".detail6").find(".txt_spread").fadeIn("slow");
        $(".detail6").find(".txt_fold").fadeOut("slow");
        $(".detail6").unbind();
        $(".innovation_fold	").fadeOut("slow");
        $(".innovation_spread").fadeIn("slow");
        $(".detail7").slideUp("slow");
    });

    $(".detail8").find(".txt_spread").click(function() {
        $(".service_spread").click();
    });
    $(".detail8").find(".txt_fold").click(function() {
        $(".service_fold").click();
    });
    $(".detail9").find(".txt_spread").click(function() {
        $(".service_fold").click();
    });

    $(".service_spread").click(function() {
        $(".detail8").find(".txt_spread").fadeOut("slow");
        $(".detail8").find(".txt_fold").fadeIn("slow");
        $(".detail8").unbind();
        $(".detail8").hover(function() {
            $(this).find(".txt_fold").fadeIn("slow");
        }, function() {
            $(this).find(".txt_fold").fadeOut("slow");
        });
        $(".service_fold").fadeIn("slow");
        $(".service_spread").fadeOut("slow");
        $(".detail9").slideDown("slow");
    });

    $(".service_fold").click(function() {
        $(".detail8").find(".txt_spread").fadeIn("slow");
        $(".detail8").find(".txt_fold").fadeOut("slow");
        $(".detail8").unbind();
        $(".service_fold").fadeOut("slow");
        $(".service_spread").fadeIn("slow");
        $(".detail9").slideUp("slow");
    });


    $(".detail10").find(".txt_spread").click(function() {
        $(".interaction_spread").click();
    });

    $(".detail10").find(".txt_fold").click(function() {
        $(".interaction_fold").click();
    });

    $(".detail11").find(".txt_spread").click(function() {
        $(".interaction_fold").click();
    });
    $(".interaction_spread").click(function() {
        $(".detail10").find(".txt_spread").fadeOut("slow");
        $(".detail10").find(".txt_fold").fadeIn("slow");
        $(".detail10").unbind();
        $(".detail10").hover(function() {
            $(this).find(".txt_fold").fadeIn("slow");
        }, function() {
            $(this).find(".txt_fold").fadeOut("slow");
        });
        $(".interaction_fold	").fadeIn("slow");
        $(".interaction_spread").fadeOut("slow");
        $(".detail11").slideDown("slow");
    });
    $(".interaction_fold").click(function() {
        $(".detail10").find(".txt_spread").fadeIn("slow");
        $(".detail10").find(".txt_fold").fadeOut("slow");
        $(".detail10").unbind();
        $(".interaction_fold").fadeOut("slow");
        $(".interaction_spread").fadeIn("slow");
        $(".detail11").slideUp("slow");
    });

    $(".detail12").find(".txt_spread").click(function() {
        $(".media_spread").click();
    });
    $(".detail12").find(".txt_fold").click(function() {
        $(".media_fold").click();
    });
    $(".detail13").find(".txt_spread").click(function() {
        $(".media_fold").click();
    });
    $(".media_spread").click(function() {
        $(".detail12").find(".txt_spread").fadeOut("slow");
        $(".detail12").find(".txt_fold").fadeIn("slow");
        $(".detail12").unbind();
        $(".detail12").hover(function() {
            $(this).find(".txt_fold").fadeIn("slow");
        }, function() {
            $(this).find(".txt_fold").fadeOut("slow");
        });
        $(".media_fold").fadeIn("slow");
        $(".media_spread").fadeOut("slow");
        $(".detail13").slideDown("slow");
    });

    $(".media_fold").click(function() {
        $(".detail12").find(".txt_spread").fadeIn("slow");
        $(".detail12").find(".txt_fold").fadeOut("slow");
        $(".detail12").unbind();
        $(".media_fold	").fadeOut("slow");
        $(".media_spread").fadeIn("slow");
        $(".detail13").slideUp("slow");
    });


    $(".detail4").eq(0).find(".txt_spread").click(function() {
        $(".achieve_spread").click();
    });

    $(".detail4").eq(0).find(".txt_fold").click(function() {
        $(".achieve_fold").click();
    });
    $(".detail4:gt(0)").find(".txt_spread").click(function() {
        $(".achieve_fold").click();
    });
    $(".achieve_spread").click(function() {
        $(".detail4").eq(0).find(".txt_spread").fadeOut("slow");
        $(".detail4").eq(0).find(".txt_fold").fadeIn("slow");
        $(".detail4").eq(0).unbind();
        $(".detail4").eq(0).hover(function() {
            $(this).find(".txt_fold").fadeIn("slow");
        }, function() {
            $(this).find(".txt_fold").fadeOut("slow");
        });
        $(".achieve_fold").fadeIn("slow");
        $(".achieve_spread").fadeOut("slow");
        $(".achi").slideDown("slow");
    });
    $(".achieve_fold").click(function() {
        $(".detail4").eq(0).find(".txt_spread").fadeIn("slow");
        $(".detail4").eq(0).find(".txt_fold").fadeOut("slow");
        $(".detail4").eq(0).unbind();
        $(".achieve_fold").fadeOut("slow");
        $(".achieve_spread").fadeIn("slow");
        $(".achi").slideUp("slow");
    });


    $(".detail15").find(".txt_spread").click(function() {
        $(".meeting_spread").click();
    });
    $(".detail15").find(".txt_fold").click(function() {
        $(".meeting_fold").click();
    });
    $(".detail16").find(".txt_spread").click(function() {
        $(".meeting_fold").click();
    });
    $(".meeting_spread").click(function() {
        $(".detail15").find(".txt_spread").fadeOut("slow");
        $(".detail15").find(".txt_fold").fadeIn("slow");
        $(".detail15").unbind();
        $(".detail15").hover(function() {
            $(this).find(".txt_fold").fadeIn("slow");
        }, function() {
            $(this).find(".txt_fold").fadeOut("slow");
        });
        $(".meeting_fold").fadeIn("slow");
        $(".meeting_spread").fadeOut("slow");
        $(".detail16").slideDown("slow");
    });

    $(".meeting_fold").click(function() {
        $(".detail15").find(".txt_spread").fadeIn("slow");
        $(".detail15").find(".txt_fold").fadeOut("slow");
        $(".detail15").unbind();
        $(".meeting_fold").fadeOut("slow");
        $(".meeting_spread").fadeIn("slow");
        $(".detail16").slideUp("slow");
    });


    $("#detail5").hover(function() {
        $(this).find(".txt_spread").fadeIn("slow");
    }, function() {
        $(this).find(".txt_spread").fadeOut("slow");
    });
    $(".detail23 .txt_spread").hide();
    $("#detail3").hover(function() {
        $(this).find(".txt_spread").fadeIn();
    }, function() {
        $(this).find(".txt_spread").fadeOut();
    });
    $(".detail7").hover(function() {
        $(this).find(".txt_spread").fadeIn();
    }, function() {
        $(this).find(".txt_spread").fadeOut();
    });
    $(".detail9").hover(function() {
        $(this).find(".txt_spread").fadeIn();
    }, function() {
        $(this).find(".txt_spread").fadeOut();
    });
    $(".detail11").hover(function() {
        $(this).find(".txt_spread").fadeIn();
    }, function() {
        $(this).find(".txt_spread").fadeOut();
    });
    $(".detail13").hover(function() {
        $(this).find(".txt_spread").fadeIn();
    }, function() {
        $(this).find(".txt_spread").fadeOut();
    });
    $(".detail4:gt(0)").hover(function() {
        $(this).find(".txt_spread").fadeIn();
    }, function() {
        $(this).find(".txt_spread").fadeOut();
    });
    $(".detail16").hover(function() {
        $(this).find(".txt_spread").fadeIn();
    }, function() {
        $(this).find(".txt_spread").fadeOut();
    });
    $(".detail23").hover(function() {
        $(".detail23").find(".txt_spread").fadeIn();
    }, function() {
        $(".detail23").find(".txt_spread").fadeOut();
    });

    /*
     * mobile check
     */

    var ua = navigator.userAgent,
        mobileAgents = ["240x320", "acer", "acoon", "acs-", "abacho", "ahong", "airness", "alcatel", "amoi", "android", "anywhereyougo.com", "applewebkit/525", "applewebkit/532", "asus", "audio", "au-mic", "avantogo", "becker", "benq", "bilbo", "bird", "blackberry", "blazer", "bleu", "cdm-", "compal", "coolpad", "danger", "dbtel", "dopod", "elaine", "eric", "etouch", "fly ", "fly_", "fly-", "go.web", "goodaccess", "gradiente", "grundig", "haier", "hedy", "hitachi", "htc", "huawei", "hutchison", "inno", "ipad", "ipaq", "ipod", "jbrowser", "kddi", "kgt", "kwc", "lenovo", "lg ", "lg2", "lg3", "lg4", "lg5", "lg7", "lg8", "lg9", "lg-", "lge-", "lge9", "longcos", "maemo", "mercator", "meridian", "micromax", "midp", "mini", "mitsu", "mmm", "mmp", "mobi", "mot-", "moto", "nec-", "netfront", "newgen", "nexian", "nf-browser", "nintendo", "nitro", "nokia", "nook", "novarra", "obigo", "palm", "panasonic", "pantech", "philips", "phone", "pg-", "playstation", "pocket", "pt-", "qc-", "qtek", "rover", "sagem", "sama", "samu", "sanyo", "samsung", "sch-", "scooter", "sec-", "sendo", "sgh-", "sharp", "siemens", "sie-", "softbank", "sony", "spice", "sprint", "spv", "symbian", "tablet", "talkabout", "tcl-", "teleca", "telit", "tianyu", "tim-", "toshiba", "tsm", "up.browser", "utec", "utstar", "verykool", "virgin", "vk-", "voda", "voxtel", "vx", "wap", "wellco", "wig browser", "wii", "windows ce", "wireless", "xda", "xde", "zte"];
    for (var i = 0; i < mobileAgents.length; i++) {
        if (ua.toLowerCase().indexOf(mobileAgents[i]) > -1) {
            var version = $.cookie("UXLAB_VERSION");
            if (version != "PC") {
                location.href = "center_mobile.html";
                break;
            }
        }
    }
    $(".phone_version").click(function(e) {
        e.preventDefault();
        $.cookie("UXLAB_VERSION", null);
        var href = $(this).find('a').attr("href");
        location.href = href;
    });


    $(".content-text img").each(function() {
        var thishref = "";
        thishref = $(this).prop('src');
        $(this).addClass("example-image");
        $(this).wrap('<a class="example-image-link" href="' + thishref + '" data-lightbox="example-1"></a>');
    });
});

//angularjs APP = uxlab
var uxlab = angular.module('uxlabApp', []);
uxlab.controller('indexCtrl', function($scope, $http) {
    $http.get($base_url + "/team/get_teachers/")
        .success(function(response) {
            $scope.teachers = response['result'];
            // console.log("-------"+response['result'].length); 获取循环次数
            // 动态设置div高度   教师
            var teachers_num = response['result'].length;
            var yushu = teachers_num % 4;
            var add_div = 4 - yushu;
            // alert(add_div)
            // console.log("-------"+response['result'].length);

            if (add_div == 4) {} else {
                for (var i = 1; i <= add_div; i++) {
                    $("#add_teacher_div").prepend("<div class='teacher'></div>");
                }
            }
            // alert(teachers_num);
            if (document.getElementById("staff")) {
                var snum = Math.ceil(teachers_num / 4);
                document.getElementById("staff").style.height = 420 * snum + 60 + "px";
                /* alert(sunm);*/
            }
        });

    $http.get($base_url + "/team/get_scholars/")
        .success(function(response) {
            $scope.scholars = response['result'];

            // 动态设置div高度   学者
            var scholars_num = response['result'].length;
            var yushu = scholars_num % 4;
            var add_div = 4 - yushu;
            if (add_div == 4) {} else {
                for (var i = 1; i <= add_div; i++) {
                    $("#add_scholar_div").prepend("<div class='teacher'></div>");
                }
            }
            if (document.getElementById("scholars")) {
                var shnum = Math.ceil(scholars_num / 4);
                document.getElementById("scholars").style.height = 420 * shnum + 50 + "px";
                // alert(shunm);
            }

        });

    $http.get($base_url + "/team/get_students_by_education_and_graduate/postgraduate/2015/")
        .success(function(response) {
            $scope.students = response['result'];

            // 动态设置div高度   2015学生
            var student_num = response['result'].length;
            var yushu = student_num % 4;
            add_div = 4 - yushu;
            // alert(add_div)
            // console.log("-------"+response['result'].length);

            if (add_div == 4) {} else {
                for (var i = 1; i <= add_div; i++) {
                    $("#add_student_div").prepend("<div class='teacher'></div>");
                }
            }

            if (document.getElementById("post-2015")) {
                var stunum = Math.ceil(student_num / 4);
                document.getElementById("post-2015").style.height = 420 * stunum + 80 + "px";
                // alert(shunm);
            }
        });
});

uxlab.filter('out_label', function() {
    return function(input) {
        var output = '';
        var array1 = new Array();
        if (input.indexOf("<br>") >= 0) {
            array1 = input.split('<br>');
            array_length1 = array1.length;
            for (var i = 0; i < array_length1; i++) {
                output = output + array1[i];
            }
        } else {
            output = input;
        }
        return output;
    }
});

uxlab.controller('designCtrl', function($scope, $http) {
    $http.get($base_url + "/design/get_designs/innovative/name")
        .success(function(response) {
            $scope.innovation = response['result'];

            // 获取了repeat循环的次数，然后动态增加div的高度
            var inn_num = response['result'].length;
            if (document.getElementById("inn_height")) {
                document.getElementById("inn_height").style.height = 440 * inn_num + 80 + "px";
                // alert(inn_num);
            }

        });

    $http.get($base_url + "/design/get_designs/service/name")
        .success(function(response) {
            $scope.service = response['result'];
            // 获取了repeat循环的次数，然后动态增加div的高度
            var server_num = response['result'].length;
            if (document.getElementById("ser_height")) {
                document.getElementById("ser_height").style.height = 440 * server_num + 80 + "px";
                // alert(server_num);
            }

        });

    $http.get($base_url + "/design/get_designs/ui/name")
        .success(function(response) {
            $scope.ui = response['result'];
            // 获取了repeat循环的次数，然后动态增加div的高度。
            var ui_num = response['result'].length;
            if (document.getElementById("ui_height")) {
                document.getElementById("ui_height").style.height = 440 * ui_num + 80 + "px";
                // alert(ui_num);
            }

        });

    $http.get($base_url + "/design/get_design_content")
        .success(function(response) {
            $scope.design_content = response['result'];
        });
});

uxlab.filter('design_content_filter_1', function() {
    return function(input) {
        var output = '';
        if (input == '.0') {
            output = '';
        } else {
            output = input;
        }
        return output;
    }
});

uxlab.filter('design_content_title', function() {
    return function(input) {
        var output = '';
        if (input.length > 0) {
            output = '设计内容';
        } else {
            output = '';
        }
        return output;
    }
});

uxlab.controller('educationCtrl', function($scope, $http) {
    $http.get($base_url + "/team/get_meetings/")
        .success(function(response) {
            $scope.meetings = response['result'];
        });

    $http.get($base_url + "/team/get_links_for_research_institute")
        .success(function(response) {
            $scope.institute = response['result'];
        });

    $http.get($base_url + "/team/get_links_for_resource")
        .success(function(response) {
            $scope.resource = response['result'];
        });

    $http.get($base_url + "/team/get_books")
        .success(function(response) {
            $scope.books = response['result'];
        });
});

uxlab.controller('newCtrl', function($scope, $http) {
    $http.get($base_url + "/info/get_info_list")
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
    $http.get($base_url + "/info/get_info_by_id/" + $news_id)
        .success(function(response) {
            $scope.news_title = response['result'][0].title;
            $news_cover_url = response['result'][0].thumbnail;
            $(".content-text").html(response['result'][0].article);
            $(".news_cover_url").attr("src", $base_url + $news_cover_url);
            if ($(".content-text img").length) {
                $(".content-text img").each(function() {
                    if ($(this).attr("src").substring(0, 4) == "http") {

                    } else {
                        $(this).attr("src", $base_url + $(this).attr("src"));
                        $(this).css({ "height": "auto" });
                    }
                });
            }
        });
});

// research.html
uxlab.controller('researchCtrl', function($scope, $http) {
    $http.get($base_url + "/achievement/get_country_projects")
        .success(function(response) {
            $scope.country = response['result'];
        });

    $http.get($base_url + "/achievement/get_company_projects")
        .success(function(response) {
            $scope.company = response['result'];
        });

    $http.get($base_url + "/achievement/get_essays")
        .success(function(response) {
            $scope.essays = response['result'];
        });

    $http.get($base_url + "/achievement/get_patents")
        .success(function(response) {
            $scope.patents = response['result'];
        });

    $http.get($base_url + "/achievement/get_softwares")
        .success(function(response) {
            $scope.softwares = response['result'];
        });

    $http.get($base_url + "/achievement/get_prizes")
        .success(function(response) {
            $scope.prizes = response['result'];
        });
});
