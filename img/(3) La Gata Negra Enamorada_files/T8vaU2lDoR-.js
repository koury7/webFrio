/*!CK:4109873504!*//*1425876700,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["sTTYn"]); }

__d("HighConfidenceSuggestionLogger",["AsyncSignal","SuggestionLoggingParamNames"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={log:function(j,k,l,m){var n={};n[h.USER_ACTION]=j;n[h.CONFIG]=k;n[h.SUGGESTION]=JSON.stringify(l);n[h.COMPOSER_SESSION_ID]=m;if(n[h.SUGGESTION].length)new g('/suggestion/log',n).send();}};e.exports=i;},null);