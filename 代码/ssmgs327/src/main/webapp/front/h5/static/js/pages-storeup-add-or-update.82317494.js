(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-storeup-add-or-update"],{"0dfe":function(r,e,t){"use strict";var i=t("a39c"),a=t.n(i);a.a},"144f":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("96cf");var a=i(t("3b8d")),o=i(t("e2b1")),n={data:function(){return{cross:"",ruleForm:{userid:"",refid:"",tablename:"",name:"",picture:"",type:"",inteltype:""},user:{},ro:{userid:!1,refid:!1,tablename:!1,name:!1,picture:!1,type:!1,inteltype:!1}}},components:{wPicker:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var t,i,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(i=r.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=13;break}return this.ruleForm.id=e.id,r.next=11,this.$api.info("storeup",this.ruleForm.id);case 11:i=r.sent,this.ruleForm=i.data;case 13:if(this.cross=e.cross,!e.cross){r.next=49;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 17:if((r.t1=r.t0()).done){r.next=49;break}if(o=r.t1.value,"userid"!=o){r.next=23;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,r.abrupt("continue",17);case 23:if("refid"!=o){r.next=27;break}return this.ruleForm.refid=a[o],this.ro.refid=!0,r.abrupt("continue",17);case 27:if("tablename"!=o){r.next=31;break}return this.ruleForm.tablename=a[o],this.ro.tablename=!0,r.abrupt("continue",17);case 31:if("name"!=o){r.next=35;break}return this.ruleForm.name=a[o],this.ro.name=!0,r.abrupt("continue",17);case 35:if("picture"!=o){r.next=39;break}return this.ruleForm.picture=a[o],this.ro.picture=!0,r.abrupt("continue",17);case 39:if("type"!=o){r.next=43;break}return this.ruleForm.type=a[o],this.ro.type=!0,r.abrupt("continue",17);case 43:if("inteltype"!=o){r.next=47;break}return this.ruleForm.inteltype=a[o],this.ro.inteltype=!0,r.abrupt("continue",17);case 47:r.next=17;break;case 49:this.styleChange();case 50:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.picture="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,t,i,a,o,n,d,s,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.userid){r.next=3;break}return this.$utils.msg("用户id不能为空"),r.abrupt("return");case 3:if(this.ruleForm.name){r.next=6;break}return this.$utils.msg("收藏名称不能为空"),r.abrupt("return");case 6:if(this.ruleForm.picture){r.next=9;break}return this.$utils.msg("收藏图片不能为空"),r.abrupt("return");case 9:if(!this.cross){r.next=25;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){r.next=25;break}if(n=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=21;break}for(d in n)d==a&&(n[d]=o);return s=uni.getStorageSync("crossTable"),r.next=19,this.$api.update("".concat(s),n);case 19:r.next=25;break;case 21:e=Number(uni.getStorageSync("userid")),t=n["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!t||!e){r.next=47;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=t,u={page:1,limit:10,crossuserid:e,crossrefid:t},r.next=31,this.$api.list("storeup",u);case 31:if(l=r.sent,!(l.data.total>=i)){r.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!this.ruleForm.id){r.next=42;break}return r.next=40,this.$api.update("storeup",this.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,this.$api.add("storeup",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!this.ruleForm.id){r.next=52;break}return r.next=50,this.$api.update("storeup",this.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,this.$api.add("storeup",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},3588:function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-698abf0d]{padding:%?20?%}.content[data-v-698abf0d]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220215/b9bd41c7f1fc4430b1972688b894f238.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-698abf0d]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-698abf0d]{width:%?180?%}.avator[data-v-698abf0d]{width:%?150?%;height:%?60?%}.right-input[data-v-698abf0d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-698abf0d]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-698abf0d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-698abf0d]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-698abf0d]{border:0}.cu-form-group uni-input[data-v-698abf0d]{padding:0 %?30?%}.uni-input[data-v-698abf0d]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-698abf0d]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-698abf0d]::after{line-height:%?52?%}.select .uni-input[data-v-698abf0d]{line-height:%?52?%}.input .right-input[data-v-698abf0d]{line-height:%?52?%}',""]),r.exports=e},"67d8":function(r,e,t){"use strict";var i,a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("表名")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.tablename,placeholder:"表名"},model:{value:r.ruleForm.tablename,callback:function(e){r.$set(r.ruleForm,"tablename",e)},expression:"ruleForm.tablename"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("收藏名称")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.name,placeholder:"收藏名称"},model:{value:r.ruleForm.name,callback:function(e){r.$set(r.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"88rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.pictureTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"#fff",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("收藏图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.picture?t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"80rpx",borderStyle:"solid",height:"80rpx"},attrs:{src:r.baseUrl+r.ruleForm.picture,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"80rpx",borderStyle:"solid",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("类型(1:收藏,21:赞,22:踩)")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.type,placeholder:"类型(1:收藏,21:赞,22:踩)"},model:{value:r.ruleForm.type,callback:function(e){r.$set(r.ruleForm,"type",e)},expression:"ruleForm.type"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("推荐类型")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.inteltype,placeholder:"推荐类型"},model:{value:r.ruleForm.inteltype,callback:function(e){r.$set(r.ruleForm,"inteltype",e)},expression:"ruleForm.inteltype"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(123, 226, 205, 1)",borderColor:"#409EFF",borderRadius:"88rpx",color:"#fff",borderWidth:"0",width:"80%",fontSize:"30rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},a39c:function(r,e,t){var i=t("3588");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var a=t("4f06").default;a("6cff5d4e",i,!0,{sourceMap:!1,shadowMode:!1})},c3d0:function(r,e,t){"use strict";t.r(e);var i=t("144f"),a=t.n(i);for(var o in i)"default"!==o&&function(r){t.d(e,r,(function(){return i[r]}))}(o);e["default"]=a.a},d26a:function(r,e,t){"use strict";t.r(e);var i=t("67d8"),a=t("c3d0");for(var o in a)"default"!==o&&function(r){t.d(e,r,(function(){return a[r]}))}(o);t("0dfe");var n,d=t("f0c5"),s=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"698abf0d",null,!1,i["a"],n);e["default"]=s.exports}}]);