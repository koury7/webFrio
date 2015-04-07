/*!CK:320365688!*//*1427087207,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Gm\/tr"]); }

__d("ProfileDOMID",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={ABOVE_HEADER_TIMELINE:"pagelet_above_header_timeline",ABOVE_HEADER_TIMELINE_PLACEHOLDER:"above_header_timeline_placeholder",COVER:"fbProfileCover",MAIN_COLUMN:"pagelet_main_column",MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal",MAIN_COLUMN_PERSONAL_OTHER:"pagelet_main_column_personal_other",RIGHT_SIDEBAR:"pagelet_right_sidebar",TAB_LOAD_INDICATOR:"tab_load_indicator",TOP_SECTION:"timeline_top_section",PREFIX_MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal_"};},null);
__d("ProfileOverviewDOMID",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={MEDLEY_ROOT:"timeline-medley",PREFIX_APP_COLLECTION:"pagelet_timeline_app_collection_",PREFIX_COLLECTION_WRAPPER:"collection_wrapper_",PREFIX_MEDLEY:"pagelet_timeline_medley_",PREFIX_MEDLEY_HEADER:"medley_header_",PREFIX_RECOMMENDATION:"pagelet_recommendation_"};},null);
__d("ProfileTabConst",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",GROUPS:"groups",INBOX_MESSAGES:"messages_inbox",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MESSAGES:"messages",NEARBY:"nearby",NOTES:"notes",OTHER_MESSAGES:"messages_other",OVERVIEW:"about",PAST_EVENTS:"pe",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RESUME:"resume",REVIEWS:"reviews",SAVED_FOR_LATER:"saved",SPORTS:"sports",TAGGED_NOTES:"notes_tagged",TIMELINE:"timeline",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"};},null);
__d("TimelineScrollJankEventTypes",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={BOTTOM_OUT:"bottom_out",JUMP_TO_NOWHERE:"jump_to_nowhere",UNBALANCED_COLUMNS:"unbalanced_columns"};},null);
__d("DoublyLinkedListMap",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;}g.prototype.get=function(h){"use strict";return this._nodes[h]?this._nodes[h].data:null;};g.prototype.getIndex=function(h){"use strict";for(var i=this._head,j=0;i;i=i.next,j++)if(i.key===h)return j;return null;};g.prototype._insert=function(h,i,j,k){"use strict";j&&!this._nodes[j]&&(j=null);var l=(j&&this._nodes[j])||(k?this._head:this._tail),m={data:i,key:h,next:null,prev:null};if(l){this.remove(h);if(k){m.prev=l.prev;l.prev&&(l.prev.next=m);l.prev=m;m.next=l;}else{m.next=l.next;l.next&&(l.next.prev=m);l.next=m;m.prev=l;}}m.prev===null&&(this._head=m);m.next===null&&(this._tail=m);this._nodes[h]=m;this._nodeCount++;return this;};g.prototype.insertBefore=function(h,i,j){"use strict";return this._insert(h,i,j,true);};g.prototype.insertAfter=function(h,i,j){"use strict";return this._insert(h,i,j,false);};g.prototype.prepend=function(h,i){"use strict";return this.insertBefore(h,i,this._head&&this._head.key);};g.prototype.append=function(h,i){"use strict";return this.insertAfter(h,i,this._tail&&this._tail.key);};g.prototype.remove=function(h){"use strict";var i=this._nodes[h];if(i){var j=i.next,k=i.prev;j&&(j.prev=k);k&&(k.next=j);this._head===i&&(this._head=j);this._tail===i&&(this._tail=k);delete this._nodes[h];this._nodeCount--;}return this;};g.prototype.find=function(h){"use strict";for(var i=this._head;i;i=i.next)if(h(i.data))return i.key;return null;};g.prototype.reduce=function(h,i){"use strict";for(var j=this._head;j;j=j.next)i=h(j.data,i);return i;};g.prototype.exists=function(h){"use strict";return !!this._nodes[h];};g.prototype.isEmpty=function(){"use strict";return !this._head;};g.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;};g.prototype.map=function(h){"use strict";for(var i=this._head;i;i=i.next)h(i.data);};g.prototype.getCount=function(){"use strict";return this._nodeCount;};g.prototype.getHead=function(){"use strict";return this._head&&this._head.data;};g.prototype.getTail=function(){"use strict";return this._tail&&this._tail.data;};g.prototype.getNext=function(h){"use strict";var i=this._nodes[h];if(i&&i.next)return i.next.data;return null;};g.prototype.getPrev=function(h){"use strict";var i=this._nodes[h];if(i&&i.prev)return i.prev.data;return null;};e.exports=g;},null);
__d("ProfileTabUtils",["ProfileTabConst"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={isActivityLogTab:function(i){return (i===g.ALL_ACTIVITY||i===g.APPROVAL);},isOverviewTab:function(i){return (i===g.INFO||i===g.OVERVIEW);},isTimelineTab:function(i){return (!i||i===g.TIMELINE||i===g.WALL);},tabHasFixedAds:function(i){return !this.isTimelineTab(i);},tabHasScrubber:function(i){return (this.isTimelineTab(i)||this.isActivityLogTab(i));}};h.tabHasStickyHeader=h.isTimelineTab;e.exports=h;},null);
__d("ProfileNavRef",["LinkController","Parent","URI"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='pnref',k='data-'+j,l=false;function m(n){var o=[];n=h.byAttribute(n,k);while(n){o.unshift(n.getAttribute(k));n=h.byAttribute(n.parentNode,k);}return o.join('.');}f.track=function(){if(l)return;l=true;g.registerHandler(function(n){var o=m(n);if(o)n.href=new i(n.href).addQueryData(j,o).toString();});};},null);
__d("TimelineComponentKeys",["ImmutableObject"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=new g({ADS:'ads',ASYNC_NAV:'async_nav',CONTENT:'content',COVER_NAV:'cover_nav',ESCAPE_HATCH:'escape_hatch',LOGGING:'logging',NAV:'nav',SCRUBBER:'scrubber',STICKY_HEADER:'sticky_header',STICKY_HEADER_NAV:'sticky_header_nav'});e.exports=h;},null);
__d("TimelineConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={DS_LOADED:'timeline-capsule-loaded',DS_COLUMN_HEIGHT_DIFFERENTIAL:'timeline-column-diff-height',FIXED_SIDE_LEFT:'left',FIXED_SIDE_RIGHT:'right',FIXED_SIDE_BOTH:'both',FIXED_SIDE_NONE:'none',SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_LOADING:'TimelineConstants/sectionLoading',SECTION_LOADED:'TimelineConstants/sectionLoaded',SECTION_FULLY_LOADED:'TimelineConstants/sectionFullyLoaded',SECTION_REGISTERED:'TimelineConstants/sectionRegistered',UNIT_SEGMENT_LOADED:'TimelineConstants/unitSegmentLoaded'};e.exports=g;},null);
__d("TimelineLegacySections",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={},h={get:function(i){return g[i]||{};},getAll:function(){return g;},remove:function(i){delete g[i];},removeAll:function(){g={};},set:function(i,j){g[i]=j;}};e.exports=h;},null);
__d("TimelineScrollJankLogger",["Banzai","BanzaiLogger","TimelineScrollJankEventTypes","debounceCore","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l='TimelineScrollJankLoggerConfig',m='timeline_scroll_jank',n=50;function o(event,r,s,t){h.log(l,{event:event,profileid:r,currentsection:t,sessionid:s});}var p=g.isEnabled(m)?j(o,n):k,q={logBottomOut:p.bind(null,i.BOTTOM_OUT)};e.exports=q;},null);
__d("TimelineController",["Arbiter","CSS","DataStore","DOM","DOMQuery","Event","ProfileDOMID","ProfileNavRef","ProfileTabConst","ProfileTabUtils","Run","ScrollingPager","TidyArbiter","TimelineComponentKeys","TimelineConstants","TimelineLegacySections","TimelineScrollJankLogger","TinyViewport","Vector","ViewportBounds","$","csx","forEachObject","ge","queryThenMutateDOM","randomInt","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga){b.__markCompiled&&b.__markCompiled();var ha=358,ia=48,ja=740,ka=1285,la=5,ma='top',na='paddingTop',oa='paddingTop',pa=null,qa=false,ra,sa,ta,ua={},va={},wa=[],xa=null,ya=false,za=false,ab=false,bb=0,cb=y.getViewportDimensions(),db=0,eb=false,fb=false,gb=false;function hb(ub,vb,wb){wb=wb||[];if(ua[ub])return ua[ub][vb].apply(ua[ub],wb);va[ub]=va[ub]||{};va[ub][vb]=wb;return false;}function ib(){if(eb)eb=mb(da('rightCol'),oa,tb.getCurrentScrubber());if(fb)fb=mb(aa(m.ABOVE_HEADER_TIMELINE),ma);if(gb)gb=mb(j.find(document,"div._4f7n"),na);}function jb(){bb=y.getScrollPosition();var ub=bb.y+cb.y,vb=y.getDocumentDimensions().y-ub;if(vb<la)w.logBottomOut(ra,sa);}function kb(){var ub=db===0||bb.y>=db;ib();if(p.tabHasStickyHeader(pa))hb(t.STICKY_HEADER,'toggle',[ub]);hb(t.CONTENT,'checkCurrentSectionChange');}function lb(){ea(jb,kb,'TimelineController/scrollListener');}function mb(ub,vb,wb){if(!ub)return false;if(bb.y<=0){nb(ub,vb);return false;}if(wb&&h.hasClass(wb.getRoot(),'fixed_elem')){nb(ub,vb);return false;}var xb=parseInt(ub.style[vb],10)||0;if(bb.y<xb){h.addClass(ub,'timeline_fixed');ub.style[vb]=bb.y+'px';}else h.removeClass(ub,'timeline_fixed');return true;}function nb(ub,vb){ub.style[vb]='0px';h.removeClass(ub,'timeline_fixed');}function ob(){cb=y.getViewportDimensions();tb.shouldShowWideAds();}function pb(){ea(ob,function(){hb(t.ADS,'adjustAdsType',[ya]);hb(t.ADS,'adjustAdsToFit');hb(t.STICKY_HEADER_NAV,'adjustMenuHeights');},'TimelineController/resize');}function qb(ub,vb){if(ub==='sidebar/initialized')ab=true;hb(t.ADS,'adjustAdsType',[tb.shouldShowWideAds()]);}function rb(event,ub){var vb=y.getScrollPosition();ub=Math.min(ub,vb.y);var wb=da('rightCol');if(wb){wb.style[oa]=ub+'px';eb=true;}var xb=aa(m.ABOVE_HEADER_TIMELINE);if(xb.firstChild){var yb=aa(m.ABOVE_HEADER_TIMELINE_PLACEHOLDER);yb.style.height=xb.offsetHeight+'px';xb.style[ma]=ub+'px';fb=true;}gb=x.isTiny();if(gb)j.find(document,"div._4f7n").style[na]=ub+'px';g.inform('reflow');}function sb(){while(wa.length)wa.pop().remove();ca(ua,function(wb,xb){wb.reset&&wb.reset();});ta.unsubscribe();ta=null;pa=null;ra=null;sa=null;ua={};va={};xa=null;ab=false;qa=false;db=0;fb=false;if(eb){var ub=da('rightCol');if(ub)nb(ub,oa);}eb=false;if(gb){var vb=j.find(document,"div._4f7n");nb(vb,na);gb=false;}i.purge(u.DS_LOADED);i.purge(u.DS_COLUMN_HEIGHT_DIFFERENTIAL);}var tb={init:function(ub,vb,wb){if(qa)return;if(p.isTimelineTab(vb))vb=o.TIMELINE;qa=true;ra=ub;sa=fa(Number.MAX_SAFE_INTEGER).toString();za=wb.is_rhc_redesign;wa.push(l.listen(window,'scroll',lb),l.listen(window,'resize',pb));ta=g.subscribe(['sidebar/initialized','sidebar/show','sidebar/hide','minisidebar/show'],qb);ga(s.subscribe('TimelineCover/coverCollapsed',rb));if(wb.track_profile_nav_ref)n.track();q.onLeave(sb);tb.registerCurrentKey(vb);},setAdsTracking:function(ub){hb(t.ADS,'start',[ub]);},registerCurrentKey:function(ub){pa=ub;xa=ub!==o.MAP&&y.getViewportDimensions().y<ja&&p.tabHasScrubber(ub);var vb=j.find(document,"div._4f7n");xa=xa||vb.offsetTop;hb(t.ADS,'setShortMode',[xa]);hb(t.ADS,'updateCurrentKey',[ub]);hb(t.COVER_NAV,'handleTabChange',[ub]);hb(t.SCRUBBER,'handleTabChange',[ub]);hb(t.ESCAPE_HATCH,'handleTabChange',[ub]);db=p.isTimelineTab(ub)?ha-ia:0;hb(t.STICKY_HEADER,'handleTabChange',[ub]);lb();},getCurrentKey:function(){return pa;},getCurrentScrubber:function(){return ua[t.SCRUBBER];},getCurrentStickyHeaderNav:function(){return ua[t.STICKY_HEADER_NAV];},scrubberHasLoaded:function(ub){h.conditionClass(ub.getRoot(),'fixed_elem',!xa);hb(t.ADS,'registerScrubber',[ub]);},scrubberHasChangedState:function(){hb(t.ADS,'adjustAdsToFit');},scrubberWasClicked:function(ub){hb(t.LOGGING,'logScrubberClick',[ub]);},stickyHeaderNavWasClicked:function(ub){hb(t.LOGGING,'logStickyHeaderNavClick',[ub]);},sectionHasChanged:function(ub,vb){var wb=[ub,vb];hb(t.STICKY_HEADER_NAV,'updateSection',wb);hb(t.SCRUBBER,'updateSection',wb);hb(t.ADS,'loadAdsIfEnoughTimePassed');hb(t.LOGGING,'logSectionChange',wb);},navigateToSection:function(ub){hb(t.CONTENT,'navigateToSection',[ub]);},shouldShowWideAds:function(){if(!ab||za){ya=false;}else{var ub=ka+z.getRight()+z.getLeft();ya=y.getViewportDimensions().x>=ub;}return ya;},sidebarInitialized:function(){return ab;},adjustStickyHeaderWidth:function(){hb(t.STICKY_HEADER,'adjustWidth');},hideStickyHeaderNavSectionMenu:function(){hb(t.STICKY_HEADER_NAV,'hideSectionMenu');},register:function(ub,vb){ua[ub]=vb;if(va[ub]){ca(va[ub],function(wb,xb){hb(ub,xb,wb);});delete va[ub];}},adjustScrollingPagerBuffer:function(ub,vb){var wb=i.get(u.DS_COLUMN_HEIGHT_DIFFERENTIAL,vb);if(wb){var xb=r.getInstance(ub);xb&&xb.setBuffer(xb.getBuffer()+Math.abs(wb));}},runOnceWhenSectionFullyLoaded:function(ub,vb,wb){var xb=v.get(vb),yb=false;if(xb){var zb=k.scry(xb.node,'.fbTimelineCapsule');yb=zb.some(function(bc){var cc=i.get(u.DS_LOADED,bc.id);if(parseInt(cc,10)>=parseInt(wb,10)){ub();return true;}});}if(!yb)var ac=g.subscribe(u.SECTION_FULLY_LOADED,function(bc,cc){if(cc.scrubberKey===vb&&cc.pageIndex===wb){ub();ac.unsubscribe();}});}};e.exports=tb;},null);
__d("TimelineSection",["Arbiter","DOMScroll","DoublyLinkedListMap","Run","TidyArbiterMixin","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=null;function o(){n=null;}function p(q,r,s){"use strict";this.id=q;this.label=s;this.nodeID=r;this._parentSection=null;this.childSections=new i();this._isLoaded=false;setTimeout(p.inform.bind(p,'sectionInitialized/'+q,{section:this},g.BEHAVIOR_STATE),0);}p.prototype.appendSection=function(q){"use strict";this.childSections.append(q.id,q);q._parentSection=this;};p.prototype.freeze=function(){"use strict";this.freezeChildren();};p.prototype.freezeChildren=function(){"use strict";var q=this.childSections.getHead();while(q){!q.isActive()&&q.freeze();q=q.getNext();}};p.prototype.getNext=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getNext(this.id);};p.prototype.getPrev=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getPrev(this.id);};p.prototype.isActive=function(){"use strict";var q=this;while(q){if(q.id===n)return true;q=q._parentSection;}return false;};p.prototype.isLoaded=function(){"use strict";return this._isLoaded;};p.prototype.setIsLoaded=function(q){"use strict";this._isLoaded=q;return this;};p.prototype.scrollTo=function(){"use strict";if(!m(this.nodeID))return;h.scrollTo(this.getNode(),true,false,false,0,h.scrollTo.bind(this).bind(null,this.getNode(),0));};p.prototype.thaw=function(){"use strict";this.thawChildren();};p.prototype.thawChildren=function(){"use strict";var q=this.childSections.getHead();while(q){q.thaw();q=q.getNext();}};p.prototype.getNode=function(){"use strict";throw new Error('This function needs to be implemented in children.');};p.callWithSection=function(q,r){"use strict";this.subscribe('sectionInitialized/'+q,function(s,t){r(t.section);});};p.setActiveSectionID=function(q){"use strict";!n&&j.onLeave(o);n=q;};l(p,k);e.exports=p;},null);
__d("TimelineSmartInsert",["Run","UserAgent_DEPRECATED","Vector"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=100;function k(q){if(q==='viewport')return i.getViewportDimensions().y;return q;}var l=false,m=false;function n(){if(m)return;g.onLeave(o);m=true;}function o(){l=false;m=false;}var p={run:function(q,r,s){n();if(!l||h.ie()<=8){r();return;}var t=q.offsetHeight;r();var u=q.offsetHeight,v=i.getScrollPosition().y,w=i.getElementPosition(q).y;if(u!==t&&w<v&&w+t<v+k(s||j))window.scrollBy(0,u-t);},enable:function(){l=true;}};e.exports=p;},null);