/*!CK:3743282740!*//*1427087457,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["naZqa"]); }

__d("legacy:mobile-hub",["MobileHub"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.MobileHub=b('MobileHub');},3);
__d("OnlyMeUI",["AudienceSelectorTags","Arbiter","CSS","DOM","Parent","PrivacySelectorBase","PrivacyConst","SelectorDeprecated","$","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();function q(){return [j.create('div',{className:'onlyMeBorder'}),j.create('div',{className:'onlyMeBorder onlyMeBorderBottom'})];}function r(){return j.create('img',{alt:' ',className:'onlyMePrivacyCorner',height:34,src:'/images/profile/timeline/privacy_corner.png',width:34});}function s(z){var aa=j.scry(z,'.photoUnit a.photo');return aa.filter(function(ba){return !j.scry(ba,'.onlyMePrivacyCorner').length;});}function t(z,aa){if(aa instanceof l){if(aa.getTags().length>1)return;}else if(g.hasTags(w(aa)))return;if(i.hasClass(z,'storyContent'))if(!k.byClass(z,'onlyMeWrap')){var ba=j.create('div',{className:'onlyMeWrap'});j.appendContent(k.byClass(z,'uiStreamStory'),ba);j.appendContent(ba,z);z=ba;}else z=k.byClass(z,'onlyMeWrap');i.addClass(z,'storyOnlyMe');if(!(aa instanceof l)&&!i.hasClass(z,'timelineRecentActivityStory'))j.setContent(j.find(aa,'span.uiButtonText'),p._("Solo yo"));if(!i.hasClass(z,'storyContent')){var ca=s(z);for(var da=0,ea=ca.length;da<ea;++da)j.appendContent(ca[da],r());}if(!j.scry(z,'div.onlyMeBorder').length){var fa=q();j.prependContent(z,fa[0]);j.appendContent(z,fa[1]);}}function u(z){if(!z)return;var aa=k.byClass(z,'storyContent')||k.byClass(z,'timelineRecentActivityStory')||k.byClass(z,'timelineUnitContainer')||k.byClass(z,'fbTimelineTwoColumn');if(!aa){aa=j.scry(z,'^.permalink_stream .storyContent');aa=aa.length&&aa[0];}else if(i.hasClass(aa,'fbTimelineComposerUnit'))return null;return aa;}function v(z){z=i.hasClass(z,'storyContent')?k.byClass(z,'onlyMeWrap'):z;z&&i.removeClass(z,'storyOnlyMe');}function w(z){var aa=j.scry(z,'*[data-oid]');if(aa.length===0)return '';return aa[0].getAttribute('data-oid');}var x=false,y={listenAdamaTimelineSelector:function(z){var aa=z.getInstance();aa.subscribe('changed',function(event,ba){var ca=aa.getTriggerButtonElement(),da=u(ca);if(!da)return;if(ba.post_param==m.PostParam.ONLY_ME){t(da,aa);}else v(da);});},init:function(){if(x)return;x=true;h.subscribe('AudienceSelector/changed',function(z,aa){if(aa.selector&&i.hasClass(aa.selector,'blacklistOnlyMeUI'))return;var ba=u(aa.selector)||u(aa.clone);if(!ba)return;if(n.getOptionValue(aa.option)==m.BaseValue.SELF){t(ba,aa.selector);}else v(ba);});},setOnlyMe:function(z){if(x)return;y.init();z=j.find(k.byClass(o(z),'uiSelector'),'a.uiSelectorButton');var aa=u(z);aa&&t(aa,z);}};e.exports=y;},null);