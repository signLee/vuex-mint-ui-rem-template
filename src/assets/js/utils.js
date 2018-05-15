/**
 * Created by sign on 2018/4/28.
 */
//共用方法
import { Toast } from 'mint-ui';
import axios from 'axios';
import { Indicator } from 'mint-ui';

//消息提示
function _toast(msg) {
    Toast({
        message: msg,
        position: 'bottom',
        duration: 2000
    });
}

var contextPath = "";
//获取当前路径
(function getRealPath() {
    //获取当前网址，如： http://localhost:8083/myproj/view/my.jsp
    var curWwwPath = window.document.location.href;
    //获取主机地址之后的目录，如： myproj/view/my.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.lastIndexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht = curWwwPath.substring(0, pos);
    //获取带"/"的项目名，如：/myproj
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    contextPath = localhostPaht + '/';
    /*if(projectName.indexOf('shop-webservice')>=0){
      contextPath=localhostPaht + projectName +"/";
    }else{

      contextPath=localhostPaht+"/";
    }
    if(process.env.NODE_ENV!='production'){
      contextPath = 'http://localhost:8080/api/'
    }*/
}());

//接口函数封装
axios.defaults.baseURL = contextPath;//后台接口公共前缀
function fetch(url, params, methods) {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
    return new Promise((resolve, reject) => {
        var config = {
            method: methods || 'GET',
            url: url,
            headers: {
                "Content-Type": 'application/json'
            },
        };
        if (methods && (methods == 'post' || methods == 'POST')) {
            config.data = params || $.param(params); //序列化入参
        } else {
            config.params = params;
        }
        axios(config).then(response => {
                resolve(response.data);
                Indicator.close();
            }).catch((error) => {
                reject(error);
                Indicator.close();
                _toast('网络延迟，请稍后再试')
            })
    })
}

//日期格式转换
// (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 function format(date,fmt)   {
  var o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "h+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S"  : date.getMilliseconds()             //毫秒
  };
   fmt= fmt?fmt:"yyyy-MM-dd hh:mm:ss";
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}


//获取url中的参数   传入参数名name
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
}

//数组去重
function unique(arr){
  var obj={};
  for(var i=0;i<arr.length;i++){
    var cur=arr[i];
    if(obj[cur]==cur){
      arr.splice(i,1);
      i--;
      continue;
    }
    obj[cur]=cur;
  }
  obj=null;
  return arr;
}

//cookie设置
 function setCookie(name, value, iDay) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + iDay);
  document.cookie = name + '=' + value + ';expires=' + oDate;
}

//cookie获取
function getCookie(name) {
  var arr = document.cookie.split('; ');
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split('=');
    if (arr2[0] == name) {
      return arr2[1];
    }
  }
  return '';
}


//storage封装
var storage={
    //cookie删除
  removeCookie:function (name) {
    this.setCookie(name, 1, -1);
  },
  //localstorge 设置
  setItem:function (key, value) {
    var valueStr = JSON.stringify(value);
    localStorage.setItem(key, valueStr);
  },
  //localstorge 获取
  getItem:function (key) {
    var value = localStorage.getItem(key);
    var obj = null;
    try{
      obj = JSON.parse(value);
    } catch(e) {
      obj = value;
    }
    return obj;
  },
  //localstorge 删除
  remove:function (key) {
    localStorage.removeItem(key);
  },
  //localstorge 清除
  clear:function () {
    localStorage.clear();
  }
}



//节流函数  要延迟执行的函数  延迟执行的时间
function throttle(fn, wait) {
  let _fn = fn, // 保存需要被延迟的函数引用
    timer,
    flags = true; // 是否首次调用
  return function () {
    let args = arguments,
      self = this;
  }
  if (flags) { // 如果是第一次调用不用延迟，直接执行即可
    _fn.apply(self, args);
    flags = false;
    return flags;
  }
  // 如果定时器还在，说明上一次还没执行完，不往下执行
  if (timer) return false;
  timer = setTimeout(function () { // 延迟执行
    clearTimeout(timer); // 清空上次的定时器
    timer = null; // 销毁变量
    _fn.apply(self, args);
  }, wait);
}

export {
    toast,
    contextPath,
    fetch,
    format,
    getUrlParam,
    unique,
    setCookie,
    getCookie,
    removeCookie,
    throttle,
    storage
}
