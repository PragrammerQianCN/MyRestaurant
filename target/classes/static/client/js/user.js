/**
 * Created by ideabobo on 14-6-28.
 */

/***************************************用户模块*******************************************/
var _focuszhuohao = null;
function scanErcode(){
    scanCode(function (r){
        _focuszhuohao = $.trim(r);
        alert("您的桌号是:"+_focuszhuohao);
        toGoods();
    })
}


$(function(){
    var uinfo = localStorage['userinfo'];
    var f = localStorage['welcomed'];
    //if(f){
        if(uinfo && $.trim(uinfo)!=""){
            uinfo  = JSON.parse(uinfo);
            $("#lusername").val(uinfo.username);
            $("#lpasswd").val(uinfo.passwd);
            uinfo.remember = "1";
            //if(uinfo.roletype=="2"){
                login(uinfo);
            //}

        }
    //}else{
    //    changePage("welcomepage1","none");
    //}

    //$("#welcome1").bind("swipeleft tap",function(){
    //    changePage("welcomepage2");
    //});
    //$("#welcome2").bind("swipeleft tap",function(){
    //    changePage("welcomepage3");
    //});
    //$("#welcome3").bind("swipeleft tap",function(){
    //    changePage("welcomepage4");
    //});
    //$("#welcome4").bind("swipeleft tap",function(){
    //    changePage("welcomepage5");
    //});
    //$("#welcome5").bind("swipeleft tap",function(){
    //    changePage("welcomepage6");
    //});
    //$("#welcome6").bind("swipeleft tap",function(){
    //    changePage("loginpage");
    //    localStorage['welcomed'] = "yes";
    //});

    /*drawPic();
    document.getElementById("yzcanvas").onclick = function(e){
        e.preventDefault();
        drawPic();
    };*/
});
var userinfo = null;
function login(uinfo){
    var fdata = uinfo || serializeObject($("#loginform"));
    if($.trim(fdata.username)=="" || $.trim(fdata.passwd) == ""){
        showLoader("请输入用户名或密码！",true);
        return;
    }
    fdata.table="user";
    ajaxCallback("findJ",fdata,function(data){
       if(!data){
           showLoader("用户名或密码错误",true);
           changePage("loginpage");
       }else{

           showLoader("登录成功!",true);
           //bindClient();
           userinfo = data;
           if(userinfo.roletype=="4"){
                toQiangdan();
           }else{
               toMain();
           }
           if(fdata.remember == "1"){
                localStorage["userinfo"] = JSON.stringify(data);
           }else{
               localStorage["userinfo"] = "";
           }


           //toGoods();
           /*if(userinfo.roletype==2){
                toVideoList();
           }else{
               ajaxCallback("getShop",{id:userinfo.sid},function(data){
                   focushop = data;
                   toMyBill();
                   startBillListLoop();
               });

           }*/


       }
    });
}

function logout(){
    userinfo = null;
    localStorage['userinfo'] = "";
    toLogin();
}

function toRegister(){
    changePage("registerpage");
}

function toLogin(){
    $($(':input','#loginform').get(1)).val("");
    changePage("loginpage");
    drawPic();
}

function register(){

    var fdata = serializeObject($("#registerform"));
    if($.trim(fdata.username) == "" || $.trim(fdata.passwd) == "" || $.trim(fdata.tel) == ""){
        showLoader("请填写完整信息!",true);
        return;
    }
    if(fdata.tel.length<11){
        showLoader("电话号码格式不对!",true);
        return;
    }
    if(fdata.passwd != fdata.passwd2){
        showLoader("两次密码不一致!",true);
        return;
    }
    /*if(uploadFileUrl){
        uplaodImg(function(r){
            fdata.img = r;
            commitRegiesterInfo(fdata);
        });
    }else{*/
        commitRegiesterInfo(fdata);
    //}


}

function commitRegiesterInfo(fdata){
    fdata.table="user";
    fdata.roletype="2";
    ajaxCallback("findJ",fdata,function(d){
        if(!d){
            ajaxCallback("saveJ",fdata,function(r){
                if(r.info){
                    showLoader("注册成功!",true);
                    userinfo = fdata;
                    userinfo.id = r.info;
                    //addAddress();
                    toLogin();
                }else{
                    showLoader("注册失败请稍候再试!",true);
                }
                uploadFileUrl = null;
            });
        }else{
            showLoader("用户名已存在!",true);
        }
    });
}

function myinfo(){
    if(!userinfo){
        changePage("loginpage");
        return;
    }
    changePage("userinfopage");
    $("#editbutton").hide();
    $("#vusername").text(userinfo.username);
    $("#vtel").val(userinfo.tel);
    $("#vqq").val(userinfo.qq);
    $("#vwechat").val(userinfo.wechat);
    $("#vsex").val(userinfo.sex);
    $("#vbirth").val(userinfo.birth);
    $("#vemail").val(userinfo.email);
    $("#vaddress").val(userinfo.address);
    $("#vimg").val(userinfo.img);
    $("#rmyImage2").attr("src",fileurl+userinfo.img);
}

function editUserInfo(){
    $("#editbutton").show();
}

function updateUserInfo(){
    var fdata = serializeObject($("#userform"));
    fdata.id = userinfo.id;
    /*if(uploadFileUrl){
        uplaodImg(function(r){
            fdata.img = r;
            commitUpdateUserInfo(fdata);
        });
    }else{*/
        commitUpdateUserInfo(fdata);
    //}
}

function commitUpdateUserInfo(fdata){
    fdata.table = "user";
    ajaxCallback("saveJ",fdata,function(user){
        if(user){
            showLoader("保存成功!",true);
            userinfo = fdata;
            uploadFileUrl = null;
        }else{
            showLoader("保存失败,请稍候再试!",true);
        }
    });
}

function toChangePasswd(){
    $("#pusername").text("用户名:"+userinfo.username);
    changePage("passwdpage");
}

function changePasswd(){
    var fdata = serializeObject($("#passwdform"));
    fdata.id = userinfo.id;
    if(fdata.oldpasswd != userinfo.passwd){
        showLoader("原始密码错误！",true);
        return;
    }
    if($.trim(fdata.passwd) == ""){
        showLoader("密码不能为空！",true);
        return;
    }
    if(fdata.passwd != fdata.passwd2){
        showLoader("两次密码不一致！",true);
        return;
    }
    userinfo.passwd = fdata.passwd;
    userinfo.table="user";
    ajaxCallback("saveJ",userinfo,function(r){
        if(r){
            showLoader("保存成功!",true);
            setTimeout(function(){
                toLogin();
            },2000);
        }else{
            showLoader("保存失败,请稍候再试!",true);
        }
    });
}

function toMore(){
    changePage('morepage');
}

/***************************************用户模块*******************************************/


function toMyYouhuijuan(){
    changePage('youhujuanpage');
    ajaxCallback("listJ",{uid:userinfo.id,typeid:2,statecn:"正常",table:"youhuijuan"},function(data){
        $("#myyouhuijuanlist").refreshShowListView(data);
    });
}
var _focusyouhuijuan = null;
function findYouhuijuan(id){
    ajaxCallback("findJ",{id:id,table:"youhuijuan"},function(data){
        _focusyouhuijuan = data;
        var total = focusobj.total*1;
        var yhtotal = _focusyouhuijuan.total*1;
        var lasttotal = total;
        if(total>yhtotal){
            lasttotal = total-yhtotal;
        }else{
            lasttotal = 0;
        }
        focusobj.total = lasttotal;
        $("#btotal").text("应付金额:"+focusobj.total+"元,使用"+_focusyouhuijuan.total+"元优惠卷");
        goback();
        useYouhuijuan(id);
    });
}

function getYouhuijuan(id){
    ajaxCallback("findJ",{id:id,table:"youhuijuan"},function (yhj) {
        var obj = {};
        yhj.uid = userinfo.id;
        yhj.typeid = 2;
        yhj.statecn="正常";
        yhj.table="youhuijuan";
        yhj.id=null;
        ajaxCallback("saveJ",yhj,function (data) {
            showTipTimer("优惠卷领取成功!",function (){
                goback();
            });
        })
    })
}

function useYouhuijuan(id){
    ajaxCallback("findJ",{id:id,table:"youhuijuan",statecn:"已使用"},function(yhj){

    });
}

function toShopYouhuijuan(){
    changePage('shopyouhuijuan');
    ajaxCallback("listJ",{typeid:1,table:"youhuijuan",sid:focushop.id},function(data){
        $("#shopyouhuijuanlist").refreshShowListView(data);
    });
}


function toRegister2(){
    changePage("registerpage2");
}


function register2(){

    var fdata = serializeObject($("#registerform2"));
    /*if(_yzm!=fdata.yzm){
        showLoader("验证码不正确！",true);
        return;
    }
    if($.trim(fdata.username) == "" || $.trim(fdata.passwd) == ""){
        showLoader("请填写完整信息!",true);
        return;
    }
    if(fdata.username.length<11){
        showLoader("电话号码格式不对!",true);
        return;
    }
    if(fdata.passwd != fdata.passwd2){
        showLoader("两次密码不一致!",true);
        return;
    }*/
    fdata.username = fdata.sname;
    ajaxCallback("findJ",{username:fdata.username,table:"user"},function(d){
        if(!d){
            ajaxFormUploadFile(function (r){
                fdata.img = r;
                fdata.table="shop";
                ajaxCallback("saveJ",fdata,function(r){
                    if(r){
                        showTipTimer("注册成功!",function (){
                            userinfo = fdata;
                            userinfo.id = r.info;
                            toLogin();
                        });

                    }else{
                        showLoader("注册失败请稍候再试!",true);
                    }
                    uploadFileUrl = null;
                });
            })
        }else{
            showLoader("用户名已存在!",true);
        }
    });



}











/****************************************************在线收藏***********************************/
function toFavs(){
    changePage("favspage");
    var sql = "select * from wct_good where id in ("+userinfo.favs+")";
    ajaxCallback("listSqlJ",{sql:sql},function (data) {
        var p3 = {};
        p3.tpl = '<li ><a onclick="toGood(%s);">'+
            '<img style="height: 80px;width: 80px;" src="'+fileurl+'%s">'+
            '<h2>%s</h2>'+
            '<p>%s</p>'+

            '</a><a onclick="deleteFavs(%s)">删除</a></li>';
        p3.colums = ["id","img","gname","note","id"];
        $("#favslist").data("property",JSON.stringify(p3));
        $("#favslist").refreshShowListView(data);
    })
}


function toTuijian(){
    changePage("tuijianpage");
    listGoodTuijian();
}

function listGoodTuijian(){
    /*ajaxCallback("listGood",{tags:userinfo.tags},function(data){
        goodlist = data;
        var newlist = [];
        for(var i=0;i<data.length;i++){
            if(newlist.length<10){
                newlist.push(data[i]);
            }
        }
        $("#tuijianlist").refreshShowListView(newlist);
    });*/

    /**
     * 协同过滤推荐算法
     */


    ajaxCallback("listJ",{table:"user"},function (userlist) {
        var tgids = "";
        var favs = userinfo.favs||"";
        /**
         * 计算纬度
         */
        var weidulist = [];
        for(var i=0;i<userlist.length;i++){
            var weidu = {};
            var user = userlist[i];
            if(user.id==userinfo.id){
                continue;
            }
            var ufavs = user.favs;//别人的收藏
            if(ufavs){
                var wd = 0;
                ufavs+="";
                var ufarray = ufavs.split(",");
                if(favs){
                    favs+="";
                    var farray = favs.split(",");//我的收藏
                    for(var j=0;j<ufarray.length;j++){
                        for(var k=0;k<farray.length;k++){
                            if(ufarray[j]==farray[k]){
                                wd++;
                            }
                        }
                    }
                    weidu.favs = ufavs;
                    weidu.wd = wd;
                    weidulist.push(weidu);
                }else{
                    tgids = ufavs;
                    break;
                }

            }else{
                weidu.wd = 0;
            }
        }

        if(weidulist.length){
            weidulist = weidulist.sort(function (o1,o2) {
                return o1.wd-o2.wd;
            });

            var len = 5;
            if(len>weidulist.length){
                len = weidulist.length;
            }

            var wfavs = ""
            for(var i=0;i<len;i++){
                if(wfavs==""){
                    wfavs = weidulist[i]['favs'];
                }else{
                    wfavs += ","+weidulist[i]['favs'];
                }
            }

            var wfarray = wfavs.split(",");

            for(var i=0; i<wfarray.length; i++){
                for(var j=i+1; j<wfarray.length; j++){
                    if(wfarray[i]==wfarray[j]){         //第一个等同于第二个，splice方法删除第二个
                        wfarray.splice(j,1);
                        j--;
                    }
                }
            }

            var favlist = wfarray;

            for(var i=0;i<favlist.length;i++){
                if(tgids==""){
                    tgids = favlist[i];
                }else{
                    tgids+=","+favlist[i];
                }
            }

        }

        var tags = userinfo.tags;
        if(tags){
            if(tgids){
                tgids+=","+tags;
            }else{
                tgids = tags;
            }
        }

        var sql = "select * from wct_good where id in ("+tgids+")";
        ajaxCallback("listSqlJ",{sql:sql},function (data) {
            var p3 = {};
            p3.tpl = '<li onclick="toGood(%s);">'+
                '<img style="height: 80px;width: 80px;" src="'+fileurl+'%s">'+
                '<h2>%s</h2>'+
                '<p>%s</p>'+

                '</li>';
            p3.colums = ["id","img","gname","note"];
            $("#tuijianlist").data("property",JSON.stringify(p3));
            $("#tuijianlist").refreshShowListView(data);
        })


    })


}




function toggleFavs(){
    if(checkFavs()){
        deleteFavs();
    }else{
        saveFavs();
    }
}

function checkFavs(){
    var favs = userinfo.favs;
    var flag = false;
    $("#favbtn").text("加入收藏");
    if(favs){
        favs+="";
        var favarray = favs.split(",");
        for(var i=0;i<favarray.length;i++){
            if(favarray[i]==focusobj.id){
                $("#favbtn").text("移除收藏");
                flag = true;
                break;
            }
        }
    }


    return flag;

}


function saveFavs(){
    var favs = userinfo.favs;
    if(favs){
        favs+="";
        var favarray = favs.split(",");
        var flag = true;
        for(var i=0;i<favarray.length;i++){
            if(favarray[i]==focusobj.id){
                flag = false;
                break;
            }
        }
        if(flag){
            favs+=","+focusobj.id;
        }
    }else{
        favs = focusobj.id;
    }

    ajaxCallback("saveJ",{table:"user",favs:favs,id:userinfo.id},function (data) {
        showLoader("操作成功!",true);
        userinfo.favs = favs;
        checkFavs();
    })

}

function deleteFavs(gid){
    var id = gid || focusobj.id;
    var favs = userinfo.favs;
    var tfavs = "";
    if(favs){
        favs+="";
        var favarray = favs.split(",");
        for(var i=0;i<favarray.length;i++){
            if(favarray[i]==id){
                continue;
            }else{
                if(tfavs==""){
                    tfavs = favarray[i];
                }else{
                    tfavs+=","+favarray[i];
                }
            }
        }

    }

    ajaxCallback("saveJ",{table:"user",favs:tfavs,id:userinfo.id},function (data) {
        showLoader("操作成功!",true);
        userinfo.favs = tfavs;
        if(gid){
            toFavs();
        }else{
            checkFavs();
        }

    })

}





/****************************************************在线收藏***********************************/



function clickTag(el){
    if($(el).hasClass("tagfocus")){
        $(el).removeClass("tagfocus");
    }else{
        $(el).addClass("tagfocus");
    }
}
function sureBiaoqian(){
    var ysels = $("#yingshictn .tagfocus");
    var zxels = $("#zixunctn .tagfocus");
    var ysid = "";
    var zxid = "";
    /*for(var i=0;i<ysels.length;i++){
        if(ysid!=""){
            ysid += ","+$(ysels[i]).data("value");
        }else{
            ysid = $(ysels[i]).data("value");
        }
    }*/
    for(var i=0;i<zxels.length;i++){
        if(zxid!=""){
            zxid += ","+$(zxels[i]).data("value");
        }else{
            zxid = $(zxels[i]).data("value");
        }
    }

    ajaxCallback("saveJ",{tags:zxid,id:userinfo.id,table:"user"},function(data){
        userinfo.tags = zxid;
        showLoader("操作成功!",true);
    });
}

function toTags(){
    changePage('tagpage');
    ajaxCallback("listJ",{table:"type"},function(data){
        var zxhtml = '<span>设置标签:</span>';
        var yshtml = '<span>影视标签:</span>';
        var tags = userinfo.tags||"";
        var tagarray = tags.split(",");
        for(var i=0;i<data.length;i++){
            var obj = data[i];
            //if(obj.ttype==1){
            var flag = false;
            for(var j=0;j<tagarray.length;j++){
                var tid = tagarray[j];
                if(tid==obj.id){
                    flag = true;
                    break;
                }
            }
            if(flag){
                zxhtml+='<span onclick="clickTag(this);" data-value="'+obj.id+'" class="tagitem tagfocus">'+obj.title+'</span>';
            }else{
                zxhtml+='<span onclick="clickTag(this);" data-value="'+obj.id+'" class="tagitem">'+obj.title+'</span>';
            }

            /*}else{
                yshtml+='<span onclick="clickTag(this);" data-value="'+obj.id+'" class="tagitem">'+obj.title+'</span>';
            }*/
        }

        //$("#yingshictn").html(yshtml);
        $("#zixunctn").html(zxhtml);
    });
}
