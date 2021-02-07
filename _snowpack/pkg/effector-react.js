import { r as react } from './common/index-4f86a9c5.js';
import { U } from './common/effector-4506bfe7.js';
import './common/_commonjsHelpers-668e6127.js';

function e(e){U.store(e)||g('expect useStore argument to be a store');let t=react.useRef(e),n=react.useState(e.getState())[1];return h((()=>(t.current===e&&n(e.getState()),t.current=e,e.updates.watch(n))),[e]),e.getState()}let h='undefined'!=typeof window?react.useLayoutEffect:react.useEffect,g=e=>{throw Error(e)};

export { e as useStore };
