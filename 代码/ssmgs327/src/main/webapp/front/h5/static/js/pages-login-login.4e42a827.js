(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{1836:function(r,t,e){"use strict";var o,i=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"box",style:{padding:"48rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 0, 0, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"100%"}},[e("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"100rpx auto 0",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"0",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20220215/3f49337c14004e79860d15d9f962dec2.jpg",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20220215/3f49337c14004e79860d15d9f962dec2.jpg",mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:r.username,callback:function(t){r.username=t},expression:"username"}})],1),e("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:r.password,callback:function(t){r.password=t},expression:"password"}})],1),e("v-uni-view",{staticClass:"code",staticStyle:{display:"flex"},style:{padding:"0",boxShadow:"px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-input",{staticStyle:{flex:"1"},style:{padding:"0 20rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.3)",color:"#333",textAlign:"left",borderRadius:"40rpx 0 0 0",borderWidth:"0",width:"calc(100% - 168rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",placeholder:"请输入验证码"},model:{value:r.inputCode,callback:function(t){r.inputCode=t},expression:"inputCode"}}),e("v-uni-view",{staticClass:"getCodeBt",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},style:{padding:"0",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"20rpx 0",borderColor:"#1e90ff",backgroundColor:"#f5f5f5",borderRadius:"0 0 40rpx 0",borderWidth:"0",width:"168rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.randomString(4)}}},r._l(r.codes,(function(t,o){return e("v-uni-view",{key:o,style:{color:t.color,transform:t.rotate,fontSize:t.size,padding:"0 3px",display:"inline-block"}},[r._v(r._s(t.num))])})),1)],1),r.roleNum>1?e("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-picker",{attrs:{value:r.index,range:r.options},on:{change:function(t){arguments[0]=t=r.$handleEvent(t),r.optionsChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-picker-type",style:{padding:"0 40rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.options[r.index]))])],1)],1):r._e(),e("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(123, 226, 205, 1)",borderRadius:"50rpx",color:"#333",borderWidth:"0",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.onLoginTap.apply(void 0,arguments)}}},[r._v("登录")]),e("v-uni-view",{staticClass:"links",style:{padding:"0",boxShadow:"px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"link-highlight",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(37, 147, 230, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"auto",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.onRegisterTap("xuesheng")}}},[r._v("注册学生")]),e("v-uni-view",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(164, 164, 164, 1)",textAlign:"right",borderRadius:"0",borderWidth:"0",width:"50%",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.onForgetTap.apply(void 0,arguments)}}},[r._v("忘记密码？")])],1)],1)],1)},n=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return o}))},3285:function(r,t,e){"use strict";e.r(t);var o=e("6263"),i=e.n(o);for(var n in o)"default"!==n&&function(r){e.d(t,r,(function(){return o[r]}))}(n);t["default"]=i.a},"458d":function(r,t,e){var o=e("24fb");t=o(!1),t.push([r.i,".btn-submit[data-v-96cc5b42]{height:auto!important;line-height:%?88?%}",""]),r.exports=t},"49b5":function(r,t,e){"use strict";var o=e("d918"),i=e.n(o);i.a},"504d":function(r,t,e){var o=e("24fb");t=o(!1),t.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-96cc5b42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh - 44px);box-sizing:border-box}.content[data-v-96cc5b42]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220215/c2b263575af74fefb2af2e49596a66a0.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-96cc5b42]{text-align:center}.logo uni-image[data-v-96cc5b42]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-96cc5b42]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-96cc5b42]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-96cc5b42]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-96cc5b42]{margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-96cc5b42]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-96cc5b42]{margin:0;color:#b49950}',""]),r.exports=t},"53e5":function(r,t,e){var o=e("504d");"string"===typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);var i=e("4f06").default;i("1aff6b20",o,!0,{sourceMap:!1,shadowMode:!1})},6263:function(r,t,e){"use strict";var o=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var i=o(e("3b8d")),n=o(e("2971")),a={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","xuesheng"],inputCode:"",validateCode:"",index:0,roleNum:0}},onLoad:function(){var r=["请选择登录用户类型"],t=n.default.list();this.menuList=t;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&(r.push(this.menuList[e].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=r,this.randomString(4),this.styleChange()},methods:{randomString:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],o=["28","30","32","34","36"];this.validateCode="";for(var i=0;i<r;i++){var n=Math.floor(Math.random()*t.length);this.codes[i].num=t[n],this.validateCode=this.validateCode+t[n];for(var a="#",d=0;d<6;d++){var s=Math.floor(Math.random()*e.length);a+=e[s]}this.codes[i].color=a;var c=Math.floor(30*Math.random()),l=Math.floor(2*Math.random());1==l&&(c="-"+c),this.codes[i].rotate="rotate("+c+"deg)";var u=Math.floor(Math.random()*o.length);this.codes[i].size=o[u]+"rpx"}},styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(r){uni.setStorageSync("loginTable",r),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var r=(0,i.default)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.username){r.next=3;break}return this.$utils.msg("请输入用户名"),r.abrupt("return");case 3:if(this.password){r.next=6;break}return this.$utils.msg("请输入用户密码"),r.abrupt("return");case 6:if(this.optionsValues[this.index]){r.next=9;break}return this.$utils.msg("请选择登陆用户类型"),r.abrupt("return");case 9:if(this.inputCode==this.validateCode){r.next=12;break}return this.$utils.msg("请输入正确的验证码"),r.abrupt("return");case 12:return r.next=14,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 14:return t=r.sent,uni.removeStorageSync("useridTag"),uni.setStorageSync("token",t.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),r.next=21,this.$api.session("".concat(this.optionsValues[this.index]));case 21:t=r.sent,uni.setStorageSync("userid",t.data.id),t.data.vip&&uni.setStorageSync("vip",t.data.vip),uni.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 26:case"end":return r.stop()}}),r,this)})));function t(){return r.apply(this,arguments)}return t}(),optionsChange:function(r){this.index=r.target.value}}};t.default=a},a86a:function(r,t,e){"use strict";e.r(t);var o=e("1836"),i=e("3285");for(var n in i)"default"!==n&&function(r){e.d(t,r,(function(){return i[r]}))}(n);e("49b5"),e("b898");var a,d=e("f0c5"),s=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"96cc5b42",null,!1,o["a"],a);t["default"]=s.exports},b898:function(r,t,e){"use strict";var o=e("53e5"),i=e.n(o);i.a},d918:function(r,t,e){var o=e("458d");"string"===typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);var i=e("4f06").default;i("0a5f6c6c",o,!0,{sourceMap:!1,shadowMode:!1})}}]);