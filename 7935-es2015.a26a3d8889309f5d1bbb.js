(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[7935],{17935:function(t,e,a){"use strict";a.r(e),a.d(e,{MdcCardExamplesModule:function(){return E},MdcCardFancyExample:function(){return j}});var n=a(35366),i=a(26136),d=a(87064),o=(a(19861),a(93169));const r=["mat-button",""],c=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""]]],m=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd]"],l={enterDuration:225,exitDuration:150},u=[{selector:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{selector:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{selector:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{selector:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{selector:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{selector:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{selector:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],s=(0,d.pj)((0,d.Id)((0,d.Kr)(class{constructor(t){this._elementRef=t}})));let b=(()=>{class t extends s{constructor(t,e,a,n){super(t),this._platform=e,this._ngZone=a,this._animationMode=n,this._rippleAnimation="NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:l,this._isRippleCentered=!1,this._isFab=!1;const i=t.nativeElement.classList;for(const d of u)this._hasHostAttributes(d.selector)&&d.mdcClasses.forEach(t=>{i.add(t)})}focus(t="program",e){this._elementRef.nativeElement.focus(e)}_hasHostAttributes(...t){return t.some(t=>this._elementRef.nativeElement.hasAttribute(t))}_isRippleDisabled(){return this.disableRipple||this.disabled}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(o.t4),n.Y36(n.R0b),n.Y36(String))},t.\u0275dir=n.lG2({type:t,viewQuery:function(t,e){if(1&t&&n.Gf(d.wG,5),2&t){let t;n.iGM(t=n.CRH())&&(e.ripple=t.first)}},features:[n.qOj]}),t})(),p=(()=>{class t extends b{constructor(t,e,a,n){super(t,e,a,n)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(o.t4),n.Y36(n.R0b),n.Y36(i.Qb,8))},t.\u0275cmp=n.Xpm({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""]],hostVars:7,hostBindings:function(t,e){2&t&&(n.uIk("disabled",e.disabled||null),n.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-unthemed",!e.color)("mat-mdc-button-base",!0))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[n.qOj],attrs:r,ngContentSelectors:m,decls:7,vars:8,consts:[[1,"mdc-button__label"],[1,"mat-mdc-focus-indicator"],["matRipple","",1,"mat-mdc-button-ripple",3,"matRippleAnimation","matRippleDisabled","matRippleCentered","matRippleTrigger"]],template:function(t,e){1&t&&(n.F$t(c),n._UZ(0,"span"),n.Hsn(1),n.TgZ(2,"span",0),n.Hsn(3,1),n.qZA(),n.Hsn(4,2),n._UZ(5,"span",1),n._UZ(6,"span",2)),2&t&&(n.ekj("mdc-button__ripple",!e._isFab)("mdc-fab__ripple",e._isFab),n.xp6(6),n.Q6J("matRippleAnimation",e._rippleAnimation)("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e._isRippleCentered)("matRippleTrigger",e._elementRef.nativeElement))},directives:[d.wG],styles:['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mat-mdc-button .mdc-button__ripple::before,.mat-mdc-button .mdc-button__ripple::after,.mat-mdc-button .mdc-fab__ripple::before,.mat-mdc-button .mdc-fab__ripple::after,.mat-mdc-unelevated-button .mdc-button__ripple::before,.mat-mdc-unelevated-button .mdc-button__ripple::after,.mat-mdc-unelevated-button .mdc-fab__ripple::before,.mat-mdc-unelevated-button .mdc-fab__ripple::after,.mat-mdc-raised-button .mdc-button__ripple::before,.mat-mdc-raised-button .mdc-button__ripple::after,.mat-mdc-raised-button .mdc-fab__ripple::before,.mat-mdc-raised-button .mdc-fab__ripple::after,.mat-mdc-outlined-button .mdc-button__ripple::before,.mat-mdc-outlined-button .mdc-button__ripple::after,.mat-mdc-outlined-button .mdc-fab__ripple::before,.mat-mdc-outlined-button .mdc-fab__ripple::after{content:"";pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mdc-button__ripple,.mat-mdc-button .mdc-fab__ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mdc-button__ripple,.mat-mdc-unelevated-button .mdc-fab__ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mdc-button__ripple,.mat-mdc-raised-button .mdc-fab__ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple,.mat-mdc-outlined-button .mdc-fab__ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button[disabled],.mat-mdc-unelevated-button[disabled],.mat-mdc-raised-button[disabled],.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none}.mat-mdc-button .mat-icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mat-mdc-button .mat-icon,.mat-mdc-button .mat-icon[dir=rtl]{margin-left:8px;margin-right:0}.mat-mdc-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon,.mat-mdc-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mat-icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top;margin-left:-4px;margin-right:8px}[dir=rtl] .mat-mdc-unelevated-button .mat-icon,.mat-mdc-unelevated-button .mat-icon[dir=rtl],[dir=rtl] .mat-mdc-raised-button .mat-icon,.mat-mdc-raised-button .mat-icon[dir=rtl],[dir=rtl] .mat-mdc-outlined-button .mat-icon,.mat-mdc-outlined-button .mat-icon[dir=rtl]{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-unelevated-button .mat-icon,.mat-mdc-unelevated-button .mat-icon[dir=rtl],[dir=rtl] .mat-mdc-raised-button .mat-icon,.mat-mdc-raised-button .mat-icon[dir=rtl],[dir=rtl] .mat-mdc-outlined-button .mat-icon,.mat-mdc-outlined-button .mat-icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon,.mat-mdc-raised-button .mdc-button__label+.mat-icon,.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon,.mat-mdc-unelevated-button .mdc-button__label+.mat-icon[dir=rtl],[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon,.mat-mdc-raised-button .mdc-button__label+.mat-icon[dir=rtl],[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon,.mat-mdc-outlined-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:-4px;margin-right:8px}.cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}.cdk-high-contrast-active .mat-mdc-button-base:focus{outline:solid 3px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border:none}\n'],encapsulation:2,changeDetection:0}),t})();new n.OlP("mat-mdc-fab-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.BQ,d.si],d.BQ]}),t})();var g=a(61116);const h=["*"],f=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],x=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let v=(()=>{class t{constructor(){this.appearance="raised"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:2,hostBindings:function(t,e){2&t&&n.ekj("mdc-card--outlined","outlined"==e.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:h,decls:1,vars:0,template:function(t,e){1&t&&(n.F$t(),n.Hsn(0))},styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-card{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);position:relative;display:flex;flex-direction:column;box-sizing:border-box}.mdc-card .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-card::after{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-card--outlined{border-width:1px;border-style:solid}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;padding:16px 16px 0;margin:0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-header .mat-mdc-card-subtitle{margin-top:-8px;margin-bottom:16px}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;padding:16px 16px 0}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}\n'],encapsulation:2,changeDetection:0}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]}),t})(),C=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,e){2&t&&n.ekj("mat-mdc-card-actions-align-end","end"===e.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:x,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,e){1&t&&(n.F$t(f),n.Hsn(0),n.TgZ(1,"div",0),n.Hsn(2,1),n.qZA(),n.Hsn(3,2))},encapsulation:2,changeDetection:0}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.BQ,g.ez],d.BQ]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["mdc-card-fancy-example"]],decls:16,vars:0,consts:[[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-card-image","","src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu"],["mat-button",""]],template:function(t,e){1&t&&(n.TgZ(0,"mat-card",0),n.TgZ(1,"mat-card-header"),n._UZ(2,"div",1),n.TgZ(3,"mat-card-title"),n._uU(4,"Shiba Inu"),n.qZA(),n.TgZ(5,"mat-card-subtitle"),n._uU(6,"Dog Breed"),n.qZA(),n.qZA(),n._UZ(7,"img",2),n.TgZ(8,"mat-card-content"),n.TgZ(9,"p"),n._uU(10," The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "),n.qZA(),n.qZA(),n.TgZ(11,"mat-card-actions"),n.TgZ(12,"button",3),n._uU(13,"LIKE"),n.qZA(),n.TgZ(14,"button",3),n._uU(15,"SHARE"),n.qZA(),n.qZA(),n.qZA())},directives:[v,k,R,y,A,Z,w,C,p],styles:[".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}"]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[_,z]]}),t})()}}]);