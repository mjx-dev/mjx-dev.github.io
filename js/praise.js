var flag = 0;
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = window.location.href.replace(parse_url,'$3/$5');

function goodplus(url,flag) {
    flag = 1; //访客点击标记
    senddata(url,flag);
    flag = 0;
}
function senddata(url,flag) {
    var Zan = AV.Object.extend('Zan');
    var query = new AV.Query('Zan');
	query.contains("url", url);
	query.find().then(function (results) {
        var vLeng = results.length;
        if(flag == 0){  //页面加载标记
            if (vLeng == 0){
                var title = document.title.replace(/^(.*) - mjx$/,'$1');
                var Zan = AV.Object.extend('Zan');
                var Zan = new Zan();
                Zan.set('url', url);
                Zan.set('links', 0);
                Zan.set('title',title);
                Zan.save().then(function (Zan) {
                    document.getElementById("zan_text").innerHTML= "0";
                });
            }else if (vLeng == 1){
                var reslinks = results[0].attributes.links;
                document.getElementById("zan_text").innerHTML= reslinks;
                var dataViews = parseInt(document.getElementById("posts").dataset.views);
                var dataComts = parseInt(document.getElementById("posts").dataset.comts);
                var vId = results[0].id;
                var Zan = AV.Object.createWithoutData('Zan', vId);
                Zan.set('views', dataViews);
                Zan.set('comts', dataComts);
                Zan.save();
            }
        }else if(flag == 1){ //访客点击标记
            var title = document.title.replace(/^(.*) - mjx$/,'$1');
            var reslinks = results[0].attributes.links;
            var vId = results[0].id;
            var Zan = AV.Object.createWithoutData('Zan', vId);
            Zan.set('links', reslinks+1);
            Zan.set('title',title);
            Zan.save();
            document.getElementById("zan_text").innerHTML= reslinks+1;
        }
    });
}
function remcls(){$('.heart').removeClass("heartAnimation");}
function addcls(){$('.heart').addClass("heartAnimation");    }
$(document).ready(function ()  { //.post-content 文章内页样式
	$(".post-content").append("<div id='zan' class='clearfix'><div class='heart' onclick=\"goodplus('"+url+"')\"></div><div id='zan_text'></div></div>");
	senddata(url,flag);
	$('body').on("click",'.heart',function(){
		$('.heart').css("background-position","")
		var wwin=$('.heart').attr("class");
		if(wwin === 'heart'){
			$('.heart').addClass("heartAnimation");
			tui=setTimeout("remcls()",800)
		}else{
		 	remcls()
		 	tuiw=setTimeout("addcls()",100)
		}
	});
});