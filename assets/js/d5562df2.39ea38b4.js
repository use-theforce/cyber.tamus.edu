"use strict";(self.webpackChunkstandards_cyber_tamus_edu=self.webpackChunkstandards_cyber_tamus_edu||[]).push([[1953],{3501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),r=n(28453);const s={custom_edit_url:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",toc_min_heading_level:2,toc_max_heading_level:2,title:"PL-8 Security and Privacy Architectures",description:""},a="PL-8 Security and Privacy Architectures {#pl-08}",o={id:"catalog/pl/pl-08",title:"PL-8 Security and Privacy Architectures",description:"",source:"@site/docs/catalog/pl/pl-08.md",sourceDirName:"catalog/pl",slug:"/catalog/pl/pl-08",permalink:"/catalog/pl/pl-08",draft:!1,unlisted:!1,editUrl:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",toc_min_heading_level:2,toc_max_heading_level:2,title:"PL-8 Security and Privacy Architectures",description:""},sidebar:"catalogSidebar",previous:{title:"PL-7 Concept of Operations",permalink:"/catalog/pl/pl-07"},next:{title:"PL-9 Central Management",permalink:"/catalog/pl/pl-09"}},c={},l=[{value:"Control",id:"control",level:3},{value:"PL-8(1) Defense in Depth",id:"pl-08.01",level:2},{value:"Control",id:"control-1",level:3},{value:"PL-8(2) Supplier Diversity",id:"pl-08.02",level:2},{value:"Control",id:"control-2",level:3}];function d(e){const t={br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"pl-08",children:"PL-8 Security and Privacy Architectures"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Implementation Level"})}),": Organization",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Contributes to Assurance"})}),": Yes"]}),"\n",(0,i.jsx)(t.h3,{id:"control",children:"Control"}),"\n",(0,i.jsx)(t.p,{children:"a. Develop security and privacy architectures for the system that:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Describe the requirements and approach to be taken for protecting the confidentiality, integrity, and availability of organizational information;"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Describe the requirements and approach to be taken for processing personally identifiable information to minimize privacy risk to individuals;"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Describe how the architectures are integrated into and support the enterprise architecture; and"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Describe any assumptions about, and dependencies on, external systems and services;"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["b. Review and update the architectures ",(0,i.jsxs)("strong",{children:["                     ",(0,i.jsx)("em",{children:"[Assignment: frequency]"}),"                  "]})," to reflect changes in the enterprise architecture; and"]}),"\n",(0,i.jsx)(t.p,{children:"c. Reflect planned architecture changes in security and privacy plans, Concept of Operations (CONOPS), criticality analysis, organizational procedures, and procurements and acquisitions."}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Supplemental Guidance"}),(0,i.jsxs)(t.p,{children:["The security and privacy architectures at the system level are consistent with the organization-wide security and privacy architectures described in ",(0,i.jsx)("a",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",href:"#pm-7",children:"PM-7"})," , which are integral to and developed as part of the enterprise architecture. The architectures include an architectural description, the allocation of security and privacy functionality (including controls), security- and privacy-related information for external interfaces, information being exchanged across the interfaces, and the protection mechanisms associated with each interface. The architectures can also include other information, such as user roles and the access privileges assigned to each role; security and privacy requirements; types of information processed, stored, and transmitted by the system; supply chain risk management requirements; restoration priorities of information and system services; and other protection needs."]})]}),"\n",(0,i.jsx)(t.h2,{id:"pl-08.01",children:"PL-8(1) Defense in Depth"}),"\n",(0,i.jsx)(t.h3,{id:"control-1",children:"Control"}),"\n",(0,i.jsxs)(t.p,{children:["(a) Allocates ",(0,i.jsxs)("strong",{children:["                        ",(0,i.jsx)("em",{children:"[Assignment: controls]"}),"                     "]})," to ",(0,i.jsxs)("strong",{children:["                        ",(0,i.jsx)("em",{children:"[Assignment: locations and architectural layers]"}),"                     "]})," ; and"]}),"\n",(0,i.jsx)(t.p,{children:"(b) Ensures that the allocated controls operate in a coordinated and mutually reinforcing manner."}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Supplemental Guidance"}),(0,i.jsxs)(t.p,{children:["Organizations strategically allocate security and privacy controls in the security and privacy architectures so that adversaries must overcome multiple controls to achieve their objective. Requiring adversaries to defeat multiple controls makes it more difficult to attack information resources by increasing the work factor of the adversary; it also increases the likelihood of detection. The coordination of allocated controls is essential to ensure that an attack that involves one control does not create adverse, unintended consequences by interfering with other controls. Unintended consequences can include system lockout and cascading alarms. The placement of controls in systems and organizations is an important activity that requires thoughtful analysis. The value of organizational assets is an important consideration in providing additional layering. Defense-in-depth architectural approaches include modularity and layering (see ",(0,i.jsx)("a",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",href:"#sa-8.3",children:"SA-8(3)"})," ), separation of system and user functionality (see ",(0,i.jsx)("a",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",href:"#sc-2",children:"SC-2"})," ), and security function isolation (see ",(0,i.jsx)("a",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",href:"#sc-3",children:"SC-3"}),")."]})]}),"\n",(0,i.jsx)(t.h2,{id:"pl-08.02",children:"PL-8(2) Supplier Diversity"}),"\n",(0,i.jsx)(t.h3,{id:"control-2",children:"Control"}),"\n",(0,i.jsxs)(t.p,{children:["Require that ",(0,i.jsxs)("strong",{children:["                     ",(0,i.jsx)("em",{children:"[Assignment: controls]"}),"                  "]})," allocated to ",(0,i.jsxs)("strong",{children:["                     ",(0,i.jsx)("em",{children:"[Assignment: locations and architectural layers]"}),"                  "]})," are obtained from different suppliers."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Supplemental Guidance"}),(0,i.jsx)(t.p,{children:"Information technology products have different strengths and weaknesses. Providing a broad spectrum of products complements the individual offerings. For example, vendors offering malicious code protection typically update their products at different times, often developing solutions for known viruses, Trojans, or worms based on their priorities and development schedules. By deploying different products at different locations, there is an increased likelihood that at least one of the products will detect the malicious code. With respect to privacy, vendors may offer products that track personally identifiable information in systems. Products may use different tracking methods. Using multiple products may result in more assurance that personally identifiable information is inventoried."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);