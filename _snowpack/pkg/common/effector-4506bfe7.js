function e(e,t,r,a){(J(e)||K(e))&&('family'in e||'graphite'in e)||B(`${t}: expect ${r} to be a unit (store, event or effect)${a}`);}function t(t,r,a){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n],r,`${n} item of ${a}`,'');else e(t,r,a,' or array of units');}function a({node:e=[],from:t,source:r,parent:a=t||r,to:n,target:o,child:l=n||o,scope:s={},meta:i={},family:f={type:'regular'},regional:c}={}){let u=Fe(a),p=Fe(f.links),d=Fe(f.owners),m=[],h={};for(let t=0;t<e.length;t++){let r=e[t];r&&(m.push(r),Re(r,h));}let g={id:Y(),seq:m,next:Fe(l),meta:i,scope:s,family:{type:f.type||"crosslink",links:p,owners:d},reg:h};for(let e=0;e<p.length;e++)ye(p[e]).push(g);for(let e=0;e<d.length;e++)ke(d[e]).push(g);for(let e=0;e<u.length;e++)u[e].next.push(g);return c&&Ce&&Ae(Se(Ce),[g]),g}function n(e,t,r){let a=Be,n=null,o=He;if(e.target&&(t=e.params,r=e.defer,a='page'in e?e.page:a,e.stack&&(n=e.stack),o=Ne(e)||o,e=e.target),o&&He&&o!==He&&(He=null),Array.isArray(e))for(let r=0;r<e.length;r++)$e('pure',a,ge(e[r]),n,t[r],o);else $e('pure',a,ge(e),n,t,o);if(r&&!Ge)return;let l,s,i,f,c,u,p={isRoot:Ge,currentPage:Be,forkPage:He,isWatch:Ue};Ge=0;e:for(;f=Ee();){let{idx:e,stack:t,type:r}=f;i=t.node,Be=c=t.page,He=Ne(t),u=(c||i).reg;let a={fail:0,scope:i.scope};l=s=0;for(let n=e;n<i.seq.length&&!l;n++){let o=i.seq[n],f=o.data;switch(o.type){case"barrier":{let a=f.barrierID;c&&(a=`${c.fullID}_${a}`);let o=f.priority;if(n!==e||r!==o){Te.has(a)||(Te.add(a),ze(n,t,o,a));continue e}Te.delete(a);break}case'mov':{let e;switch(f.from){case"stack":e=Se(t);break;case"a":case'b':e=t[f.from];break;case"value":e=f.store;break;case I:u[f.store.id]||(t.page=c=Le(c,f.store.id),u=c?c.reg:i.reg),e=pe(u[f.store.id]);}switch(f.to){case"stack":t.value=e;break;case"a":case'b':t[f.to]=e;break;case I:Qe(c,i,f.target.id).current=e;}break}case'check':switch(f.type){case'defined':s=void 0===Se(t);break;case'changed':s=Se(t)===pe(Qe(c,i,f.store.id));}break;case"filter":s=!Ve(a,f,t);break;case'run':if(n!==e||"effect"!==r){ze(n,t,"effect");continue e}case'compute':Ue='watch'===i.meta.op,t.value=Ve(a,f,t),Ue=p.isWatch;}l=a.fail||s;}if(!l)for(let e=0;e<i.next.length;e++)$e('child',c,i.next[e],t,Se(t),Ne(t));}Ge=p.isRoot,Be=p.currentPage,He=Ne(p);}function o(e,t="combine"){let r=t+'(',a='',n=0;for(let t in e){let o=e[t];if(null!=o&&(r+=a,r+=$(o)?o.compositeName.fullName:o.toString()),n+=1,25===n)break;a=', ';}return r+=')',r}function s(e,t){let r,a,n,o=e;return t?(n=t.compositeName,0===e.length?(r=n.path,a=n.fullName):(r=n.path.concat([e]),a=0===n.fullName.length?e:n.fullName+'/'+e)):(r=0===e.length?[]:[e],a=e),{shortName:o,fullName:a,path:r}}function i(e,t){for(let r in e)t(e[r],r);}function f(e,t){e.forEach(t);}function c(e,t){let r=(e,...t)=>Be?((e,t,r,a)=>{let n=Be,o=null;if(t)for(o=Be;o&&o.template!==t;)o=xe(o);Ke(o);let l=e.create(r,a);return Ke(n),l})(r,o,e,t):r.create(e,t);r.graphite=a({meta:ht("event",r,t,e),regional:1}),r.create=e=>(n(He?He.find(r):r,e),e),r.watch=Z(ut,r),r.map=e=>{let t,a;J(e)&&(t=e,a=e.name,e=e.fn);let n=c(Ye(r,a),t);return yt(r,n,E,e),n},r.filter=e=>kt(r,"filter",e.fn?e:e.fn,[se({fn:he})]),r.filterMap=e=>kt(r,'filterMap',e,[le({fn:he}),oe.defined()]),r.prepend=e=>{let t=c('* → '+r.shortName,{parent:xe(r)});return yt(t,r,'prepend',e),mt(r,t),t};let o=je();return r}function u(e,r){function o(e,t){p.off(e),qe(p).set(e,st(bt(e,p,'on',1,t,m)));}let l=ue(e),s=ue(e),i=gt('updates'),f=je();l.after=[{type:'copy',to:s}],f;let c=l.id,p={subscribers:new Map,updates:i,defaultState:e,stateRef:l,getState(){let e,t=l;if(Be){let t=Be;for(;t&&!t.reg[c];)t=xe(t);t&&(e=t);}return !e&&He&&He.reg[c]&&(e=He),e&&(t=e.reg[c]),pe(t)},setState(e){let t;He&&(t=He.nodeMap[ge(p).id]),t||(t=p),n({target:t,params:e,defer:1});},reset(...e){for(let t of e)p.on(t,(()=>p.defaultState));return p},on(e,r){if(t(e,'.on','first argument'),Array.isArray(e))for(let t of e)o(t,r);else o(e,r);return p},off(e){let t=qe(p).get(e);return t&&(t(),qe(p).delete(e)),p},map(e,t){let r,a,n;J(e)&&(r=e,a=e.name,t=e.firstState,e=e.fn);let o=p.getState();void 0!==o&&(n=e(o,t));let i=u(n,{name:Ye(p,a),config:r,strict:0});bt(p,i,E,0,e);return be(i).before=[{type:E,fn:e,from:l}],i},watch(e,t){if(!t||!$(e)){let t=ut(p,e);return e(p.getState()),t}return K(t)||B('second argument should be a function'),e.watch((e=>t(p.getState(),e)))}},d=ht(I,p,r),m=p.defaultConfig.updateFilter;return p.graphite=a({scope:{state:l},node:[oe.defined(),oe.changed({store:s}),m&&ne({store:s,to:"a"}),m&&se({fn:(e,t,{a:r})=>m(e,r)}),fe({store:l}),fe({store:s})],child:i,meta:d,regional:1}),dt&&void 0===e&&B("current state can't be undefined, use null instead"),Ae(p,[i]),p}function p(...e){let t,r,a;Ze(e[0],((t,r)=>{a=t,e=r;}));let n,o,l=e[e.length-1];if(K(l)?(r=e.slice(0,-1),t=l):r=e,1===r.length){let e=r[0];W(e)||(n=e,o=1);}return o||(n=r,t&&(t=vt(t))),J(n)||B('shape should be an object'),wt(Array.isArray(n),n,a,t)}function d(){let e={};return e.req=new Promise(((t,r)=>{e.rs=t,e.rj=r;})),e.req.catch((()=>{})),e}function m(e,t){let r=c(e,t),o=r.defaultConfig.handler||(()=>B("no handler used in "+r.getType())),l=ge(r);l.meta.onCopy=['runner'],l.meta.unit=r.kind="effect",r.use=e=>(K(e)||B('.use argument should be a function'),o=e,r);let s=r.finally=gt('finally'),i=r.done=s.filterMap({named:'done',fn({status:e,params:t,result:r}){if('done'===e)return {params:t,result:r}}}),f=r.fail=s.filterMap({named:'fail',fn({status:e,params:t,error:r}){if('fail'===e)return {params:t,error:r}}}),p=r.doneData=i.map({named:'doneData',fn:({result:e})=>e}),m=r.failData=f.map({named:'failData',fn:({error:e})=>e}),h=a({scope:{getHandler:r.use.getCurrent=()=>o,finally:s},node:[ie({fn({params:e,req:t},{finally:r,getHandler:a},n){let o,l=St({params:e,req:t,ok:1,anyway:r,stack:n}),s=St({params:e,req:t,ok:0,anyway:r,stack:n});try{o=a()(e);}catch(e){return void s(e)}J(o)&&K(o.then)?o.then(l,s):l(o);}})],meta:{op:'fx',fx:'runner',onCopy:['finally']}});l.scope.runner=h,l.seq.push(le({fn:(e,t,r)=>xe(r)?{params:e,req:{rs(e){},rj(e){}}}:e}),ie({fn:(e,{runner:t},r)=>(n({target:t,params:e,defer:1,forkPage:Ne(r)}),e.params)})),r.create=e=>{let t=d(),a={params:e,req:t};if(He){if(!Ue){let e=He;t.req.finally((()=>{Je(e);})).catch((()=>{}));}n(He.find(r),a);}else n(r,a);return t.req};let g=r.inFlight=u(0,{named:'inFlight'}).on(r,(e=>e+1)).on(s,(e=>e-1)),y=r.pending=g.map({fn:e=>e>0,named:'pending'});return Ae(r,[s,i,f,p,m,y,g,h]),r}function g(...e){let[[t,r],a]=et(e),n={};return i(r,((e,r)=>{let o=n[r]=c(r,{parent:xe(t),config:a});t.on(o,e),mt(t,o);})),n}function b(e,r){let a=c(r||o(e,'merge'));return t(e,'merge','first argument'),ct({from:e,to:a,meta:{op:'merge'}}),a}function v(...e){let r,n,o,l,[[s,i,d],m]=et(e);void 0===i&&J(s)&&(e=>{let t=0;return f(Nt,(r=>{r in e&&(null==e[r]&&B(`sample: ${r} should be defined`),t=1);})),t})(s)&&(i=s.clock,d=s.fn,l=s.greedy,r=s.target,n=s.name,o=s.sid,s=s.source);let h=1;void 0===s&&(t(i,'sample','clock'),Array.isArray(i)&&(i=b(i)),s=i,h=0),h&&!$(s)&&(s=p(s)),void 0===i&&(i=s),t(i,'sample','clock'),n=m||n||s.shortName;let g=je(),y=!!r;r||(W(s)&&W(i)?r=u(d?d(pe(be(s)),pe(be(i))):pe(be(s)),{name:n,sid:o}):(r=c(n),g));let k=y&&$(r)&&ge(r).meta.nativeTemplate;if(W(s)){let e=be(s);Ae(s,[ft(i,r,{scope:{fn:d,targetTemplate:k},node:[g,!l&&ae({priority:"sampler"}),ne({store:e,to:d?"a":"stack"}),d&&le({fn:me}),g],meta:{op:"sample",sample:I}})]),g;}else {let e=ue(0),t=ue(),n=ue();a({parent:s,node:[fe({store:t}),ne({from:"value",store:1,target:e})],family:{owners:[s,r,i],links:r},meta:{op:"sample",sample:'source'},regional:1}),Ae(s,[ft(i,r,{scope:{fn:d,targetTemplate:k},node:[g,fe({store:n}),ne({store:e}),se({fn:e=>e}),!l&&ae({priority:"sampler"}),ne({store:t}),ne({store:n,to:"a"}),d&&le({fn:de}),g],meta:{op:"sample",sample:'clock'}})]);}return r}function w(...e){let r={op:'guard'},n='guard',[[o,l],s]=et(e);s&&(r.config=s,s.name&&(n=s.name)),l||(l=o,o=l.source);let{filter:i,greedy:f,clock:u,name:d=n}=l,m=l.target||c(d,r.config),h=$(i),g=1;return void 0===o&&(t(u,'guard','clock'),Array.isArray(u)&&(u=b(u)),o=u,g=0),g&&!$(o)&&(o=p(o)),u&&(t(u,'guard','clock'),o=v({source:o,clock:u,greedy:f,fn:h?null:(e,t)=>({source:e,clock:t})})),t(m,'guard','target'),h?v({source:i,clock:o,target:a({node:[se({fn:({guard:e})=>e}),le({fn:({data:e})=>e})],child:m,meta:r,family:{owners:[o,i,m,...[].concat(u||[])],links:m},regional:1}),fn:(e,t)=>({guard:e,data:t}),greedy:f,name:d}):(K(i)||B('`filter` should be function or unit'),ft(o,m,{scope:{fn:i},node:u?[se({fn:({source:e,clock:t},{fn:r})=>r(e,t)}),le({fn:({source:e})=>e})]:[se({fn:he})],meta:r})),m}function S(e,t,r){if(W(e))return e;if($(e)){let a,n=xe(e);return T(e)&&(a=u(t,{parent:n,name:e.shortName,ɔ:r}).on(e,((e,t)=>t))),H(e)&&(a=u(t,{parent:n,name:e.shortName,ɔ:r}).on(e.done,((e,{result:t})=>t))),n&&n.hooks.store(a),a}let a=Array.isArray(e)?[]:{};return i(e,((e,t)=>{a[t]=W(e)?e:u(e,{name:t});})),a}let _='undefined'!=typeof Symbol&&Symbol.observable||'@@observable',I='store',M='effect',E='map',$=e=>(K(e)||J(e))&&'kind'in e;const z=e=>t=>$(t)&&t.kind===e;let W=z(I),T=z("event"),H=z(M),G=z("domain");var U={__proto__:null,unit:$,store:W,event:T,effect:H,domain:G};let B=e=>{throw Error(e)},J=e=>'object'==typeof e&&null!==e,K=e=>'function'==typeof e,L=e=>{J(e)||K(e)||B('expect first argument be an object');};const Q=()=>{let e=0;return ()=>(++e).toString(36)};let V=Q(),X=Q(),Y=Q(),Z=(e,t)=>e.bind(null,t),ee=(e,t,r)=>e.bind(null,t,r);const te=(e,t,r)=>({id:X(),type:e,data:r,hasRef:t});let re=0,ae=({priority:e="barrier"})=>te("barrier",0,{barrierID:++re,priority:e}),ne=({from:e=I,store:t,target:r,to:a=(r?I:"stack")})=>te('mov',e===I,{from:e,store:t,to:a,target:r}),oe={defined:()=>te('check',0,{type:'defined'}),changed:({store:e})=>te('check',1,{type:'changed',store:e})},le=ee(te,'compute',0),se=ee(te,"filter",0),ie=ee(te,'run',0),fe=({store:e})=>ne({from:"stack",target:e});let ue=e=>({id:X(),current:e}),pe=({current:e})=>e,de=(e,{fn:t},{a:r})=>t(e,r),me=(e,{fn:t},{a:r})=>t(r,e),he=(e,{fn:t})=>t(e),ge=e=>e.graphite||e,ye=e=>e.family.owners,ke=e=>e.family.links,be=e=>e.stateRef,ve=e=>e.config,we=e=>e.ɔ,Se=e=>e.value,qe=e=>e.subscribers,xe=e=>e.parent,Ne=e=>e.forkPage,Ae=(e,t)=>{let r=ge(e);for(let e=0;e<t.length;e++){let a=ge(t[e]);"domain"!==r.family.type&&(a.family.type="crosslink"),ye(a).push(r),ke(r).push(a);}},Ce=null,je=()=>Ce,Oe=e=>(e&&Ce&&Ce.sidRoot&&(e=`${Ce.sidRoot}ɔ${e}`),e);const Fe=(e=[])=>{let t=[];if(Array.isArray(e))for(let r=0;r<e.length;r++)Array.isArray(e[r])?t.push(...e[r]):t.push(e[r]);else t.push(e);return t.map(ge)};let Re=({hasRef:e,type:t,data:r},a)=>{let n;e&&(n=r.store,a[n.id]=n),'mov'===t&&r.to===I&&(n=r.target,a[n.id]=n);},De=null;const _e=(e,t)=>{if(!e)return t;if(!t)return e;let r,a=e.v.type===t.v.type;return (a&&e.v.id>t.v.id||!a&&"sampler"===e.v.type)&&(r=e,e=t,t=r),r=_e(e.r,t),e.r=e.l,e.l=r,e},Ie=[];let Me=0;for(;Me<5;)Ie.push({first:null,last:null,size:0}),Me+=1;const Ee=()=>{for(let e=0;e<5;e++){let t=Ie[e];if(t.size>0){if(2===e||3===e){t.size-=1;let e=De.v;return De=_e(De.l,De.r),e}1===t.size&&(t.last=null);let r=t.first;return t.first=r.r,t.size-=1,r.v}}},$e=(e,t,r,a,n,o)=>ze(0,{a:null,b:null,node:r,parent:a,value:n,page:t,forkPage:o},e),ze=(e,t,r,a=0)=>{let n=We(r),o=Ie[n],l={v:{idx:e,stack:t,type:r,id:a},l:0,r:0};2===n||3===n?De=_e(De,l):(0===o.size?o.first=l:o.last.r=l,o.last=l),o.size+=1;},We=e=>{switch(e){case'child':return 0;case'pure':return 1;case"barrier":return 2;case"sampler":return 3;case M:return 4;default:return -1}},Te=new Set;let He,Ge=1,Ue=0,Be=null,Je=e=>{He=e;},Ke=e=>{Be=e;};const Le=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=xe(e);if(e)return e}return null},Qe=(e,t,r)=>(Le(e,r)||t).reg[r],Ve=(e,{fn:t},r)=>{try{return t(Se(r),e.scope,r)}catch(t){console.error(t),e.fail=1;}};let Xe=(e,t)=>''+e.shortName+t,Ye=(e,t)=>null==t?Xe(e,' → *'):t,Ze=(e,t)=>{L(e),we(e)&&t(ve(e),we(e));},et=e=>{let t;return Ze(e[0],((r,a)=>{t=r,e=a;})),[e,t]},rt=(e,t)=>{let r=e.indexOf(t);-1!==r&&e.splice(r,1);};const at=(e,t)=>{rt(e.next,t),rt(ye(e),t),rt(ke(e),t);},nt=(e,t,r)=>{let a;e.next.length=0,e.seq.length=0,e.scope=null;let n=ke(e);for(;a=n.pop();)at(a,e),(t||r&&!e.meta.sample||"crosslink"===a.family.type)&&nt(a,t,'on'!==a.meta.op&&r);for(n=ye(e);a=n.pop();)at(a,e),r&&"crosslink"===a.family.type&&nt(a,t,'on'!==a.meta.op&&r);},ot=e=>e.clear();let lt=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),W(e))ot(qe(e));else if(G(e)){r=1;let t=e.history;ot(t.events),ot(t.effects),ot(t.stores),ot(t.domains);}nt(ge(e),!!t,r);},st=e=>{let t=ee(lt,e,void 0);return t.unsubscribe=t,t},ft=(e,t,{node:r,scope:n,meta:o})=>a({node:r,parent:e,child:t,scope:n,meta:o,family:{owners:[e,t],links:t},regional:1}),ct=e=>{let r;Ze(e,((t,a)=>{r=t,e=a;}));let{from:n,to:o,meta:l={op:'forward'}}=e;return t(n,'forward','"from"'),t(o,'forward','"to"'),r&&(l.config=r),st(a({parent:n,child:o,meta:l,family:{},regional:1}))},ut=(e,t)=>{if(K(t)||B('.watch argument should be a function'),He){let t=He.nodeMap[ge(e).id];t&&(e=t);}return st(a({scope:{fn:t},node:[ie({fn:he})],parent:e,meta:{op:'watch'},family:{owners:e},regional:1}))};const pt=(e,t)=>(J(e)&&(pt(ve(e),t),null!=e.name&&(J(e.name)?pt(e.name,t):K(e.name)?t.handler=e.name:t.name=e.name),e.loc&&(t.loc=e.loc),(e.sid||null===e.sid)&&(t.sid=e.sid),e.handler&&(t.handler=e.handler),e.updateFilter&&(t.updateFilter=e.updateFilter),xe(e)&&(t.parent=xe(e)),'strict'in e&&(t.strict=e.strict),e.named&&(t.named=e.named),pt(we(e),t)),t);let dt,mt=(e,t,r="event")=>{xe(e)&&xe(e).hooks[r](t);},ht=(e,t,r,a)=>{let n=pt({name:a,config:r},{}),o="domain"===e,l=V(),{parent:i=null,sid:f=null,strict:c=1,named:u=null}=n,p=u||n.name||(o?'':l),d=s(p,i),m={unit:t.kind=e,name:t.shortName=p,sid:t.sid=Oe(f),named:u,unitId:t.id=l};if(t.parent=i,t.compositeName=d,t.defaultConfig=n,t.thru=e=>e(t),t.getType=()=>d.fullName,!o){t.subscribe=e=>(L(e),t.watch(K(e)?e:t=>{e.next&&e.next(t);})),t[_]=()=>t;}return dt=c,m},gt=e=>c({named:e});const yt=(e,t,r,a)=>ft(e,t,{scope:{fn:a},node:[le({fn:he})],meta:{op:r}}),kt=(e,t,r,a)=>{let n;J(r)&&(n=r,r=r.fn);let o=c(Xe(e,' →? *'),n);return ft(e,o,{scope:{fn:r},node:a,meta:{op:t}}),o},bt=(e,t,r,a,n,o)=>{let l=be(t),s=[ne({store:l,to:"a"}),le({fn:a?me:de}),oe.defined(),oe.changed({store:l}),o&&se({fn:(e,t,{a:r})=>o(e,r)}),fe({store:l})];return ft(e,t,{scope:{fn:n},node:s,meta:{op:r}})},vt=e=>t=>e(...t),wt=(e,t,r,a)=>{let n=e?e=>e.slice():e=>({...e}),l=e?[]:{},s=je(),f=n(l),c=ue(f),p=ue(1);c.type=e?'list':'shape',s;let d=u(f,{name:r||o(t)});ge(d).meta.isCombine=1;let m=[oe.defined(),ne({store:c,to:"a"}),se({fn:(e,{key:t},{a:r})=>e!==r[t]}),ne({store:p,to:'b'}),le({fn(e,{clone:t,key:r},a){a.b&&(a.a=t(a.a)),a.a[r]=e;}}),ne({from:"a",target:c}),ne({from:"value",store:0,target:p}),ae({priority:"barrier"}),ne({from:"value",store:1,target:p}),ne({store:c}),a&&le({fn:a}),oe.changed({store:be(d)})],h=c.before=[];return i(t,((e,t)=>{if(!W(e))return void(f[t]=l[t]=e);l[t]=e.defaultState,f[t]=e.getState();ft(e,d,{scope:{key:t,clone:n},node:m,meta:{op:'combine'}});let a=be(e);h.push({type:'field',field:t,from:a}),s;})),d.defaultShape=t,c.after=[a?{type:E,to:be(d),fn:a}:{type:'copy',to:be(d)}],(d.defaultState=a?be(d).current=a(f):l),d};let St=({params:e,req:t,ok:r,anyway:a,stack:o})=>l=>n({target:[a,qt],params:[r?{status:'done',params:e,result:l}:{status:'fail',params:e,error:l},{fn:r?t.rs:t.rj,value:l}],defer:1,page:o.page,forkPage:Ne(o)}),qt=a({node:[ie({fn({fn:e,value:t}){e(t);}})],meta:{op:'fx',fx:'sidechain'}});const Nt=['source','clock','target'];

export { S, U, ct as a, c, g, m, p, u, v, w };
