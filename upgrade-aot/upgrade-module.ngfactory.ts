/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../upgrade-module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from '@angular/upgrade/static';
import * as import5 from '@angular/forms';
import * as import6 from '../upgrade-pub-sub.service';
import * as import7 from './components/algorithms/algorithms.ngfactory';
import * as import8 from './components/insertion-sort/insertion-sort.ngfactory';
import * as import9 from './components/survey/survey-demo.ngfactory';
import * as import10 from './components/survey/survey.ngfactory';
import * as import11 from './components/text-editor/text-editor.ngfactory';
import * as import12 from './message.component.ngfactory';
class AngularModuleInjector extends import0.ɵNgModuleInjector<import1.AngularModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _APP_INITIALIZER_2:any[];
  _ApplicationInitStatus_3:import0.ApplicationInitStatus;
  _ɵf_4:import0.ɵf;
  _ApplicationRef_5:any;
  _ApplicationModule_6:import0.ApplicationModule;
  _BrowserModule_7:import3.BrowserModule;
  _UpgradeModule_8:import4.UpgradeModule;
  _ɵba_9:import5.ɵba;
  _ReactiveFormsModule_10:import5.ReactiveFormsModule;
  _AngularModule_11:import1.AngularModule;
  __LOCALE_ID_12:any;
  __NgLocalization_13:import2.NgLocaleLocalization;
  __Compiler_14:import0.Compiler;
  __APP_ID_15:any;
  __IterableDiffers_16:any;
  __KeyValueDiffers_17:any;
  __DomSanitizer_18:import3.ɵe;
  __Sanitizer_19:any;
  __HAMMER_GESTURE_CONFIG_20:import3.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_21:any[];
  __EventManager_22:import3.EventManager;
  __ɵDomSharedStylesHost_23:import3.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_24:import3.ɵDomRendererFactory2;
  __RendererFactory2_25:any;
  __ɵSharedStylesHost_26:any;
  __Testability_27:import0.Testability;
  __Meta_28:import3.Meta;
  __Title_29:import3.Title;
  ___injector_30:any;
  ___rootScope_31:any;
  ___compile_32:any;
  ___parse_33:any;
  __FormBuilder_34:import5.FormBuilder;
  __ɵi_35:import5.ɵi;
  __UpgradePubSubService_36:import6.UpgradePubSubService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import7.AlgorithmsNgFactory,
      import8.InsertionSortNgFactory,
      import9.SurveyDemoNgFactory,
      import10.SurveyNgFactory,
      import11.TextEditorNgFactory,
      import12.MessageComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _LOCALE_ID_12():any {
    if ((this.__LOCALE_ID_12 == null)) { (this.__LOCALE_ID_12 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_12;
  }
  get _NgLocalization_13():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_13 == null)) { (this.__NgLocalization_13 = new import2.NgLocaleLocalization(this._LOCALE_ID_12)); }
    return this.__NgLocalization_13;
  }
  get _Compiler_14():import0.Compiler {
    if ((this.__Compiler_14 == null)) { (this.__Compiler_14 = new import0.Compiler()); }
    return this.__Compiler_14;
  }
  get _APP_ID_15():any {
    if ((this.__APP_ID_15 == null)) { (this.__APP_ID_15 = import0.ɵg()); }
    return this.__APP_ID_15;
  }
  get _IterableDiffers_16():any {
    if ((this.__IterableDiffers_16 == null)) { (this.__IterableDiffers_16 = import0.ɵl()); }
    return this.__IterableDiffers_16;
  }
  get _KeyValueDiffers_17():any {
    if ((this.__KeyValueDiffers_17 == null)) { (this.__KeyValueDiffers_17 = import0.ɵm()); }
    return this.__KeyValueDiffers_17;
  }
  get _DomSanitizer_18():import3.ɵe {
    if ((this.__DomSanitizer_18 == null)) { (this.__DomSanitizer_18 = new import3.ɵe(this.parent.get(import3.DOCUMENT))); }
    return this.__DomSanitizer_18;
  }
  get _Sanitizer_19():any {
    if ((this.__Sanitizer_19 == null)) { (this.__Sanitizer_19 = this._DomSanitizer_18); }
    return this.__Sanitizer_19;
  }
  get _HAMMER_GESTURE_CONFIG_20():import3.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) { (this.__HAMMER_GESTURE_CONFIG_20 = new import3.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_20;
  }
  get _EVENT_MANAGER_PLUGINS_21():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) { (this.__EVENT_MANAGER_PLUGINS_21 = [
      new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT),this._HAMMER_GESTURE_CONFIG_20)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_21;
  }
  get _EventManager_22():import3.EventManager {
    if ((this.__EventManager_22 == null)) { (this.__EventManager_22 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(import0.NgZone))); }
    return this.__EventManager_22;
  }
  get _ɵDomSharedStylesHost_23():import3.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_23 == null)) { (this.__ɵDomSharedStylesHost_23 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_23;
  }
  get _ɵDomRendererFactory2_24():import3.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_24 == null)) { (this.__ɵDomRendererFactory2_24 = new import3.ɵDomRendererFactory2(this._EventManager_22,this._ɵDomSharedStylesHost_23)); }
    return this.__ɵDomRendererFactory2_24;
  }
  get _RendererFactory2_25():any {
    if ((this.__RendererFactory2_25 == null)) { (this.__RendererFactory2_25 = this._ɵDomRendererFactory2_24); }
    return this.__RendererFactory2_25;
  }
  get _ɵSharedStylesHost_26():any {
    if ((this.__ɵSharedStylesHost_26 == null)) { (this.__ɵSharedStylesHost_26 = this._ɵDomSharedStylesHost_23); }
    return this.__ɵSharedStylesHost_26;
  }
  get _Testability_27():import0.Testability {
    if ((this.__Testability_27 == null)) { (this.__Testability_27 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_27;
  }
  get _Meta_28():import3.Meta {
    if ((this.__Meta_28 == null)) { (this.__Meta_28 = new import3.Meta(this.parent.get(import3.DOCUMENT))); }
    return this.__Meta_28;
  }
  get _Title_29():import3.Title {
    if ((this.__Title_29 == null)) { (this.__Title_29 = new import3.Title(this.parent.get(import3.DOCUMENT))); }
    return this.__Title_29;
  }
  get __injector_30():any {
    if ((this.___injector_30 == null)) { (this.___injector_30 = import4.ɵa()); }
    return this.___injector_30;
  }
  get __rootScope_31():any {
    if ((this.___rootScope_31 == null)) { (this.___rootScope_31 = import4.ɵb(this.__injector_30)); }
    return this.___rootScope_31;
  }
  get __compile_32():any {
    if ((this.___compile_32 == null)) { (this.___compile_32 = import4.ɵc(this.__injector_30)); }
    return this.___compile_32;
  }
  get __parse_33():any {
    if ((this.___parse_33 == null)) { (this.___parse_33 = import4.ɵd(this.__injector_30)); }
    return this.___parse_33;
  }
  get _FormBuilder_34():import5.FormBuilder {
    if ((this.__FormBuilder_34 == null)) { (this.__FormBuilder_34 = new import5.FormBuilder()); }
    return this.__FormBuilder_34;
  }
  get _ɵi_35():import5.ɵi {
    if ((this.__ɵi_35 == null)) { (this.__ɵi_35 = new import5.ɵi()); }
    return this.__ɵi_35;
  }
  get _UpgradePubSubService_36():import6.UpgradePubSubService {
    if ((this.__UpgradePubSubService_36 == null)) { (this.__UpgradePubSubService_36 = new import6.UpgradePubSubService()); }
    return this.__UpgradePubSubService_36;
  }
  createInternal():import1.AngularModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import3.ɵa();
    this._APP_INITIALIZER_2 = [
      import0.ɵo,
      import3.ɵc(this.parent.get(import3.NgProbeToken,(null as any)),this.parent.get(import0.NgProbeToken,(null as any)))
    ]
    ;
    this._ApplicationInitStatus_3 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_2);
    this._ɵf_4 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3);
    this._ApplicationRef_5 = this._ɵf_4;
    this._ApplicationModule_6 = new import0.ApplicationModule(this._ApplicationRef_5);
    this._BrowserModule_7 = new import3.BrowserModule(this.parent.get(import3.BrowserModule,(null as any)));
    this._UpgradeModule_8 = new import4.UpgradeModule(this,this.parent.get(import0.NgZone));
    this._ɵba_9 = new import5.ɵba();
    this._ReactiveFormsModule_10 = new import5.ReactiveFormsModule();
    this._AngularModule_11 = new import1.AngularModule();
    return this._AngularModule_11;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_2; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_3; }
    if ((token === import0.ɵf)) { return this._ɵf_4; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_5; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_6; }
    if ((token === import3.BrowserModule)) { return this._BrowserModule_7; }
    if ((token === import4.UpgradeModule)) { return this._UpgradeModule_8; }
    if ((token === import5.ɵba)) { return this._ɵba_9; }
    if ((token === import5.ReactiveFormsModule)) { return this._ReactiveFormsModule_10; }
    if ((token === import1.AngularModule)) { return this._AngularModule_11; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_12; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_13; }
    if ((token === import0.Compiler)) { return this._Compiler_14; }
    if ((token === import0.APP_ID)) { return this._APP_ID_15; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_16; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_17; }
    if ((token === import3.DomSanitizer)) { return this._DomSanitizer_18; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_19; }
    if ((token === import3.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_20; }
    if ((token === import3.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_21; }
    if ((token === import3.EventManager)) { return this._EventManager_22; }
    if ((token === import3.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_23; }
    if ((token === import3.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_24; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_25; }
    if ((token === import3.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_26; }
    if ((token === import0.Testability)) { return this._Testability_27; }
    if ((token === import3.Meta)) { return this._Meta_28; }
    if ((token === import3.Title)) { return this._Title_29; }
    if ((token === '$injector')) { return this.__injector_30; }
    if ((token === '$rootScope')) { return this.__rootScope_31; }
    if ((token === '$compile')) { return this.__compile_32; }
    if ((token === '$parse')) { return this.__parse_33; }
    if ((token === import5.FormBuilder)) { return this._FormBuilder_34; }
    if ((token === import5.ɵi)) { return this._ɵi_35; }
    if ((token === import6.UpgradePubSubService)) { return this._UpgradePubSubService_36; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_4.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_23 && this._ɵDomSharedStylesHost_23.ngOnDestroy());
  }
}
export const AngularModuleNgFactory:import0.NgModuleFactory<import1.AngularModule> = new import0.NgModuleFactory<any>(AngularModuleInjector,import1.AngularModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy91cGdyYWRlLW1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy90b3IvRGV2ZWxvcG1lbnQvYW5ndWxhci0yLXNhbXBsZXMvdXBncmFkZS1tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9