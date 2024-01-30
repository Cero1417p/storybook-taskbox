import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{u,a as f,f as x,T as w,P as g,s as j,M as k}from"./TaskList.stories-Vr5ePF6y.js";import{r as y}from"./index-4g5l5LRQ.js";import{l as h}from"./index-IF7-q0ER.js";import{w as v,a as b,b as T,f as o}from"./index-wEbvr3X-.js";import"./Task.stories-7TLfv6XI.js";import"./_commonjsHelpers-4gQjN7DL.js";function E(){const t=u(),{error:s}=f(a=>a.taskbox);return y.useEffect(()=>{t(x())},[]),s?e.jsx("div",{className:"page lists-show",children:e.jsxs("div",{className:"wrapper-message",children:[e.jsx("span",{className:"icon-face-sad"}),e.jsx("p",{className:"title-message",children:"Oh no!"}),e.jsx("p",{className:"subtitle-message",children:"Something went wrong"})]})}):e.jsxs("div",{className:"page lists-show",children:[e.jsx("nav",{children:e.jsx("h1",{className:"title-page",children:"Taskbox"})}),e.jsx(w,{})]})}const q={component:E,title:"InboxScreen",decorators:[t=>e.jsx(g,{store:j,children:t()})],tags:["autodocs"]},r={parameters:{msw:{handlers:[h.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,s,a)=>s(a.json(k.tasks)))]}},play:async({canvasElement:t})=>{const s=v(t);await b(await s.findByTestId("loading")),await T(async()=>{await o.click(s.getByLabelText("pinTask-1")),await o.click(s.getByLabelText("pinTask-3"))})}},n={parameters:{msw:{handlers:[h.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,s,a)=>s(a.status(403)))]}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (_req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      // Simulates pinning the third task
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    });
  }
} satisfies Meta<typeof InboxScreen>`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (_req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
} satisfies Meta<typeof InboxScreen>`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const F=["Default","Error"];export{r as Default,n as Error,F as __namedExportsOrder,q as default};
