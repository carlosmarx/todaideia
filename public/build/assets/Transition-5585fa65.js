import{R as v,c as D,r as y,a as T}from"./app-a7394f50.js";function $(){return $=Object.assign?Object.assign.bind():function(s){for(var a=1;a<arguments.length;a++){var u=arguments[a];for(var t in u)Object.prototype.hasOwnProperty.call(u,t)&&(s[t]=u[t])}return s},$.apply(this,arguments)}function V(s,a){if(s==null)return{};var u={},t=Object.keys(s),n,e;for(e=0;e<t.length;e++)n=t[e],!(a.indexOf(n)>=0)&&(u[n]=s[n]);return u}function k(s,a){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},k(s,a)}function W(s,a){s.prototype=Object.create(a.prototype),s.prototype.constructor=s,k(s,a)}function q(s,a){return s.classList?!!a&&s.classList.contains(a):(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+a+" ")!==-1}function z(s,a){s.classList?s.classList.add(a):q(s,a)||(typeof s.className=="string"?s.className=s.className+" "+a:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+a))}function G(s,a){return s.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function B(s,a){s.classList?s.classList.remove(a):typeof s.className=="string"?s.className=G(s.className,a):s.setAttribute("class",G(s.className&&s.className.baseVal||"",a))}const w={disabled:!1},H=v.createContext(null);var K=function(a){return a.scrollTop},S="unmounted",x="exited",m="entering",g="entered",A="exiting",h=function(s){W(a,s);function a(t,n){var e;e=s.call(this,t,n)||this;var i=n,r=i&&!i.isMounting?t.enter:t.appear,o;return e.appearStatus=null,t.in?r?(o=x,e.appearStatus=m):o=g:t.unmountOnExit||t.mountOnEnter?o=S:o=x,e.state={status:o},e.nextCallback=null,e}a.getDerivedStateFromProps=function(n,e){var i=n.in;return i&&e.status===S?{status:x}:null};var u=a.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(n){var e=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==m&&i!==g&&(e=m):(i===m||i===g)&&(e=A)}this.updateStatus(!1,e)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var n=this.props.timeout,e,i,r;return e=i=r=n,n!=null&&typeof n!="number"&&(e=n.exit,i=n.enter,r=n.appear!==void 0?n.appear:i),{exit:e,enter:i,appear:r}},u.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:D.findDOMNode(this);i&&K(i)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===x&&this.setState({status:S})},u.performEnter=function(n){var e=this,i=this.props.enter,r=this.context?this.context.isMounting:n,o=this.props.nodeRef?[r]:[D.findDOMNode(this),r],l=o[0],p=o[1],f=this.getTimeouts(),E=r?f.appear:f.enter;if(!n&&!i||w.disabled){this.safeSetState({status:g},function(){e.props.onEntered(l)});return}this.props.onEnter(l,p),this.safeSetState({status:m},function(){e.props.onEntering(l,p),e.onTransitionEnd(E,function(){e.safeSetState({status:g},function(){e.props.onEntered(l,p)})})})},u.performExit=function(){var n=this,e=this.props.exit,i=this.getTimeouts(),r=this.props.nodeRef?void 0:D.findDOMNode(this);if(!e||w.disabled){this.safeSetState({status:x},function(){n.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:A},function(){n.props.onExiting(r),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:x},function(){n.props.onExited(r)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},u.setNextCallback=function(n){var e=this,i=!0;return this.nextCallback=function(r){i&&(i=!1,e.nextCallback=null,n(r))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},u.onTransitionEnd=function(n,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:D.findDOMNode(this),r=n==null&&!this.props.addEndListener;if(!i||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],l=o[0],p=o[1];this.props.addEndListener(l,p)}n!=null&&setTimeout(this.nextCallback,n)},u.render=function(){var n=this.state.status;if(n===S)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var r=V(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return v.createElement(H.Provider,{value:null},typeof i=="function"?i(n,r):v.cloneElement(v.Children.only(i),r))},a}(v.Component);h.contextType=H;h.propTypes={};function C(){}h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};h.UNMOUNTED=S;h.EXITED=x;h.ENTERING=m;h.ENTERED=g;h.EXITING=A;const J=h;var Q=function(a,u){return a&&u&&u.split(" ").forEach(function(t){return z(a,t)})},L=function(a,u){return a&&u&&u.split(" ").forEach(function(t){return B(a,t)})},I=function(s){W(a,s);function a(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return t=s.call.apply(s,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(r,o){var l=t.resolveArguments(r,o),p=l[0],f=l[1];t.removeClasses(p,"exit"),t.addClass(p,f?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(r,o)},t.onEntering=function(r,o){var l=t.resolveArguments(r,o),p=l[0],f=l[1],E=f?"appear":"enter";t.addClass(p,E,"active"),t.props.onEntering&&t.props.onEntering(r,o)},t.onEntered=function(r,o){var l=t.resolveArguments(r,o),p=l[0],f=l[1],E=f?"appear":"enter";t.removeClasses(p,E),t.addClass(p,E,"done"),t.props.onEntered&&t.props.onEntered(r,o)},t.onExit=function(r){var o=t.resolveArguments(r),l=o[0];t.removeClasses(l,"appear"),t.removeClasses(l,"enter"),t.addClass(l,"exit","base"),t.props.onExit&&t.props.onExit(r)},t.onExiting=function(r){var o=t.resolveArguments(r),l=o[0];t.addClass(l,"exit","active"),t.props.onExiting&&t.props.onExiting(r)},t.onExited=function(r){var o=t.resolveArguments(r),l=o[0];t.removeClasses(l,"exit"),t.addClass(l,"exit","done"),t.props.onExited&&t.props.onExited(r)},t.resolveArguments=function(r,o){return t.props.nodeRef?[t.props.nodeRef.current,r]:[r,o]},t.getClassNames=function(r){var o=t.props.classNames,l=typeof o=="string",p=l&&o?o+"-":"",f=l?""+p+r:o[r],E=l?f+"-active":o[r+"Active"],O=l?f+"-done":o[r+"Done"];return{baseClassName:f,activeClassName:E,doneClassName:O}},t}var u=a.prototype;return u.addClass=function(n,e,i){var r=this.getClassNames(e)[i+"ClassName"],o=this.getClassNames("enter"),l=o.doneClassName;e==="appear"&&i==="done"&&l&&(r+=" "+l),i==="active"&&n&&K(n),r&&(this.appliedClasses[e][i]=r,Q(n,r))},u.removeClasses=function(n,e){var i=this.appliedClasses[e],r=i.base,o=i.active,l=i.done;this.appliedClasses[e]={},r&&L(n,r),o&&L(n,o),l&&L(n,l)},u.render=function(){var n=this.props;n.classNames;var e=V(n,["classNames"]);return v.createElement(J,$({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(v.Component);I.defaultProps={classNames:""};I.propTypes={};const Y=I,X=v.createContext({parent:{}});function Z(){const s=y.useRef(!0);return y.useEffect(()=>{s.current=!1},[]),s.current}function F({show:s,enter:a="",enterStart:u="",enterEnd:t="",leave:n="",leaveStart:e="",leaveEnd:i="",appear:r,unmountOnExit:o,tag:l="div",children:p,...f}){const E=a.split(" ").filter(c=>c.length),O=u.split(" ").filter(c=>c.length),P=t.split(" ").filter(c=>c.length),M=n.split(" ").filter(c=>c.length),j=e.split(" ").filter(c=>c.length),U=i.split(" ").filter(c=>c.length),b=o;function R(c,N){N.length&&c.classList.add(...N)}function _(c,N){N.length&&c.classList.remove(...N)}const d=v.useRef(null);return T(Y,{appear:r,nodeRef:d,unmountOnExit:b,in:s,addEndListener:c=>{d.current.addEventListener("transitionend",c,!1)},onEnter:()=>{b||(d.current.style.display=null),R(d.current,[...E,...O])},onEntering:()=>{_(d.current,O),R(d.current,P)},onEntered:()=>{_(d.current,[...P,...E])},onExit:()=>{R(d.current,[...M,...j])},onExiting:()=>{_(d.current,j),R(d.current,U)},onExited:()=>{_(d.current,[...U,...M]),b||(d.current.style.display="none")},children:T(l,{ref:d,...f,style:{display:b?null:"none"},children:p})})}function nt({show:s,appear:a,...u}){const{parent:t}=y.useContext(X),n=Z();return s===void 0?T(F,{appear:t.appear||!t.isInitialRender,show:t.show,...u}):T(X.Provider,{value:{parent:{show:s,isInitialRender:n,appear:a}},children:T(F,{appear:a,show:s,...u})})}export{nt as default};
