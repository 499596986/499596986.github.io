webpackJsonp([1],{"/6cM":function(e,t){},"/8pW":function(e,t){},"2LDf":function(e,t){},"6ZYN":function(e,t){},BlZv:function(e,t){},"EYr/":function(e,t){},FnGG:function(e,t){},Fo6H:function(e,t){},GJxR:function(e,t){},"Ho+g":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},n,!1,function(e){a("aTed")},null,null).exports,s=a("/ocq"),i=a("ShYi"),l=a.n(i),u={data:function(){return{show:!1,ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},created:function(){var e=this;this.show=!0,this.$nextTick(function(){var t=l.a.get("vueusername"),a=l.a.get("vuepassword");t&&(this.ruleForm.username=t,this.ruleForm.password=a,this.$message({message:"恭喜您,登录成功",type:"success"}),setTimeout(function(){e.$router.push("/index")},1e3))})},methods:{submitForm:function(e){var t=this,a=this;this.$refs[e].validate(function(e){if(!e)return!1;if(r=l.a.get("vueusername"))t.$message({message:"你已注册过此账号",type:"warning"});else{var r=t.ruleForm.username,n=t.ruleForm.password;l()({vueusername:r,vuepassword:n},{expires:7,path:"/",domain:""}),t.$message({message:"恭喜您,登录成功",type:"success"}),setTimeout(function(){a.$router.push("/index")},1e3)}})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-324057",attrs:{id:"login"}},[a("transition",{attrs:{name:"ani-up"}},[e.show?a("div",{staticClass:"login-con text-center"},[a("h2",[e._v("elm后台管理系统")]),e._v(" "),a("div",{staticClass:"form"},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"top"}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{placeholder:"密码",type:"password"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("登入")])],1),e._v(" "),a("div",{staticClass:"form-text"},[e._v("\n\t\t\t\t\t温馨提示"),a("br"),e._v("\n\t\t\t\t\t未登录过的新用户,自动注册"),a("br"),e._v("\n\t\t\t\t\t注册过的用户可凭账号密码登录\n\t\t\t\t")])],1)]):e._e()])],1)},staticRenderFns:[]};var d=a("VU/8")(u,c,!1,function(e){a("/8pW")},"data-v-6aebcf06",null).exports,m=a("mvHQ"),p=a.n(m),f={created:function(){l.a.get("vueusername")||this.$router.push("/")}},h={mixins:[f],data:function(){return{menudata:[{text:"首页",icon:"el-icon-document",url:"/index"},{text:"数据管理",icon:"el-icon-printer",submenu:[{text:"用户列表",url:"/userlist"},{text:"食品列表",url:"/foodlist"},{text:"订单列表",url:"/orderlist"},{text:"管理员列表",url:"/adminlist"}]},{text:"添加数据",icon:"el-icon-plus",submenu:[{text:"添加商铺",url:"/addshop"},{text:"添加商品",url:"/addgoods"}]},{text:"图表",icon:"el-icon-star-on",submenu:[{text:"用户分布",url:"/userspread"}]},{text:"设置",icon:"el-icon-setting",submenu:[{text:"管理员设置",url:"/ruler"}]},{text:"说明",icon:"el-icon-sort-up",submenu:[{text:"说明",url:"/info"}]}],breaddata:[],defaultactive:1}},methods:{handleOpen:function(e,t){},handleClose:function(e,t){},handleSelect:function(e,t){console.log("选择="+e),console.log("路径="+t)},breadfun:function(e){this.breaddata=[];e=e;var t=this,a=0,r=0;this.menudata.map(function(n,o){if(a++,n.submenu){var s=0;if(n.submenu.map(function(o,i){if(r++,o.url==e)return t.breaddata.push({text:n.text,url:n.url}),t.breaddata.push({text:o.text,url:o.url}),s=1,void(t.defaultactive=a+"-"+r)}),s)return}else if(n.url==e)return t.breaddata.push({text:n.text,url:n.url}),void(t.defaultactive=a)})}},created:function(){var e=this.$route.path;this.breadfun(e),console.log("最终的="+p()(this.breaddata))},watch:{$route:function(e,t){var a=e.path;this.breadfun(a)}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"index"}},[a("el-container",[a("el-aside",{staticClass:"indexaside",staticStyle:{width:"200px"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{defaultActive:e.defaultactive.toString(),"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff"},on:{open:e.handleOpen,close:e.handleClose,select:e.handleSelect}},[e._l(e.menudata,function(t,r){return[t.submenu?a("el-submenu",{attrs:{index:(r+1).toString(),"popper-class":"submenu-first"}},[a("template",{slot:"title"},[a("i",{class:t.icon}),e._v(" "),a("span",[e._v(e._s(t.text))])]),e._v(" "),e._l(t.submenu,function(t,n){return[t.submenu?a("el-submenu",{staticStyle:{background:"rgb(50, 64, 87)"},attrs:{index:(r+1+"-"+(n+1)).toString()}},[a("template",{slot:"title"},[e._v(e._s(t.text))]),e._v(" "),e._l(t.submenu,function(o,s){return t.submenu?a("el-menu-item",{key:s,attrs:{index:(r+1+"-"+(n+1)+"-"+(s+1)).toString()},on:{click:function(t){e.$router.push(""+o.url)}}},[e._v(e._s(o.text))]):e._e()})],2):a("el-menu-item",{attrs:{index:(parseInt(r+1)+"-"+parseInt(n+1)).toString()},on:{click:function(a){e.$router.push(""+t.url)}}},[e._v(e._s(t.text))])]})],2):a("el-menu-item",{attrs:{index:(r+1).toString()},on:{click:function(a){e.$router.push(""+t.url)}}},[a("i",{staticClass:"item.icon"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.text))])])]})],2)],1),e._v(" "),a("el-main",{staticClass:"indexmain"},[a("div",{staticClass:"indexmain-header"},[a("el-breadcrumb",{attrs:{separator:"/"}},[e.breaddata.length>0?e._l(e.breaddata,function(t,r){return a("el-breadcrumb-item",{key:r},[e.breaddata.length-1!=r&&t.url?a("a",{attrs:{href:"item.url"}},[e._v(e._s(t.text))]):e.breaddata.length-1!=r?a("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(t.text))]):a("span",[e._v(e._s(t.text))])])}):[a("el-breadcrumb-item",[a("span",{staticClass:"s"},[e._v("首页")])])]],2),e._v(" "),a("el-dropdown",[a("span",[a("img",{attrs:{src:"//elm.cangdu.org/img/default.jpg",alt:""}})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("首页")]),e._v(" "),a("el-dropdown-item",[e._v("退出")])],1)],1)],1),e._v(" "),a("div",{staticClass:"indexmain-con"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("keep-alive",[e.$route.meta.keepAlive?a("router-view"):e._e()],1)],1),e._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.$route.meta.keepAlive?e._e():a("router-view")],1)],1)])],1)],1)},staticRenderFns:[]};var b=a("VU/8")(h,v,!1,function(e){a("/6cM"),a("d/pO")},"data-v-4048d052",null).exports,g=a("bOdI"),_=a.n(g),x=a("aozt"),w=a.n(x),y="https://www.easy-mock.com/mock/5bb9af0b0cd54b6d67b499ee/elementui";function k(){return w.a.get(y+"/dataManage")}var F={mixins:[f],data:function(){return{newAdmin:"",newOrder:"",newUser:"",newAdminData:[],newAdminX:[],newOrderData:[],newOrderX:[],newUserData:[],newUserX:[],allData:[]}},created:function(){var e=this;w.a.get(y+"/dataCount").then(function(t){console.log(t),e.newAdmin=t.data.data.newAdmin,e.newOrder=t.data.data.newOrder,e.newUser=t.data.data.newUser,e.getdata(e.newAdmin,e.newOrder,e.newUser),e.drawLine()})},methods:{getdata:function(e,t,a){var r=0;for(var n in e)this.newAdminData.push(e[n]),this.newAdminX.push(n),r+=e[n];for(var n in this.allData.push(r),r=0,t)this.newOrderData.push(t[n]),this.newOrderX.push(n),r+=t[n];for(var n in this.allData.push(r),r=0,a)this.newUserData.push(a[n]),this.newUserX.push(n),r+=a[n];this.allData.push(r)},drawLine:function(){var e=this.$echarts.init(document.getElementById("main")),t={title:{text:"走势图"},tooltip:{trigger:"axis"},grid:{top:100},legend:{data:["新注册用户","新增订单","新增管理员"]},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:this.newAdminX},yAxis:[{type:"value",name:"用户"},{type:"value",name:"订单",position:"right"}],series:[{name:"新注册用户",type:"line",data:this.newAdminData,markLine:{data:[]},markPoint:{data:[{name:"最大值",type:"max"},{name:"最小值",type:"min"}]}},_()({name:"新增订单",type:"line",data:this.newOrderData,yAxisIndex:1,markPoint:{data:[{name:"周最低",value:-2,xAxis:1,yAxis:-1.5}]},markLine:{data:[]}},"markPoint",{data:[{name:"最大值",type:"max"},{name:"最小值",type:"min"}]}),_()({name:"新增管理员",type:"line",data:this.newUserData,markPoint:{data:[{name:"周最低",value:-2,xAxis:1,yAxis:-1.5}]},markLine:{data:[]}},"markPoint",{data:[{name:"最大值",type:"max"},{name:"最小值",type:"min"}]})]};e.setOption(t)}},computed:{}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"firstpage"}},[a("div",{staticClass:"firstpage-header"},[a("h2",{staticClass:"text-center"},[e._v("数据统计")]),e._v(" "),a("div",[a("p",[a("span",[e._v("当日数据：")]),e._v(" "),a("span",[a("em",[e._v(e._s(e.newAdminData[e.newAdminData.length-1]))]),e._v("新增用户")]),e._v(" "),a("span",[a("em",[e._v(e._s(e.newOrderData[e.newOrderData.length-1]))]),e._v("新增订单")]),e._v(" "),a("span",[a("em",[e._v(e._s(e.newUserData[e.newUserData.length-1]))]),e._v("新增管理员")])]),e._v(" "),a("p",{staticClass:"sec"},[a("span",[e._v("总数据：")]),e._v(" "),a("span",[a("em",[e._v(e._s(e.allData[0]))]),e._v("注册用户")]),e._v(" "),a("span",[a("em",[e._v(e._s(e.allData[1]))]),e._v("订单")]),e._v(" "),a("span",[a("em",[e._v(e._s(e.allData[2]))]),e._v("管理员")])])])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"firstpage-con"},[t("div",{staticStyle:{width:"80%",height:"600px","margin-left":"100px","margin-top":"40px"},attrs:{id:"main"}})])}]};var C=a("VU/8")(F,$,!1,function(e){a("y9Gm")},"data-v-2464c5e3",null).exports,U={mixins:[f],data:function(){return{userlist:[],currentdata:[],nowcurrentpage:1}},created:function(){var e=this;k().then(function(t){e.userlist=t.data.data.userList,e.currentdata=e.userlist.slice(0,20)})},computed:{},methods:{handleCurrentChange:function(e){this.nowcurrentpage=e,this.currentdata=this.userlist.slice(20*(e-1),20*e)}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"datamanage",attrs:{id:"userlist"}},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentdata,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"#",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"注册日期",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"注册地址"}})],1)],e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"page-size":20,"current-page":e.nowcurrentpage,layout:"total,prev, pager, next",total:e.userlist.length},on:{"current-change":e.handleCurrentChange}})],1)],2)},staticRenderFns:[]};var S=a("VU/8")(U,D,!1,function(e){a("GJxR")},"data-v-6fccc8cb",null).exports,A={mixins:[f],data:function(){return{tableData5:[{id:"12987122",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987123",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987125",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987126",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"}],foodlist:[],currentfoodlist:[],nowcurrentpage:1,outerVisible:!1,innerVisible:!1,form1:{foodname:"",foodinfo:"",foodsort:"",foodimg:"",imageUrl:"",guigetable:[]},form2:{name:"",packfee:0,price:20},rules:{name:[{required:!0,message:"请输入规格",trigger:"blur"}]}}},created:function(){var e=this;k().then(function(t){e.foodlist=t.data.data.sellerList})},watch:{foodlist:function(e,t){this.currentfoodlist=e.slice(20*(this.nowcurrentpage-1),20*this.nowcurrentpage)}},methods:{handleEdit:function(){this.outerVisible=!0},handleDelete:function(e,t){var a=this,r=this;this.$confirm("是否删除这行的数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.foodlist.splice(e,1),a.$message({type:"success",message:"删除成功",duration:"1000"})}).catch(function(){})},handleCurrentChange:function(e){this.nowcurrentpage=e,this.currentfoodlist=this.foodlist.slice(20*(e-1),20*e)},handleAvatarSuccess:function(e,t){this.form1.imageUrl=URL.createObjectURL(t.raw)},outercomfirm:function(){this.outerVisible=!1,console.log(this.form1),this.form1={foodname:"",foodinfo:"",foodsort:"",foodimg:"",imageUrl:"",guigetable:[]}},innercomfirm:function(){var e=this;this.$refs.form2.validate(function(t){if(!t)return console.log("error submit!!"),!1;var a={text:e.form2.name,packfee:e.form2.packfee,price:e.form2.price};e.form1.guigetable.push(a),e.innerVisible=!1,e.$message({type:"success",message:"添加成功",duration:1e3}),e.form2={name:"",packfee:0,price:20}})},outerHandleDelete:function(e){this.form1.guigetable.splice(e,1)}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"datamanage",attrs:{id:"foodlist"}},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentfoodlist,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("span",[e._v(e._s(t.row.foodName))])]),e._v(" "),a("el-form-item",{attrs:{label:"所属店铺"}},[a("span",[e._v(e._s(t.row.shopname))])]),e._v(" "),a("el-form-item",{attrs:{label:"商品 ID"}},[a("span",[e._v(e._s(t.row.foodid))])]),e._v(" "),a("el-form-item",{attrs:{label:"店铺 ID"}},[a("span",[e._v(e._s(t.row.shopid))])]),e._v(" "),a("el-form-item",{attrs:{label:"商品分类"}},[a("span",[e._v(e._s(t.row.foodSort))])]),e._v(" "),a("el-form-item",{attrs:{label:"店铺地址"}},[a("span",[e._v(e._s(t.row.shopAddress))])]),e._v(" "),a("el-form-item",{attrs:{label:"商品描述"}},[a("span",[e._v(e._s(t.row.sellevolemn))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品 ID",prop:"foodid"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品名称",prop:"foodName"}}),e._v(" "),a("el-table-column",{attrs:{label:"评分",prop:"rate"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.nowcurrentpage,"page-size":20,layout:"total,prev, pager, next",total:e.foodlist.length},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.nowcurrentpage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"修改食品信息",visible:e.outerVisible,width:"40%",top:"10vh"},on:{"update:visible":function(t){e.outerVisible=t}}},[a("el-dialog",{attrs:{width:"40%",title:"添加规格","append-to-body":"",visible:e.innerVisible},on:{"update:visible":function(t){e.innerVisible=t}}},[a("el-form",{ref:"form2",attrs:{model:e.form2,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"规格",prop:"name"}},[a("el-input",{model:{value:e.form2.name,callback:function(t){e.$set(e.form2,"name",t)},expression:"form2.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"包装费"}},[a("el-input-number",{attrs:{min:0,max:10},model:{value:e.form2.packfee,callback:function(t){e.$set(e.form2,"packfee",t)},expression:"form2.packfee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"价格"}},[a("el-input-number",{attrs:{min:0,max:50},model:{value:e.form2.price,callback:function(t){e.$set(e.form2,"price",t)},expression:"form2.price"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.innerVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.innercomfirm}},[e._v("确定")])],1)],1),e._v(" "),a("el-form",{attrs:{model:e.form1,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"食品名称"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form1.foodname,callback:function(t){e.$set(e.form1,"foodname",t)},expression:"form1.foodname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"食品介绍"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form1.foodinfo,callback:function(t){e.$set(e.form1,"foodinfo",t)},expression:"form1.foodinfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"食品分类"}},[a("el-select",{model:{value:e.form1.foodsort,callback:function(t){e.$set(e.form1,"foodsort",t)},expression:"form1.foodsort"}},[a("el-option",{attrs:{label:"分类1",value:"feilei1"}}),e._v(" "),a("el-option",{attrs:{label:"分类2",value:"feilei2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"食品图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/posts","show-file-list":!1,"on-success":e.handleAvatarSuccess}},[e.form1.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.form1.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-table",{attrs:{data:e.form1.guigetable}},[a("el-table-column",{attrs:{prop:"text",label:"规格",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"packfee",label:"包装费",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.outerHandleDelete(t.$index,t.$row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"text-center mart25"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.innerVisible=!0}}},[e._v("添加规格")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.outerVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.outercomfirm}},[e._v("确定")])],1)],1)],2)},staticRenderFns:[]};var V=a("VU/8")(A,E,!1,function(e){a("WYM+"),a("EYr/"),a("FnGG")},"data-v-24b408a6",null).exports,q={mixins:[f],data:function(){return{tableData5:[{id:"12987122",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987123",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987125",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987126",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"}],orderlist:[],currentdata:[],nowcurrentpage:1}},created:function(){var e=this;k().then(function(t){e.orderlist=t.data.data.paylist,e.currentdata=e.orderlist.slice(0,20),console.log(e.currentdata)})},methods:{handleCurrentChange:function(e){this.nowcurrentpage=e,this.currentdata=this.orderlist.slice(20*(e-1),20*e)}}},I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"datamanage",attrs:{id:"foodlist"}},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentdata,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"用户名1"}},[a("span",[e._v(e._s(t.row.username))])]),e._v(" "),a("el-form-item",{attrs:{label:"店铺名称"}},[a("span",[e._v(e._s(t.row.shopName))])]),e._v(" "),a("el-form-item",{attrs:{label:"收货地址"}},[a("span",[e._v(e._s(t.row.getAddress))])]),e._v(" "),a("el-form-item",{attrs:{label:"店铺 ID"}},[a("span",[e._v(e._s(t.row.shopId))])]),e._v(" "),a("el-form-item",{attrs:{label:"店铺地址"}},[a("span",[e._v(e._s(t.row.shopAddress))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单ID",prop:"orderId"}}),e._v(" "),a("el-table-column",{attrs:{label:"总价格",prop:"totalPrice"}}),e._v(" "),a("el-table-column",{attrs:{label:"订单状态",prop:"payStatus"}})],1)],e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.nowcurrentpage,"page-size":20,layout:"total,prev, pager, next",total:e.orderlist.length},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.nowcurrentpage=t}}})],1)],2)},staticRenderFns:[]};var O=a("VU/8")(q,I,!1,function(e){a("Z26r"),a("tksj")},"data-v-28ff81e8",null).exports,R={mixins:[f],data:function(){return{userlist:[],currentdata:[],nowcurrentpage:1}},created:function(){var e=this;k().then(function(t){e.userlist=t.data.data.manageList,e.currentdata=e.userlist.slice(0,20)})},methods:{handleCurrentChange:function(e){this.nowcurrentpage=e,this.currentdata=this.userlist.slice(20*(e-1),20*e)}}},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"datamanage",attrs:{id:"userlist"}},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentdata,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"注册日期",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"admin",label:"权限"}})],1)],e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.nowcurrentpage,"page-size":20,layout:"total,prev, pager, next",total:e.userlist.length},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.nowcurrentpage=t}}})],1)],2)},staticRenderFns:[]};var M=a("VU/8")(R,L,!1,function(e){a("Fo6H")},"data-v-6dbd2b5a",null).exports,P={mixins:[f],data:function(){return{ruleForm:{name:"",address:"",phone:"",shopinfo:"",shopbanner:"",shopsort:"",shoppoint:[],fee:"",startfee:"",shophours1:"",shophours2:"",shophead:"",shoplicence:"",servicelicence:"",discount:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],address:[{required:!0,message:"请选择活动区域",trigger:"blur"}],phone:[{validator:function(e,t,a){/^[1][3,4,5,7,8][0-9]{9}$/.test(t)?a():a(new Error("请正确输入您的联系方式"))},trigger:"blur"}],shopinfo:[{required:!0,message:"请选择活动区域",trigger:"blur"}],shopbanner:[{required:!0,message:"请选择活动区域",trigger:"blur"}],shopsort:[{required:!0,message:"请选择活动资源",trigger:"change"}],shoppoint:[{type:"array",required:!0,message:"请至少选择一个",trigger:"change"}],fee:[{required:!0,message:"请填写活动形式",trigger:"blur"}],startfee:[{required:!0,message:"请填写活动形式",trigger:"blur"}],shophours1:[{required:!0,message:"请选择日期",trigger:"blur"}],shophours2:[{required:!0,message:"请选择日期",trigger:"blur"}],shophead:[{required:!0,message:"请填写活动形式",trigger:"blur"}],shoplicence:[{required:!0,message:"请填写活动形式",trigger:"blur"}],servicelicence:[{required:!0,message:"请填写活动形式",trigger:"blur"}],discount:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},tableData:[{title:"减",name:"满减优惠",detail:"满30减5,满60减8"}]}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm)})},resetForm:function(e){this.$refs[e].resetFields()},handleClick:function(e){}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"adddata",attrs:{id:"addshop"}},[a("div",{staticClass:"addcon"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"店铺名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[a("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[a("el-input",{model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店铺简介",prop:"shopinfo"}},[a("el-input",{model:{value:e.ruleForm.shopinfo,callback:function(t){e.$set(e.ruleForm,"shopinfo",t)},expression:"ruleForm.shopinfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店铺标语",prop:"shopbanner"}},[a("el-input",{model:{value:e.ruleForm.shopbanner,callback:function(t){e.$set(e.ruleForm,"shopbanner",t)},expression:"ruleForm.shopbanner"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店铺分类",prop:"shopsort"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.shopsort,callback:function(t){e.$set(e.ruleForm,"shopsort",t)},expression:"ruleForm.shopsort"}},[a("el-option",{attrs:{label:"分类1",value:"fenlei1"}}),e._v(" "),a("el-option",{attrs:{label:"分类2",value:"fenlei2"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"shoppoint",attrs:{label:"店铺特点",prop:"shoppoint"}},[a("p",[a("span",[e._v("品牌保证"),a("el-switch",{model:{value:e.ruleForm.shoppoint[0],callback:function(t){e.$set(e.ruleForm.shoppoint,0,t)},expression:"ruleForm.shoppoint[0]"}})],1),e._v(" "),a("span",[e._v("蜂鸟专送"),a("el-switch",{model:{value:e.ruleForm.shoppoint[1],callback:function(t){e.$set(e.ruleForm.shoppoint,1,t)},expression:"ruleForm.shoppoint[1]"}})],1),e._v(" "),a("span",[e._v("新开店铺"),a("el-switch",{model:{value:e.ruleForm.shoppoint[2],callback:function(t){e.$set(e.ruleForm.shoppoint,2,t)},expression:"ruleForm.shoppoint[2]"}})],1)]),e._v(" "),a("p",[a("span",[e._v("外卖保"),a("el-switch",{model:{value:e.ruleForm.shoppoint[3],callback:function(t){e.$set(e.ruleForm.shoppoint,3,t)},expression:"ruleForm.shoppoint[3]"}})],1),e._v(" "),a("span",[e._v("准时达"),a("el-switch",{model:{value:e.ruleForm.shoppoint[4],callback:function(t){e.$set(e.ruleForm.shoppoint,4,t)},expression:"ruleForm.shoppoint[4]"}})],1),e._v(" "),a("span",[e._v("新开店铺"),a("el-switch",{model:{value:e.ruleForm.shoppoint[5],callback:function(t){e.$set(e.ruleForm.shoppoint,5,t)},expression:"ruleForm.shoppoint[5]"}})],1)])]),e._v(" "),a("el-form-item",{attrs:{label:"配送费",prop:"fee"}},[a("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},model:{value:e.ruleForm.fee,callback:function(t){e.$set(e.ruleForm,"fee",t)},expression:"ruleForm.fee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"起送价",prop:"startfee"}},[a("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},model:{value:e.ruleForm.startfee,callback:function(t){e.$set(e.ruleForm,"startfee",t)},expression:"ruleForm.startfee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营业时间",prop:"shophours1"}},[a("el-time-select",{attrs:{placeholder:"请输入起始时间","picker-options":{start:"08:30",step:"00:15",end:"18:30"}},model:{value:e.ruleForm.shophours1,callback:function(t){e.$set(e.ruleForm,"shophours1",t)},expression:"ruleForm.shophours1"}}),e._v(" "),a("el-form-item",{staticStyle:{display:"inline-block"},attrs:{prop:"shophours2"}},[a("el-time-select",{attrs:{placeholder:"请输入结尾时间","picker-options":{start:"08:30",step:"00:15",end:"18:30",minTime:e.ruleForm.shophours1}},model:{value:e.ruleForm.shophours2,callback:function(t){e.$set(e.ruleForm,"shophours2",t)},expression:"ruleForm.shophours2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"优惠活动",prop:"discount"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.discount,callback:function(t){e.$set(e.ruleForm,"discount",t)},expression:"ruleForm.discount"}},[a("el-option",{attrs:{label:"满减优惠",value:"满减优惠"}}),e._v(" "),a("el-option",{attrs:{label:"优惠大酬宾",value:"优惠大酬宾"}})],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"title",label:"活动标题",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"活动名称",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"detail",label:"活动详情"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.handleClick(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"text-center"},[a("el-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])},staticRenderFns:[]};var X=a("VU/8")(P,T,!1,function(e){a("vcHj")},"data-v-09b4b9d0",null).exports,H={data:function(){return{activeNames:["1"],form1flag:!0,form:{foodtype:"",foodtypevalue:"",foodinfo:""},imageUrl:"",form2:{name:"",acitivity:"",detail:"",character:"",guige:"",packfee:"",price:""},rules2:{name:[{required:!0,message:"请输入食品名称",trigger:"blur"}],activity:[{required:!0,message:"请输入活动名称",trigger:"blur"}],detail:[{required:!0,message:"详情",trigger:"blur"}],character:[{required:!0,message:"特点",trigger:"blur"}],guige:[{required:!0,message:"规格",trigger:"blur"}],packfee:[{required:!0,message:"包装费用",trigger:"blur"}],price:[{required:!0,message:"价钱",trigger:"blur"}]}}},methods:{handleChange:function(){},onSubmit:function(){},submitForm2:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("失败"),t.$notify.error({title:"错误",message:"请检查输入是否正确",offset:100,customClass:"setErrorSize",duration:1500}),!1;console.log(t.form2)})},clickup:function(){this.form1flag?this.form1flag=!1:this.form1flag=!0},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),console.log(this.imageUrl)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),console.log(e),t&&a}}},j={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"adddata",attrs:{id:"addgoods"}},[a("h3",{staticClass:"text-center addgoods-header"},[e._v("选择食品种类")]),e._v(" "),a("div",{staticClass:"addgoods-form1 form12"},[a("el-form",{ref:"form1",attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"食品种类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.foodtype,callback:function(t){e.$set(e.form,"foodtype",t)},expression:"form.foodtype"}},[a("el-option",{attrs:{label:"请选择",value:"1"}})],1)],1),e._v(" "),a("div",{staticClass:"collapse-box",class:{active:e.form1flag}},[a("el-form-item",{attrs:{label:"食品种类"}},[a("el-input",{attrs:{placeholder:"种类"},model:{value:e.form.foodtypevalue,callback:function(t){e.$set(e.form,"foodtypevalue",t)},expression:"form.foodtypevalue"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"种类描述"}},[a("el-input",{attrs:{placeholder:"种类描述"},model:{value:e.form.foodinfo,callback:function(t){e.$set(e.form,"foodinfo",t)},expression:"form.foodinfo"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定提交")])],1)],1),e._v(" "),a("p",{staticClass:"clickup text-center",on:{click:e.clickup}},[a("i",{staticClass:"el-icon-caret-top"}),e._v("添加食品种类")])],1)],1),e._v(" "),a("div",{staticClass:"addgoods-form2"},[a("h3",{staticClass:"text-center addgoods-header mart30"},[e._v("添加食品")]),e._v(" "),a("div",{staticClass:"addgoods-form2 form12"},[a("el-form",{ref:"form2",attrs:{model:e.form2,rules:e.rules2,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"食品名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"食品名称"},model:{value:e.form2.name,callback:function(t){e.$set(e.form2,"name",t)},expression:"form2.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"食品活动",prop:"acitivity"}},[a("el-input",{attrs:{placeholder:"食品活动"},model:{value:e.form2.acitivity,callback:function(t){e.$set(e.form2,"acitivity",t)},expression:"form2.acitivity"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"食品详情",prop:"detail"}},[a("el-input",{attrs:{placeholder:"食品详情"},model:{value:e.form2.detail,callback:function(t){e.$set(e.form2,"detail",t)},expression:"form2.detail"}})],1),e._v(" "),a("el-form-item",{staticClass:"imgupload",attrs:{label:"上传图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"食品特点",prop:"character"}},[a("el-select",{model:{value:e.form2.character,callback:function(t){e.$set(e.form2,"character",t)},expression:"form2.character"}},[a("el-option",{attrs:{label:"请选择",value:"1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"食品规格",prop:"guige"}},[a("el-radio-group",{model:{value:e.form2.guige,callback:function(t){e.$set(e.form2,"guige",t)},expression:"form2.guige"}},[a("el-radio",{attrs:{label:"单规格"}}),e._v(" "),a("el-radio",{attrs:{label:"多规格"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"包装费",prop:"packfee"}},[a("el-input-number",{model:{value:e.form2.packfee,callback:function(t){e.$set(e.form2,"packfee",t)},expression:"form2.packfee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input-number",{model:{value:e.form2.price,callback:function(t){e.$set(e.form2,"price",t)},expression:"form2.price"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm2("form2")}}},[e._v("确认添加食品")])],1)],1)],1)])])},staticRenderFns:[]};var z=a("VU/8")(H,j,!1,function(e){a("kPUM"),a("QFU1")},"data-v-b931c77c",null).exports,N={data:function(){return{getdata:[],getdataX:[]}},created:function(){var e=this,t=this;w.a.get(y+"/userSpread").then(function(a){t.getdata=a.data.data,t.getdataXF(e.getdata),t.drawLine()})},methods:{getdataXF:function(e){var t=this;e.map(function(e,a){t.getdataX.push(e.name)})},drawLine:function(){var e=this.$echarts.init(document.getElementById("main")),t={title:{text:"用户分布",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:this.getdataX},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:this.getdata,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(t)}}},B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"userspread"}},[t("div",{staticStyle:{width:"80%",height:"500px",margin:"0px auto"},attrs:{id:"main"}})])}]};var G=a("VU/8")(N,B,!1,function(e){a("BlZv")},null,null).exports,Y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"userspread"}})},staticRenderFns:[]},Z=a("VU/8")(null,Y,!1,null,null,null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"ruler"}},[a("h2",{staticClass:"ruler-tit text-center"},[a("b",[e._v("管理员信息")])]),e._v(" "),a("div",{staticClass:"ruler-con"},[a("p",[e._v("姓名：")]),e._v(" "),a("p",[e._v("注册时间：")]),e._v(" "),a("p",[e._v("管理员权限：")]),e._v(" "),a("p",[e._v("管理员ID:")]),e._v(" "),a("p",[e._v("更换头像：")])])])}]};var J=a("VU/8")({},W,!1,function(e){a("6ZYN")},"data-v-8b5482c0",null).exports,Q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"info"}},[t("p",[this._v("node-ele后台管理系统"),t("br"),this._v("\n\t  第一次登陆的用户自动注册成为普通管理员"),t("br"),this._v("\n\t  普通管理员可以添加,修改信息"),t("br"),this._v("\n\t  超级管理员可以删除信息\n\t")])])}]};var K=a("VU/8")({},Q,!1,function(e){a("2LDf")},"data-v-774c8c00",null).exports,ee={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.items,function(t,r){return a("div",[void 0!=t.children&&t.children.length>0?a("el-submenu",{attrs:{index:t.id+""}},[a("template",{slot:"title"},[a("i",{class:t.icon},[e._v(e._s(t.name))])]),e._v(" "),a("nav-bar-item",{attrs:{items:t.children}})],2):a("el-menu-item",{attrs:{index:t.id+""},on:{click:function(a){e.$router.push(t.path)}}},[a("i",{class:t.icon},[e._v(e._s(t.name))])])],1)}))},staticRenderFns:[]},te={data:function(){return{defaultactive:"1",chooseList:[],newMenuData:[{id:"1",name:"首页",icon:"el-icon-document",path:"/index",pathname:"index"},{id:"2",name:"数据管理",icon:"el-icon-printer",children:[{id:"2-1",name:"用户列表",icon:"el-icon-printer",path:"/userlist",pathname:"userlist",children:[{id:"2-1-1",name:"用户子列表",icon:"el-icon-printer",path:"/orderlist",pathname:"orderlist"}]},{id:"2-2",name:"食品列表",icon:"el-icon-printer",path:"/foodlist",pathname:"foodlist"}]},{id:"3",name:"添加数据",icon:"el-icon-plus",children:[{id:"3-1",name:"添加商铺",icon:"el-icon-plus",path:"/addshop",pathname:"test"}]}]}},methods:{handleOpen:function(e,t){},handleClose:function(e,t){},handleSelect:function(e,t){},currenMenuFun:function(e){var t=0,a=this,r=[],n=[];!function o(s,i){i?s.forEach(function(r,s){if(!t)return r.pathname==e?(a.defaultactive=r.id,n.push({name:r.name,path:r.path}),void(t=1)):void(r.children&&r.children.length>0?(n.push({name:r.name,path:r.path}),o(r.children,1)):n=[])}):s.forEach(function(n,s){if(!t){if(n,r=[],n.pathname==e)return a.defaultactive=n.id,r.push({name:n.name,path:n.path}),void(t=1);n.children&&n.children.length>0&&(r.push({name:n.name,path:n.path}),o(n.children,1))}})}(this.newMenuData),t&&(a.chooseList=r.concat(n),console.log(r.concat(n)))}},created:function(){var e=this.$route.name;this.currenMenuFun(e)},watch:{$route:function(e,t){e.name}},components:{NavBarItem:a("VU/8")({name:"NavBarItem",props:["items","Navindex"]},ee,!1,null,null,null).exports}},ae={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{width:"200px"}},[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":this.defaultactive.toString(),"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff"},on:{open:this.handleOpen,close:this.handleClose,select:this.handleSelect}},[t("nav-bar-item",{attrs:{items:this.newMenuData}})],1)],1)},staticRenderFns:[]};var re=a("VU/8")(te,ae,!1,function(e){a("Ho+g")},null,null).exports;r.default.use(s.a);var ne=new s.a({mode:"history",base:"/vueelement/",routes:[{path:"/",name:"login",component:d},{path:"/index",name:"index",component:b,children:[{path:"/",name:"firstpage",component:C,meta:{keepAlive:!1}},{path:"/userlist",name:"userlist",component:S,meta:{keepAlive:!1}},{path:"/foodlist",name:"foodlist",component:V,meta:{keepAlive:!1}},{path:"/orderlist",name:"test",component:O},{path:"/adminlist",name:"adminlist",component:M},{path:"/addshop",name:"addshop",component:X},{path:"/addgoods",name:"addgoods",component:z},{path:"/userspread",name:"userspread",component:G},{path:"/textedit",name:"textedit",component:Z},{path:"/ruler",name:"ruler",component:J},{path:"/info",name:"info",component:K},{path:"/test",name:"test",component:re}]}]}),oe=a("P8yQ"),se=a.n(oe);r.default.prototype.$echarts=se.a;var ie=a("H93t"),le=a.n(ie);a("TsY+"),a("rqsT");r.default.use(le.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:ne,components:{App:o},template:"<App/>"})},QFU1:function(e,t){},"TsY+":function(e,t){},"WYM+":function(e,t){},Z26r:function(e,t){},aTed:function(e,t){},"d/pO":function(e,t){},kPUM:function(e,t){},rqsT:function(e,t){},tksj:function(e,t){},vcHj:function(e,t){},y9Gm:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a29b83d7780237875878.js.map