(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "product/:id", component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: "enabled" })
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-body {\n  padding: 0;\n  background-color: var(--background-main-page);\n}\n\n.home-content {\n  transition: margin-right 0.5s cubic-bezier(0.18, 0.89, 0.32, 1);\n  margin-right: 0;\n}\n\n.home-content.showCart {\n  transition: margin-right 0.5s cubic-bezier(0.19, 0.58, 0.67, 1.15);\n  margin-right: 20vw;\n}\n\n@media screen and (max-width: 1024px) {\n  .home-content {\n    transition: margin-right 0.5s;\n    margin-right: 0;\n  }\n\n  .home-content.showCart {\n    transition: margin-right 0.5s;\n    margin-right: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"App\">\n  <app-header></app-header>\n  <app-modal></app-modal>\n  <app-sidebar-cart></app-sidebar-cart>\n  <div class=\"home-content\">\n    <div class=\"container-fluid content-body\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "miruku-ng-client";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _toggle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle.service */ "./src/app/toggle.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_items_product_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-items/product-items.component */ "./src/app/product-items/product-items.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-carousel/home-carousel.component */ "./src/app/home-carousel/home-carousel.component.ts");
/* harmony import */ var _home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-landing/home-landing.component */ "./src/app/home-landing/home-landing.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sidebar_cart_sidebar_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar-cart/sidebar-cart.component */ "./src/app/sidebar-cart/sidebar-cart.component.ts");
/* harmony import */ var _modal_checkout_modal_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal-checkout/modal-checkout.component */ "./src/app/modal-checkout/modal-checkout.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cart-items/cart-items.component */ "./src/app/cart-items/cart-items.component.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _product_items_product_items_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemsComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"],
                _home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_10__["HomeCarouselComponent"],
                _home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_11__["HomeLandingComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _sidebar_cart_sidebar_cart_component__WEBPACK_IMPORTED_MODULE_14__["SidebarCartComponent"],
                _modal_checkout_modal_checkout_component__WEBPACK_IMPORTED_MODULE_15__["ModalCheckoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
                _cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_19__["CartItemsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyAQJr92VOhg0iXSvziHhxHiG4PYuuoU5Jg"
                }),
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot(),
                _graphql_module__WEBPACK_IMPORTED_MODULE_20__["GraphQLModule"]
            ],
            providers: [_toggle_service__WEBPACK_IMPORTED_MODULE_6__["ToggleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart-items/cart-items.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cart-items/cart-items.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-cart-body {\n  height: 70vh;\n  overflow-y: auto;\n}\n\n.shopping-cart-body ul {\n  list-style: none;\n  padding: 0;\n}\n\n.shopping-cart-body::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n\n.shopping-cart-body::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.123);\n  border-radius: 10px;\n}\n\n/* Handle */\n\n.shopping-cart-body::-webkit-scrollbar-thumb {\n  background: rgba(221, 221, 221, 0.835);\n  -webkit-box-shadow: inset 0 0 5px rgba(8, 8, 8, 0.233);\n}\n\n.lighter-text {\n  color: #abb0be;\n}\n\n.main-color-text {\n  font-size: 22px;\n  color: rgb(92, 92, 92);\n  padding-right: 10px;\n}\n\n.button-checkout {\n  height: 40px;\n  padding: 30px;\n  font-size: 20px !important;\n  background-color: #ff6958 !important;\n  border-color: #ff6958 !important;\n}\n\n@media screen and (max-width: 1023px) {\n  .shopping-cart-body {\n    height: 50vh !important;\n    overflow-y: auto;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .shopping-cart-body {\n    height: 60vh !important;\n  }\n}\n\n.shopping-cart-items {\n  padding: 20px 30px 20px 10px;\n  margin-bottom: 0;\n  border-bottom: 1px solid #dbdbdb;\n  display: flex;\n  position: relative;\n}\n\n.shopping-cart-items .fa-trash {\n  position: absolute;\n  right: 15px;\n  font-size: 20px;\n  color: rgb(255, 126, 133);\n  cursor: pointer;\n}\n\n.shopping-cart-items img {\n  line-height: 28px;\n  color: #fff;\n  margin: 0 20px 0 0;\n  float: left;\n  width: 70px;\n  height: 70px;\n  display: block;\n}\n\n.shopping-cart-items-info {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n.shopping-cart-items-info strong {\n  font-size: 15px;\n}\n\n.item-name {\n  color: rgb(212, 212, 212);\n  display: block;\n  padding-top: 0px;\n  font-size: 14px;\n}\n\n.item-price {\n  color: rgb(92, 92, 92);\n  margin-right: 8px;\n}\n\n.item-quantity {\n  color: rgb(149, 153, 163);\n}\n\n.shopping-cart-items li {\n  list-style: none;\n  padding-left: 0;\n  padding-top: 0;\n  font-size: 14px;\n}\n"

/***/ }),

/***/ "./src/app/cart-items/cart-items.component.html":
/*!******************************************************!*\
  !*** ./src/app/cart-items/cart-items.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shopping-cart-body\" *ngIf=\"items\">\n  <ul *ngFor=\"let item of items\">\n    <li class=\"shopping-cart-items\">\n      <img [src]=\"item.imagePath\" [alt]=\"item.selectedOption1\" />\n      <div class=\"shopping-cart-items-info\">\n        <div>\n          <strong>{{item.selectedOption1}}</strong>\n        </div>\n        <ul>\n          <li>{{item.selectedOption2}}</li>\n          <li>${{item.price}}</li>\n        </ul>\n      </div>\n      <a (click)=\"removeItem(item.selectedOption1)\">\n        <i class=\"fa fa-trash\"></i>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/cart-items/cart-items.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cart-items/cart-items.component.ts ***!
  \****************************************************/
/*! exports provided: CartItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemsComponent", function() { return CartItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-cart.service */ "./src/app/product-cart.service.ts");
/* harmony import */ var _toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle.service */ "./src/app/toggle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartItemsComponent = /** @class */ (function () {
    function CartItemsComponent(ProductCartService, ToggleService) {
        this.ProductCartService = ProductCartService;
        this.ToggleService = ToggleService;
        this.items = [];
    }
    CartItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductCartService.cartChange.subscribe(function () {
            _this.items = _this.ProductCartService.getProductCarts();
        });
    };
    CartItemsComponent.prototype.removeItem = function (selectedItem) {
        this.ProductCartService.removeProductCart(selectedItem);
    };
    CartItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cart-items",
            template: __webpack_require__(/*! ./cart-items.component.html */ "./src/app/cart-items/cart-items.component.html"),
            styles: [__webpack_require__(/*! ./cart-items.component.css */ "./src/app/cart-items/cart-items.component.css")]
        }),
        __metadata("design:paramtypes", [_product_cart_service__WEBPACK_IMPORTED_MODULE_1__["ProductCartService"],
            _toggle_service__WEBPACK_IMPORTED_MODULE_2__["ToggleService"]])
    ], CartItemsComponent);
    return CartItemsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: var(--background-footer) !important;\n  text-align: left;\n  font-size: 15px;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  font-family: \"Rajdhani\", sans-serif;\n  letter-spacing: 2px;\n  height: 70px;\n}\n\n.footer .copyright p {\n  color: rgb(97, 97, 97) !important;\n  padding-left: 3rem;\n  padding-top: 20px;\n  margin-top: 1rem;\n}\n\n.footer-social {\n  float: right;\n  padding-right: 50px;\n  padding-top: 10px;\n}\n\n.footer-social a {\n  color: rgb(177, 177, 177);\n}\n\n.footer-social a:hover {\n  color: white;\n}\n\n.footer-social li {\n  display: inline;\n  -webkit-padding-start: 20px;\n          padding-inline-start: 20px;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container copyright\">\n    <nav class=\"footer-social\">\n      <ul>\n        <li>\n          <a href=\"http://instagram.com/miruku_ottawa\" target=\"_blank\" class=\"fa fa-instagram fa-2x social-icon\"></a>\n        </li>\n        <li>\n          <a href=\"https://www.facebook.com/MirukuOttawa\" target=\"_blank\" class=\"fa fa-facebook-square fa-2x social-icon\"></a>\n        </li>\n      </ul>\n    </nav>\n    <footer>\n      <p>Made by Miruku &copy; 2018</p>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uri = "https://mirukufresh.herokuapp.com/graphql"; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: uri }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]()
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
                }
            ]
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  color: #363636;\n  padding-top: 0.9vh;\n  padding-bottom: 0.9vh;\n  transition-duration: 1s;\n  position: fixed;\n  display: block;\n  width: 100%;\n  z-index: 10;\n  max-width: 100%;\n  font-size: 13px;\n}\n\nheader.sticky {\n  position: fixed;\n  transition: 1s all;\n  background-color: rgb(221, 221, 221);\n  background: rgb(51, 51, 51);\n  box-shadow: 0 0 7px 0 rgb(43, 43, 43);\n}\n\n.navbar {\n  margin-bottom: 0;\n  padding: 0 !important;\n  min-height: 50px;\n  justify-content: flex-start !important;\n}\n\n.navbar-expand-md .navbar-nav {\n  flex-direction: row;\n}\n\nheader li {\n  list-style: none;\n  text-decoration: none;\n}\n\nheader a {\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n  opacity: 0.9;\n}\n\n.header-link .active {\n  text-decoration: none;\n  color: rgb(241, 241, 241);\n  font-size: 1.03em;\n}\n\nheader a:hover {\n  opacity: 1;\n  text-decoration: none;\n  color: rgb(192, 191, 192);\n}\n\nheader nav li {\n  margin: 0 0;\n  font-size: 18px;\n  color: rgb(233, 233, 233);\n  padding-right: 30px;\n}\n\nheader nav li:last-child {\n  padding-right: 100px;\n}\n\n.collapse.in {\n  display: block !important;\n}\n\n.header-link {\n  margin: 0 0;\n  font-size: 18px;\n  color: rgb(182, 182, 182);\n}\n\n.header-social {\n  color: rgb(182, 182, 182);\n}\n\n.header-social a {\n  padding-left: 30px;\n}\n\n.header-link {\n  position: absolute;\n  left: 50%;\n  margin-left: -50px !important;\n  display: block;\n}\n\n.header-link a {\n  font-size: 30px !important;\n  letter-spacing: 3px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: bold;\n}\n\n#header-cart {\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n#header-cart-items {\n  overflow: hidden;\n  white-space: nowrap;\n  letter-spacing: 2px;\n  font-weight: 800;\n  font-family: \"Rajdhani\", sans-serif;\n}\n\n.badge {\n  background-color: rgb(248, 109, 99);\n  border-radius: 10px;\n  color: white;\n  display: inline-block;\n  font-size: 80% !important;\n  line-height: 1;\n  /* padding: 3px 3px !important; */\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\n.Toastify__toast-body div h2 {\n  color: rgb(99, 99, 99);\n  text-align: center;\n  padding: 15px;\n  margin-bottom: 0;\n}\n\n.Toastify__toast-body div h3 {\n  color: rgb(219, 219, 219);\n  text-align: center;\n  padding-top: 15px;\n  margin-bottom: 15px;\n}\n\n.Toastify__toast--default {\n  background: rgb(31, 31, 31) !important;\n  border-radius: 50px !important;\n  min-height: 10px !important;\n  margin-top: 70px;\n}\n\n@media (max-width: 768px) {\n  .header-link a:first-child {\n    margin: 0;\n  }\n\n  header nav li:last-child {\n    padding-right: 30px;\n  }\n\n  .header-link a {\n    font-size: 25px !important;\n    letter-spacing: 2px;\n  }\n\n  header h2 {\n    margin-bottom: 15px;\n  }\n\n  .cartName,\n  #header-checkout {\n    display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"sticky\">\n  <nav class=\"navbar navbar-expand-md navbar-dark\">\n    <div class=\"navbar-nav mr-auto header-social\">\n      <a href=\"http://instagram.com/miruku_ottawa\" target=\"_blank\" class=\"fa fa-instagram fa-2x\"> </a>\n      <a href=\"https://www.facebook.com/MirukuOttawa\" target=\"_blank\" class=\"fa fa-facebook-square fa-2x\"></a>\n    </div>\n    <div class=\"navbar-nav mr-auto header-link\">\n      <a routerLink=\"/home\">MIRUKU</a>\n    </div>\n    <div class=\"navbar-nav ml-auto\" id=\"header-cart-items\">\n      <li>\n        <a id=\"header-cart\" (click)=\"clickCart()\">\n          <i class=\"fa fa-shopping-cart\"></i>\n          <span class=\"cartName\"> Cart </span>\n          <span class=\"badge\">{{itemCount}}</span>\n        </a>\n      </li>\n      <li>\n        <a id=\"header-checkout\" (click)=\"clickCheckout()\">\n          Checkout\n        </a>\n      </li>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toggle.service */ "./src/app/toggle.service.ts");
/* harmony import */ var _product_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-cart.service */ "./src/app/product-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(ToggleService, ProductCartService) {
        this.ToggleService = ToggleService;
        this.ProductCartService = ProductCartService;
        this.isOpen = false;
        this.itemCount = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductCartService.cartChange.subscribe(function (isCartOpen) {
            _this.itemCount = _this.ProductCartService.getProductCartCount();
        });
    };
    HeaderComponent.prototype.clickCheckout = function () {
        this.ToggleService.checkoutToggle();
    };
    HeaderComponent.prototype.clickCart = function () {
        this.ToggleService.cartToggle();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_toggle_service__WEBPACK_IMPORTED_MODULE_1__["ToggleService"],
            _product_cart_service__WEBPACK_IMPORTED_MODULE_2__["ProductCartService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-carousel/home-carousel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/home-carousel/home-carousel.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-single-page {\n  font-family: \"Quicksand\", sans-serif;\n  font-family: \"Josefin Sans\", sans-serif !important;\n  font-family: \"Rubik\", sans-serif;\n  font-family: \"Abel\", sans-serif;\n  font-family: \"Rajdhani\", sans-serif;\n}\n\n.carousel-fade .carousel-inner .carousel-item {\n  transition-property: opacity;\n}\n\n.carousel-fade .carousel-inner .carousel-item,\n.carousel-fade .carousel-inner .active.left,\n.carousel-fade .carousel-inner .active.right {\n  opacity: 0;\n}\n\n.carousel-fade .carousel-inner .active,\n.carousel-fade .carousel-inner .next.left,\n.carousel-fade .carousel-inner .prev.right {\n  opacity: 1;\n}\n\n.carousel-fade .carousel-inner .next,\n.carousel-fade .carousel-inner .prev,\n.carousel-fade .carousel-inner .active.left,\n.carousel-fade .carousel-inner .active.right {\n  left: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.carousel-fade .carousel-control {\n  z-index: 10;\n}\n\n.carousel-fullscreen .carousel-inner .carousel-item {\n  height: 100vh;\n  min-height: 600px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.carousel-fullscreen .carousel-caption {\n  top: 50%;\n  bottom: auto;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n}\n\n.one {\n  background-image: url('home-slide-1.jpg');\n}\n\n.two {\n  background-image: url('home-slide-2.jpg');\n}\n\n.three {\n  background-image: url('home-slide-3.jpg');\n}\n\n.carousel-item .overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.4;\n  transition: all 0.2s ease-out;\n}\n\nh1,\nh2,\nh3,\nh4 {\n  font-weight: 800;\n}\n\n.carousel-caption h1,\n.carousel-caption h2 {\n  color: rgb(195, 195, 195);\n  letter-spacing: 5px;\n  font-family: \"Rubik\", sans-serif;\n}\n\n.carousel-caption p {\n  color: rgb(218, 218, 218);\n  font-family: \"Amatic SC\", cursive;\n  font-size: 40px;\n  letter-spacing: 4px;\n}\n\n.super-heading {\n  font-size: 70px;\n}\n\n.super-paragraph {\n  font-size: 20px;\n  font-weight: 300;\n  font-family: \"Amatic SC\", cursive !important;\n}\n\n.carousel-caption .super-paragraph a,\n.carousel-caption .super-paragraph a:hover {\n  color: #fff;\n}\n\n.notice-content {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.home-social {\n  position: absolute;\n  z-index: 3;\n  top: 95%;\n  left: 48%;\n  text-decoration: none;\n}\n\n.home-social a:first-child {\n  padding-right: 10px;\n}\n\n.home-social a {\n  color: rgb(177, 177, 177);\n  font-size: 2em;\n}\n\n.home-social a:hover {\n  color: white;\n}\n\n@media screen and (max-width: 767px) {\n  .home-social {\n    left: 40%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/home-carousel/home-carousel.component.html":
/*!************************************************************!*\
  !*** ./src/app/home-carousel/home-carousel.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-single-page transition-item\">\n  <div id=\"carousel-home\" class=\"carousel carousel-fullscreen slide carousel-fade\" data-ride=\"carousel\" data-interval=\"5000\">\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item one active\">\n        <div class=\"overlay\"></div>\n        <div class=\"carousel-caption\">\n          <h1 class=\"super-heading\">ミルク MIRUKU</h1>\n          <br />\n          <br />\n          <p class=\"super-paragraph\">Fresh, From Scratch, Orders Only </p>\n          <br />\n          <button [ngx-scroll-to]=\"'#content-shop'\" class=\"btn btn-outline-light btn-lg\">\n            SHOP\n          </button>\n        </div>\n      </div>\n      <div class=\"carousel-item two\">\n        <div class=\"carousel-caption\">\n          <h1 class=\"super-heading\">ミルク MIRUKU</h1>\n          <br />\n          <br />\n          <p class=\"super-paragraph\">Fresh, From Scratch, Orders Only </p>\n          <br />\n          <button [ngx-scroll-to]=\"'#content-shop'\" class=\"btn btn-outline-light btn-lg\">\n            SHOP\n          </button>\n        </div>\n      </div>\n      <div class=\"carousel-item three\">\n        <div class=\"carousel-caption\">\n          <h1 class=\"super-heading\">ミルク MIRUKU</h1>\n          <br />\n          <br />\n          <p class=\"super-paragraph\">Fresh, From Scratch, Orders Only </p>\n          <br />\n          <button [ngx-scroll-to]=\"'#content-shop'\" class=\"btn btn-outline-light btn-lg\">\n            SHOP\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"home-social\">\n      <a href=\"http://instagram.com/miruku_ottawa\" target=\"_blank\" class=\"fa fa-instagram fa-3x social-icon\">&emsp;&emsp;</a>\n      <a href=\"https://www.facebook.com/MirukuOttawa\" target=\"_blank\" class=\"fa fa-facebook-square fa-3x social-icon\"></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-carousel/home-carousel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-carousel/home-carousel.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCarouselComponent", function() { return HomeCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeCarouselComponent = /** @class */ (function () {
    function HomeCarouselComponent() {
    }
    HomeCarouselComponent.prototype.ngOnInit = function () {
    };
    HomeCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-carousel',
            template: __webpack_require__(/*! ./home-carousel.component.html */ "./src/app/home-carousel/home-carousel.component.html"),
            styles: [__webpack_require__(/*! ./home-carousel.component.css */ "./src/app/home-carousel/home-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeCarouselComponent);
    return HomeCarouselComponent;
}());



/***/ }),

/***/ "./src/app/home-landing/home-landing.component.css":
/*!*********************************************************!*\
  !*** ./src/app/home-landing/home-landing.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-intro {\n  /* margin: 10vh;\n    padding: 10vh !important; */\n  position: relative;\n  background: #f7f7f7;\n  font-family: \"Quicksand\", sans-serif !important;\n}\n\n.content-intro h1 {\n  letter-spacing: 6px;\n  color: #222222;\n  font-weight: 700;\n  font-size: 26px;\n  margin-top: 150px;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.content-intro h2 {\n  margin-bottom: 20px;\n  letter-spacing: 2px;\n  color: #222222;\n  font-weight: 700;\n  font-size: 2em;\n  font-family: \"Rajdhani\", sans-serif;\n}\n\n.content-intro p {\n  font-size: 20px;\n  padding-top: 10px;\n  color: #676767;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.text-center .row p {\n  font-size: 17px;\n  padding: 20px 80px;\n}\n\n.content-pickup .divider-line {\n  text-align: center;\n}\n\n.divider-line:after {\n  display: block;\n  background: var(--button-salmon);\n  content: \" \";\n  margin: 20px auto 100px;\n  opacity: 0.6;\n  height: 2px;\n  width: 100px;\n}\n\n.content-about-top {\n  padding: 0 !important;\n}\n\n.content-about {\n  height: 50vh;\n  background-image: url('content-about.jpg');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.content-about h1 {\n  text-align: center;\n}\n\n.content-about p {\n  text-align: center;\n  background-color: #ffffff;\n  opacity: 0.8;\n  border: 1px solid black;\n  color: rgb(48, 48, 48);\n  padding: 2em 0;\n  position: absolute;\n  overflow: hidden;\n  width: 55%;\n  left: 25%;\n  top: 30%;\n  letter-spacing: 4px;\n  font-family: \"Dosis\", sans-serif !important;\n}\n\n.content-pickup {\n  padding: 50px;\n  position: relative;\n}\n\n.content-intro blockquote {\n  padding: 20px 20px;\n}\n\n.content-map {\n}\n\nagm-map {\n  box-shadow: 1px 1px 5px 1px rgb(121, 121, 121);\n  margin: 10px 0 70px 0;\n  height: 500px;\n}\n\n@media only screen and (max-device-width: 1366px) {\n  .content-about {\n    background-attachment: scroll;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .content-intro {\n    padding-top: 0;\n  }\n\n  .text-center .row p {\n    padding: 20px 30px;\n  }\n\n  .text-center .row h2 {\n    padding-top: 70px;\n  }\n\n  .text-center img {\n    width: 200px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .content-intro {\n    padding: 5vh !important;\n  }\n  .content-about {\n    height: 80vh;\n  }\n\n  .content-about p {\n    width: 80%;\n    left: 10%;\n    top: 20%;\n  }\n\n  .text-center img {\n    width: 300px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/home-landing/home-landing.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home-landing/home-landing.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid content-intro transition-item\" id=\"content-intro\">\n  <div class=\"row\">\n    <div class=\"col-12 content-about-top\">\n      <div class=\"content-about col-12\">\n        <p>\n          We specialize in Asian style of desserts made with premium ingredients to give their customers an exclusive high-end product.\n          Everything is from scratch and fresh.\n        </p>\n      </div>\n      <div class=\"container-fluid col-12 text-center\">\n        <h1>Catering</h1>\n        <p class=\"divider-line\">\n          We provide a absolute superior catering service.\n        </p>\n        <br />\n        <div class=\"row\">\n          <div class=\"col-md-4\" data-aos=\"fade-in\">\n            <h2>CORPORATE EVENTS</h2>\n            <p>\n              Ottawa’s business community has chosen MIRUKU to cater launches, openings and galas because they know we go above and beyond.\n            </p>\n            <img src=\"../../assets/images/catering1.jpg\" alt=\"catering1\" width=\"350\" />\n          </div>\n          <div class=\"col-md-4\">\n            <h2>PRIVATE FUNCTIONS</h2>\n            <p>\n              Dinner and cocktail parties, intimate gatherings, networking events & more. Contact us for help creating your unique event\n              today!\n            </p>\n            <img src=\"../../assets/images/catering2.jpg\" alt=\"catering2\" width=\"350\" />\n          </div>\n          <div class=\"col-md-4\">\n            <h2>WEDDINGS</h2>\n            <p>\n              Your Vision, our expertise! We will advise, assist and guide you every step of the way in creating an event your guests will\n              never forget\n            </p>\n            <img src=\"../../assets/images/catering3.jpg\" alt=\"catering3\" width=\"350\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"content-pickup\">\n        <h1>PICK-UP & Delivery</h1>\n        <p class=\"divider-line\">\n          We provide a absolute superior catering service.\n        </p>\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-4 col-xl-4\">\n            <h2>PICK-UP AVAILABLE AT (BY APPOINTMENT)</h2>\n            <blockquote>\n              <p>1280 Baseline Rd, Ottawa</p>\n              <p>Sushi Kan Parking Lot </p>\n              <p>Mon-Sat, 9am to 9pm </p>\n            </blockquote>\n          </div>\n          <div class=\"col-sm-12 col-md-8 col-xl-8\">\n            <agm-map [zoom]=\"15\" [latitude]=\"45.364083\" [longitude]=\"-75.732698\">\n              <agm-marker [latitude]=\"45.364083\" [longitude]=\"-75.732698\"></agm-marker>\n            </agm-map>\n          </div>\n        </div>\n        <h2>DELIVERY (BY APPOINTMENT)</h2>\n        <blockquote>\n          <p>Mon-Fri, 10am to 2pm / 6pm to 9pm</p>\n          <p>\n            All menu is available to deliver, but whole cake has to be picked up.\n          </p>\n        </blockquote>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-landing/home-landing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home-landing/home-landing.component.ts ***!
  \********************************************************/
/*! exports provided: HomeLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLandingComponent", function() { return HomeLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeLandingComponent = /** @class */ (function () {
    function HomeLandingComponent() {
    }
    HomeLandingComponent.prototype.ngOnInit = function () { };
    HomeLandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home-landing",
            template: __webpack_require__(/*! ./home-landing.component.html */ "./src/app/home-landing/home-landing.component.html"),
            styles: [__webpack_require__(/*! ./home-landing.component.css */ "./src/app/home-landing/home-landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeLandingComponent);
    return HomeLandingComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home-carousel></app-home-carousel>\n<app-product-items></app-product-items>\n<app-home-landing></app-home-landing>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modal-checkout/modal-checkout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modal-checkout/modal-checkout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-transform: uppercase;\n  color: #dfdfdf;\n  font-size: 1.6em;\n  letter-spacing: 4px;\n}\n.container-fluid.checkout {\n  font-family: \"Rajdhani\", sans-serif !important;\n  letter-spacing: 2px;\n}\n#checkout-form {\n  font-weight: 300;\n  color: rgb(146, 146, 146);\n  background-color: var(--modal-box);\n  border-radius: 20px;\n  margin: 0;\n  padding: 50px 30px 20px 30px;\n}\n#order-shopping-cart {\n  color: rgb(223, 223, 223);\n  text-align: left;\n  margin: 0 70px 0 70px;\n  background-color: var(--modal-box);\n  border-radius: 20px;\n  padding: 50px 0 20px 20px;\n  overflow-y: auto;\n}\n#order-shopping-cart .shopping-cart-body {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n#order-shopping-cart .shopping-cart-body::-webkit-scrollbar {\n  width: 10px;\n}\n/* Track */\n#order-shopping-cart .shopping-cart-body::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n/* Handle */\n#order-shopping-cart .shopping-cart-body::-webkit-scrollbar-thumb {\n  background: rgba(56, 56, 56, 0.835);\n  -webkit-box-shadow: inset 0 0 5px rgba(8, 8, 8, 0.5);\n}\n#order-shopping-cart .box-title {\n  text-align: center;\n}\n#order-shopping-cart .shopping-cart-empty {\n  text-align: center;\n}\n#order-shopping-cart .shopping-cart-empty {\n  padding: 70px 30px 70px 30px;\n}\n#order-shopping-cart .order-shopping-cart-total {\n  text-align: right;\n  padding: 15px 20px 0 0;\n}\n#order-shopping-cart .order-shopping-cart-total span {\n  color: white;\n  font-size: 23px;\n}\n#order-shopping-cart .order-shopping-cart-total span:first-child {\n  color: rgb(160, 160, 160);\n  font-size: 17px;\n}\n#order-shopping-cart ul {\n  padding: 0;\n}\n#order-shopping-cart .shopping-cart-items {\n  margin-top: 10px;\n  border-bottom: 1px solid #525252;\n}\n.form {\n  font-size: 15px;\n}\n.form-group.row {\n  margin: 30px 0 10px 0;\n}\n.form-check-label {\n  margin: 10px 0;\n}\n.form-control {\n  border: 1px solid rgb(160, 160, 160);\n  transition: border 0.3s;\n  background: transparent !important;\n  font-size: 15px !important;\n  color: white !important;\n  height: 30px !important;\n}\n.form-control option {\n  background: rgba(48, 48, 48, 0.89);\n}\n.form-control:focus {\n  border-color: var(--input-focus) !important;\n}\ninput::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  font-size: 15px;\n}\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  font-size: 15px;\n}\ninput:-ms-input-placeholder {\n  /* IE 10+ */\n  font-size: 15px;\n}\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  font-size: 15px;\n}\n#submitButton {\n  display: inline-block;\n  zoom: 1;\n  white-space: nowrap;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  height: 50px;\n  margin-top: 10px;\n  border-radius: 5px;\n  background-color: #cd5c5c;\n  color: white;\n  font-size: 20px;\n  box-shadow: 0 0 10px 0 rgb(48, 48, 48);\n  font-family: \"Rajdhani\", sans-serif !important;\n}\n#submitButton {\n  box-sizing: border-box;\n}\n#submitButton {\n  line-height: normal;\n}\nlegend {\n  text-align: left;\n  font-size: 25px !important;\n}\n.form-check {\n  text-align: left;\n}\n.form-check-input {\n  white-space: normal;\n  margin-left: -30px !important;\n}\n#location-text-input {\n  width: 250px;\n}\n@media screen and (max-width: 1200px) {\n  #order-shopping-cart {\n    margin: 0;\n    border-right: 2px dotted #a7a7a771;\n  }\n}\n@media screen and (max-width: 768px) {\n  #order-shopping-cart {\n    margin: 0;\n    border-bottom: 2px dotted #a7a7a771;\n    border-right: 0;\n  }\n}\n.react-confirm-alert-overlay {\n  background: rgba(87, 78, 78, 0.9);\n}\n.react-confirm-alert-body {\n  background: #fff;\n  color: #666;\n}\n.react-confirm-alert-button-group > button {\n  background: #333;\n  color: #eee;\n}\n.react-confirm-alert-button-group > button:first-child {\n  background: rgb(221, 44, 44);\n}\n#exampleTextarea {\n  height: 70px !important;\n}\n"

/***/ }),

/***/ "./src/app/modal-checkout/modal-checkout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modal-checkout/modal-checkout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid checkout\">\n  <div class=\"row\">\n    <div class=\"box col-sm-12 col-md-5 col-xl-4\" id=\"order-shopping-cart\">\n      <div class=\"box-title\">\n        <h1>Shopping Bag</h1>\n      </div>\n      <div class=\"order-shopping-cart-total\">\n        <span class=\"lighter-text\">Total: </span>\n        <span class=\"main-color-text\">$ {{itemTotalPrice}}</span>\n      </div>\n      <div class=\"shopping-cart-empty\" *ngIf=\"itemCount == 0\">\n        <h1>Cart is empty</h1>\n      </div>\n      <app-cart-items></app-cart-items>\n    </div>\n\n    <div class=\"box col-sm-12 col-md-7 col-xl-6\" id=\"checkout-form\">\n      <div class=\"box-title\">\n        <h1>Checkout</h1>\n      </div>\n\n      <div class=\"form\">\n        <form #orderForm=\"ngForm\">\n          <div class=\"form-group row\">\n            <label htmlFor=\"email-input\" class=\"col-2 col-form-label\">\n              Email\n            </label>\n            <div class=\"col-10\">\n              <input class=\"form-control\" type=\"email\" placeholder=\"awesome@miruku.com\" name=\"email-input\" required />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label htmlFor=\"tel-input\" class=\"col-2 col-form-label\">\n              Phone\n            </label>\n            <div class=\"col-10\">\n              <input class=\"form-control\" type=\"tel\" placeholder=\"1-(555)-555-5555\" id=\"tel-input\" />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label htmlFor=\"datetime-local-input\" class=\"col-2 col-form-label\">\n              Date\n            </label>\n            <div class=\"col-10\">\n              <input class=\"form-control\" type=\"month\" placeholder=\"2011-08-19T13:45:00\" id=\"datetime-local-input\" />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label htmlFor=\"time-input\" class=\"col-2 col-form-label\">\n              Time\n            </label>\n            <div class=\"col-10\">\n              <select class=\"form-control\">\n                <option disabled selected value>\n                  -- select time --\n                </option>\n                <option>11am</option>\n                <option>12pm</option>\n                <option>1pm</option>\n                <option>2pm</option>\n                <option>3pm</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <legend class=\"col-form-legend col-12\">\n              Pick-up or Delivery Location\n            </legend>\n            <div class=\"col-12\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"location1\" /> Pick-up at 1280 Baseline Rd, Ottawa\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"location2\" /> Pick-up at 319 Rideau st, Ottawa\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"location3\" />\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Delivery at\" id=\"location-text-input\" />\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label htmlFor=\"exampleTextarea\"></label>\n            <div class=\"col-12\">\n              <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n            </div>\n          </div>\n          <button type=\"submit\" id=\"submitButton\" class=\"btn btn-block\">\n            Submit\n          </button>\n          <br />\n          <br />\n          <p>*Please allow us few days notice for any order.</p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal-checkout/modal-checkout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modal-checkout/modal-checkout.component.ts ***!
  \************************************************************/
/*! exports provided: ModalCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCheckoutComponent", function() { return ModalCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-cart.service */ "./src/app/product-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalCheckoutComponent = /** @class */ (function () {
    function ModalCheckoutComponent(ProductCartService) {
        this.ProductCartService = ProductCartService;
        this.itemCount = 0;
        this.itemTotalPrice = 0;
    }
    ModalCheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductCartService.cartChange.subscribe(function () {
            _this.itemCount = _this.ProductCartService.getProductCartCount();
            _this.itemTotalPrice = _this.ProductCartService.getProductCartTotal();
        });
    };
    ModalCheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-modal-checkout",
            template: __webpack_require__(/*! ./modal-checkout.component.html */ "./src/app/modal-checkout/modal-checkout.component.html"),
            styles: [__webpack_require__(/*! ./modal-checkout.component.css */ "./src/app/modal-checkout/modal-checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_product_cart_service__WEBPACK_IMPORTED_MODULE_1__["ProductCartService"]])
    ], ModalCheckoutComponent);
    return ModalCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ModalBackground .overlay {\n  top: -100vh;\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 30;\n  left: 0;\n  background-color: var(--background-modal);\n  overflow-y: hidden;\n  transition: all 0.5s cubic-bezier(0.39, 0.58, 0.57, 1);\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  text-align: center;\n}\n\n.ModalBackground .open {\n  top: 50vh;\n  overflow-x: hidden;\n}\n\n.ModalBackground .overlay a:hover,\n.Login .overlay a:focus {\n  color: #f1f1f1;\n}\n\n.ModalBackground .overlay .closebtn {\n  text-decoration: none;\n  font-size: 35px;\n  color: #9b9b9b;\n  display: block;\n\n  background-color: rgba(93, 93, 93, 0);\n  position: absolute;\n  border: none;\n  top: 20px;\n  right: 11%;\n  cursor: pointer;\n}\n\n#top-logo {\n  padding: 20px;\n  text-decoration: none;\n  font-size: 35px;\n  color: #636262 !important;\n  display: block;\n\n  background-color: transparent;\n  position: absolute;\n  border: none;\n  top: 10px;\n  left: 10%;\n}\n\n.ModalBackground .overlay .overlay-header {\n  width: 100%;\n  height: 10vh;\n  position: fixed;\n  z-index: 31;\n  top: -100vh;\n  left: 0;\n  overflow-y: hidden;\n  transition: all 0.9s ease-in-out;\n  transition-delay: 0.3s;\n}\n\n.ModalBackground .overlay .overlay-header.open {\n  top: 0;\n}\n\n.ModalBackground .overlay .overlay-content {\n  width: 100%;\n  height: 85vh;\n  position: fixed;\n  z-index: 31;\n  top: -100vh;\n  left: 0;\n  overflow-y: hidden;\n  transition: all 0.5s cubic-bezier(0.39, 0.89, 0.32, 1.08);\n  transition-delay: 0.5s;\n}\n\n.ModalBackground .overlay .overlay-content.open {\n  top: 13vh;\n}\n\n.ModalBackground .overlay .overlay-footer {\n  width: 100%;\n  min-height: 100px;\n  position: absolute;\n  z-index: 31;\n  bottom: 0vh;\n  left: 0;\n  overflow-y: hidden;\n  transition: all 0.5s ease-in-out;\n}\n\n.ModalBackground .overlay .overlay-footer.open {\n  top: 95vh;\n}\n\n.fa.fa-angle-double-up {\n  font-size: 50px;\n  color: rgb(146, 146, 146);\n  cursor: pointer;\n}\n\n.ModalBackground h1 {\n  text-transform: uppercase;\n  color: rgb(223, 223, 223);\n  font-size: 2.5em;\n  /* font-weight: bold; */\n  letter-spacing: 4px;\n}\n\n@media screen and (max-width: 1023px) {\n  .ModalBackground .overlay .overlay-content {\n    overflow-y: auto;\n  }\n\n  .ModalBackground .overlay .overlay-content.open {\n    top: 10vh;\n  }\n\n  #top-logo {\n    padding: 20px;\n    font-size: 25px;\n    left: 5%;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .ModalBackground .overlay .overlay-content.open {\n    top: 12vh;\n    height: 80vh;\n  }\n}\n"

/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ModalBackground\">\n  <div class=\"overlay\" [ngClass]=\"isOpen? 'open':''\">\n    <div class=\"overlay-header\" [ngClass]=\"isOpen? 'open':''\">\n      <a class=\"ml-5 pl-5\" id=\"top-logo\" href=\"\">\n        ミルク Miruku\n      </a>\n      <button class=\"closebtn\" (click)=\"closeModal()\">\n        &times;\n      </button>\n    </div>\n\n    <div class=\"overlay-content\" [ngClass]=\"isOpen? 'open':''\">\n      <!-- <Checkout products={this.props.products} submitOrderForm={this.props.submitOrderForm} handleRemoveCart={this.props.handleRemoveCart}\n      /> -->\n      <app-modal-checkout></app-modal-checkout>\n    </div>\n    <div class=\"overlay-footer\" [ngClass]=\"isOpen? 'open':''\">\n      <a (click)=\"closeModal()\">\n        <i class=\"fa fa-angle-double-up\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toggle.service */ "./src/app/toggle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(ToggleService) {
        this.ToggleService = ToggleService;
        // @HostBinding("class.is-open")
        this.isOpen = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ToggleService.checkoutChange.subscribe(function (isOpen) {
            _this.isOpen = isOpen;
        });
    };
    ModalComponent.prototype.closeModal = function () {
        this.ToggleService.checkoutToggle();
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-modal",
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_toggle_service__WEBPACK_IMPORTED_MODULE_1__["ToggleService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/product-cart.service.ts":
/*!*****************************************!*\
  !*** ./src/app/product-cart.service.ts ***!
  \*****************************************/
/*! exports provided: ProductCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartService", function() { return ProductCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCartService = /** @class */ (function () {
    function ProductCartService() {
        this.items = [];
        this.cartStatus = false;
        this.cartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.items = [];
    }
    ProductCartService.prototype.getProductCarts = function () {
        return this.items;
    };
    ProductCartService.prototype.setProductCarts = function (item) {
        this.items.push(item);
        this.cartChange.emit(!this.cartStatus);
    };
    ProductCartService.prototype.getProductCartCount = function () {
        return this.items.length;
    };
    ProductCartService.prototype.getProductCartTotal = function () {
        return this.items
            .map(function (product) {
            var priceArr = 0;
            return (priceArr += +product.price);
        })
            .reduce(function (a, b) { return a + b; }, 0);
    };
    ProductCartService.prototype.removeProductCart = function (selectItem) {
        this.items = this.items.filter(function (item) { return item.selectedOption1 !== selectItem; });
        this.cartChange.emit(!this.cartStatus);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductCartService.prototype, "cartChange", void 0);
    ProductCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ProductCartService);
    return ProductCartService;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-detail {\n  padding-top: 100px;\n  padding-bottom: 50px;\n  min-height: 93vh;\n}\n\n.product-detail .carousel {\n  padding-top: 35px;\n}\n\n.product-detail h1 {\n  margin-left: 20px;\n  color: rgb(80, 80, 80);\n}\n\n.form-group > h1 {\n  letter-spacing: 2px;\n  color: #707070;\n  font-weight: 600;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n  text-align: left;\n  width: 100%;\n  font-family: \"Dosis\", sans-serif !important;\n  font-size: 1.6rem;\n}\n\n.form-group.row {\n  margin: 30px 0 10px 0;\n}\n\n.product-detail h2 {\n  color: rgb(61, 61, 61);\n  font-size: 1.6rem;\n}\n\n.carousel .item img {\n  margin: 0 auto;\n  height: 450px;\n}\n\n.carousel-control.left,\n.carousel-control.right {\n  background-image: none;\n}\n\n#productCarousel {\n  margin-bottom: 50px;\n}\n\n.product-description {\n  letter-spacing: 1px;\n  font-family: \"Nunito\", sans-serif !important;\n}\n\n:host >>> h1 {\n  margin-left: 20px;\n  color: rgb(80, 80, 80);\n  font-size: 20px;\n  margin-left: 0;\n  font-weight: 600;\n}\n\n:host >>> h2 {\n  font-size: 15px;\n  padding-bottom: 30px;\n}\n\n.product-detail-btn-menu {\n  padding: 10px !important;\n  margin: 15px !important;\n  border-radius: 0 !important;\n  font-size: 1em !important;\n  border: 0 !important;\n  border-bottom: 1px solid !important;\n  color: gray !important;\n}\n\n.product-detail-btn-menu.option1:hover {\n  background-color: var(--button-lightSeaGreen) !important;\n  border-color: var(--button-lightSeaGreen) !important;\n  color: white !important;\n}\n\n.product-detail-btn-menu.option1.active {\n  background-color: var(--button-lightSeaGreen) !important;\n  border-color: var(--button-lightSeaGreen) !important;\n  color: white !important;\n  outline-color: rgba(0, 0, 0, 0) !important;\n  box-shadow: none !important;\n}\n\n.product-detail-btn-menu.option2:hover {\n  background-color: var(--button-salmon) !important;\n  border-color: var(--button-salmon) !important;\n  color: white !important;\n}\n\n.product-detail-btn-menu.option2.active {\n  background-color: var(--button-salmon) !important;\n  border-color: var(--button-salmon) !important;\n  color: white !important;\n  outline-color: rgba(0, 0, 0, 0) !important;\n  box-shadow: none !important;\n}\n\n.btn-product-option1 {\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgb(200, 200, 200);\n}\n\n.product-detail .col-form-label {\n  font-size: 2em !important;\n}\n\n.product-detail-price {\n  width: 100%;\n  font-size: 30px;\n  letter-spacing: 1px;\n  font-family: \"Rajdhani\", sans-serif !important;\n}\n\n.product-detail-price > h2 {\n  font-weight: bold;\n}\n\n.product-detail-selection {\n  padding: 15px 0 15px 0;\n  border-top: 1px solid rgb(200, 200, 200);\n}\n\n.product-detail-selection h2 {\n  font-size: 0.6em;\n}\n\n.product-detail-price h3 {\n  color: red;\n  padding: 10px 0 10px 0;\n  font-size: 1.2rem;\n}\n\n.btn-group {\n  display: flex !important;\n}\n\n.inproper-selection {\n  color: red;\n}\n\n#button-add-cart {\n  height: 50px;\n  font-family: \"Rajdhani\", sans-serif !important;\n  font-size: 1em;\n}\n\n.showAddCartButton {\n  background-color: #1b1b1b;\n  color: #e5dfd9;\n}\n\n#button-add-cart:hover {\n  color: #e5dfd9;\n  background-color: rgb(71, 71, 71);\n}\n\n#button-add-cart i {\n  font-size: 1.2em;\n}\n\n#button-add-cart span {\n  font-weight: 500;\n  font-family: \"Rajdhani\", sans-serif !important;\n}\n\n#addCartText {\n  margin-left: 10px;\n}\n\n@media (max-width: 576px) {\n  .carousel .item img {\n    height: 250px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container product-detail\">\n  <div class=\"row\" *ngIf=\"selectedItem\">\n    <div class=\"col-sm-12 col-md-8 col-xl-7\">\n      <div id=\"productCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"item\">\n            <img [src]=\"selectedItem.imagePath[0]\" [alt]=\"selectedItem.imagePath[0]\" />\n          </div>\n        </div>\n        <a class=\"carousel-control left\" href=\"#productCarousel\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n        <a class=\"carousel-control right\" href=\"#productCarousel\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n        </a>\n      </div>\n\n      <div class=\"product-description\" [innerHtml]=\"selectedItem.description\"></div>\n    </div>\n    <div class=\"col-sm-12 col-md-4 col-xl-5\">\n      <form class=\"form-product-detail\" #optionForm=\"ngForm\">\n        <div class=\"form-group row btn-product-option1\">\n          <h1>{{selectedItem.title[0]}}</h1>\n          <br />\n\n          <div class=\"btn-group btn-group-toggle row \" data-toggle=\"buttons\">\n            <label class=\"btn btn-outline-info btn-lg product-detail-btn-menu option1\" [attr.data-option1]=\"title.split( ' : ')[0]\" [attr.data-price]=\"title.split(' : ')[1]\"\n              [attr.data-optionidx]=\"idx - 1\" data-target=\"#productCarousel\" [attr.data-slide-to]=\"idx - 1\" *ngFor=\"let title of selectedItem.title | slice:1; let idx = index;\"\n              (click)=\"handleSelectedOption1(title.split( ': ')[0], title.split( ': ')[1], selectedItem.price[0].indexOf('flavour') > -1 || selectedItem.price[0].indexOf('BAKED') > -1 )\">\n              <input [type]=\"selectedItem.price[0].indexOf('flavour') > -1 || selectedItem.price[0].indexOf('BAKED') > -1 ? 'checkbox' : 'radio'\"\n                name=\"options\" id=\"option1\" autoComplete=\"off\" /> {{title.split(\": \")[0]}}\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group row\" *ngIf=\"selectedItem.price[0] !== ''\">\n          <div class=\"btn-group btn-group-toggle row\" data-toggle=\"buttons\">\n            <label class=\"btn btn-outline-secondary btn-lg product-detail-btn-menu option2\" [attr.data-option2]=\"price.split(':')[0]\"\n              [attr.data-price]=\"price.split(':')[1]\" *ngFor=\"let price of selectedItem.price\" (click)=\"handleSelectedOption2(price.split(':')[0], price.split(':')[1])\">\n              <input type=\"radio\" name=\"options\" [id]=\" 'product-option-' + index\" autoComplete=\"off\" /> {{price.split(\":\")[0]}}\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"product-detail-price\">\n            <h2 *ngIf=\"selectedOption1.length > 0\">\n              {{selectedOption1}}\n            </h2>\n            <div class=\"product-detail-selection\">\n              <h2> {{selectedOption2}} </h2>\n              <h2 *ngIf=\"selectedPrice != 0\">Price: $ {{selectedPrice}}</h2>\n            </div>\n            <h3 *ngIf=\"!isChosen\">Please select the proper option.</h3>\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-lg btn-block \" [ngClass]=\"selectedOption1 && selectedPrice ? 'showAddCartButton' : '' \"\n          id=\"button-add-cart\" (click)=\"handleAddCart()\">\n\n          <i class=\"fa fa-shopping-cart \" *ngIf=\"selectedOption1 && selectedPrice ; else selectOption\">\n            <span id=\"addCartText \">ADD TO CART</span>\n          </i>\n          <ng-template #selectOption>Please select an option.</ng-template>\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _product_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-cart.service */ "./src/app/product-cart.service.ts");
/* harmony import */ var _toggle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toggle.service */ "./src/app/toggle.service.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var productsListQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ProductListQuery {\n    products {\n      id\n      imagePath\n      title\n      description\n      price\n    }\n  }\n"], ["\n  query ProductListQuery {\n    products {\n      id\n      imagePath\n      title\n      description\n      price\n    }\n  }\n"])));
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(route, location, ProductCartService, ToggleService, apollo) {
        this.route = route;
        this.location = location;
        this.ProductCartService = ProductCartService;
        this.ToggleService = ToggleService;
        this.apollo = apollo;
        this.selectedOption1 = [];
        this.selectedOption2 = "";
        this.selectedPrice = 0;
        this.optionidx = 0;
        this.inputType = "radio";
        this.isChosen = true;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo
            .watchQuery({ query: productsListQuery })
            .valueChanges.subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.selectedItem = data.products.filter(function (item) { return item.id === _this.route.snapshot.paramMap.get("id"); })[0];
        });
    };
    ProductDetailsComponent.prototype.handleAddCart = function () {
        this.setItem = {
            imagePath: this.selectedItem.imagePath,
            selectedOption1: this.selectedOption1,
            selectedOption2: this.selectedOption2,
            price: this.selectedPrice
        };
        if (this.selectedOption1.length > 0 && this.selectedPrice) {
            this.ProductCartService.setProductCarts(this.setItem);
            this.ToggleService.cartToggle();
        }
        else {
            this.isChosen = false;
        }
    };
    ProductDetailsComponent.prototype.handleSelectedOption1 = function (option, price, isCheckbox) {
        if (this.selectedOption1.indexOf(option) > -1) {
            this.selectedOption1 = this.selectedOption1.filter(function (opt) { return opt !== option; });
        }
        else {
            isCheckbox
                ? (this.selectedOption1 = this.selectedOption1.concat([option]))
                : (this.selectedOption1 = option);
        }
        if (price)
            this.selectedPrice = price;
        this.isChosen = true;
    };
    ProductDetailsComponent.prototype.handleSelectedOption2 = function (option, price) {
        this.selectedOption2 = option;
        this.selectedPrice = price;
        this.isChosen = true;
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-details",
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _product_cart_service__WEBPACK_IMPORTED_MODULE_5__["ProductCartService"],
            _toggle_service__WEBPACK_IMPORTED_MODULE_6__["ToggleService"],
            apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/product-items/product-items.component.css":
/*!***********************************************************!*\
  !*** ./src/app/product-items/product-items.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-shop {\n  margin-top: 10vh;\n  margin-bottom: 10vh;\n  position: relative;\n  font-family: \"Rajdhani\", sans-serif !important;\n}\n\n.thumbnail p {\n  font-size: 20px;\n  color: rgb(88, 88, 88);\n  margin-top: 10px;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n  font-family: \"Rajdhani\", sans-serif !important;\n}\n\n.thumbnail a img {\n  height: 280px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thumbnail button {\n  font-size: 15px;\n  background-color: rgb(255, 136, 128) !important;\n  border: rgb(255, 136, 128) !important;\n  font-family: \"Rajdhani\", sans-serif;\n}\n\n.jumbotron {\n  background-color: transparent !important;\n  padding-bottom: 0 !important;\n}\n\n.jumbotron h1 {\n  letter-spacing: 6px;\n  color: #222222;\n  font-weight: bold;\n  font-size: 2.7em;\n  margin-top: 50px;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Montserrat\", serif;\n}\n\n.jumbotron p {\n  text-align: center;\n  font-size: 20px;\n  padding-top: 10px;\n  color: #676767;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.jumbotron h3 {\n  text-align: center;\n  color: rgb(160, 160, 160);\n}\n\n.row { /* IE10 */\n  display: flex; /* IE10 */\n  flex-wrap: wrap;\n  padding: 0 4px;\n}\n\n.thumbnail {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n  border: none;\n}\n\n.thumbnail .img-thumb-overlay {\n  position: absolute;\n  overflow: hidden;\n  width: 80%;\n  height: 60%;\n  left: 10%;\n  top: 10%;\n  border-bottom: 2px solid #fff;\n  border-top: 2px solid #fff;\n  transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: opacity 0.4s, transform 0.4s;\n  transition: opacity 0.4s, transform 0.4s, -webkit-transform 0.4s;\n  -webkit-transform: scale(0, 1);\n  transform: scale(0, 1);\n}\n\n.thumbnail:hover .img-thumb-overlay {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n\n.thumbnail img {\n  display: block;\n  position: relative;\n  transition: all 0.35s;\n}\n\n.thumbnail:hover img {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');\n  filter: brightness(0.5);\n  -webkit-filter: brightness(0.5);\n}\n\n.thumbnail h2 {\n  text-transform: uppercase;\n  text-align: center;\n  position: relative;\n  font-size: 18px;\n  background-color: transparent;\n  color: #fff;\n  padding: 2em 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transition: opacity 0.35s, -webkit-transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0);\n  font-family: \"Josefin Sans\", sans-serif !important;\n}\n\n.img-thumb-overlay a,\n.img-thumb-overlay p {\n  color: #fff;\n  padding: 1.5em 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transition: opacity 0.35s, -webkit-transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n\n.thumbnail:hover a,\n.thumbnail:hover p,\n.thumbnail:hover h2 {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.divider-line:after {\n  display: block;\n  background: var(--button-salmon);\n  content: \" \";\n  margin: 20px auto 100px;\n  opacity: 0.6;\n  height: 2px;\n  width: 100px;\n}\n\n@media screen and (max-width: 768px) {\n  .thumbnail {\n    height: auto;\n  }\n}\n"

/***/ }),

/***/ "./src/app/product-items/product-items.component.html":
/*!************************************************************!*\
  !*** ./src/app/product-items/product-items.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container content-shop\" id=\"content-shop\">\n  <div class=\"jumbotron\">\n    <h1>SHOP</h1>\n    <p class=\"divider-line\">\n      Everyone deserves more delicious dessert\n    </p>\n  </div>\n  <router-outlet></router-outlet>\n  <div class=\"row\" id=\"product-thumb\">\n    <div class=\"col-lg-4 col-md-6 col-sm-12 text-center\" *ngFor=\"let item of items\">\n      <div class=\"thumbnail\">\n        <a routerLink=\"/product/{{item.id}}\" (click)=\"onSelect(item)\">\n          <img [src]=\"item.imagePath[0]\" [alt]=\"item.title[0]\" />\n          <div class=\"img-thumb-overlay \">\n            <h2>{{item.title[0]}}</h2>\n            <p>\n              <a class=\"img-thumb-text \">Find Out</a>\n            </p>\n          </div>\n        </a>\n        <router-outlet></router-outlet>\n        <div class=\"caption \">\n          <p>{{item.title[0]}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-items/product-items.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-items/product-items.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemsComponent", function() { return ProductItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var productsListQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ProductListQuery {\n    products {\n      id\n      imagePath\n      title\n      description\n      price\n    }\n  }\n"], ["\n  query ProductListQuery {\n    products {\n      id\n      imagePath\n      title\n      description\n      price\n    }\n  }\n"])));
var ProductItemsComponent = /** @class */ (function () {
    function ProductItemsComponent(apollo) {
        this.apollo = apollo;
        this.items = [];
        this.selectedId = "";
    }
    ProductItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo
            .watchQuery({ query: productsListQuery })
            .valueChanges.subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.items = data.products;
        });
    };
    ProductItemsComponent.prototype.onSelect = function (item) {
        this.selectedId = item.id;
    };
    ProductItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-items",
            template: __webpack_require__(/*! ./product-items.component.html */ "./src/app/product-items/product-items.component.html"),
            styles: [__webpack_require__(/*! ./product-items.component.css */ "./src/app/product-items/product-items.component.css")]
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]])
    ], ProductItemsComponent);
    return ProductItemsComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/sidebar-cart/sidebar-cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sidebar-cart/sidebar-cart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-cart {\n  background: var(--background-cart);\n\n  z-index: 5;\n\n  position: fixed;\n  box-sizing: border-box;\n  height: 95vh;\n\n  top: 0;\n  bottom: auto;\n  left: auto;\n  right: -20vw;\n\n  margin-top: 70px;\n  margin-bottom: 10px;\n  padding: 10px;\n\n  width: 20vw;\n  padding: 0;\n  overflow-x: hidden;\n  transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1);\n\n  font-family: \"Rajdhani\", sans-serif;\n  letter-spacing: 2px;\n}\n\n.shopping-cart.showCart {\n  right: 0;\n  box-shadow: 0 0 5px 0 rgb(43, 43, 43);\n  transition: 0.5s cubic-bezier(0.19, 0.58, 0.67, 1.15);\n}\n\n.shopping-cart .shopping-cart-header {\n  box-sizing: border-box;\n  border-bottom: 1px solid #c8c6c5;\n  font-size: 16px;\n  height: 60px;\n  padding: 10px 0 10px;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n\n.shopping-cart .shopping-cart-header .closebtn-cart {\n  position: absolute;\n  left: 10px;\n  top: 0;\n  z-index: 5;\n  cursor: pointer;\n  color: rgb(170, 170, 170);\n  background-color: transparent;\n  font-size: 40px !important;\n  border-color: transparent;\n}\n\n.shopping-cart-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.shopping-cart-footer {\n  padding: 20px 20px 50px 20px;\n  width: 100%;\n  border-top: 1px solid #c8c6c5;\n}\n\n.shopping-cart-total {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: rgb(190, 190, 190);\n  font-size: 17px;\n  text-align: right;\n}\n\n.shopping-cart-empty {\n  padding: 70px 30px 70px 30px;\n}\n\n.shopping-cart h1 {\n  color: rgb(151, 151, 151);\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.shopping-cart h2 {\n  color: rgb(175, 175, 175);\n  text-align: center;\n  line-height: 40px;\n  font-size: 1.5rem;\n}\n\n.shopping-cart-footer .fa-shopping-cart {\n  color: rgb(190, 190, 190);\n  font-size: 25px;\n  padding: 5px;\n  margin-left: 60px;\n}\n\n.lighter-text {\n  color: #abb0be;\n}\n\n.main-color-text {\n  font-size: 22px;\n  color: rgb(92, 92, 92);\n  padding-right: 10px;\n}\n\n.button-checkout {\n  height: 40px;\n  font-size: 20px;\n  background-color: #ff6958;\n  border-color: #ff6958;\n}\n\n@media screen and (max-width: 1300px) {\n  .shopping-cart.showCart {\n    min-width: 320px;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .shopping-cart {\n    position: fixed;\n    height: 75%;\n    width: 100%;\n    top: -200vw;\n    right: 0;\n    padding: 20px;\n    margin-top: 40px;\n    overflow-y: hidden;\n    transition: 0.4s;\n  }\n\n  .shopping-cart.showCart {\n    top: -10vw;\n    height: 100vh;\n    z-index: 10;\n    box-shadow: 0 0 5px 0 rgb(43, 43, 43);\n  }\n\n  .shopping-cart .shopping-cart-footer {\n    width: 95%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/sidebar-cart/sidebar-cart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sidebar-cart/sidebar-cart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shopping-cart\" [ngClass]=\"isCartOpen ? 'showCart': ''\">\n  <div class=\"shopping-cart-header\">\n    <a (click)=\"closeSidebar()\" id=\"cart-close\">\n      <button class=\"closebtn-cart\">\n        &times;\n      </button>\n    </a>\n    <h2>Shopping Cart</h2>\n  </div>\n  <div class=\"shopping-cart-empty\" *ngIf=\"itemCount == 0\">\n    <h1>Cart is empty</h1>\n  </div>\n  <div class=\"shopping-cart-content\">\n    <app-cart-items></app-cart-items>\n    <div class=\"shopping-cart-footer\" *ngIf=\"itemCount > 0\">\n      <div class=\"shopping-cart-total\">\n        <span class=\"lighter-text\">Total: </span>\n        <span class=\"main-color-text\">$ {{itemTotalPrice}}</span>\n      </div>\n      <button class=\"btn btn-danger btn-block button-checkout\" (click)=\"openCheckout()\">\n        Checkout\n      </button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar-cart/sidebar-cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sidebar-cart/sidebar-cart.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarCartComponent", function() { return SidebarCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toggle.service */ "./src/app/toggle.service.ts");
/* harmony import */ var _product_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-cart.service */ "./src/app/product-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarCartComponent = /** @class */ (function () {
    function SidebarCartComponent(ToggleService, ProductCartService) {
        this.ToggleService = ToggleService;
        this.ProductCartService = ProductCartService;
        this.isCartOpen = false;
        this.itemCount = 0;
    }
    SidebarCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductCartService.cartChange.subscribe(function () {
            _this.itemCount = _this.ProductCartService.getProductCartCount();
            _this.itemTotalPrice = _this.ProductCartService.getProductCartTotal();
        });
        this.ToggleService.cartChange.subscribe(function (isCartOpen) {
            _this.isCartOpen = isCartOpen;
        });
    };
    SidebarCartComponent.prototype.closeSidebar = function () {
        this.ToggleService.cartToggle();
    };
    SidebarCartComponent.prototype.openCheckout = function () {
        this.ToggleService.checkoutToggle();
        this.closeSidebar();
    };
    SidebarCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sidebar-cart",
            template: __webpack_require__(/*! ./sidebar-cart.component.html */ "./src/app/sidebar-cart/sidebar-cart.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-cart.component.css */ "./src/app/sidebar-cart/sidebar-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_toggle_service__WEBPACK_IMPORTED_MODULE_1__["ToggleService"],
            _product_cart_service__WEBPACK_IMPORTED_MODULE_2__["ProductCartService"]])
    ], SidebarCartComponent);
    return SidebarCartComponent;
}());



/***/ }),

/***/ "./src/app/toggle.service.ts":
/*!***********************************!*\
  !*** ./src/app/toggle.service.ts ***!
  \***********************************/
/*! exports provided: ToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleService", function() { return ToggleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleService = /** @class */ (function () {
    function ToggleService() {
        this.isCheckoutOpen = false;
        this.isCartOpen = false;
        this.checkoutChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ToggleService.prototype.checkoutToggle = function () {
        this.isCheckoutOpen = !this.isCheckoutOpen;
        this.checkoutChange.emit(this.isCheckoutOpen);
    };
    ToggleService.prototype.cartToggle = function () {
        this.isCartOpen = !this.isCartOpen;
        this.cartChange.emit(this.isCartOpen);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToggleService.prototype, "checkoutChange", void 0);
    ToggleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ToggleService);
    return ToggleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/snoh/dev-projects/personal-project/2-miruku-angular/miruku-ng-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map