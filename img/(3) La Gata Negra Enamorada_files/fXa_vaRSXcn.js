/*!CK:3753235663!*//*1427128122,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["pR8hT"]); }

__d("ExtendedMultiShareCarouselPagerArrowsVisible",["Animation","CSS","DOMQuery","Ease","Event","Locale","TidyArbiterMixin","TrackingNodes","TrackingNodeTypes","cx","csx","mixin","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t=212,u=70,v=6,w=2,x=350,y=r(m);for(var z in y)if(y.hasOwnProperty(z))ba[z]=y[z];var aa=y===null?null:y.prototype;ba.prototype=Object.create(aa);ba.prototype.constructor=ba;ba.__superConstructor__=y;function ba(ca){"use strict";this.$ExtendedMultiShareCarouselPagerArrowsVisible0=ca.node;this.$ExtendedMultiShareCarouselPagerArrowsVisible1=ca.grid;this.$ExtendedMultiShareCarouselPagerArrowsVisible2=ca.prev_pager;this.$ExtendedMultiShareCarouselPagerArrowsVisible3=ca.next_pager;this.$ExtendedMultiShareCarouselPagerArrowsVisible4=ca.disable_pager_arrow_timeout;this.$ExtendedMultiShareCarouselPagerArrowsVisible5=0;this.$ExtendedMultiShareCarouselPagerArrowsVisible6=12;this.$ExtendedMultiShareCarouselPagerArrowsVisible7=l.isRTL()?'right':'left';this.$ExtendedMultiShareCarouselPagerArrowsVisible1.style[this.$ExtendedMultiShareCarouselPagerArrowsVisible7]=this.$ExtendedMultiShareCarouselPagerArrowsVisible6+'px';this.$ExtendedMultiShareCarouselPagerArrowsVisible8();ca.extensions.forEach(function(da){da.init(this);},this);this.subscribe('autoscroll',this.$ExtendedMultiShareCarouselPagerArrowsVisible9.bind(this));s([k.listen(this.$ExtendedMultiShareCarouselPagerArrowsVisible2,'click',this.$ExtendedMultiShareCarouselPagerArrowsVisiblea.bind(this)),k.listen(this.$ExtendedMultiShareCarouselPagerArrowsVisible3,'click',this.$ExtendedMultiShareCarouselPagerArrowsVisible9.bind(this))]);this.init_pagers();}ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisibleb=function(){"use strict";return this.$ExtendedMultiShareCarouselPagerArrowsVisible1.childNodes.length-this.getLastVisibleIndex();};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisiblec=function(){"use strict";return this.$ExtendedMultiShareCarouselPagerArrowsVisible5;};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisibled=function(){"use strict";return this.$ExtendedMultiShareCarouselPagerArrowsVisiblec()>0;};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisiblee=function(){"use strict";return this.$ExtendedMultiShareCarouselPagerArrowsVisibleb()>0;};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible9=function(){"use strict";if(!this.$ExtendedMultiShareCarouselPagerArrowsVisiblee())return;this.$ExtendedMultiShareCarouselPagerArrowsVisiblef(1,this.$ExtendedMultiShareCarouselPagerArrowsVisibled());this.$ExtendedMultiShareCarouselPagerArrowsVisible8();};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisiblea=function(){"use strict";if(!this.$ExtendedMultiShareCarouselPagerArrowsVisibled())return;this.$ExtendedMultiShareCarouselPagerArrowsVisiblef(-1,this.$ExtendedMultiShareCarouselPagerArrowsVisiblee());this.$ExtendedMultiShareCarouselPagerArrowsVisible8();};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisibleg=function(){"use strict";return this.$ExtendedMultiShareCarouselPagerArrowsVisiblee()&&this.$ExtendedMultiShareCarouselPagerArrowsVisibled();};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible8=function(){"use strict";if(this.$ExtendedMultiShareCarouselPagerArrowsVisiblee())n.addDataAttribute(this.$ExtendedMultiShareCarouselPagerArrowsVisible3,o.MULTI_ATTACHMENT_PAGER_NEXT,this.getLastVisibleIndex()+1);};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisibleh=function(ca){"use strict";var da=ca?"_3dm4":"_3dm5",ea=ca?"_3rvy":"_3rv-",fa=ca?this.$ExtendedMultiShareCarouselPagerArrowsVisibled():this.$ExtendedMultiShareCarouselPagerArrowsVisiblee(),ga=!this.$ExtendedMultiShareCarouselPagerArrowsVisibleg()&&!fa;if(ga){h.addClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible0,ea);setTimeout(function(){h.addClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible0,da);}.bind(this),this.$ExtendedMultiShareCarouselPagerArrowsVisible4);}else{h.removeClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible0,ea);h.removeClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible0,da);}};ba.prototype.getLastVisibleIndex=function(){"use strict";return this.$ExtendedMultiShareCarouselPagerArrowsVisible5+w;};ba.prototype.init_pagers=function(){"use strict";h.conditionClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible0,"_3dm4",!this.$ExtendedMultiShareCarouselPagerArrowsVisibled());};ba.prototype.refresh=function(){"use strict";this.$ExtendedMultiShareCarouselPagerArrowsVisibleh(true);this.$ExtendedMultiShareCarouselPagerArrowsVisibleh(false);h.conditionClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible0,"_3o-b",this.$ExtendedMultiShareCarouselPagerArrowsVisibleg());};ba.prototype.getID=function(){"use strict";var ca=i.find(this.$ExtendedMultiShareCarouselPagerArrowsVisible0,"^._5pat");return ca.id;};ba.prototype.$ExtendedMultiShareCarouselPagerArrowsVisiblef=function(ca,da){"use strict";this.$ExtendedMultiShareCarouselPagerArrowsVisible5+=ca;var ea=(u+v)/2;if(da&&this.$ExtendedMultiShareCarouselPagerArrowsVisibleg())ea=v;if(!da&&!this.$ExtendedMultiShareCarouselPagerArrowsVisibleg())ea=u;ea=-ca*ea;var fa=ca*t;this.$ExtendedMultiShareCarouselPagerArrowsVisible6-=fa+ea;var ga=this.$ExtendedMultiShareCarouselPagerArrowsVisible0;h.addClass(ga,"_3dm6");new g(this.$ExtendedMultiShareCarouselPagerArrowsVisible1).to(this.$ExtendedMultiShareCarouselPagerArrowsVisible7,this.$ExtendedMultiShareCarouselPagerArrowsVisible6).duration(x).ease(j.sineOut).ondone(function(){h.removeClass(ga,"_3dm6");this.refresh();}.bind(this)).go();};e.exports=ba;},null);
__d("XDeveloperExplorerAppTokenController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/tools\/explorer\/app-token\/",{});},null);