import{j as a}from"./jsx-runtime-vNq4Oc-g.js";var n=(e=>(e.TASK_ARCHIVED="TASK_ARCHIVED",e.TASK_PINNED="TASK_PINNED",e.TASK_INBOX="TASK_INBOX",e))(n||{});function c({task:{id:e,title:i,state:o},onArchiveTask:S,onPinTask:g}){return a.jsxs("div",{className:`list-item ${o}`,children:[a.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[a.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:o==="TASK_ARCHIVED"}),a.jsx("span",{className:"checkbox-custom",onClick:()=>S(e)})]}),a.jsx("label",{htmlFor:"title","aria-label":i,className:"title",children:a.jsx("input",{type:"text",value:i,readOnly:!0,name:"title",placeholder:"Input title"})}),o!=="TASK_ARCHIVED"&&a.jsx("button",{className:"pin-button",onClick:()=>g(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}try{c.displayName="Task",c.__docgenInfo={description:"",displayName:"Task",props:{task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"ITask"}},onArchiveTask:{defaultValue:null,description:"",name:"onArchiveTask",required:!0,type:{name:"(id: string) => void"}},onPinTask:{defaultValue:null,description:"",name:"onPinTask",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const h={component:c,title:"Task",tags:["autodocs"]},s={args:{task:{id:"1",title:"Test Task",state:n.TASK_INBOX}}},t={args:{task:{...s.args.task,state:n.TASK_PINNED}}},r={args:{task:{...s.args.task,state:n.TASK_ARCHIVED}}};var l,d,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: EnumTaskState.TASK_INBOX
    }
  }
} satisfies Story`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: EnumTaskState.TASK_PINNED
    }
  }
} satisfies Story`,...(k=(m=t.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var T,_,A;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: EnumTaskState.TASK_ARCHIVED
    }
  }
} satisfies Story`,...(A=(_=r.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const N=["Default","Pinned","Archived"],f=Object.freeze(Object.defineProperty({__proto__:null,Archived:r,Default:s,Pinned:t,__namedExportsOrder:N,default:h},Symbol.toStringTag,{value:"Module"}));export{s as D,n as E,c as T,f as a};
