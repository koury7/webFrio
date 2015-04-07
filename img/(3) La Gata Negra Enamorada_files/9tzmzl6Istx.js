/*!CK:3740543819!*//*1427086848,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["cZp\/L"]); }

__d("PerfXClientMetricsConfig",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={LOGGER_CONFIG:"PerfXClientMetricsLoggerConfig"};},null);
__d("PixelRatioConst",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={cookieName:"dpr"};},null);
__d("ModuleDependencies",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(k,l,m){var n=b.__debug.modules[m],o=b.__debug.deps;if(l[m])return;l[m]=true;if(!n){o[m]&&(k[m]=true);return;}if(!n.dependencies||!n.dependencies.length){if(n.waiting)k[m]=true;return;}n.dependencies.forEach(function(p){g(k,l,p);});}function h(k){if(b.__debug){var l={};g(l,{},k);var m=Object.keys(l);m.sort();return m;}return null;}function i(){var k={loading:{},missing:[]};if(!b.__debug)return k;var l={},m=b.__debug.modules,n=b.__debug.deps;for(var o in m){var p=m[o];if(p.waiting){var q={};g(q,{},p.id);delete q[p.id];k.loading[p.id]=Object.keys(q);k.loading[p.id].sort();k.loading[p.id].forEach(function(r){if(!(r in m)&&n[r])l[r]=1;});}}k.missing=Object.keys(l);k.missing.sort();return k;}var j={setRequireDebug:function(k){b.__debug=k;},getMissing:h,getNotLoadedModules:i};e.exports=j;},null);
__d("ScriptPathLogger",["Banzai","ScriptPath","isInIframe"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='script_path_change',k={scriptPath:null,categoryToken:null,extraInfoFromServer:{}},l=false;function m(s,t,u){if(!l||i())return;var v=g.isEnabled('vital_navigations')?g.VITAL:g.BASIC,w={source_path:s.scriptPath,source_token:s.categoryToken,dest_path:t.scriptPath,dest_token:t.categoryToken,impression_id:t.extraInfoFromServer.imp_id,cause:u},x=h.getClickPointInfo();if(x)w.click_point_info=x;if(s.extraInfoFromServer.entity_id)w.source_owning_entity_id=s.extraInfoFromServer.entity_id;if(t.extraInfoFromServer.entity_id)w.dest_owning_entity_id=t.extraInfoFromServer.entity_id;if(s.topViewEndpoint)w.source_endpoint=s.topViewEndpoint;if(t.topViewEndpoint)w.dest_endpoint=t.topViewEndpoint;if(t.extraInfoFromServer.search_sid)w.dest_search_sid=t.extraInfoFromServer.search_sid;if(s.extraInfoFromServer.search_sid)w.source_search_sid=s.extraInfoFromServer.search_sid;g.post(j,w,v);}function n(){m(k,h.getPageInfo(),h.CAUSE.PAGE_LOAD);}function o(s,t){m(s,t,h.CAUSE.TRANSITION);}function p(){m(h.getPageInfo(),k,h.CAUSE.PAGE_UNLOAD);}var q=h.subscribe(function(s){if(l){var t=s.source,u=s.dest,v=s.cause;if(v){m(t||k,u||k,v);}else if(t){o(t,u);}else n();}});g.subscribe(g.SHUTDOWN,p);var r={startLogging:function(){l=true;if(h.getPageInfo())n();},stopLogging:function(){l=false;h.unsubscribe(q);}};r.BANZAI_LOGGING_ROUTE=j;e.exports=r;},null);
__d("sourceMetaToString",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){var j;if(h.name){j=h.name;if(h.module)j=h.module+'.'+j;if(i&&h.line){j+=':'+h.line;if(h.column)j+=':'+h.column;}}return j;}e.exports=g;},null);
__d("PerfXFlusher",["BanzaiLogger","PerfXClientMetricsConfig","invariant"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=h.LOGGER_CONFIG,k=['perfx_page','perfx_page_type','tti','e2e'];function l(n){k.forEach(function(o){i(o in n);});}var m={flush:function(n,o){l(o);o.lid=n;if(o.fbtrace_id){g.log(j,o,{delay:10*1000});}else g.log(j,o);}};e.exports=m;},null);
__d("TimeSpentImmediateActiveSecondsLogger",["Banzai","ImmediateActiveSecondsConfig","ScriptPath"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='immediate_active_seconds',k={signal:true,retry:true},l=h.sampling_rate,m=h.ias_bucket,n=0;function o(s){if(l<=0)return false;var t=Math.floor(s/1000)%l;return t===m;}function p(s){if(s>=n&&s-n<1000)return;if(o(s)){var t={activity_time_ms:s,last_activity_time_ms:n,script_path:i.getTopViewEndpoint()};try{g.post(j,t,k);}catch(u){}}n=Math.floor(s/1000)*1000;}function q(event,s,t){if(u<0||v<0||u>v)return;var u=Math.floor(s/1000),v=Math.floor(t/1000);if(!r(u,v))return;var w={event:event,start_time_ms:s,end_time_ms:t};g.post(j,w,k);}function r(s,t){if(l<=0)return false;if(t-s>=l)return true;var u=s+(m-(s%l)+l)%l;return u<=t;}e.exports={maybeReportActiveSecond:p,maybeReportActiveInterval:q};},null);
__d("PixelRatio",["Arbiter","Cookie","PixelRatioConst","Run"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=i.cookieName,l,m;function n(){return window.devicePixelRatio||1;}function o(){h.set(k,n());}function p(){h.clear(k);}function q(){var s=n();if(s!==l){o();}else p();}var r={startDetecting:function(s){l=s||1;p();if(m)return;m=[g.subscribe('pre_page_transition',q)];j.onBeforeUnload(q);}};e.exports=r;},null);
__d("PerfXLogger",["Arbiter","LogBuffer","PageEvents","PerfXFlusher","performance"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={},m='BigPipe/init',n='tti_bigpipe',o={},p,q={_listenersSetUp:false,_setupListeners:function(){if(this.listenersSetUp)return;this._subscribeToBigPipeInit(g);this._subscribeToFullPageE2E(g);this.listenersSetUp=true;},_init:function(r,s,t){l[r]={perfx_page:s,perfx_page_type:t};this._setupListeners();},initForPageLoad:function(r,s,t){p=r;this._init(r,s,t);},initForQuickling:function(r,s,t,u){this._init(r,s,t);o[r]=u;},_subscribeToBigPipeInit:function(r){r.subscribe(m,function(event,s){var t=s.arbiter;this._subscribeToTTI(t);this._subscribeToAsyncTransitionE2E(t);}.bind(this));},_subscribeToTTI:function(r){r.subscribe(n,function(event,s){var t=s.lid;if(!(t in l))return;l[t].tti=s.ts;});},_subscribeToFullPageE2E:function(r){r.subscribe(i.BIGPIPE_ONLOAD,function(event,s){if(!(p in l))return;l[p].e2e=s.ts;this._finishPageload(p);}.bind(this));},_subscribeToAsyncTransitionE2E:function(r){r.subscribe(i.AJAXPIPE_ONLOAD,function(event,s){var t=s.lid;if(!(t in l))return;l[t].e2e=s.ts;this._finishQuickling(t);}.bind(this));},_generatePayload:function(r,s){var t=l[r];if(t.fbtrace_id){t.js_tti=this._getJSTime(s,t.tti);t.js_e2e=this._getJSTime(s,t.e2e);}var u=Object.assign({},t);if(!this._adjustAndValidateValues(u,s))return;return u;},_getPageloadPayload:function(r){if(!(r in l))return;if(!k.timing){delete l[r];return;}var s=k.timing.navigationStart;return this._generatePayload(r,s);},_getQuicklingPayload:function(r){if(!(r in o)||!(r in l))return;if(!k.timing||!k.getEntriesByName){delete o[r];delete l[r];return;}var s=o[r],t=k.getEntriesByName(s);if(t.length===0)return;var u=t[0],v=k.timing.navigationStart+u.startTime;return this._generatePayload(r,v);},_finishPageload:function(r){var s=this._getPageloadPayload(r);if(s)this._log(r,s);},_finishQuickling:function(r){var s=this._getQuicklingPayload(r);if(s)this._log(r,s);},_log:function(r,s){j.flush(r,s);},_adjustAndValidateValues:function(r,s){var t=['e2e','tti'],u=true;for(var v=0;v<t.length;v++){var w=t[v],x=r[w];if(!x){u=false;break;}r[w]=x-s;}return u;},getPayload:function(r){if(!(r in l))return;var s=l[r].perfx_page_type;if(s==="normal"){return this._getPageloadPayload(r);}else if(s==="quickling")return this._getQuicklingPayload(r);},setFBTraceID:function(r,s){if(r in l)l[r].fbtrace_id=s;},_getJSTime:function(r,s){if(r>s)return 0;var t=0;h.read('time_slice').forEach(function(u){var v=u.begin,w=u.end;if(v>w)return;if(r<=v&&w<=s){t+=w-v;}else if(v<=r&&s<=w){t+=s-r;}else if(v<=r&&r<=w){t+=w-r;}else if(v<=s&&s<=w)t+=s-v;});return t;}};e.exports=q;},null);
__d("NavigationClickPointHandler",["Event","ScriptPath","collectDataAttributes"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=null;function k(m){var n=i(m,['ft'],['href','data-click']),o=n.normal.href;if(!o||o==='#')return false;var p=n.ft.tn;if(p){j={tn:p};return true;}var q=n.normal['data-click'];if(q){j={click:q};return true;}if(m.getAttribute){var r=m.getAttribute('class');if(r){j={"class":r};return true;}}j=null;return true;}function l(event){var m=event.target||event.srcElement;if(k(m))h.setClickPointInfo(j);}g.listen(document.documentElement,{click:l});e.exports=null;},null);
__d("TypeaheadShowLoadingIndicator",["CSS","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){"use strict";this._typeahead=j;}i.prototype.enable=function(){"use strict";this._subscription=this._typeahead.subscribe('loading',function(j,k){g.conditionClass(this._typeahead.getElement(),'typeaheadLoading',k.loading);g.conditionClass(this._typeahead.getView().getElement(),'typeaheadViewLoading',k.loading);}.bind(this));};i.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null;};h(i.prototype,{_subscription:null});e.exports=i;},null);
__d("legacy:ShowLoadingIndicatorTypeaheadBehavior",["TypeaheadShowLoadingIndicator"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.showLoadingIndicator=function(h){h.enableBehavior(g);};},3);