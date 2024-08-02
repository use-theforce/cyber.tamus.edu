"use strict";(self.webpackChunkstandards_cyber_tamus_edu=self.webpackChunkstandards_cyber_tamus_edu||[]).push([[3603],{91564:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=i(74848),t=i(28453);const o={custom_edit_url:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",toc_min_heading_level:2,toc_max_heading_level:2,title:"SI-3 Malicious Code Protection",description:""},a="SI-3 Malicious Code Protection {#si-03}",r={id:"catalog/si/si-03",title:"SI-3 Malicious Code Protection",description:"",source:"@site/docs/catalog/si/si-03.md",sourceDirName:"catalog/si",slug:"/catalog/si/si-03",permalink:"/catalog/si/si-03",draft:!1,unlisted:!1,editUrl:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/tamus-cyber/standards.cyber.tamus.edu/tree/main/static/content/tamus.edu/TAMUS_profile.xml",toc_min_heading_level:2,toc_max_heading_level:2,title:"SI-3 Malicious Code Protection",description:""},sidebar:"catalogSidebar",previous:{title:"SI-2 Flaw Remediation",permalink:"/catalog/si/si-02"},next:{title:"SI-4 System Monitoring",permalink:"/catalog/si/si-04"}},c={},l=[{value:"Control",id:"control",level:3},{value:"Texas A&amp;M System Implementation Statement",id:"texas-am-system-implementation-statement",level:3},{value:"SI-3(1) Central Management",id:"si-03.01",level:2},{value:"SI-3(2) Automatic Updates",id:"si-03.02",level:2},{value:"SI-3(3) Non-privileged Users",id:"si-03.03",level:2},{value:"SI-3(4) Updates Only by Privileged Users",id:"si-03.04",level:2},{value:"Control",id:"control-1",level:3},{value:"SI-3(5) Portable Storage Devices",id:"si-03.05",level:2},{value:"SI-3(6) Testing and Verification",id:"si-03.06",level:2},{value:"Control",id:"control-2",level:3},{value:"SI-3(7) Nonsignature-based Detection",id:"si-03.07",level:2},{value:"SI-3(8) Detect Unauthorized Commands",id:"si-03.08",level:2},{value:"Control",id:"control-3",level:3},{value:"SI-03(09) Authenticate Remote Commands",id:"si-03.09",level:2},{value:"SI-3(10) Malicious Code Analysis",id:"si-03.10",level:2},{value:"Control",id:"control-4",level:3}];function d(e){const n={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"si-03",children:"SI-3 Malicious Code Protection"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Implementation Level"})}),": Organization",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Implementation Level"})}),": System",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Texas DIR Baseline"})}),": LOW",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Texas DIR Required By"})}),": 2023-07-20"]}),"\n",(0,s.jsx)(n.h3,{id:"control",children:"Control"}),"\n",(0,s.jsxs)(n.p,{children:["a. Implement ",(0,s.jsxs)("strong",{children:["                     ",(0,s.jsx)("em",{children:"[Selection (one or more): signature-based; non-signature-based]"}),"                  "]})," malicious code protection mechanisms at system entry and exit points to detect and eradicate malicious code;"]}),"\n",(0,s.jsx)(n.p,{children:"b. Automatically update malicious code protection mechanisms as new releases are available in accordance with organizational configuration management policy and procedures;"}),"\n",(0,s.jsx)(n.p,{children:"c. Configure malicious code protection mechanisms to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Perform periodic scans of the system ",(0,s.jsxs)("strong",{children:["                        ",(0,s.jsx)("em",{children:"[Assignment: frequency]"}),"                     "]})," and real-time scans of files from external sources at ",(0,s.jsxs)("strong",{children:["                        ",(0,s.jsx)("em",{children:"[Selection (one or more): endpoint; network entry and exit points]"}),"                     "]})," as the files are downloaded, opened, or executed in accordance with organizational policy; and"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("strong",{children:["                        ",(0,s.jsxs)("em",{children:["[Selection (one or more): block malicious code; quarantine malicious code; take ",(0,s.jsxs)("strong",{children:["                              ",(0,s.jsx)("em",{children:"[Assignment: action]"}),"                           "]}),"               ]"]}),"                     "]})," ; and send alert to ",(0,s.jsxs)("strong",{children:["                        ",(0,s.jsx)("em",{children:"[Assignment: personnel or roles]"}),"                     "]})," in response to malicious code detection; and"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"d. Address the receipt of false positives during malicious code detection and eradication and the resulting potential impact on the availability of the system."}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"System entry and exit points include firewalls, remote access servers, workstations, electronic mail servers, web servers, proxy servers, notebook computers, and mobile devices. Malicious code includes viruses, worms, Trojan horses, and spyware. Malicious code can also be encoded in various formats contained within compressed or hidden files or hidden in files using techniques such as steganography. Malicious code can be inserted into systems in a variety of ways, including by electronic mail, the world-wide web, and portable storage devices. Malicious code insertions occur through the exploitation of system vulnerabilities. A variety of technologies and methods exist to limit or eliminate the effects of malicious code."})]}),"\n",(0,s.jsx)(n.h3,{id:"texas-am-system-implementation-statement",children:"Texas A&M System Implementation Statement"}),"\n",(0,s.jsx)("prop",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",name:"status",value:"withdrawn",children:(0,s.jsx)("em",{children:"[Withdrawn.]"})}),"\n",(0,s.jsx)(n.h2,{id:"si-03.01",children:"SI-3(1) Central Management"}),"\n",(0,s.jsx)("prop",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",name:"status",value:"withdrawn",children:(0,s.jsxs)("em",{children:["[Withdrawn: Incorporated into ",(0,s.jsx)(n.a,{href:"../pl/pl-09#pl-09",children:"PL-9"}),".]"]})}),"\n",(0,s.jsx)(n.h2,{id:"si-03.02",children:"SI-3(2) Automatic Updates"}),"\n",(0,s.jsx)("prop",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",name:"status",value:"withdrawn",children:(0,s.jsxs)("em",{children:["[Withdrawn: Incorporated into ",(0,s.jsx)(n.a,{href:"../si/si-03#si-03",children:"SI-3"}),".]"]})}),"\n",(0,s.jsx)(n.h2,{id:"si-03.03",children:"SI-3(3) Non-privileged Users"}),"\n",(0,s.jsx)("prop",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",name:"status",value:"withdrawn",children:(0,s.jsxs)("em",{children:["[Withdrawn: Incorporated into ",(0,s.jsx)(n.a,{href:"../ac/ac-06#ac-06.10",children:"AC-6(10)"}),".]"]})}),"\n",(0,s.jsx)(n.h2,{id:"si-03.04",children:"SI-3(4) Updates Only by Privileged Users"}),"\n",(0,s.jsx)(n.h3,{id:"control-1",children:"Control"}),"\n",(0,s.jsx)(n.p,{children:"Update malicious code protection mechanisms only when directed by a privileged user."}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"Protection mechanisms for malicious code are typically categorized as security-related software and, as such, are only updated by organizational personnel with appropriate access privileges."})]}),"\n",(0,s.jsx)(n.h2,{id:"si-03.05",children:"SI-3(5) Portable Storage Devices"}),"\n",(0,s.jsx)("prop",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",name:"status",value:"withdrawn",children:(0,s.jsxs)("em",{children:["[Withdrawn: Incorporated into ",(0,s.jsx)(n.a,{href:"../mp/mp-07#mp-07",children:"MP-7"}),".]"]})}),"\n",(0,s.jsx)(n.h2,{id:"si-03.06",children:"SI-3(6) Testing and Verification"}),"\n",(0,s.jsx)(n.h3,{id:"control-2",children:"Control"}),"\n",(0,s.jsxs)(n.p,{children:["(a) Test malicious code protection mechanisms ",(0,s.jsxs)("strong",{children:["                        ",(0,s.jsx)("em",{children:"[Assignment: frequency]"}),"                     "]})," by introducing known benign code into the system; and"]}),"\n",(0,s.jsx)(n.p,{children:"(b) Verify that the detection of the code and the associated incident reporting occur."}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"None."})]}),"\n",(0,s.jsx)(n.h2,{id:"si-03.07",children:"SI-3(7) Nonsignature-based Detection"}),"\n",(0,s.jsx)("prop",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",name:"status",value:"withdrawn",children:(0,s.jsxs)("em",{children:["[Withdrawn: Incorporated into ",(0,s.jsx)(n.a,{href:"../si/si-03#si-03",children:"SI-3"}),".]"]})}),"\n",(0,s.jsx)(n.h2,{id:"si-03.08",children:"SI-3(8) Detect Unauthorized Commands"}),"\n",(0,s.jsx)(n.h3,{id:"control-3",children:"Control"}),"\n",(0,s.jsxs)(n.p,{children:["(a) Detect the following unauthorized operating system commands through the kernel application programming interface on ",(0,s.jsxs)("strong",{children:["                        ",(0,s.jsx)("em",{children:"[Assignment: system hardware components]"}),"                     "]}),": ",(0,s.jsxs)("strong",{children:["                        ",(0,s.jsx)("em",{children:"[Assignment: unauthorized operating system commands]"}),"                     "]})," ; and"]}),"\n",(0,s.jsxs)(n.p,{children:["(b)                      ",(0,s.jsxs)("strong",{children:["                        ",(0,s.jsx)("em",{children:"[Selection (one or more): issue a warning; audit the command execution; prevent the execution of the command]"}),"                     "]}),"."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"Detecting unauthorized commands can be applied to critical interfaces other than kernel-based interfaces, including interfaces with virtual machines and privileged applications. Unauthorized operating system commands include commands for kernel functions from system processes that are not trusted to initiate such commands as well as commands for kernel functions that are suspicious even though commands of that type are reasonable for processes to initiate. Organizations can define the malicious commands to be detected by a combination of command types, command classes, or specific instances of commands. Organizations can also define hardware components by component type, component, component location in the network, or a combination thereof. Organizations may select different actions for different types, classes, or instances of malicious commands."})]}),"\n",(0,s.jsx)(n.h2,{id:"si-03.09",children:"SI-03(09) Authenticate Remote Commands"}),"\n",(0,s.jsx)("prop",{xmlns:"http://csrc.nist.gov/ns/oscal/1.0",name:"status",value:"withdrawn",children:(0,s.jsxs)("em",{children:["[Withdrawn: Moved to ",(0,s.jsx)(n.a,{href:"../ac/ac-17#ac-17.10",children:"AC-17(10)"}),".]"]})}),"\n",(0,s.jsx)(n.h2,{id:"si-03.10",children:"SI-3(10) Malicious Code Analysis"}),"\n",(0,s.jsx)(n.h3,{id:"control-4",children:"Control"}),"\n",(0,s.jsxs)(n.p,{children:["(a) Employ the following tools and techniques to analyze the characteristics and behavior of malicious code: ",(0,s.jsxs)("strong",{children:["                        ",(0,s.jsx)("em",{children:"[Assignment: tools and techniques]"}),"                     "]})," ; and"]}),"\n",(0,s.jsx)(n.p,{children:"(b) Incorporate the results from malicious code analysis into organizational incident response and flaw remediation processes."}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Supplemental Guidance"}),(0,s.jsx)(n.p,{children:"The use of malicious code analysis tools provides organizations with a more in-depth understanding of adversary tradecraft (i.e., tactics, techniques, and procedures) and the functionality and purpose of specific instances of malicious code. Understanding the characteristics of malicious code facilitates effective organizational responses to current and future threats. Organizations can conduct malicious code analyses by employing reverse engineering techniques or by monitoring the behavior of executing code."})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(96540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);