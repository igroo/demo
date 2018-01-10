webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__webos_webos_component__ = __webpack_require__("../../../../../src/app/webos/webos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'angular', redirectTo: '/angular/login', pathMatch: 'full' },
    { path: 'angular/login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'angular/register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'angular/webos', component: __WEBPACK_IMPORTED_MODULE_4__webos_webos_component__["a" /* WebosComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_dhtmlx_dhtmlx_global__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_dhtmlx_dhtmlx_windows_plugin__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-windows-plugin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webos_webos_component__ = __webpack_require__("../../../../../src/app/webos/webos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__webos_webos_component__["a" /* WebosComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__share_dhtmlx_dhtmlx_global__["a" /* DhtmlxGlobal */], __WEBPACK_IMPORTED_MODULE_5__share_dhtmlx_dhtmlx_windows_plugin__["a" /* DhtmlxWindowsPlugin */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_windows_plugin__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-windows-plugin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dhxWindows) {
        this.dhxWindows = dhxWindows;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.open = function () {
        var wins = this.dhxWindows.getInstance('dashboardWins', 'Dashboard');
        wins.maximize();
        wins.showInnerScroll();
        wins.attachURL('https://ecomfe.github.io/echarts-examples/public/editor.html?c=treemap-drill-down');
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: ""
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_windows_plugin__["a" /* DhtmlxWindowsPlugin */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/explorer/explorer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_global__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_dhtmlx_dhtmlx_windows_plugin__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-windows-plugin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExplorerComponent = (function () {
    function ExplorerComponent(dhtmlxGlobal, dhxWindows) {
        this.dhtmlxGlobal = dhtmlxGlobal;
        this.dhxWindows = dhxWindows;
    }
    ExplorerComponent.prototype.ngOnInit = function () {
    };
    ExplorerComponent.prototype.open = function () {
        var wins = this.dhxWindows.getInstance('explorerWins', 'Explorer');
        var menu = wins.attachMenu();
        menu.setIconsPath('https://dhtmlx.com/docs/products/dhtmlxMenu/samples/common/imgs/');
        menu.loadStruct(this.getStruct().getMenu());
        menu.setTopText('<img src="/demo/images/icon_pin.png" style="width:18px;height:18px;padding-top:4px;cursor:pointer;">');
        var ribbon = wins.attachRibbon({
            icons_path: 'https://dhtmlx.com/docs/products/dhtmlxRibbon/samples/common/'
        });
        // ribbon.setIconsPath('https://dhtmlx.com/docs/products/dhtmlxRibbon/samples/common/');
        ribbon.loadStruct(this.getStruct().getRibbon());
        var layout = wins.attachLayout('2U');
        layout.setOffsets(this.dhtmlxGlobal.layoutOffsetValue);
        layout.cells('a').hideHeader();
        layout.cells('b').hideHeader();
        layout.cells('a').setWidth(230);
        layout.cells('a').setText('Tree');
        layout.cells('b').setText('Grid');
        var tree_toolbar = layout.cells('a').attachToolbar({
            icon_path: 'https://dhtmlx.com/docs/products/dhtmlxToolbar/samples/common/imgs/'
        });
        tree_toolbar.loadStruct(this.getStruct().getTreeToolbar(), function () {
            this.hideItem('sep_space');
            this.addSpacer('sep_space');
        });
        var tree = layout.cells('a').attachTreeView();
        //tree.setImagePath('https://dhtmlx.com/docs/products//skins/web/imgs/dhxtree_web/');
        tree.loadStruct(this.getMock().getTree(), 'json');
        var grid_toolbar = layout.cells('b').attachToolbar({
            icon_path: 'https://dhtmlx.com/docs/products/dhtmlxToolbar/samples/common/imgs/'
        });
        grid_toolbar.loadStruct(this.getStruct().getGridToolbar(), function () {
            this.hideItem('sep_space');
            this.addSpacer('sep_space');
        });
        var grid = layout.cells('b').attachGrid();
        grid.setImagePath('https://dhtmlx.com/docs/products/codebase/imgs/dhxgrid_material/');
        grid.setHeader('Sales, Book Title, Author');
        grid.setInitWidths('70,250,*');
        grid.setColAlign('right,left,left');
        grid.setColTypes('dyn,ed,ed');
        grid.setColSorting('int,str,str');
        grid.init();
        grid.parse(this.getMock().getGrid(), 'json');
    };
    ExplorerComponent.prototype.getStruct = function () {
        function getMenu() {
            return [
                {
                    id: 'file', text: 'File', items: [
                        { id: 'new', text: 'New', img: 'new.gif', imgdis: 'new_dis.gif' },
                        { id: 'file_sep_1', type: 'separator' },
                        { id: 'open', text: 'Open', img: 'open.gif', imgdis: 'open_dis.gif' },
                        { id: 'save', text: 'Save', img: 'save.gif', imgdis: 'save_dis.gif' },
                        { id: 'saveAs', text: 'Save As...', img: 'save_as.gif', imgdis: 'save_as_dis.gif', enabled: false },
                        { id: 'file_sep_2', type: 'separator' },
                        { id: 'print', text: 'Print', img: 'print.gif', imgdis: 'print_dis.gif' },
                        { id: 'pageSetup', text: 'Page Setup', img: 'page_setup.gif', imgdis: 'page_setup_dis.gif', enabled: 'false' },
                        { id: 'file_sep_3', type: 'separator' },
                        { id: 'close', text: 'Close', img: 'close.gif', imgdis: 'close_dis.gif' }
                    ]
                },
                { id: 'sep_top_1', type: 'separator' },
                {
                    id: 'edit', text: 'Edit', items: [
                        { id: 'undo', text: 'Undo', img: 'undo.gif', imgdis: 'undo_dis.gif' },
                        { id: 'redo', text: 'Redo', img: 'redo.gif', imgdis: 'redo_dis.gif' },
                        { id: 'edit_sep_1', type: 'separator' },
                        { id: 'selectAll', text: 'Select All', img: 'select_all.gif', imgdis: 'select_all_dis.gif' },
                        { id: 'edit_sep_2', type: 'separator' },
                        { id: 'cut', text: 'Cut', img: 'cut.gif', imgdis: 'cut_dis.gif' },
                        { id: 'copy', text: 'Copy', img: 'copy.gif', imgdis: 'copy_dis.gif' },
                        { id: 'paste', text: 'Paste', img: 'paste.gif', imgdis: 'paste_dis.gif' }
                    ]
                },
                {
                    id: 'help', text: 'Help', items: [
                        { id: 'about', text: 'About...', img: 'about.gif', imgdis: 'about_dis.gif' },
                        { id: 'needhelp', text: 'Help', img: 'help.gif', imgdis: 'help_dis.gif' },
                        { id: 'bugReporting', text: 'Bug Reporting', img: 'bug_reporting.gif', imgdis: 'bug_reporting_dis.gif' }
                    ]
                }
            ];
        }
        function getRibbon() {
            return {
                'tabs': [
                    {
                        'id': 'tab_1',
                        'text': '홈',
                        'active': true,
                        'items': [
                            {
                                'type': 'block', 'text': '클립보드', 'list': [
                                    { 'type': 'button', 'text': '바로가기에<br/>고정', 'isbig': true, 'img': '48/open.gif', 'imgdis': '48/open_dis.gif', 'disable': true },
                                    { 'type': 'button', 'text': '복사', 'isbig': true, 'img': '48/open.gif' },
                                    { 'type': 'button', 'text': '붙여넣기', 'isbig': true, 'img': '48/open.gif', 'imgdis': '48/open_dis.gif', 'disable': true },
                                    { 'type': 'button', 'text': '잘라내기', 'img': '18/copy.gif' },
                                    { 'type': 'button', 'text': '경로 복사', 'img': '18/copy.gif' },
                                    { 'type': 'button', 'text': '바로 가기 붙여넣기', 'img': '18/copy.gif', 'imgdis': '18/copy.gif', 'disable': true }
                                ]
                            },
                            {
                                'type': 'block', 'text': '구성', 'list': [
                                    {
                                        'type': 'buttonSelect', 'text': '이동<br/>위치', 'isbig': true, 'img': '48/open.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    {
                                        'type': 'buttonSelect', 'text': '복사</br>위치', 'isbig': true, 'img': '48/open.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    {
                                        'type': 'buttonSelect', 'text': '삭제', 'isbig': true, 'img': '48/open.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    { 'type': 'button', 'text': '이름<br/>바꾸기', 'isbig': true, 'img': '48/open.gif' }
                                ]
                            },
                            {
                                'type': 'block', 'text': '새로 만들기', 'list': [
                                    { 'type': 'button', 'text': '새<br/>폴더', 'isbig': true, 'img': '48/open.gif' },
                                    {
                                        'type': 'buttonSelect', 'text': '새 항목', 'img': '18/copy.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    {
                                        'type': 'buttonSelect', 'text': '빠른 연결', 'img': '18/copy.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    }
                                ]
                            },
                            {
                                'type': 'block', 'text': '열기', 'list': [
                                    {
                                        'type': 'buttonSelect', 'text': '속성', 'isbig': true, 'img': '48/open.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    {
                                        'type': 'buttonSelect', 'text': '열기', 'img': '18/copy.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    { 'type': 'button', 'text': '편집', 'img': '18/copy.gif', 'imgdis': '18/copy.gif', 'disable': true },
                                    { 'type': 'button', 'text': '히스토리', 'img': '18/copy.gif' }
                                ]
                            },
                            {
                                'type': 'block', 'text': '선택', 'list': [
                                    { 'type': 'button', 'text': '모두 선택', 'isbig': true, 'img': '48/open.gif' },
                                    { 'type': 'button', 'text': '선택 안함', 'img': '18/copy.gif' },
                                    { 'type': 'button', 'text': '선택 영역 반전', 'img': '18/copy.gif', 'imgdis': '18/copy.gif', 'disable': true }
                                ]
                            }
                        ]
                    },
                    {
                        'id': 'tab_2',
                        'text': '공유',
                        'items': [
                            {
                                'type': 'block', 'text': '보내기', 'list': [
                                    { 'type': 'button', 'text': '공유', 'isbig': true, 'img': '48/open.gif', 'imgdis': '48/open.gif', 'disable': true },
                                    { 'type': 'button', 'text': '전자<br/>메일', 'isbig': true, 'img': '48/open.gif', 'imgdis': '48/open.gif', 'disable': true },
                                    { 'type': 'button', 'text': '압축<br/>(ZIP)', 'isbig': true, 'img': '48/open.gif' },
                                    { 'type': 'button', 'text': '디스크에 굽기', 'img': '18/copy.gif', 'imgdis': '18/copy.gif', 'disable': true },
                                    { 'type': 'button', 'text': '인쇄', 'img': '18/copy.gif', 'imgdis': '18/copy.gif', 'disable': true },
                                    { 'type': 'button', 'text': '팩스', 'img': '18/copy.gif' }
                                ]
                            },
                            {
                                type: 'block', text: '공유 대상', list: [
                                    { type: 'button', text: '홈 그룹 만들기 또는 홈 그룹에 연결', img: '18/copy.gif' },
                                    { type: 'button', text: '특정 사용자...', img: '18/cut.gif' }
                                ]
                            },
                            {
                                type: 'block', text: '기타', list: [
                                    {
                                        'type': 'buttonSelect', 'text': '액세스<br/>제거', 'isbig': true, 'img': '48/open.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    {
                                        'type': 'buttonSelect', 'text': '고급<br/>보안', 'isbig': true, 'img': '48/open.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'id': 'tab_3',
                        'text': '보기',
                        'items': [
                            {
                                'type': 'block', 'text': '창', 'list': [
                                    { 'type': 'button', 'text': '탐색창', 'isbig': true, 'img': '48/open.gif' },
                                    { 'type': 'button', 'text': '미리 보기 창', 'img': '18/copy.gif' },
                                    { 'type': 'button', 'text': '세부 정보 창', 'img': '18/copy.gif' }
                                ]
                            },
                            {
                                type: 'block', text: '레이아웃', list: [
                                    { type: 'button', text: '아주 큰 아이콘', img: '18/copy.gif' },
                                    { type: 'button', text: '큰 아이콘', img: '18/cut.gif' },
                                    { type: 'button', text: '보통 아이콘', img: '18/new.gif' },
                                    { type: 'button', text: '작은 아이콘', img: '18/open.gif' },
                                    { type: 'button', text: '목록', img: '18/paste.gif' },
                                    { type: 'button', text: '자세히', img: '18/paste.gif' },
                                    { type: 'button', text: '타일', img: '18/paste.gif' },
                                    { type: 'button', text: '내용', img: '18/print.gif' }
                                ]
                            },
                            {
                                'type': 'block', 'text': '현재보기', 'mode': 'cols', 'list': [
                                    {
                                        'type': 'buttonSelect', 'text': '정렬</br>기준', 'isbig': true, 'img': '48/open.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'text': '유형', 'img': '18/paste.gif' },
                                            { 'text': '크기', 'img': '18/paste.gif' },
                                            { 'text': '만들 날짜', 'img': '18/paste.gif' },
                                            { 'text': '만든 이', 'img': '18/paste.gif' },
                                            { 'text': '태그', 'img': '18/paste.gif' },
                                            { 'text': '제목', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif' },
                                            { 'text': '내림차순', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    {
                                        'type': 'buttonSelect', 'text': '분류방법', img: '18/print.gif', 'items': [
                                            { 'text': '이름', 'img': '18/copy.gif' },
                                            { 'text': '수정한 날짜', 'img': '18/cut.gif' },
                                            { 'text': '유형', 'img': '18/paste.gif' },
                                            { 'text': '크기', 'img': '18/paste.gif' },
                                            { 'text': '만들 날짜', 'img': '18/paste.gif' },
                                            { 'text': '만든 이', 'img': '18/paste.gif' },
                                            { 'text': '태그', 'img': '18/paste.gif' },
                                            { 'text': '제목', 'img': '18/paste.gif' },
                                            { 'type': 'separator' },
                                            { 'text': '오름차순', 'img': '18/paste.gif', 'enabled': false },
                                            { 'text': '내림차순', 'img': '18/paste.gif', 'enabled': false },
                                            { 'type': 'separator' },
                                            { 'text': '열선택', 'img': '18/paste.gif' },
                                        ]
                                    },
                                    {
                                        'type': 'buttonSelect', 'text': '열추가', img: '18/print.gif', 'imgdis': '18/print.gif', 'disable': true, 'items': [
                                            { 'text': 'copy', 'img': '18/copy.gif' },
                                            { 'text': 'cut', 'img': '18/cut.gif' },
                                            { 'text': 'paste', 'img': '18/paste.gif' }
                                        ]
                                    },
                                    {
                                        'type': 'buttonSelect', 'text': '모든 열 너비 조정', img: '18/print.gif', 'imgdis': '18/print.gif', 'disable': true, 'items': [
                                            { 'text': 'copy', 'img': '18/copy.gif' },
                                            { 'text': 'cut', 'img': '18/cut.gif' },
                                            { 'text': 'paste', 'img': '18/paste.gif' }
                                        ]
                                    }
                                ]
                            },
                            {
                                'type': 'block', 'text': '표시/숨기기', 'list': [
                                    { 'type': 'checkbox', 'text': '항목 확인란' },
                                    { 'type': 'checkbox', 'text': '파일 확장명', 'checked': true },
                                    { 'type': 'checkbox', 'text': '숨긴 항목', 'checked': true },
                                    { 'type': 'button', 'text': '선택항목</br>숨김/해재', 'isbig': true, 'img': '48/open.gif' }
                                ]
                            },
                            {
                                'type': 'block', 'text': '옵션', 'mode': 'cols', 'list': [
                                    {
                                        'type': 'buttonSelect', 'text': '정렬</br>기준', 'isbig': true, 'img': '48/open.gif', 'items': [
                                            { 'text': '폴더 검색 및 검색 옵션 변경', 'img': '18/copy.gif' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        }
        function getTreeToolbar() {
            return [
                { id: 'startDate', type: 'buttonInput', width: 80 },
                { id: 'sep2', type: 'separator' },
                { id: 'sep_space', type: 'separator' },
                { id: 'btn_search', type: 'button', img: 'copy.gif', title: 'search' },
                { id: 'btn_find_clear', type: 'button', img: 'copy.gif', title: 'find clear' },
            ];
        }
        function getGridToolbar() {
            return [
                { id: 'search_text', type: 'text', text: 'Date' },
                { id: 'startDate', type: 'buttonInput', width: 80 },
                { id: 'search_sp', type: 'text', text: '~' },
                { id: 'endDate', type: 'buttonInput', width: 80 },
                { id: 'sep2', type: 'separator' },
                { id: 'btn_search', type: 'button', text: '검색', img: 'copy.gif', title: 'search' },
                { id: 'btn_find_clear', type: 'button', text: '검색 초기화', img: 'copy.gif', title: 'find clear' },
                { id: 'sep_space', type: 'separator' },
                { id: 'btn_import', type: 'button', text: '추가', img: 'copy.gif' },
                { id: 'btn_add', type: 'button', text: '삭제', img: 'copy.gif' }
            ];
        }
        return {
            getMenu: getMenu,
            getTreeToolbar: getTreeToolbar,
            getGridToolbar: getGridToolbar,
            getRibbon: getRibbon
        };
    };
    ;
    ExplorerComponent.prototype.getMock = function () {
        function getTree() {
            return [
                {
                    id: 1, text: 'Books', open: 1, items: [
                        {
                            id: 5, text: 'Stephen King', items: [
                                { id: 11, text: 'The Dead Zone' },
                                { id: 12, text: 'The Running Man' },
                                { id: 13, text: 'The Talisman' },
                                { id: 14, text: 'The Tommyknockers' },
                                { id: 15, text: 'The Green Mile' },
                                { id: 16, text: 'The Girl Who Loved Tom Gordon' },
                                { id: 17, text: 'Dreamcatcher' },
                                { id: 18, text: 'Blood and Smoke' }
                            ]
                        },
                        {
                            id: 6, text: 'Herbert Wells', open: 1, items: [
                                { id: 19, text: 'The Time Machine' },
                                { id: 20, text: 'The Island of Doctor Moreau' },
                                { id: 21, text: 'The Invisible Man' },
                                { id: 22, text: 'The First Men in the Moon' },
                                { id: 23, text: 'The War of the Worlds' }
                            ]
                        },
                        {
                            id: 7, text: 'Mark Twen', items: [
                                { id: 24, text: 'The Adventures of Tom Sawyer' },
                                { id: 25, text: 'The Prince and the Pauper' },
                                { id: 26, text: 'Adventures of Huckleberry Finn' },
                                { id: 27, text: 'Tom Sawyer Abroad' },
                                { id: 28, text: 'Tom Sawyer Detective' },
                                { id: 29, text: 'Personal Recollections of Joan of Arc' }
                            ]
                        }
                    ]
                },
                {
                    id: 2, text: 'Misc', items: [
                        { id: 8, text: 'Turned at Dark / C. C. Hunter' },
                        { id: 9, text: 'Daire Meets Ever / Alyson Noël' },
                        { id: 10, text: 'Socs and Greasers / Rob Lowe' }
                    ]
                },
                { id: 3, text: 'Privacy and Terms.pdf' },
                { id: 4, text: 'Licence Agreement.pdf' }
            ];
        }
        function getGrid() {
            return {
                'rows': [
                    { 'id': 1001, 'data': ['100', 'A Time to Kill', 'John Grisham', '12.99', '1', '05/01/1998'] },
                    { 'id': 1002, 'data': ['1000', 'Blood and Smoke', 'Stephen King', '0', '1', '01/01/2000'] },
                    { 'id': 1003, 'data': ['-200', 'The Rainmaker', 'John Grisham', '7.99', '0', '12/01/2001'] },
                    { 'id': 1004, 'data': ['350', 'The Green Mile', 'Stephen King', '11.10', '1', '01/01/1992'] },
                    { 'id': 1005, 'data': ['700', 'Misery', 'Stephen King', '7.70', '0', '01/01/2003'] },
                    { 'id': 1006, 'data': ['-1200', 'The Dark Half', 'Stephen King', '0', '0', '10/30/1999'] },
                    { 'id': 1007, 'data': ['1500', 'The Partner', 'John Grisham', '12.99', '1', '01/01/2005'] },
                    { 'id': 1008, 'data': ['500', 'It', 'Stephen King', '9.70', '0', '10/15/2001'] },
                    { 'id': 1009, 'data': ['400', 'Cousin Bette', 'Honore de Balzac', '0', '1', '12/01/1991'] },
                    { 'id': 10010, 'data': ['400', 'Cousin Bette', 'Honore de Balzac', '0', '1', '12/01/1991'] },
                    { 'id': 1011, 'data': ['101', 'A Time to Kill', 'John Grisham', '12.99', '1', '05/01/1998'] }
                ]
            };
        }
        return {
            getTree: getTree,
            getGrid: getGrid
        };
    };
    ;
    ExplorerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-explorer',
            template: ""
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_global__["a" /* DhtmlxGlobal */],
            __WEBPACK_IMPORTED_MODULE_2__share_dhtmlx_dhtmlx_windows_plugin__["a" /* DhtmlxWindowsPlugin */]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_global__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_dhtmlx_dhtmlx_windows_plugin__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-windows-plugin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpComponent = (function () {
    function HelpComponent(dhtmlxGlobal, dhxWindows) {
        this.dhtmlxGlobal = dhtmlxGlobal;
        this.dhxWindows = dhxWindows;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.open = function () {
        var iframeViewer;
        var wins = this.dhxWindows.getInstance('helpWins', 'Help');
        var layout = wins.attachLayout('2U');
        layout.attachEvent('onContentLoaded', function (id) {
            if (layout.cells('b').getFrame()) {
                iframeViewer = layout.cells('b').getFrame().contentWindow;
                $.get('/assets/help/readme.md', function (response) {
                    iframeViewer.setValue(response);
                });
            }
        });
        layout.setOffsets(this.dhtmlxGlobal.layoutOffsetValue);
        layout.cells('a').setWidth(250);
        layout.cells('a').setText('목차');
        layout.cells('b').hideHeader();
        var tree = layout.cells('a').attachTreeView();
        tree.loadStruct(this.getStruct().getTree(), 'json');
        tree.attachEvent('onClick', function (id) {
            var url = tree.getUserData(id, 'url');
            var name = tree.getUserData(id, 'name');
            if (name && url) {
                $.get('/assets/help' + url + name, function (response) {
                    iframeViewer.setValue(response);
                });
            }
        });
        var toolbar = layout.cells('b').attachToolbar({
            icon_path: '/assets/dhtmlx/sutie/skins/material/dhxtoolbar_material/'
        });
        toolbar.loadStruct(this.getStruct().getToolbar(), function () {
            this.hideItem('sep_space');
            this.addSpacer('sep_space');
        });
        toolbar.attachEvent('onClick', function (id) {
            switch (id) {
                case 'btn_open':
                    var helpNewWins_1 = this.dhxWindows.getInstance('helpNewWins', 'Help');
                    helpNewWins_1.attachURL('/assets/share/markdown-viewer.html');
                    helpNewWins_1.attachEvent('onContentLoaded', function (_id) {
                        if (helpNewWins_1.getFrame()) {
                            iframeViewer = helpNewWins_1.getFrame().contentWindow;
                            $.get('/assets/help/readme.md', function (response) {
                                iframeViewer.setValue(response);
                            });
                        }
                    });
                    break;
                case 'btn_editor':
                    var helpEditorWins = this.dhxWindows.getInstance('helpEditorWins', 'Editor');
                    helpEditorWins.attachURL('/assets/share/markdown-editor.html');
                    var helpEditorWinsToolbar = helpEditorWins.attachToolbar({
                        icon_path: '/assets/dhtmlx/sutie/skins/material/dhxtoolbar_material/'
                    });
                    helpEditorWinsToolbar.loadStruct(this.getStruct().getEditorToolbar(), function () {
                        this.hideItem('sep_space');
                        this.addSpacer('sep_space');
                    });
                    break;
                default: break;
            }
        });
        layout.cells('b').attachURL('/assets/share/markdown-viewer.html');
        layout.setSizes();
    };
    HelpComponent.prototype.getStruct = function () {
        function getTree() {
            return [
                {
                    id: 1, text: '설정', open: 1, 'userdata': { 'url': '/settings/', 'name': 'readme.md' }, items: [
                        { id: 5, text: '그룹설정', 'userdata': { 'url': '/settings/guide/', 'name': 'group.md' } },
                        { id: 6, text: '사용자설정', 'userdata': { 'url': '/settings/guide/', 'name': 'user.md' } },
                        { id: 7, text: '시스템설정', 'userdata': { 'url': '/settings/guide/', 'name': 'system.md' } },
                        { id: 8, text: '권한관리', 'userdata': { 'url': '/settings/guide/', 'name': 'auth.md' } }
                    ]
                },
                { id: 2, text: 'Dashboard' },
                { id: 3, text: 'Board' },
                { id: 4, text: 'Explorer' }
            ];
        }
        function getToolbar() {
            return [
                { id: 'sep_space', type: 'separator' },
                { id: 'btn_open', type: 'button', text: '새창' },
                { id: 'sep', type: 'separator' },
                { id: 'btn_editor', type: 'button', text: '작성하기' }
            ];
        }
        function getEditorToolbar() {
            return [
                { id: 'sep_space', type: 'separator' },
                { id: 'btn_save', type: 'button', text: '저장' }
            ];
        }
        return {
            getTree: getTree,
            getToolbar: getToolbar,
            getEditorToolbar: getEditorToolbar
        };
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help',
            template: ""
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_global__["a" /* DhtmlxGlobal */],
            __WEBPACK_IMPORTED_MODULE_2__share_dhtmlx_dhtmlx_windows_plugin__["a" /* DhtmlxWindowsPlugin */]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);

// module
exports.push([module.i, "/* General Demo Style */\r\na {\r\n\tcolor: #555;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.container {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n\r\n.clr {\r\n\tclear: both;\r\n\tpadding: 0;\r\n\theight: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n.main {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n}\r\n\r\n.container > header {\r\n\tmargin: 10px;\r\n\tpadding: 20px 10px 10px 10px;\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\ttext-shadow: 1px 1px 1px rgba(0,0,0,0.2);\r\n    text-align: center;\r\n}\r\n\r\n.container > header h1 {\r\n\tfont-size: 30px;\r\n\tline-height: 38px;\r\n\tmargin: 0;\r\n\tposition: relative;\r\n\tfont-weight: 300;\r\n\tcolor: #666;\r\n\ttext-shadow: 0 1px 1px rgba(255,255,255,0.6);\r\n}\r\n\r\n.container > header h2,\r\n.form-1 .field.register > span {\r\n\tfont-size: 15px;\r\n\tfont-weight: 300;\r\n\tmargin: 0;\r\n\tpadding: 15px 0 5px 0;\r\n\tcolor: #666;\r\n\tfont-family: Cambria, Georgia, serif;\r\n\tfont-style: italic;\r\n\ttext-shadow: 0 1px 1px rgba(255,255,255,0.6);\r\n}\r\n\r\n.form-1 .field.register {\r\n    text-align: right;\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Header Style */\r\n.codrops-top {\r\n\tline-height: 24px;\r\n\tfont-size: 11px;\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\ttext-transform: uppercase;\r\n\tz-index: 9999;\r\n\tposition: relative;\r\n\tfont-family: Cambria, Georgia, serif;\r\n\tbox-shadow: 1px 0px 2px rgba(0,0,0,0.2);\r\n}\r\n\r\n/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */\r\n\r\n.codrops-top:before,\r\n.codrops-top:after {\r\n    content: \" \"; /* 1 */\r\n    display: table; /* 2 */\r\n}\r\n\r\n.codrops-top:after {\r\n    clear: both\r\n}\r\n\r\n.codrops-top a {\r\n\tpadding: 0px 10px;\r\n\tletter-spacing: 1px;\r\n\tcolor: #333;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.codrops-top a:hover {\r\n\tbackground: rgba(255,255,255,0.6);\r\n}\r\n\r\n.codrops-top span.right {\r\n\tfloat: right;\r\n}\r\n\r\n.codrops-top span.right a {\r\n\tfloat: left;\r\n\tdisplay: block;\r\n}\r\n\r\n/* Demo Buttons Style */\r\n.codrops-demos {\r\n    text-align:center;\r\n\tdisplay: block;\r\n\tline-height: 30px;\r\n\tpadding: 5px 0px;\r\n}\r\n\r\n.codrops-demos a {\r\n    display: inline-block;\r\n\tmargin: 0px 4px;\r\n\tpadding: 0px 6px;\r\n\tcolor: #8c8c8c;\r\n\tline-height: 20px;\t\r\n\tfont-size: 12px;\r\n\tfont-weight: 700;\r\n\ttext-shadow: 1px 1px 1px #fff;\r\n\tborder: 1px solid #fff;\r\n\tbackground: #ffffff; /* Old browsers */ /* FF3.6+ */ /* Chrome,Safari4+ */ /* Chrome10+,Safari5.1+ */ /* Opera 11.10+ */\r\n\tbackground: -ms-linear-gradient(top, #ffffff 0%,#f6f6f6 47%,#ededed 100%); /* IE10+ */\r\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.codrops-demos a:hover {\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n}\r\n\r\n.codrops-demos a:active {\r\n\tbackground: #fff;\r\n}\r\n\r\n.codrops-demos a.current-demo,\r\n.codrops-demos a.current-demo:hover {\r\n\tbackground: #555;\r\n\tborder-color: #555;\r\n\tcolor: #ddd;\r\n\ttext-shadow: 0 1px 1px rgba(0,0,0,0.5);\r\n\tbox-shadow: 0 1px 0 rgba(255,255,255,0.2), inset 0 1px 1px rgba(0,0,0,0.5);\r\n}\r\n\r\n.support-note span{\r\n\tcolor: #ac375d;\r\n\tfont-size: 16px;\r\n\tdisplay: none;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tpadding: 5px 0;\r\n}\r\n\r\n/* GLOBALS */\r\n\r\n*,\r\n*:after,\r\n*:before {\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.clearfix:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n.form-1 {\r\n    /* Size & position */\r\n    width: 300px;\r\n    margin: 60px auto 30px;\r\n    padding: 10px;\r\n    position: relative; /* For the submit button positioning */\r\n\r\n    /* Styles */\r\n    box-shadow: \r\n        0 0 1px rgba(0, 0, 0, 0.3), \r\n        0 3px 7px rgba(0, 0, 0, 0.3), \r\n        inset 0 1px rgba(255,255,255,1),\r\n        inset 0 -3px 2px rgba(0,0,0,0.25);\r\n    border-radius: 5px;\r\n    background: white; /* Fallback */\r\n    background: linear-gradient(#eeefef, #ffffff 10%);\r\n}\r\n\r\n.form-1 .field {\r\n    position: relative; /* For the icon positioning */\r\n}\r\n\r\n.form-1 .field i {\r\n    /* Size and position */\r\n    left: 0px;\r\n    top: 0px;\r\n    position: absolute;\r\n    height: 36px;\r\n    width: 36px;\r\n\r\n    /* Line */\r\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\r\n    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.7);\r\n\r\n    /* Styles */\r\n    color: #777777;\r\n    text-align: center;\r\n    line-height: 42px;\r\n    transition: all 0.3s ease-out;\r\n    pointer-events: none;\r\n}\r\n\r\n.form-1 input[type=text],\r\n.form-1 input[type=password] {\r\n    font-family: 'Lato', Calibri, Arial, sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    text-shadow: 0 1px 0 rgba(255,255,255,0.8);\r\n    /* Size and position */\r\n    width: 100%;\r\n    padding: 10px 18px 10px 45px;\r\n\r\n    /* Styles */\r\n    border: none; /* Remove the default border */\r\n    box-shadow: \r\n        inset 0 0 5px rgba(0,0,0,0.1),\r\n        inset 0 3px 2px rgba(0,0,0,0.1);\r\n    border-radius: 3px;\r\n    background: #f9f9f9;\r\n    color: #777;\r\n    transition: color 0.3s ease-out;\r\n}\r\n\r\n.form-1 input[type=text] {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-1 input[type=text]:hover ~ i,\r\n.form-1 input[type=password]:hover ~ i {\r\n    color: #52cfeb;\r\n}\r\n\r\n.form-1 input[type=text]:focus ~ i,\r\n.form-1 input[type=password]:focus ~ i {\r\n    color: #42A2BC;\r\n}\r\n\r\n.form-1 input[type=text]:focus,\r\n.form-1 input[type=password]:focus,\r\n.form-1 button[type=submit]:focus {\r\n    outline: none;\r\n}\r\n\r\n.form-1 .submit {\r\n    /* Size and position */\r\n    width: 65px;\r\n    height: 65px;\r\n    position: absolute;\r\n    top: 17px;\r\n    right: -25px;\r\n    padding: 10px;\r\n    z-index: 2;\r\n\r\n    /* Styles */\r\n    background: #ffffff;\r\n    border-radius: 50%;\r\n    box-shadow: \r\n        0 0 2px rgba(0,0,0,0.1),\r\n        0 3px 2px rgba(0,0,0,0.1),\r\n        inset 0 -3px 2px rgba(0,0,0,0.2);\r\n}\r\n\r\n.form-1 .submit:after {\r\n    /* Size and position */\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 10px;\r\n    position: absolute;\r\n    top: -2px;\r\n    left: 30px;\r\n\r\n    /* Styles */\r\n    background: #ffffff;\r\n    \r\n    /* Other masks trick */\r\n    box-shadow: 0 62px white, -32px 31px white;\r\n}\r\n\r\n.form-1 button {\r\n    /* Size and position */\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n\r\n    /* Icon styles */\r\n    font-size: 1.4em;\r\n    line-height: 1.75;\r\n    color: white;\r\n\r\n    /* Styles */\r\n    border: none; /* Remove the default border */\r\n    border-radius: inherit;\r\n    background: #52cfeb; /* Fallback */\r\n    background: linear-gradient(#52cfeb, #42A2BC);\r\n    box-shadow: \r\n        inset 0 1px 0 rgba(255,255,255,0.3),\r\n        0 1px 2px rgba(0,0,0,0.35),\r\n        inset 0 3px 2px rgba(255,255,255,0.2),\r\n        inset 0 -3px 2px rgba(0,0,0,0.1);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.form-1 button:hover,\r\n.form-1 button[type=submit]:focus {\r\n    background: #52cfeb;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\n.form-1 button:active {\r\n    background: #42A2BC;\r\n    box-shadow: \r\n        inset 0 0 5px rgba(0,0,0,0.3),\r\n        inset 0 3px 4px rgba(0,0,0,0.3);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <header>\n\n    <h1>\n      <strong>H</strong>amorny\n      <strong>P</strong>ortal</h1>\n    <h2>jquery + dhtmlx portal services</h2>\n\n    <div class=\"support-note\">\n      <span class=\"note-ie\">Sorry, only modern browsers.</span>\n    </div>\n\n  </header>\n\n  <section class=\"main\">\n    <form class=\"form-1\">\n      <p class=\"field\">\n        <input type=\"text\" name=\"login\" placeholder=\"Username or email\">\n        <i class=\"fa fa-user\"></i>\n      </p>\n      <p class=\"field\">\n        <input type=\"password\" name=\"password\" placeholder=\"Password\">\n        <i class=\"fa fa-lock\"></i>\n      </p>\n      <p class=\"field register\" routerLink=\"/angular/register\">\n        <span>New Account</span>\n      </p>\n      <p class=\"submit\">\n        <button type=\"submit\" name=\"submit\" routerLink=\"/angular/webos\">\n          <i class=\"fa fa-circle-o-notch\"></i>\n        </button>\n      </p>\n    </form>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
        $('body').addClass('login-body');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/monitoring/monitoring.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitoringComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonitoringComponent = (function () {
    function MonitoringComponent() {
    }
    MonitoringComponent.prototype.ngOnInit = function () {
    };
    MonitoringComponent.prototype.open = function () {
        var options = 'left=0, top=0, width=' + (screen.width - 100) + ', height=' + (screen.height - 200);
        window.open('http://map.norsecorp.com/#', 'demo', options);
    };
    MonitoringComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monitoring',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], MonitoringComponent);
    return MonitoringComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);

// module
exports.push([module.i, "/* General Demo Style */\r\n\r\nhtml { height: 100%; }\r\n\r\nbody {\r\n    font-family: 'Lato', Calibri, Arial, sans-serif;\r\n    background: #ddd url(/assets/images/login_bg.jpg) repeat top left;\r\n    font-weight: 300;\r\n    font-size: 15px;\r\n    color: #333;\r\n    -webkit-font-smoothing: antialiased;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\na {\r\n\tcolor: #555;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.container {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n\r\n.clr {\r\n\tclear: both;\r\n\tpadding: 0;\r\n\theight: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n.main {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n}\r\n\r\n.container > header {\r\n\tmargin: 10px;\r\n\tpadding: 20px 10px 10px 10px;\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\ttext-shadow: 1px 1px 1px rgba(0,0,0,0.2);\r\n    text-align: center;\r\n}\r\n\r\n.container > header h1 {\r\n\tfont-size: 30px;\r\n\tline-height: 38px;\r\n\tmargin: 0;\r\n\tposition: relative;\r\n\tfont-weight: 300;\r\n\tcolor: #666;\r\n\ttext-shadow: 0 1px 1px rgba(255,255,255,0.6);\r\n}\r\n\r\n.container > header h2,\r\n.form-1 .field.register > span {\r\n\tfont-size: 15px;\r\n\tfont-weight: 300;\r\n\tmargin: 0;\r\n\tpadding: 15px 0 5px 0;\r\n\tcolor: #666;\r\n\tfont-family: Cambria, Georgia, serif;\r\n\tfont-style: italic;\r\n\ttext-shadow: 0 1px 1px rgba(255,255,255,0.6);\r\n}\r\n\r\n.form-1 .field.register {\r\n    text-align: right;\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Header Style */\r\n.codrops-top {\r\n\tline-height: 24px;\r\n\tfont-size: 11px;\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\ttext-transform: uppercase;\r\n\tz-index: 9999;\r\n\tposition: relative;\r\n\tfont-family: Cambria, Georgia, serif;\r\n\tbox-shadow: 1px 0px 2px rgba(0,0,0,0.2);\r\n}\r\n\r\n/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */\r\n\r\n.codrops-top:before,\r\n.codrops-top:after {\r\n    content: \" \"; /* 1 */\r\n    display: table; /* 2 */\r\n}\r\n\r\n.codrops-top:after {\r\n    clear: both\r\n}\r\n\r\n.codrops-top a {\r\n\tpadding: 0px 10px;\r\n\tletter-spacing: 1px;\r\n\tcolor: #333;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.codrops-top a:hover {\r\n\tbackground: rgba(255,255,255,0.6);\r\n}\r\n\r\n.codrops-top span.right {\r\n\tfloat: right;\r\n}\r\n\r\n.codrops-top span.right a {\r\n\tfloat: left;\r\n\tdisplay: block;\r\n}\r\n\r\n/* Demo Buttons Style */\r\n.codrops-demos {\r\n    text-align:center;\r\n\tdisplay: block;\r\n\tline-height: 30px;\r\n\tpadding: 5px 0px;\r\n}\r\n\r\n.codrops-demos a {\r\n    display: inline-block;\r\n\tmargin: 0px 4px;\r\n\tpadding: 0px 6px;\r\n\tcolor: #8c8c8c;\r\n\tline-height: 20px;\t\r\n\tfont-size: 12px;\r\n\tfont-weight: 700;\r\n\ttext-shadow: 1px 1px 1px #fff;\r\n\tborder: 1px solid #fff;\r\n\tbackground: #ffffff; /* Old browsers */ /* FF3.6+ */ /* Chrome,Safari4+ */ /* Chrome10+,Safari5.1+ */ /* Opera 11.10+ */\r\n\tbackground: -ms-linear-gradient(top, #ffffff 0%,#f6f6f6 47%,#ededed 100%); /* IE10+ */\r\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.codrops-demos a:hover {\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n}\r\n\r\n.codrops-demos a:active {\r\n\tbackground: #fff;\r\n}\r\n\r\n.codrops-demos a.current-demo,\r\n.codrops-demos a.current-demo:hover {\r\n\tbackground: #555;\r\n\tborder-color: #555;\r\n\tcolor: #ddd;\r\n\ttext-shadow: 0 1px 1px rgba(0,0,0,0.5);\r\n\tbox-shadow: 0 1px 0 rgba(255,255,255,0.2), inset 0 1px 1px rgba(0,0,0,0.5);\r\n}\r\n\r\n.support-note span{\r\n\tcolor: #ac375d;\r\n\tfont-size: 16px;\r\n\tdisplay: none;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tpadding: 5px 0;\r\n}\r\n\r\n/* GLOBALS */\r\n\r\n*,\r\n*:after,\r\n*:before {\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.clearfix:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n.form-1 {\r\n    /* Size & position */\r\n    width: 300px;\r\n    margin: 60px auto 30px;\r\n    padding: 10px;\r\n    position: relative; /* For the submit button positioning */\r\n\r\n    /* Styles */\r\n    box-shadow: \r\n        0 0 1px rgba(0, 0, 0, 0.3), \r\n        0 3px 7px rgba(0, 0, 0, 0.3), \r\n        inset 0 1px rgba(255,255,255,1),\r\n        inset 0 -3px 2px rgba(0,0,0,0.25);\r\n    border-radius: 5px;\r\n    background: white; /* Fallback */\r\n    background: linear-gradient(#eeefef, #ffffff 10%);\r\n}\r\n\r\n.form-1 .field {\r\n    position: relative; /* For the icon positioning */\r\n}\r\n\r\n.form-1 .field i {\r\n    /* Size and position */\r\n    left: 0px;\r\n    top: 0px;\r\n    position: absolute;\r\n    height: 36px;\r\n    width: 36px;\r\n\r\n    /* Line */\r\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\r\n    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.7);\r\n\r\n    /* Styles */\r\n    color: #777777;\r\n    text-align: center;\r\n    line-height: 42px;\r\n    transition: all 0.3s ease-out;\r\n    pointer-events: none;\r\n}\r\n\r\n.form-1 input[type=text],\r\n.form-1 input[type=password] {\r\n    font-family: 'Lato', Calibri, Arial, sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    text-shadow: 0 1px 0 rgba(255,255,255,0.8);\r\n    /* Size and position */\r\n    width: 100%;\r\n    padding: 10px 18px 10px 45px;\r\n\r\n    /* Styles */\r\n    border: none; /* Remove the default border */\r\n    box-shadow: \r\n        inset 0 0 5px rgba(0,0,0,0.1),\r\n        inset 0 3px 2px rgba(0,0,0,0.1);\r\n    border-radius: 3px;\r\n    background: #f9f9f9;\r\n    color: #777;\r\n    transition: color 0.3s ease-out;\r\n}\r\n\r\n.form-1 input[type=text] {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-1 input[type=text]:hover ~ i,\r\n.form-1 input[type=password]:hover ~ i {\r\n    color: #52cfeb;\r\n}\r\n\r\n.form-1 input[type=text]:focus ~ i,\r\n.form-1 input[type=password]:focus ~ i {\r\n    color: #42A2BC;\r\n}\r\n\r\n.form-1 input[type=text]:focus,\r\n.form-1 input[type=password]:focus,\r\n.form-1 button[type=submit]:focus {\r\n    outline: none;\r\n}\r\n\r\n.form-1 .submit {\r\n    /* Size and position */\r\n    width: 65px;\r\n    height: 65px;\r\n    position: absolute;\r\n    top: 17px;\r\n    right: -25px;\r\n    padding: 10px;\r\n    z-index: 2;\r\n\r\n    /* Styles */\r\n    background: #ffffff;\r\n    border-radius: 50%;\r\n    box-shadow: \r\n        0 0 2px rgba(0,0,0,0.1),\r\n        0 3px 2px rgba(0,0,0,0.1),\r\n        inset 0 -3px 2px rgba(0,0,0,0.2);\r\n}\r\n\r\n.form-1 .submit:after {\r\n    /* Size and position */\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 10px;\r\n    position: absolute;\r\n    top: -2px;\r\n    left: 30px;\r\n\r\n    /* Styles */\r\n    background: #ffffff;\r\n    \r\n    /* Other masks trick */\r\n    box-shadow: 0 62px white, -32px 31px white;\r\n}\r\n\r\n.form-1 button {\r\n    /* Size and position */\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n\r\n    /* Icon styles */\r\n    font-size: 1.4em;\r\n    line-height: 1.75;\r\n    color: white;\r\n\r\n    /* Styles */\r\n    border: none; /* Remove the default border */\r\n    border-radius: inherit;\r\n    background: #52cfeb; /* Fallback */\r\n    background: linear-gradient(#52cfeb, #42A2BC);\r\n    box-shadow: \r\n        inset 0 1px 0 rgba(255,255,255,0.3),\r\n        0 1px 2px rgba(0,0,0,0.35),\r\n        inset 0 3px 2px rgba(255,255,255,0.2),\r\n        inset 0 -3px 2px rgba(0,0,0,0.1);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.form-1 button:hover,\r\n.form-1 button[type=submit]:focus {\r\n    background: #52cfeb;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\n.form-1 button:active {\r\n    background: #42A2BC;\r\n    box-shadow: \r\n        inset 0 0 5px rgba(0,0,0,0.3),\r\n        inset 0 3px 4px rgba(0,0,0,0.3);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <header>\n\n    <h1>\n      <strong>H</strong>amorny\n      <strong>P</strong>ortal</h1>\n    <h2>jquery + dhtmlx portal services</h2>\n\n    <div class=\"support-note\">\n      <span class=\"note-ie\">Sorry, only modern browsers.</span>\n    </div>\n\n  </header>\n\n  <section class=\"main\">\n    <form class=\"form-1\">\n      <p class=\"field\">\n        <input type=\"text\" name=\"login\" placeholder=\"Username or email\">\n        <i class=\"fa fa-user\"></i>\n      </p>\n      <p class=\"field\">\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" style=\"margin-bottom: 10px;\">\n        <i class=\"fa fa-lock\"></i>\n      </p>\n      <p class=\"field\">\n        <input type=\"password\" name=\"confirmPassword\" placeholder=\"Confirm Password\">\n        <i class=\"fa fa-check\"></i>\n      </p>\n      <p class=\"submit\">\n        <button type=\"submit\" name=\"submit\" routerLink=\"/angular/webos\">\n          <i class=\"fa fa-circle-o-notch\"></i>\n        </button>\n      </p>\n    </form>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
        $('body').addClass('register-body');
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_windows_plugin__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-windows-plugin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(dhxWindows) {
        this.dhxWindows = dhxWindows;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.open = function () {
        var wins = this.dhxWindows.getInstance('settingstWins', 'Settings');
        wins.button('minmax').hide();
        wins.button('park').hide();
        wins.denyResize();
        wins.showInnerScroll();
        wins.attachHTMLString('Coming Soon..');
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: ""
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_windows_plugin__["a" /* DhtmlxWindowsPlugin */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/share/dhtmlx/dhtmlx-global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DhtmlxGlobal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DhtmlxGlobal = (function () {
    function DhtmlxGlobal() {
        this.layoutOffsetValue = { top: 5, right: 5, bottom: 5, left: 5 };
    }
    DhtmlxGlobal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DhtmlxGlobal);
    return DhtmlxGlobal;
}());



/***/ }),

/***/ "../../../../../src/app/share/dhtmlx/dhtmlx-windows-plugin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DhtmlxWindowsPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DhtmlxWindowsPlugin = (function () {
    function DhtmlxWindowsPlugin() {
    }
    DhtmlxWindowsPlugin.prototype.getRootWindows = function () {
        if (!this.rootWins) {
            this.rootWins = new dhtmlXWindows();
            this.resizeViewport();
        }
        return this.rootWins;
    };
    DhtmlxWindowsPlugin.prototype.resizeViewport = function () {
        var width = (window.innerWidth || document.body.clientWidth);
        var height = 0;
        height = Number((window.innerHeight || document.body.clientHeight));
        height = height <= 587 ? 587 : height - (height - 587);
        this.getRootWindows().setViewport(0, 0, width, height, 'webos-viewport');
    };
    DhtmlxWindowsPlugin.prototype.getInstance = function (id, title) {
        var rwins = this.getRootWindows();
        var w;
        if (rwins.isWindow(id)) {
            w = rwins.window(id);
            w.bringToTop();
        }
        else {
            w = this.getRootWindows().createWindow(id, 0, 0, 800, 500);
            w.setText(title);
            w.centerOnScreen();
            // w.keepInViewport(true);
        }
        return w;
    };
    DhtmlxWindowsPlugin.prototype.closeOnTopWindow = function () {
        var isClose = true;
        this.getRootWindows().forEachWindow(function (w) {
            if (w.isOnTop() && isClose) {
                w.close();
                isClose = false;
            }
        });
    };
    DhtmlxWindowsPlugin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DhtmlxWindowsPlugin);
    return DhtmlxWindowsPlugin;
}());



/***/ }),

/***/ "../../../../../src/app/webos/webos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n@media screen and (max-width: 1199px) {\r\n    body { overflow: auto; }\r\n}\r\n\r\n@media screen and (max-height: 599px) {\r\n    body { overflow: auto; }\r\n}\r\n\r\na:link , a:visited, a:hover, a:active {\r\n    text-decoration: none;   \r\n    color: #000000;\r\n}\r\n\r\n.webos {}\r\n\r\n#webos-viewport {\r\n    min-width: 1200px;\r\n}\r\n\r\n.webos.task-wrapper {\r\n\tmin-height: 600px;\r\n}\r\n\r\n.webos-wallpapers {\r\n\tbackground: url('/assets/images/wallpapers.jpg') no-repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-width: 1200px;\r\n    z-index: -1;  \r\n}\r\n\r\n.webos-task-menu {\r\n\tposition: absolute;\r\n}\r\n\r\n.webos-task-menu ul {\r\n    list-style-type: none;\r\n    margin: 15px;\r\n    padding: 0px;\r\n}\r\n\r\n.webos-task-menu ul li {\r\n\t/*float: left;*/\r\n\twidth: 80px;\r\n    text-align: center;\r\n    padding: 2px;\r\n}\r\n\r\n.webos-task-menu ul li:hover {\r\n    background-color: #455A64;\r\n    opacity: 0.9;\r\n    display: inline-block;\r\n    box-shadow: inset 0 -2px 0 rgb(250, 0, 0);\r\n    cursor: pointer;\t    \r\n}\r\n\r\n.task-menu-item-icon {\r\n\twidth: 40px;\r\n    height: 100%;\r\n    padding: 10px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.task-menu-item-title {\r\n    text-decoration: none;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.webos.taskbar-wrapper {\r\n    position: absolute;\r\n    padding: 0;\r\n    margin: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.taskbar {\r\n    /* height: 50px;*/\r\n    /* width: 100%; */\r\n    min-width: 1200px;\r\n    position: absolute;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n    margin: 0;\r\n    padding: 0;    \r\n    color: #FFFFFF;\r\n    background-color: #1c2429;\r\n}\r\n\r\n.taskbar-home {\r\n\twidth: 50px;\r\n\tfloat: left;\r\n}\r\n\r\n#tgl-start {\r\n  display: none;\r\n}\r\n\r\n#tgl-start:checked ~ #startmenu {\r\n  opacity: 0.95;\r\n  bottom: 50px;\r\n  visibility: visible;\r\n}\r\n\r\n#tgl-start:checked ~ #start {\r\n  background-color: #005A9E;\r\n  height: 30px;\r\n  display: table-cell;\r\n}\r\n\r\n#startmenu {\r\n    min-width: 200px;\r\n    background-color: #005A9E;\r\n    position: absolute;\r\n    bottom: 50px;\r\n    z-index: 1;\r\n    transition: opacity 0s, bottom 0.25s;\r\n    padding: 10px 14px 4px 14px;\r\n    opacity:0;\r\n    visibility:hidden;\r\n}\r\n\r\n#startmenu .startmenu-app .win-icon {\r\n    height: 25px;\r\n    width: 25px;\r\n    margin-top: 2px;\r\n    border: 4px solid;\r\n}\r\n\r\n.startmenu-win-icon {\r\n    font-size: 1.25em;\r\n    margin-right: 8px;\r\n    margin-left: 3px;\r\n    line-height: 36px;\r\n    font-family: 'Segoe MDL2 Assets';\r\n    float: left;\r\n    width: 32px;\r\n    text-align: center;\r\n}\r\n\r\n#startmenu .startmenu-label {\r\n\tcolor:#99BDD8;\r\n\tmargin-left:3px;\r\n\tline-height:30px;\r\n\tmargin-top:10px;\r\n}\r\n\r\n#startmenu .startmenu-option, \r\n#startmenu .startmenu-user,\r\n#startmenu .startmenu-app {\r\n    color: #FFF;\r\n    /*line-height: 36px;\r\n    height: 36px;*/\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 2px;\r\n    font-size: 14px;\r\n}\r\n\r\n#startmenu .startmenu-user:hover, \r\n#startmenu .startmenu-app:hover {\r\n\tbackground-color:#196AA8;\r\n\tcursor:default;\r\n}\r\n\r\n#startmenu .startmenu-user > img {\r\n\tborder-radius:100%;\r\n\theight: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.taskbar-menu-wrapper {\r\n    overflow: hidden;\r\n    height: 50px;\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.taskbar-menu-wrapper ul {\r\n\tmargin: 0px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.taskbar-menu-wrapper ul li {\r\n\tfloat: left;\r\n\twidth: 50px;\r\n\ttext-align: center;\r\n}\r\n\r\n.taskbar-home:hover,\r\n.taskbar-menu-wrapper ul li:hover {\r\n    background-color: #455A64;\r\n    opacity: 0.9;\r\n    display: inline-block;\r\n    box-shadow: inset 0 -2px 0 rgba(60, 217, 240, 1);\r\n    cursor: pointer;\t    \r\n}\r\n\r\n.taskbar-item-opened {\r\n\tbox-shadow: inset 0 -2px 0 rgba(60, 217, 240, 1);\r\n}\r\n\r\n.taskbar-item-activated {\r\n\tbackground-color: #455A64;\r\n    opacity: 0.9;\r\n}\r\n\r\n.taskbar-menu-short {\r\n\tbackground-color: #403d3d;\r\n    height: 50px;\r\n    width: 20px;\r\n    margin: 0;\r\n    padding: 0px;\r\n    float: left;\r\n    vertical-align: top;\r\n}\r\n\r\n.taskbar-alarm {\r\n    float: left;\r\n    right: 60px;\r\n    position: absolute;\r\n}\r\n\r\n.taskbar-badge {\r\n   position: relative;\r\n   background-color: #5d2a32;\r\n   padding: 5px;\r\n   border-radius: 5px;\r\n   top: -20px;\r\n   left: -26px;\r\n   z-index: 105;\r\n   text-decoration: none;\r\n   color: #FFFFFF;\r\n   font-size: 12px;\r\n}\r\n\r\n.taskbar-tray {\r\n\tfont-size: 12px;\r\n    height: 100%;\r\n    width: 80px;\r\n    margin: 0;\r\n    padding: 10px 8px 10px 8px;\r\n    float: right;\r\n    text-align: center;\r\n}\r\n\r\n.txt_dots {\r\n\toverflow:hidden; \r\n\ttext-overflow:ellipsis; \r\n\twhite-space:nowrap;\r\n}\r\n\r\n.taskbar-item-icon {\r\n\twidth: 30px;\r\n    height: 100%;\r\n    padding: 10px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.taskbar-item-title {\r\n\tposition: absolute;\r\n    background-color: #5d2a32;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    top: -20px;\r\n    z-index: 1;\r\n    text-decoration: none;\r\n    color: #FFFFFF;\r\n    font-size: 12px;\r\n}\r\n\r\n.show {\r\n\tdisplay: block;\r\n}\r\n\r\n.hide {\r\n\tdisplay:none;\r\n}\r\n\r\n#postit-wrapper {\r\n    text-align: center;\r\n    width: 178px;\r\n    height: auto;\r\n    right: 15px;\r\n    top: 35px;\r\n    position: fixed;\r\n    background: rgba(255,255,255,0.8);\r\n    border: 1px solid rgba(0,0,0,0.05);\r\n    z-index: 1000000;\r\n    font-family: 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    padding: 24px 24px 10px 24px;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n}\r\n\r\n/**\r\n* full screen spinner\r\n*/\r\n.spinner {\r\n    margin: 200px auto;\r\n    width: 250px;\r\n    height: 80px;\r\n    text-align: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.spinner > div {\r\n  background-color: #fff;\r\n  height: 100%;\r\n  margin: 0 1px;\r\n  width: 10px;\r\n  display: inline-block;\r\n  \r\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n}\r\n\r\n.spinner .rect2 {\r\n  -webkit-animation-delay: -1.1s;\r\n  animation-delay: -1.1s;\r\n}\r\n\r\n.spinner .rect3 {\r\n  -webkit-animation-delay: -1.0s;\r\n  animation-delay: -1.0s;\r\n}\r\n\r\n.spinner .rect4 {\r\n  -webkit-animation-delay: -0.9s;\r\n  animation-delay: -0.9s;\r\n}\r\n\r\n.spinner .rect5 {\r\n  -webkit-animation-delay: -0.8s;\r\n  animation-delay: -0.8s;\r\n}\r\n\r\n.spinner .rect6 {\r\n  -webkit-animation-delay: -0.7s;\r\n  animation-delay: -0.7s;\r\n}\r\n\r\n.spinner .rect7 {\r\n  -webkit-animation-delay: -0.6s;\r\n  animation-delay: -0.6s;\r\n}\r\n\r\n.spinner .rect8 {\r\n  -webkit-animation-delay: -0.5s;\r\n  animation-delay: -0.5s;\r\n}\r\n\r\n@-webkit-keyframes sk-stretchdelay {\r\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \r\n  20% { -webkit-transform: scaleY(1.0) }\r\n}\r\n\r\n@keyframes sk-stretchdelay {\r\n  0%, 40%, 100% { \r\n    transform: scaleY(0.4);\r\n    -webkit-transform: scaleY(0.4);\r\n  }  20% { \r\n    transform: scaleY(1.0);\r\n    -webkit-transform: scaleY(1.0);\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/webos/webos.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"startSpinner\" class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n  <div class=\"rect6\"></div>\n  <div class=\"rect7\"></div>\n  <div class=\"rect8\"></div>\n</div>\n<div id=\"webos_container\" class=\"container\">\n  <div id=\"webos-task\" class=\"webos task-wrapper hide\">\n    <div id=\"webos-viewport\">\n      <div class=\" dhxwins_vp_material\" style=\"position: absolute; left: 0px; top: 0px; width: 1366px; height: 587px;\"></div>\n    </div>\n    <div class=\"webos-task-menu\">\n      <ul>\n        <li>\n          <a (click)=\"openWindow('explorer')\">\n            <img src=\"/assets/images/icon_explorer.png\" class=\"task-menu-item-icon\">\n            <span class=\"task-menu-item-title txt_dots\">Explorer</span>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"openWindow('dashboard')\">\n            <img src=\"/assets/images/icon_dashboard.png\" class=\"task-menu-item-icon\">\n            <span class=\"task-menu-item-title txt_dots\">Dashboard</span>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"openWindow('monitoring')\">\n            <img src=\"/assets/images/icon_monitoring.png\" class=\"task-menu-item-icon\">\n            <span class=\"task-menu-item-title txt_dots\">Monitoring</span>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"openWindow('settings')\">\n            <img src=\"/assets/images/icon_settings.png\" class=\"task-menu-item-icon\">\n            <span class=\"task-menu-item-title txt_dots\">Settings</span>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"openWindow('help')\">\n            <img src=\"/assets/images/icon_help.png\" class=\"task-menu-item-icon\">\n            <span class=\"task-menu-item-title txt_dots\">Help</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"webos-wallpapers\"></div>\n  </div>\n  <div id=\"webos-taskbar\" class=\"webos taskbar-wrapper hide\">\n    <div class=\"taskbar\">\n      <div class=\"taskbar-home\">\n        <input type=\"checkbox\" id=\"tgl-start\">\n        <label id=\"start\" for=\"tgl-start\">\n          <img src=\"/assets/images/windows-blue.png\" class=\"taskbar-item-icon\">\n        </label>\n        <div id=\"startmenu\">\n          <div class=\"startmenu-user\">\n            <img class=\"startmenu-win-icon\" src=\"http://dade.lamkins.org/wp-content/uploads/2016/04/dlamkins-180.png\">관리자\n          </div>\n          <div class=\"startmenu-label\">Service</div>\n          <div class=\"startmenu-app\" (click)=\"openStartWindow('explorer')\">\n            <img class=\"startmenu-win-icon\" src=\"/assets/images/icon_explorer.png\">Explorer\n          </div>\n          <div class=\"startmenu-app\" (click)=\"openStartWindow('dashboard')\">\n            <img class=\"startmenu-win-icon\" src=\"/assets/images/icon_dashboard.png\">Dashboard\n          </div>\n          <div class=\"startmenu-app\" (click)=\"openStartWindow('monitoring')\">\n            <img class=\"startmenu-win-icon\" src=\"/assets/images/icon_monitoring.png\">Monitoring\n          </div>\n          <div class=\"startmenu-app\" (click)=\"openStartWindow('settings')\">\n            <img class=\"startmenu-win-icon\" src=\"/assets/images/icon_settings.png\">Settings\n          </div>\n          <div class=\"startmenu-app\" (click)=\"openStartWindow('help')\">\n            <img class=\"startmenu-win-icon\" src=\"/assets/images/icon_help.png\">Help\n          </div>\n          <div style=\"margin:5px 0\" class=\"startmenu-option\">\n            <hr style=\"width: 100%\">\n          </div>\n          <div class=\"startmenu-app\" (click)=\"logout()\">\n            <img class=\"startmenu-win-icon\" src=\"/assets/images/icon_power.png\">Logout\n          </div>\n        </div>\n      </div>\n      <div class=\"taskbar-menu-wrapper\">\n        <ul id=\"taskbar-menu\">\n          <li class=\"txt_dots\">\n            <!-- taskbar-item-opened taskbar-item-activated txt_dots -->\n            <a (click)=\"openWindow('explorer')\">\n              <img src=\"/assets/images/icon_explorer.png\" class=\"taskbar-item-icon\">\n              <span class=\"taskbar-item-title hide\">Explorer</span>\n            </a>\n          </li>\n          <li class=\"txt_dots\">\n            <!-- taskbar-item-opened taskbar-item-activated txt_dots -->\n            <a (click)=\"openWindow('dashboard')\">\n              <img src=\"/assets/images/icon_dashboard.png\" class=\"taskbar-item-icon\">\n              <span class=\"taskbar-item-title hide\">Dashboard</span>\n            </a>\n          </li>\n          <li class=\"txt_dots\">\n            <!-- taskbar-item-opened taskbar-item-activated txt_dots -->\n            <a (click)=\"openWindow('monitoring')\">\n              <img src=\"/assets/images/icon_monitoring.png\" class=\"taskbar-item-icon\">\n              <span class=\"taskbar-item-title hide\">Monitoring</span>\n            </a>\n          </li>\n          <li class=\"txt_dots\">\n            <!-- taskbar-item-opened taskbar-item-activated txt_dots -->\n            <a (click)=\"openWindow('settings')\">\n              <img src=\"/assets/images/icon_settings.png\" class=\"taskbar-item-icon\">\n              <span class=\"taskbar-item-title hide\">Settings</span>\n            </a>\n          </li>\n          <li class=\"txt_dots\">\n            <!-- taskbar-item-opened taskbar-item-activated txt_dots -->\n            <a (click)=\"openWindow('help')\">\n              <img src=\"/assets/images/icon_help.png\" class=\"taskbar-item-icon\">\n              <span class=\"taskbar-item-title hide\">Help</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"taskbar-menu-short\"></div>\n      <div class=\"taskbar-alarm\">\n        <img src=\"/assets/images/icon_alarm.png\" class=\"taskbar-item-icon\">\n        <span class=\"taskbar-badge\">99+</span>\n      </div>\n      <div class=\"taskbar-tray\">\n        <span id=\"system-time\">오전 11:08</span>\n        <span id=\"language\">2018-01-06</span>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Github ribbon -->\n<div id=\"githiub\" class=\"hide\">\n  <a href=\"https://github.com/igroo/demo\">\n    <img style=\"position: absolute; top: 0; right: 0; border: 0\" src=\"https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67\"\n      alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png\">\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/webos/webos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_windows_plugin__ = __webpack_require__("../../../../../src/app/share/dhtmlx/dhtmlx-windows-plugin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explorer_explorer_component__ = __webpack_require__("../../../../../src/app/explorer/explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__monitoring_monitoring_component__ = __webpack_require__("../../../../../src/app/monitoring/monitoring.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebosComponent = (function () {
    function WebosComponent(dhxWindows, explorer, dashboard, monitoring, settings, help) {
        this.dhxWindows = dhxWindows;
        this.explorer = explorer;
        this.dashboard = dashboard;
        this.monitoring = monitoring;
        this.settings = settings;
        this.help = help;
        window.addEventListener('keydown', function (e) {
            if (e.keyCode === 27) {
                dhxWindows.closeOnTopWindow();
            }
        }, true);
        window.addEventListener('resize', function () {
            dhxWindows.resizeViewport();
        });
    }
    WebosComponent.prototype.ngOnInit = function () {
        $('body').addClass('webos-body');
        $('body').addClass('webos-body-spinne');
    };
    WebosComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            $('#startSpinner').fadeOut('fast', function () {
                $('body').removeClass('.webos-body-spinne');
                $('#webos-task').fadeIn('slow');
                $('#webos-taskbar').fadeIn('slow');
                $('#githiub').fadeIn('slow');
            });
        }, 1000);
    };
    WebosComponent.prototype.openWindow = function (menuId) {
        this[menuId].open();
    };
    WebosComponent.prototype.openStartWindow = function (menuId) {
        this[menuId].open();
        $('#start').trigger('click');
    };
    WebosComponent.prototype.logout = function () {
        alert('success logout');
        $('#start').trigger('click');
    };
    WebosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-webos',
            template: __webpack_require__("../../../../../src/app/webos/webos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/webos/webos.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_windows_plugin__["a" /* DhtmlxWindowsPlugin */],
                __WEBPACK_IMPORTED_MODULE_2__explorer_explorer_component__["a" /* ExplorerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__monitoring_monitoring_component__["a" /* MonitoringComponent */],
                __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__help_help_component__["a" /* HelpComponent */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_dhtmlx_dhtmlx_windows_plugin__["a" /* DhtmlxWindowsPlugin */],
            __WEBPACK_IMPORTED_MODULE_2__explorer_explorer_component__["a" /* ExplorerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__monitoring_monitoring_component__["a" /* MonitoringComponent */],
            __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__help_help_component__["a" /* HelpComponent */]])
    ], WebosComponent);
    return WebosComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map