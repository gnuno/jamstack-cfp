(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{200:function(e,t,n){"use strict";n.r(t);n(178),n(181);var i=n(182),r=n.n(i),a=(n(175),{props:{theme:{type:String,required:!0,validator:function(e){return["error","success"].includes(e)}}},computed:{icon:function(){return"error"===this.theme?"😳":"🎉"}}}),s=n(19),o=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:"rounded-md mt-5 p-4 "+("error"===this.theme?"bg-red-100":"bg-green-100")},[t("div",{staticClass:"flex"},[t("div",{staticClass:"flex-shrink-0"},[this._v("\n      "+this._s(this.icon)+"\n    ")]),t("div",{staticClass:"ml-3"},[t("h3",{class:"text-sm leading-5 font-medium "+("error"===this.theme?"text-red-800":"text-green-800")},[this._t("default")],2)])])])}),[],!1,null,null,null).exports,l=Object(s.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},[this._t("default")],2)}),[],!1,null,null,null).exports,u=n(76),d={props:{value:{type:String,default:""},id:{type:String,required:!0},error:{type:String,default:""},optional:{type:Boolean,default:!1,required:!1},type:{type:String,default:"input",validator:function(e){return["input","textarea"].includes(e)}}}},c=Object(s.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{staticClass:"block text-sm font-medium leading-5 text-gray-700 mt-5",attrs:{for:e.id}},[e._t("default")],2),n(e.type,e._b({tag:"component",class:"mt-1 border rounded py-3 shadow-sm px-4 block w-full transition ease-in-out duration-150 "+(e.error?"border-red-400":"border-gray-400"),on:{change:function(t){return e.$emit("update:value",t.target.value)}}},"component",{id:e.id,value:e.value,required:!e.optional},!1)),n("span",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"block text-sm font-medium leading-5 text-red-700 mt-1"},[e._v(e._s(e.error))])],1)}),[],!1,null,null,null).exports,p={data:function(){return{speaker:"",title:"",description:"",bio:"",twitter:"",instagram:"",slides:"",repo:"",ready:"",when:"",loading:!1,error:!1,success:!1}},components:{Alert:o,Btn:l,ExternalLink:u.a,Field:c},computed:{nameError:function(){return this.speaker&&this.invalidString(this.speaker)?"Evite el uso de caracteres especiales":""},titleError:function(){return this.title&&this.invalidString(this.title)?"Evite el uso de caracteres especiales":""}},methods:{invalidString:function(e){return!/^(?!.*(#|>))/.test(e)},handleSubmit:function(){var e=this;this.loading=!0,this.error=!1,this.success=!1,r.a.post("http://localhost:9000/.netlify/functions/submit",{speaker:this.speaker,title:this.title,description:this.description,bio:this.bio,twitter:this.twitter,instagram:this.instagram,slides:this.slides,repo:this.repo,ready:this.ready,when:this.when}).then((function(){e.success=!0,e.speaker="",e.title="",e.description="",e.bio="",e.twitter="",e.instagram="",e.slides="",e.repo="",e.ready="",e.when="",e.loading=!1})).catch((function(){e.loading=!1,e.error=!0}))}}},v={components:{ApplicationForm:Object(s.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("h2",{staticClass:"text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"},[e._v("\n    Envío\n  ")]),n("div",{staticClass:"mt-3 sm:mt-4"},[n("p",{staticClass:"text-xl leading-7 text-gray-600"},[e._v("\n      El envío de este formulario activará un Issue usando GitHub\n      Actions, los Issues se mostrará en la pestaña\n      "),n("g-link",{staticClass:"underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150",attrs:{to:"/pending"}},[e._v("Envíos pendientes")]),e._v(". Una vez que se haya mergeado, podrá ver su envío en la lista de\n      "),n("g-link",{staticClass:"underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150",attrs:{to:"/submissions"}},[e._v("Envíos Aceptados")]),e._v(".\n    ")],1)]),e.success?n("Alert",{attrs:{theme:"success"}},[e._v("\n    ¡Formulario enviado con éxito!\n    "),n("ExternalLink",{attrs:{href:"https://github.com/gnuno/gnuno-talks/actions?query=workflow%3A%22Handle+Submission%22"}},[e._v("Compruebe cómo las acciones de GitHub están manejando su envío\n      correctamente")]),e._v(". En unos minutos, aparecerá en este sitio, listado como Enviós\n    Pendientes.\n  ")],1):[n("Field",{attrs:{id:"speaker",error:e.nameError,value:e.speaker},on:{"update:value":function(t){e.speaker=t}}},[e._v("\n      Tu nombre\n    ")]),n("Field",{attrs:{id:"title",error:e.titleError,value:e.title},on:{"update:value":function(t){e.title=t}}},[e._v("\n      Titulo de la charla\n    ")]),n("Field",{attrs:{id:"description",value:e.description,type:"textarea"},on:{"update:value":function(t){e.description=t}}},[e._v("\n      Descripción de la charla\n    ")]),n("Field",{attrs:{id:"bio",value:e.bio,type:"textarea"},on:{"update:value":function(t){e.bio=t}}},[e._v("\n      Mini descripción sobre quién sos, que hacés, cuáles son tus gustos,\n      profesión, etc. Lo que quieras contar, ¡dale creatividad!\n    ")]),n("Field",{attrs:{id:"twitter",value:e.twitter,optional:!0},on:{"update:value":function(t){e.twitter=t}}},[e._v("\n      Usuario de Twitter (Si tenés)\n    ")]),n("Field",{attrs:{id:"instagram",value:e.instagram,optional:!0},on:{"update:value":function(t){e.instagram=t}}},[e._v("\n      Usuario de Instagram (Si tenés)\n    ")]),n("Field",{attrs:{id:"slides",value:e.slides,optional:!0},on:{"update:value":function(t){e.slides=t}}},[e._v("\n      URL de la presentación (Si tenés).\n    ")]),n("Field",{attrs:{id:"repo",value:e.repo,optional:!0},on:{"update:value":function(t){e.repo=t}}},[e._v("\n      URL del repositorio con el código de la charla (Si tenés)\n    ")]),n("Field",{attrs:{id:"ready",value:e.ready},on:{"update:value":function(t){e.ready=t}}},[e._v("\n      ¿Tenés la charla preparada? (Sí, No todavía, Necesito ayuda para\n      prepararla porque solo es una idea\n    ")]),n("Field",{attrs:{id:"when",value:e.when},on:{"update:value":function(t){e.when=t}}},[e._v("\n      ¿A partir de qué mes la podrías dar?\n    ")]),n("label",{staticClass:"flex text-sm leading-5 text-gray-700 mt-5"},[n("input",{staticClass:"mt-1 mr-2",attrs:{type:"checkbox",required:""}}),e._v("\n      Entiendo que esta información se alojará en un repositorio público y no\n      he incluido datos confidenciales en ninguno de los campos.\n    ")]),e.error?n("Alert",{attrs:{theme:"error"}},[e._v("\n      Oops, esto es vergonzoso, pero algo salió mal al enviar el formulario.\n    ")]):e._e(),n("Btn",{attrs:{disabled:e.loading}},[e._v("\n      Enviar\n    ")])]],2)}),[],!1,null,null,null).exports}},m=Object(s.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("ApplicationForm")],1)}),[],!1,null,null,null);t.default=m.exports}}]);