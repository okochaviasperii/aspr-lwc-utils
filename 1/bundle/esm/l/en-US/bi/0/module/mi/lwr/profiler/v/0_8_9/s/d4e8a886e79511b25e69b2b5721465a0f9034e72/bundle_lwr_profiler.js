var o;(function(t){t[t.Start=0]="Start",t[t.End=1]="End"})(o||(o={}));let e;function u(t){e=t}const n=globalThis.performance,s=typeof n!="undefined"&&typeof n.mark=="function"&&typeof n.clearMarks=="function"&&typeof n.measure=="function"&&typeof n.clearMeasures=="function";function p({id:t,specifier:a}){e?e({id:t,phase:o.Start,specifier:a}):s&&n.mark(t+(a?`.${a}`:""))}function l({id:t,specifier:a}){if(e)e({id:t,phase:o.End,specifier:a});else if(s){const r=a?`.${a}`:"",f=t+r,c=`${t}.duration${r}`;n.measure(c,f),n.clearMarks(f),n.clearMeasures(c)}}export{u as attachDispatcher,l as logOperationEnd,p as logOperationStart};
