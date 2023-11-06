var L=Object.defineProperty;var S=(r,e,n)=>e in r?L(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var p=(r,e,n)=>(S(r,typeof e!="symbol"?e+"":e,n),n);import{z as t,s as _,D as w,B as F}from"./index-220660e2.js";const q=[{id:"abc123",name:"Mitre hosts"},{id:"def456",name:"RTR hosts"},{id:"ghi789",name:"Response hosts"}],H=[{name:"groups",buckets:[{label:"abc123",count:42},{label:"def456",count:23}]}],h=[{device_id:"xyz987",hostname:"Odysseus"},{device_id:"mno654",hostname:"Agamemnon"},{device_id:"pqr321",hostname:"Achilles"}],I=[{uuid:"uuid1",cid:"cid",uid:"f.bird@crowdstrike.com",first_name:"Falcon",last_name:"Bird",created_at:"2023-09-12T14:35:46Z"},{uuid:"uuid2",cid:"cid",uid:"p.bird@crowdstrike.com",first_name:"Peregrine",last_name:"Bird",created_at:"2023-09-12T14:35:46Z"},{uuid:"uuid3",cid:"cid",uid:"r.dino@crowdstrike.com",first_name:"Raptor",last_name:"Dino",created_at:"2023-09-12T14:35:46Z"}],N={id:"1",draft:!0,version:0,user_id:"dummy",user_name:"dummy",name:"First Job RTR",description:"First Job RTR",notification_emails:null,notifications:null,tags:null,host_count:q.length,run_count:0,total_recurrences:0,action:{type:"buildQuery",query_type:"file",query_file_paths:["azerty","qwerty"]},schedule:{time_cycle:"5 4 * * *",start_date:"2023-08-31T04:05",end_date:"2023-09-02T23:59"},target:{host_groups:q.map(r=>r.id),hosts:null,offline_queueing:!0},output_format:["csv"],run_now:!1,next_run:"2023-08-31T08:25:17.179Z",last_run:"2023-08-31T08:25:17.179Z",created_at:"2023-08-31T08:25:17.179Z",updated_at:"2023-08-31T08:25:17.179Z",deleted_at:"2023-08-31T08:25:17.179Z"},$={id:"2",draft:!1,version:0,user_id:"dummy",user_name:"dummy",name:"Second Job RTR",description:"Second Job RTR",notification_emails:null,notifications:null,tags:null,host_count:h.length,run_count:0,total_recurrences:3,action:{type:"buildQuery",query_type:"registryKey",registry_keys:[{key:"hello",value:"world"}]},schedule:{time_cycle:"5 4 * * *",start_date:"2023-08-31T04:05",end_date:"2023-09-02T23:59"},target:{host_groups:null,hosts:h.map(r=>r.device_id),offline_queueing:!0},output_format:["logscale","csv"],run_now:!1,next_run:"2023-08-31T08:25:17.179Z",last_run:"2023-08-31T08:25:17.179Z",created_at:"2023-08-31T08:25:17.179Z",updated_at:"2023-08-31T08:25:17.179Z",deleted_at:"2023-08-31T08:25:17.179Z"},G={id:"3",draft:!1,version:0,user_id:"dummy",user_name:"dummy",name:"Third Job RTR",description:"Third Job RTR",notification_emails:null,notifications:null,tags:null,host_count:h.length,run_count:0,total_recurrences:90,action:{type:"buildQuery",query_type:"registryKey",registry_keys:[{key:"hello",value:"world"}]},schedule:{time_cycle:"5 4 * * *",start_date:"2023-08-31T04:05",end_date:"2023-09-02T23:59"},target:{host_groups:null,hosts:h.map(r=>r.device_id),offline_queueing:!0},output_format:["logscale","csv"],run_now:!1,next_run:"2023-08-31T08:25:17.179Z",last_run:"2023-08-31T08:25:17.179Z",created_at:"2023-08-31T08:25:17.179Z",updated_at:"2023-08-31T08:25:17.179Z",deleted_at:"2023-08-31T08:25:17.179Z"},V={id:"4",draft:!1,version:0,user_id:"dummy",user_name:"dummy",name:"Fourth Job RTR",description:"Fourth Job RTR",notification_emails:null,notifications:null,tags:null,host_count:h.length,run_count:0,total_recurrences:0,action:{type:"buildQuery",query_type:"registryKey",registry_keys:[{key:"hello",value:"world"}]},schedule:{time_cycle:"5 4 * * *",start_date:"2023-08-31T04:05",end_date:"2023-09-02T23:59"},target:{host_groups:null,hosts:h.map(r=>r.device_id),offline_queueing:!0},output_format:["logscale","csv"],run_now:!1,next_run:"2023-08-31T08:25:17.179Z",last_run:"2023-08-31T08:25:17.179Z",created_at:"2023-08-31T08:25:17.179Z",updated_at:"2023-08-31T08:25:17.179Z",deleted_at:"2023-08-31T08:25:17.179Z"},U={id:"5",draft:!1,version:0,user_id:"dummy",user_name:"dummy",name:"Fifth Job RTR",description:"Fifth Job RTR",notification_emails:null,notifications:null,tags:null,host_count:h.length,run_count:0,total_recurrences:0,action:{type:"buildQuery",query_type:"registryKey",registry_keys:[{key:"hello",value:"world"}]},schedule:{time_cycle:"5 4 * * *",start_date:"2023-08-31T04:05",end_date:"2023-09-02T23:59"},target:{host_groups:null,hosts:h.map(r=>r.device_id),offline_queueing:!0},output_format:["logscale","csv"],run_now:!1,next_run:"2023-08-31T08:25:17.179Z",last_run:"2023-08-31T08:25:17.179Z",created_at:"2023-08-31T08:25:17.179Z",updated_at:"2023-08-31T08:25:17.179Z",deleted_at:"2023-08-31T08:25:17.179Z"},Q={id:"6",draft:!1,version:0,user_id:"dummy",user_name:"dummy",name:"Sixth Job RTR",description:"Sixth Job RTR",notification_emails:null,notifications:null,tags:null,host_count:h.length,run_count:0,total_recurrences:0,action:{type:"buildQuery",query_type:"registryKey",registry_keys:[{key:"hello",value:"world"}]},schedule:{time_cycle:"5 4 * * *",start_date:"2023-08-31T04:05",end_date:"2023-09-02T23:59"},target:{host_groups:null,hosts:h.map(r=>r.device_id),offline_queueing:!0},output_format:["logscale","csv"],run_now:!1,next_run:"2023-08-31T08:25:17.179Z",last_run:"2023-08-31T08:25:17.179Z",created_at:"2023-08-31T08:25:17.179Z",updated_at:"2023-08-31T08:25:17.179Z",deleted_at:"2023-08-31T08:25:17.179Z"},B={id:"1",job_id:"1",name:"First Job RR",run_date:"2023-08-11 09:35:29",duration:"00:12:21",status:"completed",hosts:["host1"],output_1:"fileUrl",output_2:"logScaleUrl",numHosts:1,receivedFiles:2,endDate:"2023-08-09 13:42:34"},K={id:"2",job_id:"2",name:"CVE-2023-123457",run_date:"2023-08-08 13:42:34",duration:"00:02:47",status:"completed",hosts:["host1","host2"],output_1:"fileUrl",output_2:"logScaleUrl",numHosts:2,receivedFiles:2,endDate:"2023-08-09 13:42:34"},z={id:"1",job_id:"1",job_name:"CVE-2023-123456",modified_at:"2023-08-11 09:35:29",version:1,modified_by:"g.thegrey@crowdstrike.com",action:"Created JobRTR"},W={id:"2",job_id:"2",job_name:"CVE-2023-123457",modified_at:"2023-08-11 09:35:29",version:1,modified_by:"a.elessar@crowdstrike.com",action:"Created JobRTR"};function M(r){return r.type==="api"}function X(r){return M(r)&&r.api==="faasGateway"}function Y(r){return M(r)&&r.api==="devices"}function O(r){return M(r)&&r.api==="userManagement"}class tt{isMatch(e){return Y(e)&&(e.method==="postAggregatesDevicesGetV1"||e.method==="getEntitiesGroupsV1"||e.method==="postEntitiesDevicesV2"||e.method==="getQueriesDevicesV2")}async responder(e){let n={};if(e.method==="postAggregatesDevicesGetV1")n={errors:[],resources:H};else if(e.method==="getEntitiesGroupsV1")n={errors:[],resources:q};else if(e.method==="getQueriesDevicesV2"){const o=h.map(i=>i.device_id);n={errors:[],resources:o}}else e.method==="postEntitiesDevicesV2"&&(n={errors:[],resources:h});return Promise.resolve(n)}}class et{isMatch(e){return O(e)&&(e.method==="postEntitiesUsersGetV1"||e.method==="getQueriesUsersV1")}async responder(e){let n={};return e.method==="postEntitiesUsersGetV1"?n={errors:[],resources:I}:e.method==="getQueriesUsersV1"&&(n={errors:[],resources:I.map(o=>o.uuid)}),Promise.resolve(n)}}const D=t.object({type:t.literal("buildQuery"),query_type:t.literal("file"),query_file_paths:t.array(t.string())}),A=t.object({type:t.literal("buildQuery"),query_type:t.literal("registryKey"),registry_keys:t.array(t.object({key:t.string(),value:t.string()}))});t.object({user_id:t.string(),user_name:t.string(),version:t.number(),id:t.string(),name:t.string(),description:t.string(),notification_emails:t.union([t.null(),t.array(t.string())]).optional(),notifications:t.union([t.null(),t.array(t.string())]),draft:t.boolean(),tags:t.union([t.null(),t.array(t.string())]),host_count:t.number(),run_count:t.number(),total_recurrences:t.number(),action:t.union([D,A]),output_format:t.array(t.string()),schedule:t.union([t.object({time_cycle:t.string(),start_date:t.string(),end_date:t.string().nullable().optional().default(null)}),t.null()]),target:t.object({host_groups:t.union([t.null(),t.array(t.string())]),hosts:t.union([t.null(),t.array(t.string())]),offline_queueing:t.boolean()}),run_now:t.boolean(),next_run:t.string(),last_run:t.string(),created_at:t.string(),updated_at:t.string(),deleted_at:t.string()});const nt=t.object({user_id:t.string(),user_name:t.string(),version:t.number(),name:t.string(),description:t.string(),notifications:t.union([t.null(),t.array(t.string())]),tags:t.union([t.null(),t.array(t.string())]),action:t.union([D,A]),output_format:t.array(t.string()),run_now:t.boolean(),schedule:t.union([t.object({time_cycle:t.string(),start_date:t.string(),end_date:t.string().nullable().optional().default(null)}),t.null()]),target:t.object({host_groups:t.union([t.null(),t.array(t.string())]),hosts:t.union([t.null(),t.array(t.string())]),offline_queueing:t.boolean()})}),rt=t.object({method:t.string(),payload:t.object({body:t.object({function_id:t.string().optional(),function_name:t.string().optional(),payload:t.object({path:t.string()})})})}),ot=t.object({function_id:t.string().optional(),function_name:t.string().optional(),function_version:t.number(),payload:t.object({params:t.object({query:t.object({draft:t.array(t.union([t.literal("true"),t.literal("false")]))}).optional()}).optional(),body:nt})}),it=t.object({payload:t.object({body:t.object({payload:t.object({params:t.object({query:t.object({fieldName:t.union([t.literal("name"),t.literal("description"),t.literal("last_run_date"),t.literal("next_run_date"),t.literal("hosts"),t.literal("last_modified"),t.literal("draft")]).optional(),direction:t.union([t.literal("ASC"),t.literal("DESC")]).optional(),limit:t.union([t.array(t.literal("5")),t.array(t.literal("10")),t.array(t.literal("15")),t.array(t.literal("20"))]).optional(),offset:t.array(t.string()).optional(),prev:t.array(t.string()).optional(),next:t.array(t.string()).optional()}).optional()}).optional()})})})}),st=t.object({payload:t.object({body:t.object({payload:t.object({params:t.object({query:t.object({id:t.array(t.string())})})})})})}),P=":";class x{constructor({db:e,appName:n}){p(this,"functionId","mock-faas-function");p(this,"functionName","mock-faas-function-name");p(this,"requestPath","/mock-path");p(this,"counter",0);p(this,"bus",{});p(this,"db");p(this,"appName");this.db=e,this.appName=n}isMatch(e){return X(e)&&(this.isPost(e)||this.isGet(e))}isPost(e){const n=rt.safeParse(e);if(!n.success)return!1;const{method:o}=n.data,{function_id:i,function_name:s}=n.data.payload.body,{path:a}=n.data.payload.body.payload;return o==="postEntitiesExecutionV1"&&(i===this.functionId||s===this.functionName)&&a===this.requestPath}isGet(e){const{id:n}=e.payload.params;if(typeof n!="string")return!1;const[o,i,s,a]=n.split(P);return e.method==="getEntitiesExecutionV1"&&(o===this.functionId||i===this.functionName)&&s===this.requestPath}prepareResponse(e){return{errors:[],resources:[]}}async responder(e){if(this.isPost(e)){const n=[this.functionId,this.functionName,this.requestPath,++this.counter].join(P);return this.bus[n]=this.prepareResponse(e),Promise.resolve({resources:[{execution_id:n,function_id:this.functionId}]})}else if(this.isGet(e)){const{id:n}=e.payload.params;if(!n||typeof n!="string")throw"No id supplied";if(!this.bus[n])throw`No response for id: ${n}`;return Promise.resolve(this.bus[n])}}}class at extends x{constructor(e){super(e),this.functionId=_.createJob.id,this.functionName=_.createJob.name,this.requestPath=_.createJob.path}prepareResponse(e){var i,s;if(!("body"in e.payload))throw`CreateJobHandler received bad message: ${e.toString()}`;const o=ot.safeParse(e.payload.body);if(o.success){const a=this.db.jobs.findIndex(c=>c.name===o.data.payload.body.name);if(a>-1&&this.db.jobs[a].draft===!1)return{resources:[{function_id:this.functionId,function_name:this.functionName,function_version:1,payload:{body:null,errors:[{field:"jobName",message:`Job name "${o.data.payload.body.name}" already exists"`,code:102}],status_code:400}}]};const[d]=((s=(i=o.data.payload.params)==null?void 0:i.query)==null?void 0:s.draft)??["false"],{version:u,...y}=o.data.payload.body,m={id:a>-1?this.db.jobs[a].id:(Math.random()+1).toString(36).substring(7),version:u+1,draft:d==="true",total_recurrences:0,run_count:0,host_count:0,next_run:"2023-12-01T12:00",last_run:"",created_at:"2023-12-01T12:00",updated_at:"2023-12-01T12:00",deleted_at:"",notification_emails:y.notifications,...y};return a===-1?this.db.jobs.unshift(m):a>-1&&this.db.jobs[a].draft===!0&&(this.db.jobs[a]=m),{errors:[],resources:[{function_id:this.functionId,function_name:this.functionName,function_version:1,payload:{body:{resource:"a_random_uid"},errors:[],status_code:200}}]}}else return{resources:[{function_id:this.functionId,function_name:this.functionName,function_version:1,payload:{body:null,errors:o.error.issues.map(a=>({message:a.message})),status_code:400}}]}}}t.object({job_name:t.string(),modified_at:t.string(),version:t.number(),modified_by:t.string(),action:t.string(),id:t.string(),job_id:t.string()});const ut=t.object({payload:t.object({body:t.object({payload:t.object({params:t.object({query:t.object({fieldName:t.union([t.literal("name"),t.literal("date_modified"),t.literal("version"),t.literal("modified_by"),t.literal("action_taken")]).optional(),direction:t.union([t.literal("ASC"),t.literal("DESC")]).optional(),limit:t.union([t.array(t.literal("5")),t.array(t.literal("10")),t.array(t.literal("15")),t.array(t.literal("20"))]).optional(),offset:t.array(t.string()).optional(),prev:t.array(t.string()).optional(),next:t.array(t.string()).optional(),page:t.number().optional(),id:t.array(t.string()).optional(),filter:t.array(t.string()).optional()}).optional()}).optional()})})})}),Z=10;function lt(r,e,n){const o=Math.ceil((n+1)/e);return n===-1?{paginatedJobs:r,page:o}:{paginatedJobs:r.slice(n,n+(e+1)),page:o}}function dt(r,e,n,o,i){var c,f,g;let s=r.findIndex(l=>l.id===n);i!==""?s=r.findIndex(l=>l.id===i):o!==""&&(s=r.findIndex(l=>l.id===o));const{paginatedJobs:a,page:d}=lt(r,e,s),u=(c=r[s-e])!=null&&c.id?`${(f=r[s-e])==null?void 0:f.id}:${d-1}`:"",y=r.slice(-1),b=a.length===e+1?`${(g=y[0])==null?void 0:g.id}:${d}`:"";return{currentPage:e?a.slice(0,e):a,prevCursor:u,nextCursor:b}}class ct extends x{constructor(e){super(e),this.functionId=_.getAuditLog.id,this.functionName=_.getAuditLog.name,this.requestPath=_.getAuditLog.path}prepareResponse(e){var v,R,j,J;const{logs:n}=this.db,i=((v=ut.parse(e).payload.body.payload.params)==null?void 0:v.query)??{},{offset:s=null,limit:a=[String(Z)],prev:d=null,next:u=null}=i,y=(s==null?void 0:s[0])??"",b=((R=d==null?void 0:d[0].split(":"))==null?void 0:R[0])??"",m=((j=u==null?void 0:u[0].split(":"))==null?void 0:j[0])??"",c=parseInt(a[0])??Z;let f=n;if(i&&i.filter&&i.filter.length>0){const[Rt,k]=i.filter[0].split(":");f=n.filter(C=>k.includes(C.job_id))}const{prevCursor:g,nextCursor:l,currentPage:T}=dt(f,c,y,b,m);return{errors:[],resources:[{function_id:this.functionId,function_version:1,payload:{body:{resources:f,meta:{total:n.length,limit:c,offset:((J=T[0])==null?void 0:J.id)||"",count:T.length,prev:g,next:l}}}}]}}}class pt extends x{constructor(e){super(e),this.functionId=_.getJobDetails.id,this.functionName=_.getJobDetails.name,this.requestPath=_.getJobDetails.path}prepareResponse(e){const{jobs:n}=this.db,i=st.parse(e).payload.body.payload.params.query??{},s=n.find(a=>i.id.includes(a.id));return{errors:[],resources:[{function_id:this.functionId,function_version:1,payload:{body:{resource:s}}}]}}}function _t(r,e,n){const o=Math.ceil((n+1)/e);return n===-1?{paginatedJobs:r,page:o}:{paginatedJobs:r.slice(n,n+(e+1)),page:o}}function yt(r,e,n,o,i){var c,f,g;let s=r.findIndex(l=>l.id===n);i!==""?s=r.findIndex(l=>l.id===i):o!==""&&(s=r.findIndex(l=>l.id===o));const{paginatedJobs:a,page:d}=_t(r,e,s),u=(c=r[s-e])!=null&&c.id?`${(f=r[s-e])==null?void 0:f.id}:${d-1}`:"",y=r.slice(-1),b=a.length===e+1?`${(g=y[0])==null?void 0:g.id}:${d}`:"";return{currentPage:e?a.slice(0,e):a,prevCursor:u,nextCursor:b}}class ft extends x{constructor(e){super(e),this.functionId=_.getJobs.id,this.functionName=_.getJobs.name,this.requestPath=_.getJobs.path}prepareResponse(e){var v,R,j,J;const{jobs:n}=this.db,i=((v=it.parse(e).payload.body.payload.params)==null?void 0:v.query)??{},{offset:s=null,limit:a=[String(w)],prev:d=null,next:u=null}=i,y=(s==null?void 0:s[0])??"",b=((R=d==null?void 0:d[0].split(":"))==null?void 0:R[0])??"",m=((j=u==null?void 0:u[0].split(":"))==null?void 0:j[0])??"",c=parseInt(a[0])??w,f=n,{prevCursor:g,nextCursor:l,currentPage:T}=yt(f,c,y,b,m);return{errors:[],resources:[{function_id:this.functionId,function_version:1,payload:{body:{resources:T,meta:{total:n.length,limit:c,offset:((J=T[0])==null?void 0:J.id)||"",count:T.length,prev:g,next:l}}}}]}}}t.object({id:t.string(),job_id:t.string(),name:t.string(),duration:t.string(),output_1:t.string().optional(),output_2:t.string().optional(),hosts:t.array(t.string()),numHosts:t.number(),receivedFiles:t.number(),run_date:t.string(),endDate:t.string(),status:t.string()});const gt=t.object({payload:t.object({body:t.object({payload:t.object({params:t.object({query:t.object({fieldName:t.union([t.literal("name"),t.literal("run_date"),t.literal("status"),t.literal("duration"),t.literal("hosts"),t.literal("output_1"),t.literal("output_2")]).optional(),direction:t.union([t.literal("ASC"),t.literal("DESC")]).optional(),limit:t.union([t.array(t.literal("5")),t.array(t.literal("10")),t.array(t.literal("15")),t.array(t.literal("20"))]).optional(),offset:t.array(t.string()).optional(),prev:t.array(t.string()).optional(),next:t.array(t.string()).optional(),id:t.array(t.string()).optional(),filter:t.array(t.string()).optional(),exact_name:t.array(t.string()).optional()}).optional()}).optional()})})})}),E=10;function ht(r,e,n){var i;const o=r.findIndex(s=>s.id===n);return((i=r[o-e])==null?void 0:i.job_id)||""}function bt(r,e,n){const o=r.findIndex(i=>i.id===n);return o===-1?r:r.slice(o,o+(e+1))}function mt(r,e,n){var u;const o=bt(r,e,n),i=ht(r,e,n),s=r.slice(-1),a=o.length===e+1?(u=s[0])==null?void 0:u.id:"";return{currentPage:e?o.slice(0,e):o,prevCursor:i,nextCursor:a}}class Tt extends x{constructor(e){super(e),this.functionId=_.getRunHistory.id,this.functionName=_.getRunHistory.name,this.requestPath=_.getRunHistory.path}prepareResponse(e){var f;const{history:n}=this.db,i=((f=gt.parse(e).payload.body.payload.params)==null?void 0:f.query)??{},{offset:s=null,limit:a=[String(E)]}=i,d=(s==null?void 0:s[0])??"",u=parseInt(a[0])??E;let y=n;if(i&&i.filter&&i.filter.length>0){const g=i.filter[0].split(":")[0],l=i.filter[0].split(":")[1];y=n.filter(T=>{var v,R;if(g==="job_name"&&(((v=i.exact_name)==null?void 0:v.length)??0>0))return((R=i.exact_name)==null?void 0:R[0])==="true"?l===T.name:l.includes(T.name);if(g==="job_id")return T.job_id===l})}const{prevCursor:b,nextCursor:m,currentPage:c}=mt(y,u,d);return{errors:[],resources:[{function_id:this.functionId,function_version:1,payload:{body:{resources:c,meta:{total:y.length,limit:u,count:c.length,prev:b,next:m}}}}]}}}const vt={jobs:[],history:[],logs:[]},xt={jobs:[N,$,G,V,U,Q],history:[B,K],logs:[z,W]};class qt extends F{constructor({db:n,appName:o}={db:vt,appName:"rapid-response"}){super();p(this,"createJob");p(this,"getJobs");p(this,"getJobDetails");p(this,"getAuditLog");p(this,"getRunHistory");p(this,"devices");p(this,"userManagement");p(this,"db");this.db=n,this.createJob=new at({db:this.db,appName:o}),this.getJobs=new ft({db:this.db,appName:o}),this.getJobDetails=new pt({db:this.db,appName:o}),this.getAuditLog=new ct({db:this.db,appName:o}),this.getRunHistory=new Tt({db:this.db,appName:o}),this.devices=new tt,this.userManagement=new et}async postMessage(n){let o;if(this.devices.isMatch(n)?o=await this.devices.responder(n):this.userManagement.isMatch(n)?o=await this.userManagement.responder(n):this.getJobs.isMatch(n)?o=await this.getJobs.responder(n):this.createJob.isMatch(n)?o=await this.createJob.responder(n):this.getJobDetails.isMatch(n)?o=await this.getJobDetails.responder(n):this.getAuditLog.isMatch(n)?o=await this.getAuditLog.responder(n):this.getRunHistory.isMatch(n)?o=await this.getRunHistory.responder(n):o=await super.postMessage(n),!o)throw new Error("Woops!");return console.log("MockBridge#postMessage: ",{message:n,value:o}),o}}export{qt as MockBridge,vt as emptyScenario,xt as populatedScenario};
