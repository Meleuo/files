!function(e,t){"use strict";"object"==typeof module?module.exports=t:"function"==typeof define&&define.amd?define(t):e.AutoList=t}(this,function(e){var t=e.Extension.extend({name:"autolist",init:function(){this.subscribe("editableKeypress",this.onKeypress.bind(this))},onKeypress:function(t){if(e.util.isKey(t,[e.util.keyCode.SPACE])){var i=this.base.getSelectedParentElement().textContent;"1."==i&&this.base.getExtensionByName("orderedlist")?(this.base.execAction("insertorderedlist"),this.base.getSelectedParentElement().textContent=this.base.getSelectedParentElement().textContent.slice(2).trim()):"*"==i&&this.base.getExtensionByName("unorderedlist")&&(this.base.execAction("insertunorderedlist"),this.base.getSelectedParentElement().textContent=this.base.getSelectedParentElement().textContent.slice(1).trim())}}});return t}("function"==typeof require?require("medium-editor"):MediumEditor));
