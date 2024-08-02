"use strict";(self.webpackChunkstandards_cyber_tamus_edu=self.webpackChunkstandards_cyber_tamus_edu||[]).push([[2471],{73537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const o={custom_edit_url:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",toc_min_heading_level:2,toc_max_heading_level:2,title:"SC-31 Covert Channel Analysis",description:""},r="SC-31 Covert Channel Analysis {#sc-31}",a={id:"catalog/sc/sc-31",title:"SC-31 Covert Channel Analysis",description:"",source:"@site/docs/catalog/sc/sc-31.md",sourceDirName:"catalog/sc",slug:"/catalog/sc/sc-31",permalink:"/catalog/sc/sc-31",draft:!1,unlisted:!1,editUrl:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",toc_min_heading_level:2,toc_max_heading_level:2,title:"SC-31 Covert Channel Analysis",description:""},sidebar:"catalogSidebar",previous:{title:"SC-30 Concealment and Misdirection",permalink:"/catalog/sc/sc-30"},next:{title:"SC-32 System Partitioning",permalink:"/catalog/sc/sc-32"}},l={},c=[{value:"Control",id:"control",level:3},{value:"SC-31(1) Test Covert Channels for Exploitability",id:"sc-31.01",level:2},{value:"Control",id:"control-1",level:3},{value:"SC-31(2) Maximum Bandwidth",id:"sc-31.02",level:2},{value:"Control",id:"control-2",level:3},{value:"SC-31(3) Measure Bandwidth in Operational Environments",id:"sc-31.03",level:2},{value:"Control",id:"control-3",level:3}];function d(e){const n={br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sc-31",children:"SC-31 Covert Channel Analysis"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Implementation Level"})}),": Organization",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Contributes to Assurance"})}),": Yes"]}),"\n",(0,s.jsx)(n.h3,{id:"control",children:"Control"}),"\n",(0,s.jsxs)(n.p,{children:["a. Perform a covert channel analysis to identify those aspects of communications within the system that are potential avenues for covert ",(0,s.jsxs)("strong",{children:["                     ",(0,s.jsx)("em",{children:"[Selection (one or more): storage; timing]"}),"                  "]})," channels; and"]}),"\n",(0,s.jsx)(n.p,{children:"b. Estimate the maximum bandwidth of those channels."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"Developers are in the best position to identify potential areas within systems that might lead to covert channels. Covert channel analysis is a meaningful activity when there is the potential for unauthorized information flows across security domains, such as in the case of systems that contain export-controlled information and have connections to external networks (i.e., networks that are not controlled by organizations). Covert channel analysis is also useful for multilevel secure systems, multiple security level systems, and cross-domain systems."})]}),"\n",(0,s.jsx)(n.h2,{id:"sc-31.01",children:"SC-31(1) Test Covert Channels for Exploitability"}),"\n",(0,s.jsx)(n.h3,{id:"control-1",children:"Control"}),"\n",(0,s.jsx)(n.p,{children:"Test a subset of the identified covert channels to determine the channels that are exploitable."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"None."})]}),"\n",(0,s.jsx)(n.h2,{id:"sc-31.02",children:"SC-31(2) Maximum Bandwidth"}),"\n",(0,s.jsx)(n.h3,{id:"control-2",children:"Control"}),"\n",(0,s.jsxs)(n.p,{children:["Reduce the maximum bandwidth for identified covert ",(0,s.jsxs)("strong",{children:["                     ",(0,s.jsx)("em",{children:"[Selection (one or more): storage; timing]"}),"                  "]})," channels to ",(0,s.jsxs)("strong",{children:["                     ",(0,s.jsx)("em",{children:"[Assignment: values]"}),"                  "]}),"."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"The complete elimination of covert channels, especially covert timing channels, is usually not possible without significant performance impacts."})]}),"\n",(0,s.jsx)(n.h2,{id:"sc-31.03",children:"SC-31(3) Measure Bandwidth in Operational Environments"}),"\n",(0,s.jsx)(n.h3,{id:"control-3",children:"Control"}),"\n",(0,s.jsxs)(n.p,{children:["Measure the bandwidth of ",(0,s.jsxs)("strong",{children:["                     ",(0,s.jsx)("em",{children:"[Assignment: subset of identified covert channels]"}),"                  "]})," in the operational environment of the system."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"Measuring covert channel bandwidth in specified operational environments helps organizations determine how much information can be covertly leaked before such leakage adversely affects mission or business functions. Covert channel bandwidth may be significantly different when measured in settings that are independent of the specific environments of operation, including laboratories or system development environments."})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);