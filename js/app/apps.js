function board(){}function dashboard(){}function explorer(){}function help(){}function monitoring(){}function settings(){}function webos(){window.dhxWindows=new dhtmlxWindowsPlugin,window.addEventListener("keydown",function(t){27===t.keyCode&&dhxWindows.closeOnTopWindow()},!0),window.addEventListener("resize",function(){dhxWindows.resizeViewport()})}board.prototype.on=function(){var t=dhxWindows.getInstance("boardWins","Board"),e=t.attachToolbar({icon_path:apps.contextPath+"/assets/dhtmlx/dhtmlxSutie/skins/material/dhxtoolbar_material/"});e.loadStruct(this.getStruct().structCommon().grid_toolbar);var i=t.attachGrid();i.setImagePath("https://dhtmlx.com/docs/products/codebase/imgs/dhxgrid_material/"),i.setHeader("Sales, Book Title, Author"),i.setInitWidths("70,250,*"),i.setColAlign("right,left,left"),i.setColTypes("dyn,ed,ed"),i.setColSorting("int,str,str"),i.init(),i.parse(this.getMock().getGrid(),"json")},board.prototype.getStruct=function(){function t(){return{grid_title:"게시판관리",grid_header:{head:[{title:this.structCommon().gridHeaderCheckbox("chk_simple"),id:"na",width:50,type:"ch",align:"center",sort:"na",attach:["#rspan","#rspan"]},{title:"No.",id:"na",width:50,type:"cntr",align:"center",sort:"na",attach:["#rspan","#rspan"]},{title:"글번호",id:"na",width:50,type:"ro",align:"center",sort:"na",attach:["#rspan","#numeric_filter^userId^numeric_mask"]},{title:"유형",id:"na",width:120,type:"ro",align:"center",sort:"na",attach:["#rspan","#select_filter"]},{title:"제목",id:"na",width:"*",type:"ro",align:"left",sort:"title",attach:["#rspan","#text_filter"]},{title:"작성자",id:"na",width:80,type:"ro",align:"center",sort:"na",attach:["ID","#text_filter^userId^userId_mask"]},{title:"#cspan",id:"na",width:150,type:"ro",align:"center",sort:"na",attach:["Email","#text_filter^email^email_mask"]},{title:"등록일자",id:"na",width:160,type:"ro",align:"center",sort:"na",attach:["#rspan","#date_filter^regdate^date_mask"]},{title:"&nbsp;",id:"na",width:"*",type:"ro",align:"center",sort:"na",attach:["#rspan","#rspan"]}],page_id:"pg_simple"},grid_filter_options:{board_type:[{text:"공지사항",value:"1"},{text:"FAQ",value:"2"},{text:"Q&A",value:"3"},{text:"자료실",value:"4"}]},edit_title:"글작성",form:function(){return[{type:"block",blockOffset:0,offsetLeft:0,list:[{type:"settings",position:"label-left",labelWidth:80,offsetLeft:5},{type:"input",name:"seq",value:"",hidden:!0},{type:"input",name:"title",label:"제목",inputWidth:590,value:"",required:!0},{type:"newcolumn"},{type:"checkbox",name:"mailSendYn",value:"Y",label:"메일발송",position:"label-right"}]},{type:"block",blockOffset:0,offsetLeft:0,list:[{type:"settings",position:"label-left",labelWidth:80,offsetLeft:5},{type:"editor",name:"content",label:"내용",inputWidth:690,inputHeight:420,value:"",required:!0}]},this.structCommon().form_fileupload]}}}function e(){return{gridHeaderCheckbox:function(t){return'<input type="checkbox" id="'+t+'" name="'+t+'"/>'},grid_toolbar:[{id:"lbl_title",type:"text",text:"등록일자"},{id:"startDate",type:"buttonInput",width:80},{id:"sp1",type:"text",text:"~"},{id:"endDate",type:"buttonInput",width:80},{id:"btn_search",type:"button",text:"검색"},{id:"btn_find_clear",type:"button",text:"초기화"},{id:"sep2",type:"separator"},{id:"btn_refresh",type:"button",text:"새로고침"},{id:"sep_space",type:"separator"},{id:"btn_new",type:"button",text:"글작성"},{id:"btn_remove",type:"button",text:"삭제"}],grid_pagination:[{id:"_pgn_totalcount",type:"text",text:"Total 100"},{id:"_pgn_sp1",type:"separator"},{id:"_pgn_leftabs",type:"button",img:"ar_left_abs.gif",img_disabled:"ar_left_abs_dis.gif",disabled:!0},{id:"_pgn_left",type:"button",img:"ar_left.gif",img_disabled:"ar_left_dis.gif",disabled:!0},{id:"_pgn_pages",type:"text",text:"1 - 10"},{id:"_pgn_right",type:"button",img:"ar_right.gif",img_disabled:"ar_right_dis.gif"},{id:"_pgn_rightabs",type:"button",img:"ar_right_abs.gif",img_disabled:"ar_right_abs_dis.gif"},{id:"_pgn_perpagenum",type:"buttonSelect",text:"page 1",img:"paging_pages.gif",mode:"select",options:[{type:"button",id:"page_1",text:"page 1",img:"paging_page.gif"},{type:"button",id:"page_2",text:"page 2",img:"paging_page.gif"},{type:"button",id:"page_3",text:"page 3",img:"paging_page.gif"}]},{id:"_pgn_sp2",type:"separator"},{id:"_pgn_wtd",type:"buttonSelect",text:"5",img:"paging_rows.gif",mode:"select",options:[{type:"button",id:"rpp_5",text:"5",img:"paging_page.gif"},{type:"button",id:"rpp_10",text:"10",img:"paging_page.gif"},{type:"button",id:"rpp_20",text:"20",img:"paging_page.gif"}]}],form_toolbar:[{id:"lbl_title",type:"text",text:""},{id:"sep_space",type:"separator"},{id:"btn_save",type:"button",text:"저장",img:"fa fa-floppy-o",imgdis:"fa fa-floppy-o"},{id:"btn_remove",type:"button",text:"삭제",img:"fa fa-eraser",imgdis:"fa fa-eraser"},{id:"sp1",type:"separator"},{id:"btn_preview",type:"button",text:"미리보기",img:"fa fa-file-text-o",imgdis:"fa fa-file-text-o"}],form_fileupload:{type:"block",blockOffset:0,offsetLeft:0,list:[{type:"settings",position:"label-left",labelWidth:80,offsetLeft:5},{type:"input",name:"fileUpload",value:"false",hidden:!0},{type:"input",name:"fileString255",value:"",hidden:!0},{type:"input",name:"sefileString255",value:"",hidden:!0},{type:"input",name:"attach_input",label:"첨부파일",readonly:!0,inputWidth:200,className:"readonly"},{type:"file",name:"attach_file",label:"첨부파일",hidden:!0},{type:"newcolumn"},{type:"button",name:"btn_fileupload",value:"업로드",className:"btn-fileupload"},{type:"newcolumn"},{type:"label",name:"attach_name",label:"파일없음",hidden:!1,labelWidth:"auto",className:"file-list"},{type:"newcolumn"},{type:"label",name:"attach_action",label:' <i class="fa fa-close fu-delete"></i> ',hidden:!0}]}}}return{get:t,structCommon:e}},board.prototype.getMock=function(){function t(){return[{id:1,text:"Books",open:1,items:[{id:5,text:"Stephen King",items:[{id:11,text:"The Dead Zone"},{id:12,text:"The Running Man"},{id:13,text:"The Talisman"},{id:14,text:"The Tommyknockers"},{id:15,text:"The Green Mile"},{id:16,text:"The Girl Who Loved Tom Gordon"},{id:17,text:"Dreamcatcher"},{id:18,text:"Blood and Smoke"}]},{id:6,text:"Herbert Wells",open:1,items:[{id:19,text:"The Time Machine"},{id:20,text:"The Island of Doctor Moreau"},{id:21,text:"The Invisible Man"},{id:22,text:"The First Men in the Moon"},{id:23,text:"The War of the Worlds"}]},{id:7,text:"Mark Twen",items:[{id:24,text:"The Adventures of Tom Sawyer"},{id:25,text:"The Prince and the Pauper"},{id:26,text:"Adventures of Huckleberry Finn"},{id:27,text:"Tom Sawyer Abroad"},{id:28,text:"Tom Sawyer Detective"},{id:29,text:"Personal Recollections of Joan of Arc"}]}]},{id:2,text:"Misc",items:[{id:8,text:"Turned at Dark / C. C. Hunter"},{id:9,text:"Daire Meets Ever / Alyson Noël"},{id:10,text:"Socs and Greasers / Rob Lowe"}]},{id:3,text:"Privacy and Terms.pdf"},{id:4,text:"Licence Agreement.pdf"}]}function e(){return{rows:[{id:1001,data:["100","A Time to Kill","John Grisham","12.99","1","05/01/1998"]},{id:1002,data:["1000","Blood and Smoke","Stephen King","0","1","01/01/2000"]},{id:1003,data:["-200","The Rainmaker","John Grisham","7.99","0","12/01/2001"]},{id:1004,data:["350","The Green Mile","Stephen King","11.10","1","01/01/1992"]},{id:1005,data:["700","Misery","Stephen King","7.70","0","01/01/2003"]},{id:1006,data:["-1200","The Dark Half","Stephen King","0","0","10/30/1999"]},{id:1007,data:["1500","The Partner","John Grisham","12.99","1","01/01/2005"]},{id:1008,data:["500","It","Stephen King","9.70","0","10/15/2001"]},{id:1009,data:["400","Cousin Bette","Honore de Balzac","0","1","12/01/1991"]},{id:10010,data:["400","Cousin Bette","Honore de Balzac","0","1","12/01/1991"]},{id:1011,data:["101","A Time to Kill","John Grisham","12.99","1","05/01/1998"]}]}}return{getTree:t,getGrid:e}},dashboard.prototype.on=function(){var t=dhxWindows.getInstance("dashboarWins","Dashboard");t.maximize(),t.showInnerScroll(),t.attachURL("https://ecomfe.github.io/echarts-examples/public/editor.html?c=treemap-drill-down")},explorer.prototype.on=function(){var t=dhxWindows.getInstance("explorerWins","Explorer"),e=t.attachMenu();e.setIconsPath("https://dhtmlx.com/docs/products/dhtmlxMenu/samples/common/imgs/"),e.loadStruct(this.getStruct().getMenu());var i=t.attachRibbon({icons_path:"https://dhtmlx.com/docs/products/dhtmlxRibbon/samples/common/"});i.loadStruct(this.getStruct().getRibbon());var a=t.attachLayout("2U");a.setOffsets(layoutOffsetValue),a.cells("a").setWidth(200),a.cells("a").setText("Tree"),a.cells("b").setText("Grid");var n=a.cells("a").attachTreeView();n.loadStruct(this.getMock().getTree(),"json");var o=a.cells("b").attachGrid();o.setImagePath("https://dhtmlx.com/docs/products/codebase/imgs/dhxgrid_material/"),o.setHeader("Sales, Book Title, Author"),o.setInitWidths("70,250,*"),o.setColAlign("right,left,left"),o.setColTypes("dyn,ed,ed"),o.setColSorting("int,str,str"),o.init(),o.parse(this.getMock().getGrid(),"json")},explorer.prototype.getStruct=function(){function t(){return[{id:"file",text:"File",items:[{id:"new",text:"New",img:"new.gif",imgdis:"new_dis.gif"},{id:"file_sep_1",type:"separator"},{id:"open",text:"Open",img:"open.gif",imgdis:"open_dis.gif"},{id:"save",text:"Save",img:"save.gif",imgdis:"save_dis.gif"},{id:"saveAs",text:"Save As...",img:"save_as.gif",imgdis:"save_as_dis.gif",enabled:!1},{id:"file_sep_2",type:"separator"},{id:"print",text:"Print",img:"print.gif",imgdis:"print_dis.gif"},{id:"pageSetup",text:"Page Setup",img:"page_setup.gif",imgdis:"page_setup_dis.gif",enabled:"false"},{id:"file_sep_3",type:"separator"},{id:"close",text:"Close",img:"close.gif",imgdis:"close_dis.gif"}]},{id:"sep_top_1",type:"separator"},{id:"edit",text:"Edit",items:[{id:"undo",text:"Undo",img:"undo.gif",imgdis:"undo_dis.gif"},{id:"redo",text:"Redo",img:"redo.gif",imgdis:"redo_dis.gif"},{id:"edit_sep_1",type:"separator"},{id:"selectAll",text:"Select All",img:"select_all.gif",imgdis:"select_all_dis.gif"},{id:"edit_sep_2",type:"separator"},{id:"cut",text:"Cut",img:"cut.gif",imgdis:"cut_dis.gif"},{id:"copy",text:"Copy",img:"copy.gif",imgdis:"copy_dis.gif"},{id:"paste",text:"Paste",img:"paste.gif",imgdis:"paste_dis.gif"}]},{id:"help",text:"Help",items:[{id:"about",text:"About...",img:"about.gif",imgdis:"about_dis.gif"},{id:"needhelp",text:"Help",img:"help.gif",imgdis:"help_dis.gif"},{id:"bugReporting",text:"Bug Reporting",img:"bug_reporting.gif",imgdis:"bug_reporting_dis.gif"}]}]}function e(){return{tabs:[{id:"tab_1",text:"main",active:!0,items:[{type:"block",text:"office document",list:[{id:"open",type:"button",text:"Open",isbig:!0,img:"48/open.gif"},{id:"print",type:"button",text:"Quick<br />print",img:"48/printer.png",isbig:!0},{id:"preview",type:"button",text:"Print<br />preview",img:"48/zoom_selection.png",isbig:!0}]},{type:"block",text:"edit",list:[{id:"copy",type:"button",text:"copy",img:"48/copy.gif",isbig:!0},{id:"find",type:"button",text:"find",img:"48/page_find.png",isbig:!0},{id:"go_to",type:"button",text:"go to",img:"48/tab_go.png",isbig:!0}]},{type:"block",text:"page setup",list:[{id:"page_setup",type:"button",text:"page<br />setup",img:"48/pencil_ruler.png",isbig:!0},{id:"printing_area",type:"button",text:"printing<br />area",img:"48/printer_add.png",isbig:!0}]},{type:"block",text:"window",list:[{id:"change_window",type:"button",text:"change<br />window",img:"48/application_cascade.png",isbig:!0}]}]},{id:"tab_2",text:"text",items:[{type:"block",list:[{id:"bold",type:"buttonTwoState",text:"bold",img:"18/text_bold.png"},{id:"italis",type:"buttonTwoState",text:"italic",img:"18/text_italic.png"},{id:"strikethrough",type:"buttonTwoState",text:"strikethrough",img:"18/text_strikethroungh.png"}]}]}]}}function i(){return[{type:"buttonSelect",id:"new",text:"New",img:"new.gif",img_disabled:"new_dis.gif",options:[{id:"new_text",type:"obj",text:"Text Document",img:"text_document.gif"},{id:"new_excel",type:"obj",text:"Stylesheet",img:"stylesheet.gif"},{id:"new_db",type:"obj",text:"Database",img:"database.gif"},{id:"new_pp",type:"obj",text:"Presentation",img:"presentation.gif"},{id:"new_s1",type:"sep"},{id:"new_other",type:"obj",text:"Other",img:"other.gif"}]},{type:"separator",id:"sep1"},{type:"button",id:"open",img:"open.gif"},{type:"buttonTwoState",id:"autosave",text:"Autosave",img:"save.gif",pressed:!0,tooltip:"Autosave every 5 minutes"},{type:"button",id:"save_as",text:"Save As...",disabled:!0,img:"save_as.gif",img_disabled:"save_as_dis.gif"},{type:"separator",id:"sep2"},{type:"buttonInput",id:"inp",text:"Input",width:50},{type:"slider",id:"sld",length:70,value_min:10,value_max:100,value_now:70,text_min:"10 MB",text_max:"100 MB",tip_template:"Limit connection speed to %v MB"},{type:"separator",id:"sep3"},{type:"button",id:"cut",img:"cut.gif"},{type:"button",id:"copy",img:"copy.gif"},{type:"buttonTwoState",id:"paste",img:"paste.gif"},{type:"separator",id:"sep4"},{type:"buttonSelect",id:"print",text:"Print",img:"print.gif",img_disabled:"print_dis.gif",options:[{id:"print_page",type:"obj",text:"Page",img:"page.gif"},{id:"print_range",type:"obj",text:"Page Range",img:"page_range.gif"},{id:"print_sel",type:"obj",text:"Selection",img:"selection.gif"},{id:"print_sep1",type:"sep"},{id:"print_cfg",type:"obj",text:"Settings",img:"settings.gif"}]},{type:"separator",id:"sep5"},{type:"text",id:"info",text:"dhtmlxToolbar Demo"}]}return{getMenu:t,getToolbar:i,getRibbon:e}},explorer.prototype.getMock=function(){function t(){return[{id:1,text:"Books",open:1,items:[{id:5,text:"Stephen King",items:[{id:11,text:"The Dead Zone"},{id:12,text:"The Running Man"},{id:13,text:"The Talisman"},{id:14,text:"The Tommyknockers"},{id:15,text:"The Green Mile"},{id:16,text:"The Girl Who Loved Tom Gordon"},{id:17,text:"Dreamcatcher"},{id:18,text:"Blood and Smoke"}]},{id:6,text:"Herbert Wells",open:1,items:[{id:19,text:"The Time Machine"},{id:20,text:"The Island of Doctor Moreau"},{id:21,text:"The Invisible Man"},{id:22,text:"The First Men in the Moon"},{id:23,text:"The War of the Worlds"}]},{id:7,text:"Mark Twen",items:[{id:24,text:"The Adventures of Tom Sawyer"},{id:25,text:"The Prince and the Pauper"},{id:26,text:"Adventures of Huckleberry Finn"},{id:27,text:"Tom Sawyer Abroad"},{id:28,text:"Tom Sawyer Detective"},{id:29,text:"Personal Recollections of Joan of Arc"}]}]},{id:2,text:"Misc",items:[{id:8,text:"Turned at Dark / C. C. Hunter"},{id:9,text:"Daire Meets Ever / Alyson Noël"},{id:10,text:"Socs and Greasers / Rob Lowe"}]},{id:3,text:"Privacy and Terms.pdf"},{id:4,text:"Licence Agreement.pdf"}]}function e(){return{rows:[{id:1001,data:["100","A Time to Kill","John Grisham","12.99","1","05/01/1998"]},{id:1002,data:["1000","Blood and Smoke","Stephen King","0","1","01/01/2000"]},{id:1003,data:["-200","The Rainmaker","John Grisham","7.99","0","12/01/2001"]},{id:1004,data:["350","The Green Mile","Stephen King","11.10","1","01/01/1992"]},{id:1005,data:["700","Misery","Stephen King","7.70","0","01/01/2003"]},{id:1006,data:["-1200","The Dark Half","Stephen King","0","0","10/30/1999"]},{id:1007,data:["1500","The Partner","John Grisham","12.99","1","01/01/2005"]},{id:1008,data:["500","It","Stephen King","9.70","0","10/15/2001"]},{id:1009,data:["400","Cousin Bette","Honore de Balzac","0","1","12/01/1991"]},{id:10010,data:["400","Cousin Bette","Honore de Balzac","0","1","12/01/1991"]},{id:1011,data:["101","A Time to Kill","John Grisham","12.99","1","05/01/1998"]}]}}return{getTree:t,getGrid:e}},help.prototype.on=function(){var t,e=dhxWindows.getInstance("helpWins","Help"),i=e.attachLayout("2U");i.attachEvent("onContentLoaded",function(e){i.cells("b").getFrame()&&(t=i.cells("b").getFrame().contentWindow,$.get(apps.contextPath+"/assets/help/readme.md",function(e){t.setValue(e)}))}),i.setOffsets(layoutOffsetValue),i.cells("a").setWidth(250),i.cells("a").setText("목차"),i.cells("b").hideHeader();var a=i.cells("a").attachTreeView();a.loadStruct(this.getStruct().getTree(),"json"),a.attachEvent("onClick",function(e){var i=a.getUserData(e,"url"),n=a.getUserData(e,"name");n&&i&&$.get(apps.contextPath+"/assets/help"+i+n,function(e){t.setValue(e)})});var n=i.cells("b").attachToolbar({icon_path:apps.contextPath+"/assets/dhtmlx/sutie/skins/material/dhxtoolbar_material/"});n.loadStruct(this.getStruct().getToolbar(),function(){this.hideItem("sep_space"),this.addSpacer("sep_space")}),n.attachEvent("onClick",function(e){switch(e){case"btn_open":var i=dhxWindows.getInstance("helpNewWins","Help");i.attachURL(apps.contextPath+"/assets/share/markdown-viewer.html"),i.attachEvent("onContentLoaded",function(e){i.getFrame()&&(t=i.getFrame().contentWindow,$.get(apps.contextPath+"/assets/help/readme.md",function(e){t.setValue(e)}))});break;case"btn_editor":var a=dhxWindows.getInstance("helpEditorWins","Editor");a.attachURL(apps.contextPath+"/assets/share/markdown-editor.html");var n=a.attachToolbar({icon_path:apps.contextPath+"/assets/dhtmlx/sutie/skins/material/dhxtoolbar_material/"});n.loadStruct(this.getStruct().getEditorToolbar(),function(){this.hideItem("sep_space"),this.addSpacer("sep_space")})}}),i.cells("b").attachURL(apps.contextPath+"/assets/share/markdown-viewer.html"),i.setSizes()},help.prototype.getStruct=function(){function t(){return[{id:1,text:"설정",open:1,userdata:{url:"/settings/",name:"readme.md"},items:[{id:5,text:"그룹설정",userdata:{url:"/settings/guide/",name:"group.md"}},{id:6,text:"사용자설정",userdata:{url:"/settings/guide/",name:"user.md"}},{id:7,text:"시스템설정",userdata:{url:"/settings/guide/",name:"system.md"}},{id:8,text:"권한관리",userdata:{url:"/settings/guide/",name:"auth.md"}}]},{id:2,text:"Dashboard"},{id:3,text:"Board"},{id:4,text:"Explorer"}]}function e(){return[{id:"sep_space",type:"separator"},{id:"btn_open",type:"button",text:"새창"},{id:"sep",type:"separator"},{id:"btn_editor",type:"button",text:"작성하기"}]}function i(){return[{id:"sep_space",type:"separator"},{id:"btn_save",type:"button",text:"저장"}]}return{getTree:t,getToolbar:e,getEditorToolbar:i}},monitoring.prototype.on=function(){window.open("http://map.norsecorp.com/#","demo","left=0, top=0, width="+screen.width+", height="+screen.height)},settings.prototype.on=function(){var t=dhxWindows.getInstance("settingstWins","Settings");t.button("minmax").hide(),t.button("park").hide(),t.denyResize(),t.showInnerScroll(),$.get(apps.contextPath+"/js/tmpl/window-submenu.html",function(e){t.attachHTMLString(e)})},$(document).ready(function(){new webos,window.apps={contextPath:"demo"},window.apps.settings=new settings,window.apps.dashboard=new dashboard,window.apps.monitoring=new monitoring,window.apps.board=new board,window.apps.help=new help,window.apps.explorer=new explorer});
//# sourceMappingURL=maps/apps.js.map
