/*!CK:3204019771!*//*1427086763,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WsuVw"]); }

__d("PageAdminUpsellUtils",["AsyncRequest","DOM","PagesTimelineController","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={};j(l,{refreshUnits:function(m,n){new g().setURI('/ajax/pages/upsell/refresh').setData({target:m,initial_load:n}).setErrorHandler(k).send();},replaceUnits:function(m,n){var o=h.scry(document.body,'#rightCol .ego_column');if(o.length>0)h.replace(o[0],m);for(var p=1;p<o.length;++p)h.replace(o[p],m.cloneNode(true));if(n)i.adjustAds();}});e.exports=l;},null);
__d("BoostedPagelikePanel",["BoostedActionType","BoostedPagelikeConstants","UIPagelet","CSS","Arbiter"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={},m={};function n(o,p,q,r){"use strict";this.$BoostedPagelikePanel0=o;this.$BoostedPagelikePanel1=p;this.$BoostedPagelikePanel2=q;this.$BoostedPagelikePanel3=r;if(p in l)k.unsubscribe(l[p]);l[p]=k.subscribe(h.PANEL_STATUS_CHANGE,function(s,t){if(t.action_type===g.PAGELIKE)this.$BoostedPagelikePanel5();}.bind(this));if(p in m)k.unsubscribe(m[p]);m[p]=k.subscribe(h.PANEL_STATUS_CHANGE_FINISH,function(s,t){if(t.action_type===g.PAGELIKE)this.$BoostedPagelikePanel6();}.bind(this));}n.prototype.$BoostedPagelikePanel5=function(){"use strict";j.hide(this.$BoostedPagelikePanel2);j.show(this.$BoostedPagelikePanel3);};n.prototype.$BoostedPagelikePanel6=function(){"use strict";switch(this.$BoostedPagelikePanel1){case h.ADMINPANEL:i.loadFromEndpoint('PageAdminPanelBoostedPagelikePagelet','admin_panel_likes',{profile_id:this.$BoostedPagelikePanel0});break;case h.PAGESMANAGER:i.loadFromEndpoint('WebPagesManagerBuildAudienceController','build_audience',{page_id:this.$BoostedPagelikePanel0});break;case h.SPRINGBOARDFLYOUT:i.loadFromEndpoint('PagesManagerSpringboardActiveAdsPagelet','boosted_pagelike/springboard',{page_id:this.$BoostedPagelikePanel0});break;case h.PAGETABLHS:var o='PagePeoplePagelet_'+this.$BoostedPagelikePanel0;i.loadFromEndpoint('PagePeoplePagelet',o,{page:this.$BoostedPagelikePanel0,column:'side'});break;default:throw new Error(this.$BoostedPagelikePanel1+' is invalid panel version');}};e.exports=n;},null);
__d("AbstractCheckboxInput.react",["React","cx","invariant","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=g,l=k.PropTypes,m=g.createClass({displayName:"AbstractCheckboxInput",propTypes:{tooltip:l.string},render:function(){i(!this.props.children||this.props.children.length===0);var n=j(this.props.className,"_kv1"),o=g.createElement("input",g.__spread({},this.props,{className:null,type:"checkbox"}),undefined);return (g.createElement("label",{className:n},o,g.createElement("span",{"data-hover":this.props.tooltip?'tooltip':null,"aria-label":this.props.tooltip})));}});e.exports=m;},null);
__d("XUICheckboxInput.react",["AbstractCheckboxInput.react","React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=h.createClass({displayName:"XUICheckboxInput",render:function(){return (h.createElement(g,h.__spread({},this.props,{className:j(this.props.className,"_55sg")}),(void 0)));}});e.exports=k;},null);
__d("PlacesCitySharerX",["Arbiter","ArbiterMixin","AsyncRequest","CSS","DOM","Event","Parent","csx","cx","fbt","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r={},s=q(h);for(var t in s)if(s.hasOwnProperty(t))v[t]=s[t];var u=s===null?null:s.prototype;v.prototype=Object.create(u);v.prototype.constructor=v;v.__superConstructor__=s;function v(w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja){"use strict";this._root=w;this.setShareSetting(fa);this.init(x,y,z,aa,ba,ga,ia);if(da)this.setDefaultCity(ca,da,ea);if(this._shareDefaultCity)this.useDefaultCity();if(ha)this.toggleSelect();}v.prototype.init=function(w,x,y,z,aa,ba,ca,da){"use strict";this._cityLink=w;this._closeButton=x;this._input=y;this._disableShareInput=z;this._options=aa;this._targetId=ba||0;this._cityName=k.find(this._cityLink,"._y8");this._data={};this._resetTempInfo();l.listen(this._closeButton,'click',function(){this._resetTempInfo();this._defaultCityData={};this.clearCity();this._disableShareInput.value='true';}.bind(this));r[this._root]=this;this.inform('init',null,g.BEHAVIOR_PERSISTENT);this._shouldClearImplicitLocation=ca;this._checkinBranding=da;};v.prototype.toggleSelect=function(){"use strict";this._placeSelected=true;j.addClass(this._cityLink,"_1dsf");j.hide(this._closeButton);};v.prototype.addPlace=function(w){"use strict";this.toggleSelect();this._resetTempInfo();};v.prototype.changeCity=function(w,x,y){"use strict";this.setCity(w,x,y);this.toggleLocationSharing(w,x,y,false);};v.prototype.clearCity=function(){"use strict";this._data={};this._input.value='';k.empty(this._cityName);var w=this._checkinBranding?p._("Reg\u00edstrate"):p._("Agrega una ubicaci\u00f3n a la publicaci\u00f3n");this._cityLink.setAttribute('aria-label',w);j.removeClass(this._root,"_y7");j.hide(this._closeButton);j.removeClass(this._cityLink,"_1dsf");this.inform('change',null,g.BEHAVIOR_PERSISTENT);};v.prototype.clearPlace=function(){"use strict";this._placeSelected=false;j.removeClass(this._cityLink,"_1dsf");j.conditionShow(this._closeButton,this.getValue());if(this._shouldClearImplicitLocation){this.clearCity();}else this.setDefaultCity(this._data.city_name,this._data.city_page_id,this._data.city_id);};v.prototype.getIcon=function(){"use strict";return this._root;};v.prototype.getValue=function(){"use strict";return this._input.value;};v.prototype.restoreCityInfo=function(){"use strict";if(this._placeSelected||this._shareDefaultCity){this.changeCity(this._tempCityName,this._tempCityPid,this._tempCityId);this._resetTempInfo();}};v.prototype.saveCityInfo=function(){"use strict";if(this._defaultCityData){this._tempCityName=this._defaultCityData.city_name;this._tempCityPid=this._defaultCityData.city_page_id;this._tempCityId=this._defaultCityData.city_id;}};v.prototype.setCity=function(w,x,y){"use strict";if(x){this.setCityData(w,x,y);this._input.value=x;this.inform('change',this._data,g.BEHAVIOR_PERSISTENT);}};v.prototype.setCityData=function(w,x,y){"use strict";if(x){this._data={city_name:w,city_page_id:x,city_id:y};var z=w.lastIndexOf(',');if(z!=-1)w=w.substring(0,z);var aa;if(w){aa=this._checkinBranding?p._("Currently in {city-name}. Check in",[p.param("city-name",w)]):p._("Actualmente en {city-name}. Agrega una ubicaci\u00f3n para publicar",[p.param("city-name",w)]);}else aa=this._checkinBranding?p._("Reg\u00edstrate"):p._("Agrega una ubicaci\u00f3n a la publicaci\u00f3n");k.setContent(this._cityName,w);this._cityLink.setAttribute('aria-label',aa);j.addClass(this._root,"_y7");j.conditionShow(this._closeButton,!this._placeSelected);}};v.prototype.setDefaultCity=function(w,x,y){"use strict";this._defaultCityData={city_id:y,city_page_id:x,city_name:w};};v.prototype.setSessionID=function(w){"use strict";this._options.session_id=w;};v.prototype.setShareSetting=function(w){"use strict";this._shareDefaultCity=w;};v.prototype.toggleLocationSharing=function(w,x,y,z){"use strict";if(x)new i().setURI('/ajax/places/toggle_location_sharing').setData({city_id:y,city_page_id:x,city_name:w,is_default:z,session_id:this._options.session_id}).send();};v.prototype.useDefaultCity=function(){"use strict";if(this._defaultCityData){this.setCity(this._defaultCityData.city_name,this._defaultCityData.city_page_id,this._defaultCityData.city_id);j.show(this._closeButton);this.toggleLocationSharing(this._defaultCityData.city_name,this._defaultCityData.city_page_id,this._defaultCityData.city_id,true);}};v.prototype._resetTempInfo=function(){"use strict";this._tempCityName=null;this._tempCityPid=null;this._tempCityId=null;};v.getInstance=function(w){"use strict";var x=m.byClass(w,'ComposerCitySharer');return x&&r[x];};v.prototype.getTargetID=function(){"use strict";return this._targetId;};e.exports=v;},null);
__d("ComposerXCitySharerReset",["AsyncRequest"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(j){var k=j.instance.getTargetID();if(k!==0&&j.instance.getValue()!=="")k=0;j.instance.clearCity();new g().setURI('/ajax/places/city_sharer_reset.php').setData({target_id:k}).setHandler(function(l){i(j,l.getPayload());}).send();}function i(j,k){j.instance.setShareSetting(k.sharedefault);j.instance.setSessionID((new Date()).valueOf().toString().substr(0,10));if(k.citypageid)j.instance.setDefaultCity(k.citystring,k.citypageid,k.cityid);if(k.sharedefault)j.instance.useDefaultCity();}e.exports=h;},null);
__d("ServerRedirect",["goURI"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={redirectPageTo:g,reloadPage:function(){window.location.reload();}};e.exports=h;},null);
__d("XPageLHSUnitsReorderingController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pages\/lhs\/reorder\/",{page_id:{type:"Int",required:true},visible_units:{type:"IntVector",required:true},__asyncDialog:{type:"Int"}});},null);
__d("PagesSideUnitsOrderCreator",["AsyncRequest","DOM","XPageLHSUnitsReorderingController","csx"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={registerMenuItem:function(l,m,n){l.subscribe('itemclick',function(o,p){if(p&&p.item&&p.item.getValue()===m){var q="._57dz div[data-id]",r=h.scry(document.body,q),s=[];for(var t=0,u=r.length;t<u;t++)s.push(r[t].getAttribute('data-id'));if(r){var v=i.getURIBuilder().setInt('page_id',n).setIntVector('visible_units',s).getURI();new g(v).send();}}});}};e.exports=k;},null);
__d("BasePrivacyWidget",["Arbiter","ArbiterMixin","DOM","Form","PrivacyConst","$","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=k.BaseValue;function o(){}m(o.prototype,h,{init:function(p,q,r){this._controllerId=p;this._root=l(p);this._options=m(r||{},q||{});this._formDataKey='privacy_data';},getData:function(){return this._model.getData();},_getPrivacyData:function(p){p=p||this._fbid;var q={};q[p]=this.getData();return q;},getRoot:function(){return this._root;},_initMenu:function(p){this._menu=p;this._menu.subscribe('itemclick',this._onMenuSelect.bind(this));},_isCustomSetting:function(p){return (p==n.CUSTOM);},_isEveryoneSetting:function(p){return (p==n.EVERYONE);},_updateSelector:function(p){var q=this._model.value;if(!this._isCustomSetting(q)){this._onPrivacyChanged();return;}},_onPrivacyChanged:function(){this._saveFormData();g.inform('Form/change',{node:this.getRoot()});this.inform('privacyChanged',this.getData());g.inform('UIPrivacyWidget/globalPrivacyChanged',{fbid:this._fbid,data:this.getData()});},_saveFormData:function(){var p=i.find(this._root,'div.UIPrivacyWidget_Form');i.empty(p);var q={};if(this._options.useLegacyFormData){q[this._formDataKey]=this.getData();}else q[this._formDataKey]=this._getPrivacyData();j.createHiddenInputs(q,p);}});e.exports=o;},null);
__d("TargetedPrivacyConsts",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={GENDER_BOTH:0,GENDER_MALE:1,GENDER_FEMALE:2,LOC_ALL:0,LOC_REGION:1,LOC_CITY:2};e.exports=g;},null);
__d("TargetedPrivacyModel",["PrivacyConst","TargetedPrivacyConsts","copyProperties"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.BaseValue;function k(){this.value=j.EVERYONE;this.countries=[];this.countries_names=[];this.location_type=h.LOC_ALL;this.location_ids=[];this.location_ids_names=[];this.locales=[];this.locales_names=[];this.gender=h.GENDER_BOTH;this.age_min=0;this.age_max=0;return this;}i(k.prototype,{init:function(l,m,n,o,p,q,r,s,t,u,v,w,x){this.value=l;this.countries=m.slice();this.countries_names=n.slice();this.location_type=o;this.location_ids=p.slice();this.location_ids_names=q.slice();this.age_min=r;this.age_max=s;this.gender=t;this.locales=u.slice();this.locales_names=v.slice();this.see_regions=x;this.see_cities=w;},getData:function(){var l={};if(this.value==j.EVERYONE)return l;var m=['countries','location_type','location_ids','age_min','age_max','gender','locales'];for(var n=0;n<m.length;++n){var o=m[n];l[o]=this[o];}return l;}});e.exports=k;},null);
__d("UITargetedPrivacyWidget",["ArbiterMixin","AsyncRequest","BasePrivacyWidget","BootloadedComponent.react","Bootloader","Dialog","DOM","MenuSelectableItem","PrivacyConst","React","TargetedPrivacyConsts","TargetedPrivacyModel","Tooltip","$","classWithMixins","copyProperties","fbt","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){b.__markCompiled&&b.__markCompiled();var y=u(i,x(g));for(var z in y)if(y.hasOwnProperty(z))ba[z]=y[z];var aa=y===null?null:y.prototype;ba.prototype=Object.create(aa);ba.prototype.constructor=ba;ba.__superConstructor__=y;function ba(ca,da,ea,fa,ga,ha){"use strict";var ia={useLegacyFormData:true};aa.init.call(this,da,ia,ha);this._profileId=ea;this._model=new r();this._formDataKey='targeted_privacy_data';this._button=fa;this._everyoneItem=this._retrieveEveryoneItem(ca);this._customItem=this._retrieveCustomItem(ca);this._defaultTooltip=ga;ba.instances[this._controllerId]=this;this._initMenu(ca);this._saveFormData();}ba.prototype._onMenuSelect=function(ca,da){"use strict";var ea=da.item;if(!ea instanceof n)return;var fa=ea.getValue();if(fa==o.BaseValue.EVERYONE)this._model=new r();this._saveFormData();this._updateSelector();this._updateTooltipForButtonFromItem(ea);if(this._isCustomSetting(fa))this._showDialog();};ba.prototype._updateTooltipForButtonFromItem=function(ca){"use strict";var da=ca.getValue();if(this._isCustomSetting(da)){s.set(this._button,w._("Personalizar"));}else s.set(this._button,this._defaultTooltip);};ba.prototype.reset=function(){"use strict";this._model=new r();this._updateSelector();this._saveFormData();return this;};ba.prototype.setProfileID=function(ca){"use strict";this._profileId=ca;};ba.prototype._showDialog=function(){"use strict";var ca={controller_id:this._controllerId,profile_id:this._profileId};if(this._options.useAdvancedGating){this._showAdvancedGatingDialog();}else this._dialog=new l().setAsync(new h().setURI(ba.DIALOG_URI).setData(ca)).setModal(true).show();};ba.prototype._showAdvancedGatingDialog=function(){"use strict";this._renderAdvancedGatingDialog(true);};ba.prototype._hideAdvancedGatingDialog=function(){"use strict";this._renderAdvancedGatingDialog(false);};ba.prototype._renderAdvancedGatingDialog=function(ca){"use strict";var da=this._advancedGatingAnchor;if(!da){this._advancedGatingAnchor=da=m.create('span');m.appendContent(t(this._controllerId),da);}p.render(p.createElement(j,{bootloadPlaceholder:p.createElement("span",null),bootloadComponent:function(ea){k.loadModules(["PagePostAdvancedGatingDialog.react"],ea);},shown:ca,locations:{countries:this._model.countries},onCancel:this._hideAdvancedGatingDialog.bind(this),onSave:this._onAdvancedGatingSave.bind(this)}),da);};ba.prototype._onAdvancedGatingSave=function(ca){"use strict";var da=false;if(ca.countries.length>0)da=true;if(da){this._model.init(o.BaseValue.CUSTOM,ca.countries,[],q.LOC_ALL,[],[],0,0,q.GENDER_BOTH,[],[]);}else this.reset();this._onPrivacyChanged();this._hideAdvancedGatingDialog();};ba.prototype._updateSelector=function(ca){"use strict";aa._updateSelector.call(this);if(ca&&!this._isCustomSetting(this._model.value)){this._everyoneItem.select();this._customItem.deselect();this._updateTooltipForButtonFromItem(this._everyoneItem);this._menu.inform('change',this._menu.getSelection());}};ba.prototype._retrieveEveryoneItem=function(ca){"use strict";return this._retrieveTargetItem(ca,this._isEveryoneSetting);};ba.prototype._retrieveCustomItem=function(ca){"use strict";return this._retrieveTargetItem(ca,this._isCustomSetting);};ba.prototype._retrieveTargetItem=function(ca,da){"use strict";return ca._items.find(function(ea){return (ea instanceof n&&da(ea.getValue()));});};ba.getInstance=function(ca){"use strict";return this.instances[ca];};v(ba,{DIALOG_URI:'/ajax/privacy/targeted_privacy_widget_dialog.php',instances:{}});e.exports=ba;},null);
__d("XFamilyTagCoverPicSaveController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/family\/cover\/save\/",{profile_id:{type:"Int",required:true},cover_instance:{type:"String",required:true},photo_id:{type:"Int"},offset_x:{type:"Int"},offset_y:{type:"Int"}});},null);
__d("XCoverPicSaveController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/profile\/cover\/save\/",{profile_id:{type:"Int",required:true},cover_instance:{type:"String",required:true},photo_id:{type:"Int"},offset_x:{type:"Int"},offset_y:{type:"Int"}});},null);
__d("ProfileCover",["ActorURI","AsyncRequest","Button","CSS","DOM","ServerRedirect","TimelineDrag","XFamilyTagCoverPicSaveController","XCoverPicSaveController","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r={},s={};function t(u,v,w,x,y){"use strict";this.root=u;this.cover=v;this.profileID=x;this.editControls=w;this.newCoverPhoto=null;this.newCoverPhotoFBID=null;this.$ProfileCover0=k.getID(v);r[this.$ProfileCover0]=this;this.editControls.subscribe('save',function(){var z=this.editControls.getInput().value;i.setEnabled(this.editControls.getSaveButton(),false);i.setEnabled(this.editControls.getCancelButton(),false);var aa=k.find(this.newCoverPhoto,"img._xlg"),ba=t.isCoverImageVertical(aa)?'offset_y':'offset_x',ca=o.getURIBuilder();if(y)ca=n.getURIBuilder();ca=g.create(ca.setString('cover_instance',this.$ProfileCover0).setInt('profile_id',this.profileID).setInt('photo_id',this.newCoverPhotoFBID).setInt(ba,z).getURI(),this.profileID);new h(ca).setMethod('POST').setStatusElement(k.getID(this.root)).setHandler(function(){i.setEnabled(this.editControls.getSaveButton(),true);i.setEnabled(this.editControls.getCancelButton(),true);this.endPositioning();var da=j.hasClass(this.root,"_5e18");if(da){j.removeClass(this.root,"_5e18");l.reloadPage();}}.bind(this)).send();}.bind(this));this.editControls.subscribe('cancel',function(){i.setEnabled(this.editControls.getSaveButton(),true);i.setEnabled(this.editControls.getCancelButton(),true);this.dragger.destroy();this.dragger=null;k.remove(this.newCoverPhoto);this.newCoverPhoto=null;this.newCoverPhotoFBID=null;this.$ProfileCover1(false);}.bind(this));if(s[this.$ProfileCover0]){s[this.$ProfileCover0](this);s[this.$ProfileCover0]=null;}}t.prototype.getRoot=function(){"use strict";return this.root;};t.prototype.setPhotoToPosition=function(u,v){"use strict";this.$ProfileCover1(true);k.insertAfter(this.cover,u);var w=k.find(u,"img._xlg");this.newCoverPhoto=u;this.newCoverPhotoFBID=v;this.dragger=new m(w,this.editControls.getInput(),{width:851,height:315,vertical:t.isCoverImageVertical(w),killClicks:true,listenOn:u});};t.prototype.remove=function(){"use strict";l.reloadPage();};t.prototype.error=function(u){"use strict";u.show();};t.prototype.endPositioning=function(){"use strict";if(this.dragger){this.dragger.destroy();this.dragger=null;k.remove(this.cover);this.cover=this.newCoverPhoto;this.newCoverPhoto=null;this.newCoverPhotoFBID=null;this.$ProfileCover1(false);}};t.prototype.$ProfileCover1=function(u){"use strict";var v=u?j.addClass:j.removeClass;v(this.root,"_xlf");};t.addPhotoToPosition=function(u,v,w){"use strict";t.getInstance(u).setPhotoToPosition(v,w);};t.finishPositioning=function(u){"use strict";t.getInstance(u).endPositioning();};t.removeCover=function(u){"use strict";t.getInstance(u).remove();};t.isCoverImageVertical=function(u){"use strict";return !(u.style.height);};t.getInstance=function(u){"use strict";return r[u];};t.waitForInstance=function(u,v){"use strict";if(r[u]){v(r[u]);}else s[u]=v;};t.resetInstance=function(u){"use strict";r[u].reset();};t.uploadError=function(u,v){"use strict";r[u].error(v);};e.exports=t;},null);