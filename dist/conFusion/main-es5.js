function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ngfactory.js":
  /*!****************************************************!*\
    !*** ./src/app/about/about.component.ngfactory.js ***!
    \****************************************************/

  /*! exports provided: RenderType_AboutComponent, View_AboutComponent_0, View_AboutComponent_Host_0, AboutComponentNgFactory */

  /***/
  function srcAppAboutAboutComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AboutComponent", function () {
      return RenderType_AboutComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AboutComponent_0", function () {
      return View_AboutComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AboutComponent_Host_0", function () {
      return View_AboutComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponentNgFactory", function () {
      return AboutComponentNgFactory;
    });
    /* harmony import */


    var _about_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./about.component.scss.shim.ngstyle */
    "./src/app/about/about.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/list/typings/index.ngfactory */
    "./node_modules/@angular/material/list/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */
    "./node_modules/@angular/material/card/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _services_leader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../services/leader.service */
    "./src/app/services/leader.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AboutComponent = [_about_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AboutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AboutComponent,
      data: {}
    });

    function View_AboutComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "mat-list", [["class", "mat-list"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "img", [["class", "mat-list-avatar"], ["mat-list-avatar", ""]], [[8, "src", 4]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListAvatarCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "h4", [["class", "mat-line"], ["matLine", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "h4", [["class", "mat-line"], ["matLine", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "p", [["class", "mat-line"], ["matLine", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.image, "");

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.name;

        _ck(_v, 6, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.designation;

        _ck(_v, 9, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.description;

        _ck(_v, 12, 0, currVal_3);
      });
    }

    function View_AboutComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 70, "div", [["class", "container"], ["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About Us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 43, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 41, "div", [["fxLayout", "column"], ["fxLayout.gt-sm", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.gt-sm": [1, "fxLayout.gt-sm"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "div", [["fxFlex", "70"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Our History"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["The restaurant traces its humble beginnings to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["The Frying Pan"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 28, "div", [["fxFlex", "30"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 26, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 5, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 1, 3, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Facts At a Glance"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 18, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 16, "dl", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "dt", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Started"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "dd", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3 Feb. 2013"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "dt", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Major Stake Holder"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "dd", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["HK Fine Foods Inc."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "dt", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Last Year's Turnover"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "dd", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$1,250,375"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "dt", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Employees"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "dd", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["40"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 10, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 8, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 0, 6, "blockquote", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You better cut the pizza in four pieces because I'm not hungry enough to eat six."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 3, "footer", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-- Yogi Berra, "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "cite", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 6, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Corporate Leadership"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "column";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "10px";

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = "";

        _ck(_v, 4, 0, currVal_2);

        var currVal_3 = "";

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = "column";
        var currVal_5 = "row";

        _ck(_v, 12, 0, currVal_4, currVal_5);

        var currVal_6 = "70";

        _ck(_v, 14, 0, currVal_6);

        var currVal_7 = "30";

        _ck(_v, 25, 0, currVal_7);

        var currVal_8 = "";

        _ck(_v, 54, 0, currVal_8);

        var currVal_9 = "";

        _ck(_v, 65, 0, currVal_9);

        var currVal_10 = _co.leader;

        _ck(_v, 70, 0, currVal_10);
      }, null);
    }

    function View_AboutComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], [_services_leader_service__WEBPACK_IMPORTED_MODULE_12__["LeaderService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AboutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about", _about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], View_AboutComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/about/about.component.scss.shim.ngstyle.js":
  /*!************************************************************!*\
    !*** ./src/app/about/about.component.scss.shim.ngstyle.js ***!
    \************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAboutAboutComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["img[_ngcontent-%COMP%] {\n  -webkit-clip-path: circle(45% at 50% 49%);\n          clip-path: circle(45% at 50% 49%);\n  position: relative;\n}\n\nmat-list-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  align-items: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXERoYXJhX0RldmVsb3BlbWVudFxcQW5ndWxhcl9Db25mdXNpb25cXGNvbkZ1c2lvbl9WMi9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Ysa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuXHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg0NSUgYXQgNTAlIDQ5JSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICB9XHJcbiAgbWF0LWxpc3QtaXRlbXtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG4gICAgICBcclxuICB9IiwiaW1nIHtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoNDUlIGF0IDUwJSA0OSUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbm1hdC1saXN0LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLWl0ZW1zOiByaWdodDtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(leaderService) {
        _classCallCheck(this, AboutComponent);

        this.leaderService = leaderService;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.leader = this.leaderService.getLeaders();
        }
      }]);

      return AboutComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app-routing/app-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/app-routing/app-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component.ngfactory */
    "./src/app/header/header.component.ngfactory.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component.ngfactory */
    "./src/app/footer/footer.component.ngfactory.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-footer", [], null, null, null, _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_FooterComponent_0"], _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);

        _ck(_v, 5, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'conFusion';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component.ngfactory */
    "./src/app/home/home.component.ngfactory.js");
    /* harmony import */


    var _menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu/menu.component.ngfactory */
    "./src/app/menu/menu.component.ngfactory.js");
    /* harmony import */


    var _dishdetail_dishdetail_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dishdetail/dishdetail.component.ngfactory */
    "./src/app/dishdetail/dishdetail.component.ngfactory.js");
    /* harmony import */


    var _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about/about.component.ngfactory */
    "./src/app/about/about.component.ngfactory.js");
    /* harmony import */


    var _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact/contact.component.ngfactory */
    "./src/app/contact/contact.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/dialog/typings/index.ngfactory */
    "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
    /* harmony import */


    var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component.ngfactory */
    "./src/app/login/login.component.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_dish_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/dish.service */
    "./src/app/services/dish.service.ts");
    /* harmony import */


    var _services_promotion_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/promotion.service */
    "./src/app/services/promotion.service.ts");
    /* harmony import */


    var _services_leader_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/leader.service */
    "./src/app/services/leader.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./dishdetail/dishdetail.component */
    "./src/app/dishdetail/dishdetail.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./app-routing/app-routing.module */
    "./src/app/app-routing/app-routing.module.ts");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeComponentNgFactory"], _menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MenuComponentNgFactory"], _dishdetail_dishdetail_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DishdetailComponentNgFactory"], _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AboutComponentNgFactory"], _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ContactComponentNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["MatDialogContainerNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["LoginComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_16__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1, p1_0) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["removeStyles"](p0_0, p0_1), p1_0];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_17__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_17__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_dish_service__WEBPACK_IMPORTED_MODULE_25__["DishService"], _services_dish_service__WEBPACK_IMPORTED_MODULE_25__["DishService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_promotion_service__WEBPACK_IMPORTED_MODULE_26__["PromotionService"], _services_promotion_service__WEBPACK_IMPORTED_MODULE_26__["PromotionService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_leader_service__WEBPACK_IMPORTED_MODULE_27__["LeaderService"], _services_leader_service__WEBPACK_IMPORTED_MODULE_27__["LeaderService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_29__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_29__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_30__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_30__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_31__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_31__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () {
        return [[{
          path: "home",
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_39__["HomeComponent"]
        }, {
          path: "menu",
          component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_40__["MenuComponent"]
        }, {
          path: "dishdetail/:id",
          component: _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_41__["DishdetailComponent"]
        }, {
          path: "about",
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_42__["AboutComponent"]
        }, {
          path: "contactus",
          component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_43__["ContactComponent"]
        }, {
          path: "",
          redirectTo: "/home",
          pathMatch: "full"
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_44__["AppRoutingModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_44__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_47__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_47__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_48__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_48__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_49__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_49__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ngfactory.js":
  /*!********************************************************!*\
    !*** ./src/app/contact/contact.component.ngfactory.js ***!
    \********************************************************/

  /*! exports provided: RenderType_ContactComponent, View_ContactComponent_0, View_ContactComponent_Host_0, ContactComponentNgFactory */

  /***/
  function srcAppContactContactComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ContactComponent", function () {
      return RenderType_ContactComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ContactComponent_0", function () {
      return View_ContactComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ContactComponent_Host_0", function () {
      return View_ContactComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponentNgFactory", function () {
      return ContactComponentNgFactory;
    });
    /* harmony import */


    var _contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./contact.component.scss.shim.ngstyle */
    "./src/app/contact/contact.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contact.component */
    "./src/app/contact/contact.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ContactComponent = [_contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ContactComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ContactComponent,
      data: {}
    });

    function View_ContactComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 54, "div", [["class", "container"], ["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact Us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 45, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Location Information"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 41, "div", [["fxLayout", "column"], ["fxLayout.gt-sm", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.gt-sm": [1, "fxLayout.gt-sm"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 35, "div", [["fxFlex", "50"], ["fxFlexOffset", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexOffsetDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexOffsetStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], {
        fxFlexOffset: [0, "fxFlexOffset"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Our Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 16, "address", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 121, Clear Water Bay Road"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Clear Water Bay, Kowloon"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" HONG KONG"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "i", [["class", "fa fa-phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [": +852 1234 5678"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "i", [["class", "fa fa-fax"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [": +852 8765 4321"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "i", [["class", "fa fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [": "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "a", [["href", "mailto:confusion@food.net"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["confusion@food.net"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 3, "a", [["href", "tel:+85212345678"], ["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 0, 0, "i", [["class", "fa fa-phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Call"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "a", [["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 0, "i", [["class", "fa fa-skype"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Skype"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 3, "a", [["href", "mailto:confusion@food.net"], ["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 0, "i", [["class", "fa fa-envelope-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 3, "div", [["fxFlex", "40"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Map of our Location"]))], function (_ck, _v) {
        var currVal_0 = "column";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "10px";

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = "";

        _ck(_v, 4, 0, currVal_2);

        var currVal_3 = "";

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = "column";
        var currVal_5 = "row";

        _ck(_v, 14, 0, currVal_4, currVal_5);

        var currVal_6 = "20px";

        _ck(_v, 16, 0, currVal_6);

        var currVal_7 = "50";

        _ck(_v, 17, 0, currVal_7);

        var currVal_20 = "40";

        _ck(_v, 52, 0, currVal_20);
      }, function (_ck, _v) {
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).tabIndex || 0;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled || null;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled.toString();

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._animationMode === "NoopAnimations";

        _ck(_v, 39, 0, currVal_8, currVal_9, currVal_10, currVal_11);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).tabIndex || 0;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).disabled || null;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).disabled.toString();

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._animationMode === "NoopAnimations";

        _ck(_v, 43, 0, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).tabIndex || 0;
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled || null;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled.toString();

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._animationMode === "NoopAnimations";

        _ck(_v, 47, 0, currVal_16, currVal_17, currVal_18, currVal_19);
      });
    }

    function View_ContactComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ContactComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact", _contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], View_ContactComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/contact/contact.component.scss.shim.ngstyle.js":
  /*!****************************************************************!*\
    !*** ./src/app/contact/contact.component.scss.shim.ngstyle.js ***!
    \****************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppContactContactComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();
    /***/

  },

  /***/
  "./src/app/dishdetail/dishdetail.component.ngfactory.js":
  /*!**************************************************************!*\
    !*** ./src/app/dishdetail/dishdetail.component.ngfactory.js ***!
    \**************************************************************/

  /*! exports provided: RenderType_DishdetailComponent, View_DishdetailComponent_0, View_DishdetailComponent_Host_0, DishdetailComponentNgFactory */

  /***/
  function srcAppDishdetailDishdetailComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DishdetailComponent", function () {
      return RenderType_DishdetailComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DishdetailComponent_0", function () {
      return View_DishdetailComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DishdetailComponent_Host_0", function () {
      return View_DishdetailComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DishdetailComponentNgFactory", function () {
      return DishdetailComponentNgFactory;
    });
    /* harmony import */


    var _dishdetail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dishdetail.component.scss.shim.ngstyle */
    "./src/app/dishdetail/dishdetail.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */
    "./node_modules/@angular/material/card/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/list/typings/index.ngfactory */
    "./node_modules/@angular/material/list/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _dishdetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dishdetail.component */
    "./src/app/dishdetail/dishdetail.component.ts");
    /* harmony import */


    var _services_dish_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../services/dish.service */
    "./src/app/services/dish.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_DishdetailComponent = [_dishdetail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_DishdetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DishdetailComponent,
      data: {}
    });

    function View_DishdetailComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 6, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 4, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 1, "img", [["class", "mat-card-image"], ["mat-card-image", ""]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 10, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "button", [["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["LIKE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "button", [["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["SHARE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "button", [["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.goBack() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["BACK"]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.dish.name));

        _ck(_v, 7, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.dish.image, "");

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.dish.name, "");

        _ck(_v, 9, 0, currVal_1, currVal_2);

        var currVal_3 = _co.dish.description;

        _ck(_v, 14, 0, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).align === "end";

        _ck(_v, 15, 0, currVal_4);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled || null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations";

        _ck(_v, 17, 0, currVal_5, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

        _ck(_v, 20, 0, currVal_7, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled || null;
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._animationMode === "NoopAnimations";

        _ck(_v, 23, 0, currVal_9, currVal_10);
      });
    }

    function View_DishdetailComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "mat-list", [["class", "mat-list"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 5, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleFocus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleBlur() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _icon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, 2, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 5, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleFocus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleBlur() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        _icon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, 2, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 6, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleFocus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleBlur() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        _icon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, 2, ["-- ", " ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](20, 1)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._icon;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._icon;

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = _v.context.$implicit.comment;

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._icon;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._icon;

        _ck(_v, 8, 0, currVal_3, currVal_4);

        var currVal_5 = _v.context.$implicit.rating;

        _ck(_v, 13, 0, currVal_5);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._icon;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._icon;

        _ck(_v, 14, 0, currVal_6, currVal_7);

        var currVal_8 = _v.context.$implicit.author;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 1, _ck(_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _v.context.$implicit.date));

        _ck(_v, 19, 0, currVal_8, currVal_9);
      });
    }

    function View_DishdetailComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "mat-list", [["class", "mat-list"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DishdetailComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.dish.comments;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_DishdetailComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "container"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign.gt-md", "space-around center"], ["fxLayoutGap", "10px"], ["fxLayoutGap.xs", "0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.xs": [1, "fxLayout.xs"],
        "fxLayout.sm": [2, "fxLayout.sm"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"],
        "fxLayoutGap.xs": [1, "fxLayoutGap.xs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        "fxLayoutAlign.gt-md": [0, "fxLayoutAlign.gt-md"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["fxFlex", "40"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DishdetailComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["fxFlex", "40"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comments"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DishdetailComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row";
        var currVal_1 = "column";
        var currVal_2 = "column";

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = "10px";
        var currVal_4 = "0";

        _ck(_v, 4, 0, currVal_3, currVal_4);

        var currVal_5 = "space-around center";

        _ck(_v, 5, 0, currVal_5);

        var currVal_6 = "40";

        _ck(_v, 7, 0, currVal_6);

        var currVal_7 = _co.dish;

        _ck(_v, 9, 0, currVal_7);

        var currVal_8 = "40";

        _ck(_v, 11, 0, currVal_8);

        var currVal_9 = _co.dish;

        _ck(_v, 16, 0, currVal_9);
      }, null);
    }

    function View_DishdetailComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dishdetail", [], null, null, null, View_DishdetailComponent_0, RenderType_DishdetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dishdetail_component__WEBPACK_IMPORTED_MODULE_15__["DishdetailComponent"], [_services_dish_service__WEBPACK_IMPORTED_MODULE_16__["DishService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var DishdetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dishdetail", _dishdetail_component__WEBPACK_IMPORTED_MODULE_15__["DishdetailComponent"], View_DishdetailComponent_Host_0, {
      dish: "dish"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/dishdetail/dishdetail.component.scss.shim.ngstyle.js":
  /*!**********************************************************************!*\
    !*** ./src/app/dishdetail/dishdetail.component.scss.shim.ngstyle.js ***!
    \**********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppDishdetailDishdetailComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/dishdetail/dishdetail.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/dishdetail/dishdetail.component.ts ***!
    \****************************************************/

  /*! exports provided: DishdetailComponent */

  /***/
  function srcAppDishdetailDishdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DishdetailComponent", function () {
      return DishdetailComponent;
    });

    var DishdetailComponent = /*#__PURE__*/function () {
      function DishdetailComponent(dishService, location, route) {
        _classCallCheck(this, DishdetailComponent);

        this.dishService = dishService;
        this.location = location;
        this.route = route;
      }

      _createClass(DishdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.params['id'];
          this.dish = this.dishService.getDish(id);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return DishdetailComponent;
    }();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ngfactory.js":
  /*!******************************************************!*\
    !*** ./src/app/footer/footer.component.ngfactory.js ***!
    \******************************************************/

  /*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */

  /***/
  function srcAppFooterFooterComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function () {
      return RenderType_FooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function () {
      return View_FooterComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function () {
      return View_FooterComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function () {
      return FooterComponentNgFactory;
    });
    /* harmony import */


    var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./footer.component.scss.shim.ngstyle */
    "./src/app/footer/footer.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/list/typings/index.ngfactory */
    "./node_modules/@angular/material/list/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./footer.component */
    "./src/app/footer/footer.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_FooterComponent,
      data: {}
    });

    function View_FooterComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 95, "div", [["class", "container footer"], ["fxLayout", "row wrap"], ["fxLayout.lt-md", "column"], ["fxLayoutAlign", "center center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.lt-md": [1, "fxLayout.lt-md"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 67, "div", [["fxFlex", "100"], ["fxFlex.gt-sm", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"],
        "fxFlex.gt-sm": [1, "fxFlex.gt-sm"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 65, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 42, "div", [["fxFlex", "40"], ["fxFlexOffset", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexOffsetDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexOffsetStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], {
        fxFlexOffset: [0, "fxFlexOffset"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Links"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 37, "mat-list", [["class", "mat-list"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 49152, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 8, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleFocus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleBlur() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _icon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 2, 3, "a", [["mat-button", ""], ["routerLink", "/home"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 8, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._handleFocus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._handleBlur() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        _icon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 2, 3, "a", [["mat-button", ""], ["routerLink", "/about"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 0, 8, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleFocus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleBlur() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        _icon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, 2, 3, "a", [["mat-button", ""], ["routerLink", "/menu"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 0, 8, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._handleFocus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._handleBlur() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        _icon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 2, 3, "a", [["mat-button", ""], ["routerLink", "/contactus"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 20, "div", [["fxFlex", "55"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Our Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 16, "address", [["style", "size: 80%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 121, Clear Water Bay Road"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Clear Water Bay, Kowloon"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" HONG KONG"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 0, "i", [["class", "fa fa-phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [": +852 1234 5678"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 0, "i", [["class", "fa fa-fax"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [": +852 8765 4321"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 0, "i", [["class", "fa fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [": "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 1, "a", [["href", "mailto:confusion@food.net"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["confusion@food.net"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 20, "div", [["fxFlex", "100"], ["fxFlex.gt-sm", "45"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"],
        "fxFlex.gt-sm": [1, "fxFlex.gt-sm"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 18, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 2, "a", [["class", "btn-google-plus"], ["href", "http://google.com/+"], ["mat-icon-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, 0, 0, "i", [["class", "fa fa-google-plus fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 2, "a", [["class", "btn-facebook"], ["href", "http://www.facebook.com/profile.php?id="], ["mat-icon-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, 0, 0, "i", [["class", "fa fa-facebook fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 2, "a", [["class", "btn-linkedin"], ["href", "http://www.linkedin.com/in/"], ["mat-icon-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, 0, 0, "i", [["class", "fa fa-linkedin fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 2, "a", [["class", "btn-twitter"], ["href", "http://twitter.com/"], ["mat-icon-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, 0, 0, "i", [["class", "fa fa-twitter fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 2, "a", [["class", "btn-youtube"], ["href", "http://youtube.com/"], ["mat-icon-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, 0, 0, "i", [["class", "fa fa-youtube fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 2, "a", [["class", "btn-mail"], ["href", "mailto:"], ["mat-icon-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, 0, 0, "i", [["class", "fa fa-envelope-o fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xA9 Copyright 2018 Ristorante Con Fusion"]))], function (_ck, _v) {
        var currVal_0 = "row wrap";
        var currVal_1 = "column";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_2 = "10px";

        _ck(_v, 2, 0, currVal_2);

        var currVal_3 = "center center";

        _ck(_v, 3, 0, currVal_3);

        var currVal_4 = "100";
        var currVal_5 = "50";

        _ck(_v, 5, 0, currVal_4, currVal_5);

        var currVal_6 = "row";

        _ck(_v, 7, 0, currVal_6);

        var currVal_7 = "20px";

        _ck(_v, 9, 0, currVal_7);

        var currVal_8 = "40";

        _ck(_v, 10, 0, currVal_8);

        var currVal_17 = "/home";

        _ck(_v, 22, 0, currVal_17);

        var currVal_26 = "/about";

        _ck(_v, 31, 0, currVal_26);

        var currVal_35 = "/menu";

        _ck(_v, 40, 0, currVal_35);

        var currVal_44 = "/contactus";

        _ck(_v, 49, 0, currVal_44);

        var currVal_45 = "55";

        _ck(_v, 52, 0, currVal_45);

        var currVal_46 = "100";
        var currVal_47 = "45";

        _ck(_v, 73, 0, currVal_46, currVal_47);
      }, function (_ck, _v) {
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._icon;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._icon;

        _ck(_v, 15, 0, currVal_9, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).tabIndex || 0;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled.toString();

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).target;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).href;

        _ck(_v, 20, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._icon;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._icon;

        _ck(_v, 24, 0, currVal_18, currVal_19);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).tabIndex || 0;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled || null;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled.toString();

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._animationMode === "NoopAnimations";

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).target;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).href;

        _ck(_v, 29, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._icon;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._icon;

        _ck(_v, 33, 0, currVal_27, currVal_28);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).tabIndex || 0;
        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).disabled || null;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).disabled.toString();

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._animationMode === "NoopAnimations";

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).target;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).href;

        _ck(_v, 38, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._icon;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._icon;

        _ck(_v, 42, 0, currVal_36, currVal_37);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).tabIndex || 0;
        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled || null;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled.toString();

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._animationMode === "NoopAnimations";

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).target;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).href;

        _ck(_v, 47, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43);

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).tabIndex || 0;
        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).disabled || null;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).disabled.toString();

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._animationMode === "NoopAnimations";

        _ck(_v, 75, 0, currVal_48, currVal_49, currVal_50, currVal_51);

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).tabIndex || 0;
        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).disabled || null;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).disabled.toString();

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._animationMode === "NoopAnimations";

        _ck(_v, 78, 0, currVal_52, currVal_53, currVal_54, currVal_55);

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).tabIndex || 0;
        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).disabled || null;

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).disabled.toString();

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._animationMode === "NoopAnimations";

        _ck(_v, 81, 0, currVal_56, currVal_57, currVal_58, currVal_59);

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).tabIndex || 0;
        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).disabled || null;

        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).disabled.toString();

        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._animationMode === "NoopAnimations";

        _ck(_v, 84, 0, currVal_60, currVal_61, currVal_62, currVal_63);

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).tabIndex || 0;
        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).disabled || null;

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).disabled.toString();

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._animationMode === "NoopAnimations";

        _ck(_v, 87, 0, currVal_64, currVal_65, currVal_66, currVal_67);

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).tabIndex || 0;
        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).disabled || null;

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).disabled.toString();

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._animationMode === "NoopAnimations";

        _ck(_v, 90, 0, currVal_68, currVal_69, currVal_70, currVal_71);
      });
    }

    function View_FooterComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/footer/footer.component.scss.shim.ngstyle.js":
  /*!**************************************************************!*\
    !*** ./src/app/footer/footer.component.scss.shim.ngstyle.js ***!
    \**************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppFooterFooterComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".footer[_ngcontent-%COMP%] {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px;\n}\n\n.btn-facebook[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #3b5998 !important;\n}\n\n.btn-google-plus[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #dd4b39 !important;\n}\n\n.btn-youtube[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #ff4b39 !important;\n}\n\n.btn-linkedin[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #007bb6 !important;\n}\n\n.btn-twitter[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #55acee !important;\n}\n\n.btn-mail[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #512DA8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxEaGFyYV9EZXZlbG9wZW1lbnRcXEFuZ3VsYXJfQ29uZnVzaW9uXFxjb25GdXNpb25fVjIvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0kseUJBUmM7RUFHZCxnQkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FEV0E7RUFBZSxzQkFBQTtFQUFzQixvQ0FBQTtBQ05yQzs7QURPQTtFQUFpQixzQkFBQTtFQUFxQixvQ0FBQTtBQ0Z0Qzs7QURHQTtFQUFhLHNCQUFBO0VBQXFCLG9DQUFBO0FDRWxDOztBRERBO0VBQWMsc0JBQUE7RUFBcUIsb0NBQUE7QUNNbkM7O0FETEE7RUFBYSxzQkFBQTtFQUFxQixvQ0FBQTtBQ1VsQzs7QURUQTtFQUFVLHNCQUFBO0VBQXFCLG9DQUFBO0FDYy9CIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsdC1ncmF5OiAjZGRkO1xyXG4kYmFja2dyb3VuZC1kYXJrOiAjNTEyREE4O1xyXG4kYmFja2dyb3VuZC1saWdodDogIzk1NzVDRDtcclxuJGJhY2tncm91bmQtcGFsZTogI0QxQzRFOTtcclxuXHJcbkBtaXhpbiB6ZXJvLW1hcmdpbigkcGFkLXVwLWRvd24sICRwYWQtbGVmdC1yaWdodCkge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6ICRwYWQtdXAtZG93biAkcGFkLWxlZnQtcmlnaHQ7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1wYWxlO1xyXG4gICAgQGluY2x1ZGUgemVyby1tYXJnaW4oMjBweCwgMHB4KTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7IGJhY2tncm91bmQtY29sb3I6IzNiNTk5OCFpbXBvcnRhbnQ7fVxyXG4uYnRuLWdvb2dsZS1wbHVze2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2RkNGIzOSFpbXBvcnRhbnQ7fVxyXG4uYnRuLXlvdXR1YmV7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmY0YjM5IWltcG9ydGFudDt9XHJcbi5idG4tbGlua2VkaW57Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMDA3YmI2IWltcG9ydGFudDt9XHJcbi5idG4tdHdpdHRlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM1NWFjZWUhaW1wb3J0YW50O31cclxuLmJ0bi1tYWlse2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzUxMkRBOCFpbXBvcnRhbnQ7fSIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFDNEU5O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLmJ0bi1mYWNlYm9vayB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1nb29nbGUtcGx1cyB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzkgIWltcG9ydGFudDtcbn1cblxuLmJ0bi15b3V0dWJlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGIzOSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWxpbmtlZGluIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JiNiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXR3aXR0ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tbWFpbCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTJEQTggIWltcG9ydGFudDtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();
    /***/

  },

  /***/
  "./src/app/header/header.component.ngfactory.js":
  /*!******************************************************!*\
    !*** ./src/app/header/header.component.ngfactory.js ***!
    \******************************************************/

  /*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */

  /***/
  function srcAppHeaderHeaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function () {
      return RenderType_HeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function () {
      return View_HeaderComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function () {
      return View_HeaderComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function () {
      return HeaderComponentNgFactory;
    });
    /* harmony import */


    var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./header.component.scss.shim.ngstyle */
    "./src/app/header/header.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */
    "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HeaderComponent,
      data: {}
    });

    function View_HeaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 41, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], {
        color: [0, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _toolbarRows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["height", "30"], ["src", "/assets/images/logo.png"], ["width", "41"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 7, "a", [["mat-button", ""], ["routerLink", "/home"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 0, "span", [["class", "fa fa-home fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 7, "a", [["mat-button", ""], ["routerLink", "/about"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 0, "span", [["class", "fa fa-info fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 7, "a", [["mat-button", ""], ["routerLink", "/menu"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, [[7, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 0, "span", [["class", "fa fa-list fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 7, "a", [["mat-button", ""], ["routerLink", "/contactus"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, [[9, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 0, 0, "span", [["class", "fa fa-address-card fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 0, "span", [["class", "flex-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, 0, 3, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.openLoginForm() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 0, "span", [["class", "fa fa-sign-in fa-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 14, "div", [["class", "container jumbotron"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign.gt-sm", "center center"], ["fxLayoutAlign.sm", "start center"], ["fxLayoutAlign.xs", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.xs": [1, "fxLayout.xs"],
        "fxLayout.sm": [2, "fxLayout.sm"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        "fxLayoutAlign.xs": [0, "fxLayoutAlign.xs"],
        "fxLayoutAlign.sm": [1, "fxLayoutAlign.sm"],
        "fxLayoutAlign.gt-sm": [2, "fxLayoutAlign.gt-sm"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 5, "div", [["fxFlex", ""], ["fxFlex.gt-sm", "50%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"],
        "fxFlex.gt-sm": [1, "fxFlex.gt-sm"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ristorante Con Fusion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "div", [["fxFlex", ""], ["fxFlex.gt-sm", "20%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"],
        "fxFlex.gt-sm": [1, "fxFlex.gt-sm"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 0, "img", [["alt", "Logo"], ["src", "/assets/images/logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null)], function (_ck, _v) {
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);

        var currVal_9 = "/home";

        _ck(_v, 7, 0, currVal_9);

        var currVal_10 = "active";

        _ck(_v, 8, 0, currVal_10);

        var currVal_17 = "/about";

        _ck(_v, 15, 0, currVal_17);

        var currVal_18 = "active";

        _ck(_v, 16, 0, currVal_18);

        var currVal_25 = "/menu";

        _ck(_v, 23, 0, currVal_25);

        var currVal_26 = "active";

        _ck(_v, 24, 0, currVal_26);

        var currVal_33 = "/contactus";

        _ck(_v, 31, 0, currVal_33);

        var currVal_34 = "active";

        _ck(_v, 32, 0, currVal_34);

        var currVal_39 = "row";
        var currVal_40 = "column";
        var currVal_41 = "column";

        _ck(_v, 43, 0, currVal_39, currVal_40, currVal_41);

        var currVal_42 = "10px";

        _ck(_v, 44, 0, currVal_42);

        var currVal_43 = "start center";
        var currVal_44 = "start center";
        var currVal_45 = "center center";

        _ck(_v, 45, 0, currVal_43, currVal_44, currVal_45);

        var currVal_46 = "";
        var currVal_47 = "50%";

        _ck(_v, 47, 0, currVal_46, currVal_47);

        var currVal_48 = "";
        var currVal_49 = "20%";

        _ck(_v, 53, 0, currVal_48, currVal_49);

        var currVal_50 = "";

        _ck(_v, 56, 0, currVal_50);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).tabIndex || 0;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled.toString();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations";

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).target;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).href;

        _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).tabIndex || 0;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled || null;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled.toString();

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations";

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).target;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).href;

        _ck(_v, 13, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).tabIndex || 0;
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).disabled || null;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).disabled.toString();

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._animationMode === "NoopAnimations";

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).target;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).href;

        _ck(_v, 21, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).tabIndex || 0;
        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled || null;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled.toString();

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._animationMode === "NoopAnimations";

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).target;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).href;

        _ck(_v, 29, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).tabIndex || 0;
        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).disabled || null;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).disabled.toString();

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._animationMode === "NoopAnimations";

        _ck(_v, 38, 0, currVal_35, currVal_36, currVal_37, currVal_38);
      });
    }

    function View_HeaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/header/header.component.scss.shim.ngstyle.js":
  /*!**************************************************************!*\
    !*** ./src/app/header/header.component.scss.shim.ngstyle.js ***!
    \**************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppHeaderHeaderComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".jumbotron[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #4527A0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxEaGFyYV9EZXZlbG9wZW1lbnRcXEFuZ3VsYXJfQ29uZnVzaW9uXFxjb25GdXNpb25fVjIvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBSkksZ0JBQUE7RUFDQSxrQkFBQTtFQUtBLG1CQVZlO0VBV2Ysa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVBO0VBQ0ksbUJBYmtCO0FDTXRCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsdC1ncmF5OiAjZGRkO1xyXG4kYmFja2dyb3VuZC1kYXJrOiAjNTEyREE4O1xyXG4kYmFja2dyb3VuZC1saWdodDogIzk1NzVDRDtcclxuJGJhY2tncm91bmQtcGFsZTogI0QxQzRFOTtcclxuJGJhY2tncm91bmQtbW9yZWRhcms6ICM0NTI3QTA7XHJcbkBtaXhpbiB6ZXJvLW1hcmdpbigkcGFkLXVwLWRvd24sICRwYWQtbGVmdC1yaWdodCkge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6ICRwYWQtdXAtZG93biAkcGFkLWxlZnQtcmlnaHQ7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgQGluY2x1ZGUgemVyby1tYXJnaW4oNzBweCwzMHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWxpZ2h0IDtcclxuICAgIGNvbG9yOmZsb3JhbHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1tb3JlZGFyaztcclxufSIsIi5qdW1ib3Ryb24ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiA3MHB4IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM5NTc1Q0Q7XG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgbWluLWhlaWdodDogMTUwcHg7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNDUyN0EwO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/login/login.component.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(dialog) {
        _classCallCheck(this, HeaderComponent);

        this.dialog = dialog;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openLoginForm",
        value: function openLoginForm() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
          this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], {
            width: '500px',
            height: '450px'
          });
        }
      }]);

      return HeaderComponent;
    }();
    /***/

  },

  /***/
  "./src/app/home/home.component.ngfactory.js":
  /*!**************************************************!*\
    !*** ./src/app/home/home.component.ngfactory.js ***!
    \**************************************************/

  /*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */

  /***/
  function srcAppHomeHomeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function () {
      return RenderType_HomeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function () {
      return View_HomeComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function () {
      return View_HomeComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function () {
      return HomeComponentNgFactory;
    });
    /* harmony import */


    var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component.scss.shim.ngstyle */
    "./src/app/home/home.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */
    "./node_modules/@angular/material/card/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _services_dish_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/dish.service */
    "./src/app/services/dish.service.ts");
    /* harmony import */


    var _services_promotion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/promotion.service */
    "./src/app/services/promotion.service.ts");
    /* harmony import */


    var _services_leader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/leader.service */
    "./src/app/services/leader.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HomeComponent,
      data: {}
    });

    function View_HomeComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "mat-card", [["class", "mat-card"], ["fxFlex", ""]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 8, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "div", [["class", "mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 4, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "img", [["class", "mat-card-image"], ["mat-card-image", ""]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", " "]))], function (_ck, _v) {
        var currVal_0 = "";

        _ck(_v, 1, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.dish.name));

        _ck(_v, 10, 0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.dish.image, "");

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.dish.name, "");

        _ck(_v, 12, 0, currVal_2, currVal_3);

        var currVal_4 = _co.dish.description;

        _ck(_v, 17, 0, currVal_4);
      });
    }

    function View_HomeComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "mat-card", [["class", "mat-card"], ["fxFlex", ""]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 8, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "div", [["class", "mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 4, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "img", [["class", "mat-card-image"], ["mat-card-image", ""]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", " "]))], function (_ck, _v) {
        var currVal_0 = "";

        _ck(_v, 1, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.promotion.name));

        _ck(_v, 10, 0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.promotion.image, "");

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.promotion.name, "");

        _ck(_v, 12, 0, currVal_2, currVal_3);

        var currVal_4 = _co.promotion.description;

        _ck(_v, 17, 0, currVal_4);
      });
    }

    function View_HomeComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "mat-card", [["class", "mat-card"], ["fxFlex", ""]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 8, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "div", [["class", "mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 4, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "img", [["class", "mat-card-image"], ["mat-card-image", ""]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", " "]))], function (_ck, _v) {
        var currVal_0 = "";

        _ck(_v, 1, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.leader.name));

        _ck(_v, 10, 0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.leader.image, "");

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.leader.name, "");

        _ck(_v, 12, 0, currVal_2, currVal_3);

        var currVal_4 = _co.leader.description;

        _ck(_v, 17, 0, currVal_4);
      });
    }

    function View_HomeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "container"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign.gt-md", "space-around center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.xs": [1, "fxLayout.xs"],
        "fxLayout.sm": [2, "fxLayout.sm"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        "fxLayoutAlign.gt-md": [0, "fxLayoutAlign.gt-md"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row";
        var currVal_1 = "column";
        var currVal_2 = "column";

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = "10px";

        _ck(_v, 3, 0, currVal_3);

        var currVal_4 = "space-around center";

        _ck(_v, 4, 0, currVal_4);

        var currVal_5 = _co.dish;

        _ck(_v, 6, 0, currVal_5);

        var currVal_6 = _co.promotion;

        _ck(_v, 8, 0, currVal_6);

        var currVal_7 = _co.leader;

        _ck(_v, 10, 0, currVal_7);
      }, null);
    }

    function View_HomeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], [_services_dish_service__WEBPACK_IMPORTED_MODULE_9__["DishService"], _services_promotion_service__WEBPACK_IMPORTED_MODULE_10__["PromotionService"], _services_leader_service__WEBPACK_IMPORTED_MODULE_11__["LeaderService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/home/home.component.scss.shim.ngstyle.js":
  /*!**********************************************************!*\
    !*** ./src/app/home/home.component.scss.shim.ngstyle.js ***!
    \**********************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppHomeHomeComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(dishservice, promotionservice, leaderService) {
        _classCallCheck(this, HomeComponent);

        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderService = leaderService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dish = this.dishservice.getFeaturedDish();
          this.promotion = this.promotionservice.getFeaturedPromotion();
          this.leader = this.leaderService.getFeaturedLeader();
        }
      }]);

      return HomeComponent;
    }();
    /***/

  },

  /***/
  "./src/app/login/login.component.ngfactory.js":
  /*!****************************************************!*\
    !*** ./src/app/login/login.component.ngfactory.js ***!
    \****************************************************/

  /*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */

  /***/
  function srcAppLoginLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () {
      return RenderType_LoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () {
      return View_LoginComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () {
      return View_LoginComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () {
      return LoginComponentNgFactory;
    });
    /* harmony import */


    var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component.scss.shim.ngstyle */
    "./src/app/login/login.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */
    "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_LoginComponent,
      data: {}
    });

    function View_LoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], {
        color: [0, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _toolbarRows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Login\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 0, "span", [["class", "flex-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 3, "button", [["mat-button", ""], ["mat-dialog-close", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).dialogResult) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], {
        dialogResult: [0, "dialogResult"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\xD7"]))], function (_ck, _v) {
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);

        var currVal_6 = "";

        _ck(_v, 7, 0, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations";

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ariaLabel;

        _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5);
      });
    }

    function View_LoginComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/login/login.component.scss.shim.ngstyle.js":
  /*!************************************************************!*\
    !*** ./src/app/login/login.component.scss.shim.ngstyle.js ***!
    \************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppLoginLoginComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(dialogRef) {
        _classCallCheck(this, LoginComponent);

        this.dialogRef = dialogRef;
        this.user = {
          username: '',
          password: '',
          remember: false
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log('User: ', this.user);
          this.dialogRef.close();
        }
      }]);

      return LoginComponent;
    }();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ngfactory.js":
  /*!**************************************************!*\
    !*** ./src/app/menu/menu.component.ngfactory.js ***!
    \**************************************************/

  /*! exports provided: RenderType_MenuComponent, View_MenuComponent_0, View_MenuComponent_Host_0, MenuComponentNgFactory */

  /***/
  function srcAppMenuMenuComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MenuComponent", function () {
      return RenderType_MenuComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MenuComponent_0", function () {
      return View_MenuComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MenuComponent_Host_0", function () {
      return View_MenuComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponentNgFactory", function () {
      return MenuComponentNgFactory;
    });
    /* harmony import */


    var _menu_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menu.component.scss.shim.ngstyle */
    "./src/app/menu/menu.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/grid-list/typings/index.ngfactory */
    "./node_modules/@angular/material/grid-list/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _dishdetail_dishdetail_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../dishdetail/dishdetail.component.ngfactory */
    "./src/app/dishdetail/dishdetail.component.ngfactory.js");
    /* harmony import */


    var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../dishdetail/dishdetail.component */
    "./src/app/dishdetail/dishdetail.component.ts");
    /* harmony import */


    var _services_dish_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/dish.service */
    "./src/app/services/dish.service.ts");
    /* harmony import */


    var _menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./menu.component */
    "./src/app/menu/menu.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_MenuComponent = [_menu_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_MenuComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_MenuComponent,
      data: {}
    });

    function View_MenuComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "mat-grid-tile", [["class", "mat-grid-tile"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatGridTile_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatGridTile"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[1, 4]], 0, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 0, "img", [["height", "200px"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 6, "mat-grid-tile-footer", [["class", "mat-grid-tile-footer"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatGridTileText_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatGridTileText"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1097728, null, 1, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTileText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTileFooterCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 2, 2, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1)], function (_ck, _v) {
        var currVal_0 = _ck(_v, 3, 0, "/dishdetail", _v.context.$implicit.id);

        _ck(_v, 2, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.image, "");

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.name, "");

        _ck(_v, 4, 0, currVal_1, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.name));

        _ck(_v, 10, 0, currVal_3);
      });
    }

    function View_MenuComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "div", [["class", "container"], ["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "mat-grid-list", [["class", "mat-grid-list"], ["cols", "2"], ["rowHeight", "200px"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatGridList_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatGridList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 2211840, null, 1, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]]], {
        cols: [0, "cols"],
        rowHeight: [1, "rowHeight"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _tiles: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MenuComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "app-dishdetail", [], null, null, null, _dishdetail_dishdetail_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DishdetailComponent_0"], _dishdetail_dishdetail_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DishdetailComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_10__["DishdetailComponent"], [_services_dish_service__WEBPACK_IMPORTED_MODULE_11__["DishService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]], {
        dish: [0, "dish"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "column";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = "10px";

        _ck(_v, 3, 0, currVal_1);

        var currVal_2 = "";

        _ck(_v, 5, 0, currVal_2);

        var currVal_3 = "";

        _ck(_v, 11, 0, currVal_3);

        var currVal_4 = "2";
        var currVal_5 = "200px";

        _ck(_v, 13, 0, currVal_4, currVal_5);

        var currVal_6 = _co.dishes;

        _ck(_v, 16, 0, currVal_6);

        var currVal_7 = _co.selectedDish;

        _ck(_v, 18, 0, currVal_7);
      }, null);
    }

    function View_MenuComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-menu", [], null, null, null, View_MenuComponent_0, RenderType_MenuComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"], [_services_dish_service__WEBPACK_IMPORTED_MODULE_11__["DishService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var MenuComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-menu", _menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"], View_MenuComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/menu/menu.component.scss.shim.ngstyle.js":
  /*!**********************************************************!*\
    !*** ./src/app/menu/menu.component.scss.shim.ngstyle.js ***!
    \**********************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppMenuMenuComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(dishService) {
        _classCallCheck(this, MenuComponent);

        this.dishService = dishService;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dishes = this.dishService.getDishes();
        }
      }, {
        key: "onSelect",
        value: function onSelect(dish) {
          this.selectedDish = dish;
        }
      }]);

      return MenuComponent;
    }();
    /***/

  },

  /***/
  "./src/app/services/dish.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/dish.service.ts ***!
    \******************************************/

  /*! exports provided: DishService */

  /***/
  function srcAppServicesDishServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DishService", function () {
      return DishService;
    });
    /* harmony import */


    var _shared_dishes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/dishes */
    "./src/app/shared/dishes.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DishService = /*#__PURE__*/function () {
      function DishService() {
        _classCallCheck(this, DishService);
      }

      _createClass(DishService, [{
        key: "getDishes",
        value: function getDishes() {
          return _shared_dishes__WEBPACK_IMPORTED_MODULE_0__["DISHES"];
        }
      }, {
        key: "getDish",
        value: function getDish(id) {
          return _shared_dishes__WEBPACK_IMPORTED_MODULE_0__["DISHES"].filter(function (dish) {
            return dish.id === id;
          })[0];
        }
      }, {
        key: "getFeaturedDish",
        value: function getFeaturedDish() {
          return _shared_dishes__WEBPACK_IMPORTED_MODULE_0__["DISHES"].filter(function (dish) {
            return dish.featured;
          })[0];
        }
      }]);

      return DishService;
    }();

    DishService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function DishService_Factory() {
        return new DishService();
      },
      token: DishService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/leader.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/leader.service.ts ***!
    \********************************************/

  /*! exports provided: LeaderService */

  /***/
  function srcAppServicesLeaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderService", function () {
      return LeaderService;
    });
    /* harmony import */


    var _shared_Leaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/Leaders */
    "./src/app/shared/Leaders.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LeaderService = /*#__PURE__*/function () {
      function LeaderService() {
        _classCallCheck(this, LeaderService);
      }

      _createClass(LeaderService, [{
        key: "getLeaders",
        value: function getLeaders() {
          return _shared_Leaders__WEBPACK_IMPORTED_MODULE_0__["LEADERS"];
        }
      }, {
        key: "getFeaturedLeader",
        value: function getFeaturedLeader() {
          return _shared_Leaders__WEBPACK_IMPORTED_MODULE_0__["LEADERS"].filter(function (leader) {
            return leader.featured;
          })[0];
        }
      }]);

      return LeaderService;
    }();

    LeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function LeaderService_Factory() {
        return new LeaderService();
      },
      token: LeaderService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/promotion.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/promotion.service.ts ***!
    \***********************************************/

  /*! exports provided: PromotionService */

  /***/
  function srcAppServicesPromotionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromotionService", function () {
      return PromotionService;
    });
    /* harmony import */


    var _shared_promotions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/promotions */
    "./src/app/shared/promotions.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PromotionService = /*#__PURE__*/function () {
      function PromotionService() {
        _classCallCheck(this, PromotionService);
      }

      _createClass(PromotionService, [{
        key: "getPromotions",
        value: function getPromotions() {
          return _shared_promotions__WEBPACK_IMPORTED_MODULE_0__["PROMOTIONS"];
        }
      }, {
        key: "getPromotion",
        value: function getPromotion(id) {
          return _shared_promotions__WEBPACK_IMPORTED_MODULE_0__["PROMOTIONS"].filter(function (promo) {
            return promo.id === id;
          })[0];
        }
      }, {
        key: "getFeaturedPromotion",
        value: function getFeaturedPromotion() {
          return _shared_promotions__WEBPACK_IMPORTED_MODULE_0__["PROMOTIONS"].filter(function (promotion) {
            return promotion.featured;
          })[0];
        }
      }]);

      return PromotionService;
    }();

    PromotionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function PromotionService_Factory() {
        return new PromotionService();
      },
      token: PromotionService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/shared/Leaders.ts":
  /*!***********************************!*\
    !*** ./src/app/shared/Leaders.ts ***!
    \***********************************/

  /*! exports provided: LEADERS */

  /***/
  function srcAppSharedLeadersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LEADERS", function () {
      return LEADERS;
    });

    var LEADERS = [{
      id: '0',
      name: 'Peter Pan',
      image: '../assets/images/alberto.png',
      designation: 'Chief Epicurious Officer',
      abbr: 'CEO',
      featured: false,
      // tslint:disable-next-line:max-line-length
      description: 'Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother\'s wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.'
    }, {
      id: '1',
      name: 'Dhanasekaran Witherspoon',
      image: '../assets/images/alberto.png',
      designation: 'Chief Food Officer',
      abbr: 'CFO',
      featured: false,
      // tslint:disable-next-line:max-line-length
      description: 'Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!'
    }, {
      id: '2',
      name: 'Agumbe Tang',
      image: '/assets/images/alberto.png',
      designation: 'Chief Taste Officer',
      abbr: 'CTO',
      featured: false,
      // tslint:disable-next-line:max-line-length
      description: 'Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.'
    }, {
      id: '3',
      name: 'Alberto Somayya',
      image: '/assets/images/alberto.png',
      designation: 'Executive Chef',
      abbr: 'EC',
      featured: true,
      // tslint:disable-next-line:max-line-length
      description: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!'
    }];
    /***/
  },

  /***/
  "./src/app/shared/dishes.ts":
  /*!**********************************!*\
    !*** ./src/app/shared/dishes.ts ***!
    \**********************************/

  /*! exports provided: DISHES */

  /***/
  function srcAppSharedDishesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DISHES", function () {
      return DISHES;
    });

    var DISHES = [{
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comments: [{
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
      }, {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
      }, {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
      }, {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
      }, {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
      }]
    }, {
      id: '1',
      name: 'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
      comments: [{
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
      }, {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
      }, {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
      }, {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
      }, {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
      }]
    }, {
      id: '2',
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
      comments: [{
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
      }, {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
      }, {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
      }, {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
      }, {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
      }]
    }, {
      id: '3',
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
      comments: [{
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
      }, {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
      }, {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
      }, {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
      }, {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/shared/promotions.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/promotions.ts ***!
    \**************************************/

  /*! exports provided: PROMOTIONS */

  /***/
  function srcAppSharedPromotionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PROMOTIONS", function () {
      return PROMOTIONS;
    });

    var PROMOTIONS = [{
      id: '0',
      name: 'Weekend Grand Buffet',
      image: '/assets/images/buffet.png',
      label: 'New',
      price: '19.99',
      featured: true,
      // tslint:disable-next-line:max-line-length
      description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Dhara_Developement\Angular_Confusion\conFusion_V2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map