import{_ as t,r as p,o as r,c as i,b as a}from"./index.js";function d(n){return window.go.main.App.ChangeAutomaticMode(n)}function s(n){return window.go.main.App.ChangeBrushFunc(n)}function g(n){return window.go.main.App.ChangeOverMap(n)}const m={name:"Index.vue",data(){return{input1:"",input2:"",input3:""}},methods:{changeAutomaticMode(n){console.log(n),d(n)},changeBrushFunc(n){console.log(n),s(n)},changeOverMap(n){console.log(n),g(n)}}};function c(n,e,h,C,o,V){const u=p("el-input");return r(),i("div",null,[a(u,{modelValue:o.input1,"onUpdate:modelValue":e[0]||(e[0]=l=>o.input1=l),placeholder:"Please input",onChange:n.change1},null,8,["modelValue","onChange"]),a(u,{modelValue:o.input2,"onUpdate:modelValue":e[1]||(e[1]=l=>o.input2=l),placeholder:"Please input",onChange:n.change2},null,8,["modelValue","onChange"]),a(u,{modelValue:o.input3,"onUpdate:modelValue":e[2]||(e[2]=l=>o.input3=l),placeholder:"Please input",onChange:n.change3},null,8,["modelValue","onChange"])])}var v=t(m,[["render",c]]);export{v as default};
