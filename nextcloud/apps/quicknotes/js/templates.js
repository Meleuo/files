(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['attachts'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "		<div class='note-attach-grid'>\n			<a target=\"_blank\" href=\""
    + alias5(((helper = (helper = helpers.redirect_url || (depth0 != null ? depth0.redirect_url : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"redirect_url","hash":{},"data":data,"loc":{"start":{"line":4,"column":28},"end":{"line":4,"column":44}}}) : helper)))
    + "\">\n				<div class=\"attach-preview note-attach\" attach-file-id=\""
    + alias5(((helper = (helper = helpers.file_id || (depth0 != null ? depth0.file_id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"file_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":60},"end":{"line":5,"column":71}}}) : helper)))
    + "\" data-background-image=\""
    + alias5(((helper = (helper = helpers.preview_url || (depth0 != null ? depth0.preview_url : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"preview_url","hash":{},"data":data,"loc":{"start":{"line":5,"column":96},"end":{"line":5,"column":111}}}) : helper)))
    + "\"/>\n			</a>\n"
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1].can_delete : depths[1]),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":9,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "				<div class=\"attach-remove icon-delete\" title=\""
    + container.escapeExpression((helpers.t||(depth0 && depth0.t)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"quicknotes","Delete attachment",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":50},"end":{"line":8,"column":88}}}))
    + "\"/>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class='note-attachts'>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.attachments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":11,"column":10}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});
templates['navigation'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "				<button class=\"circle-toolbar\" style=\"background-color: "
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data,"loc":{"start":{"line":30,"column":60},"end":{"line":30,"column":69}}}) : helper)))
    + " \"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "			<li class=\"nav-tag with-menu "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":32},"end":{"line":40,"column":59}}})) != null ? stack1 : "")
    + "\" tag-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":40,"column":69},"end":{"line":40,"column":77}}}) : helper)))
    + "\">\n				<a href=\"#\">"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":41,"column":16},"end":{"line":41,"column":28}}}) : helper))) != null ? stack1 : "")
    + "</a>\n			</li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "active";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "			<li class=\"nav-note with-menu "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":33},"end":{"line":51,"column":60}}})) != null ? stack1 : "")
    + "\"  data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":51,"column":72},"end":{"line":51,"column":80}}}) : helper)))
    + "\">\n				<a href=\"#\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":52,"column":16},"end":{"line":52,"column":29}}}) : helper))) != null ? stack1 : "")
    + "</a>\n			</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div id=\"new-note-fixed\">\n	<div>\n		<button type=\"button\" id=\"new-note\" class=\"icon-add\">"
    + alias5(((helper = (helper = helpers.newNoteTxt || (depth0 != null ? depth0.newNoteTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"newNoteTxt","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":69}}}) : helper)))
    + "</button>\n	</div>\n</div>\n<li id=\"all-notes\">\n	<a href=\"#\" class=\"icon-home svg\">\n		"
    + alias5(((helper = (helper = helpers.allNotesTxt || (depth0 != null ? depth0.allNotesTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"allNotesTxt","hash":{},"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":8,"column":17}}}) : helper)))
    + "\n	</a>\n</li>\n<li id=\"shared-folder\" class=\"collapsible open\">\n	<button class=\"collapse\"></button>\n	<a href=\"#\" class=\"icon-share svg\">"
    + alias5((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Shared",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":36},"end":{"line":13,"column":64}}}))
    + "</a>\n	<ul>\n		<li id=\"shared-by-you\">\n			<a href=\"#\" class=\"icon-share svg\">"
    + alias5((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Shared with others",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":16,"column":38},"end":{"line":16,"column":78}}}))
    + "</a>\n		</li>\n		<li id=\"shared-with-you\">\n			<a href=\"#\" class=\"icon-share svg\">"
    + alias5((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Shared with you",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":19,"column":38},"end":{"line":19,"column":75}}}))
    + "</a>\n		</li>\n	</ul>\n</li>\n<li id=\"colors-folder\" class=\"collapsible open\">\n	<button class=\"collapse\"></button>\n	<a href=\"#\" class=\"icon-search svg\">"
    + alias5(((helper = (helper = helpers.colorsTxt || (depth0 != null ? depth0.colorsTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"colorsTxt","hash":{},"data":data,"loc":{"start":{"line":25,"column":37},"end":{"line":25,"column":50}}}) : helper)))
    + "</a>\n	<ul>\n		<li style=\"display: flex; justify-content: center;\">\n			<button class=\"circle-toolbar icon-checkmark any-color\"></button>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":3},"end":{"line":31,"column":12}}})) != null ? stack1 : "")
    + "		</li>\n	</ul>\n</li>\n<li id=\"tags-folder\" class=\"collapsible open\">\n	<button class=\"collapse\"></button>\n	<a href=\"#\" class=\"icon-tag svg\">"
    + alias5(((helper = (helper = helpers.tagsTxt || (depth0 != null ? depth0.tagsTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"tagsTxt","hash":{},"data":data,"loc":{"start":{"line":37,"column":34},"end":{"line":37,"column":45}}}) : helper)))
    + "</a>\n	<ul>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":2},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + "	</ul>\n</li>\n<li id=\"notes-folder\" class=\"collapsible open\">\n	<button class=\"collapse\"></button>\n	<a href=\"#\" class=\"icon-quicknotes svg\">"
    + alias5(((helper = (helper = helpers.notesTxt || (depth0 != null ? depth0.notesTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"notesTxt","hash":{},"data":data,"loc":{"start":{"line":48,"column":41},"end":{"line":48,"column":53}}}) : helper)))
    + "</a>\n	<ul>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":2},"end":{"line":54,"column":11}}})) != null ? stack1 : "")
    + "	</ul>\n</li>\n";
},"useData":true});
templates['note-item'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "shared";
},"3":function(container,depth0,helpers,partials,data) {
    return "shareowner";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "					<div class='note-attach-grid'>\n						<div class=\"attach-preview note-attach\" attach-file-id=\""
    + alias5(((helper = (helper = helpers.file_id || (depth0 != null ? depth0.file_id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"file_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":62},"end":{"line":7,"column":73}}}) : helper)))
    + "\" data-background-image=\""
    + alias5(((helper = (helper = helpers.preview_url || (depth0 != null ? depth0.preview_url : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"preview_url","hash":{},"data":data,"loc":{"start":{"line":7,"column":98},"end":{"line":7,"column":113}}}) : helper)))
    + "\"/>\n					</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "					<div class=\"icon-header-note icon-pinned fixed-header-icon\" title=\""
    + container.escapeExpression((helpers.t||(depth0 && depth0.t)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"quicknotes","Unpin note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":15,"column":72},"end":{"line":15,"column":103}}}))
    + "\"></div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "					<div class=\"icon-header-note icon-pin hide-header-icon\" title=\""
    + container.escapeExpression((helpers.t||(depth0 && depth0.t)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"quicknotes","Pin note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":17,"column":68},"end":{"line":17,"column":97}}}))
    + "\"></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "					<div class=\"icon-user slim-share\" share-id=\""
    + alias5(((helper = (helper = helpers.shared_user || (depth0 != null ? depth0.shared_user : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shared_user","hash":{},"data":data,"loc":{"start":{"line":29,"column":49},"end":{"line":29,"column":66}}}) : helper)))
    + "\" title=\"Shared with "
    + alias5(((helper = (helper = helpers.shared_user || (depth0 != null ? depth0.shared_user : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shared_user","hash":{},"data":data,"loc":{"start":{"line":29,"column":87},"end":{"line":29,"column":104}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.shared_user || (depth0 != null ? depth0.shared_user : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shared_user","hash":{},"data":data,"loc":{"start":{"line":29,"column":106},"end":{"line":29,"column":125}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "					<div class=\"icon-tag slim-tag\" tag-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":34,"column":44},"end":{"line":34,"column":52}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":34,"column":54},"end":{"line":34,"column":66}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"note-grid-item\">\n	<div class=\"quicknote noselect "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.sharedBy : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.sharedWith : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":69},"end":{"line":2,"column":111}}})) != null ? stack1 : "")
    + "\" style=\"background-color: "
    + alias5(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":2,"column":138},"end":{"line":2,"column":147}}}) : helper)))
    + "\" data-id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":158},"end":{"line":2,"column":166}}}) : helper)))
    + "\" data-timestamp=\""
    + alias5(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"timestamp","hash":{},"data":data,"loc":{"start":{"line":2,"column":184},"end":{"line":2,"column":199}}}) : helper)))
    + "\" >\n		<div class='note-header'>\n			<div class='note-attachts'>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.attachments : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n		<div class='note-body'>\n			<div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isPinned : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "				<div class=\"icon-header-note icon-delete hide-header-icon icon-delete-note\" title=\""
    + alias5((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Delete note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":19,"column":87},"end":{"line":19,"column":119}}}))
    + "\"></div>\n				<div class='note-title'>\n					"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":21,"column":5},"end":{"line":21,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n			<div class='note-content'>\n				"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":25,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n			</div>\n			<div class='note-shares'>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.sharedWith : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n			<div class='note-tags'>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n		<div>\n	</div>\n</div>";
},"useData":true});
templates['notes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "<div id=\"notes-grid-div\" class=\"notes-grid\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":50,"column":10}}})) != null ? stack1 : "")
    + "</div>\n<div id=\"modal-note-div\" class=\"hide-modal-note modal-note-background\">\n	<div class=\"modal-content\">\n		<div class=\"quicknote note-active\" style=\"background-color: #F7EB96\" data-id=\"-1\">\n			<div class='note-header'>\n				<div class='note-attachts'></div>\n			</div>\n			<div class='note-body'>\n				<div>\n					<div class=\"icon-header-note icon-pin fixed-header-icon\" title=\""
    + alias4((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Pin note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":60,"column":69},"end":{"line":60,"column":98}}}))
    + "\"></div>\n					<div contenteditable=\"true\" id='title-editable' class='note-title'></div>\n				</div>\n				<div contenteditable=\"true\" id='content-editable' class='note-content'></div>\n				<div class='note-shares'></div>\n				<div class='note-tags'></div>\n			</div>\n			<div class=\"note-options\">\n				<!--\n				<select class=\"note-share-select\" name=\"users[]\" multiple=\"multiple\"></select>\n				-->\n				<div class=\"colors-toolbar\">\n					<button id='color-button' class='round-tool-button'>\n						<div class=\"icon-toggle-background\" title=\""
    + alias4((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Colors",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":73,"column":49},"end":{"line":73,"column":76}}}))
    + "\"></div>\n					</button>\n					<button id='share-button' class='round-tool-button'>\n						<div class=\"icon-shared\" title=\""
    + alias4((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Share note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":76,"column":38},"end":{"line":76,"column":69}}}))
    + "\"></div>\n					</button>\n					<button id='tag-button' class='round-tool-button'>\n						<div class=\"icon-tag\" title=\""
    + alias4((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Tags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":79,"column":35},"end":{"line":79,"column":60}}}))
    + "\"></div>\n					</button>\n					<button id='attach-button' class='round-tool-button'>\n						<div class=\"icon-picture\" title=\""
    + alias4((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Attach file",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":82,"column":39},"end":{"line":82,"column":71}}}))
    + "\"></div>\n					</button>\n				</div>\n				<div class=\"buttons-toolbar\">\n					<button id='cancel-button'>\n						"
    + alias4(((helper = (helper = helpers.cancelTxt || (depth0 != null ? depth0.cancelTxt : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"cancelTxt","hash":{},"data":data,"loc":{"start":{"line":87,"column":6},"end":{"line":87,"column":21}}}) : helper)))
    + "\n					</button>\n					<button id='save-button'>\n						"
    + alias4(((helper = (helper = helpers.saveTxt || (depth0 != null ? depth0.saveTxt : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"saveTxt","hash":{},"data":data,"loc":{"start":{"line":90,"column":6},"end":{"line":90,"column":19}}}) : helper)))
    + "\n					</button>\n				</div>\n				<div style=\"clear: both;\"></div>\n			</div>\n			<div class=\"note-disable-options\">\n				<div class=\"buttons-toolbar\">\n					<button id='close-button'>"
    + alias4((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Close",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":97,"column":31},"end":{"line":97,"column":57}}}))
    + "</button>\n				</div>\n				<div style=\"clear: both;\"></div>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "	<div class=\"note-grid-item\">\n		<div class=\"quicknote noselect "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.sharedBy : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":33},"end":{"line":5,"column":69}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.sharedWith : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":70},"end":{"line":5,"column":112}}})) != null ? stack1 : "")
    + "\" style=\"background-color: "
    + alias5(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":5,"column":139},"end":{"line":5,"column":148}}}) : helper)))
    + "\" data-id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":159},"end":{"line":5,"column":167}}}) : helper)))
    + "\" data-timestamp=\""
    + alias5(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"timestamp","hash":{},"data":data,"loc":{"start":{"line":5,"column":185},"end":{"line":5,"column":200}}}) : helper)))
    + "\" >\n			<div class='note-header'>\n				<div class='note-attachts'>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.attachments : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":5},"end":{"line":12,"column":14}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class='note-body'>\n				<div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.sharedBy : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":17,"column":5},"end":{"line":27,"column":12}}})) != null ? stack1 : "")
    + "					<div class='note-title'>\n						"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n				<div class='note-content'>\n					"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":33,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\n				</div>\n				<div class='note-shares'>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.sharedWith : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":38,"column":14}}})) != null ? stack1 : "")
    + "				</div>\n				<div class='note-tags'>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":5},"end":{"line":45,"column":14}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "shared";
},"5":function(container,depth0,helpers,partials,data) {
    return "shareowner";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "						<div class='note-attach-grid'>\n							<div class=\"attach-preview note-attach\" attach-file-id=\""
    + alias5(((helper = (helper = helpers.file_id || (depth0 != null ? depth0.file_id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"file_id","hash":{},"data":data,"loc":{"start":{"line":10,"column":63},"end":{"line":10,"column":74}}}) : helper)))
    + "\" data-background-image=\""
    + alias5(((helper = (helper = helpers.preview_url || (depth0 != null ? depth0.preview_url : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"preview_url","hash":{},"data":data,"loc":{"start":{"line":10,"column":99},"end":{"line":10,"column":114}}}) : helper)))
    + "\"/>\n						</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "						<div class=\"icon-header-note icon-share\" title=\""
    + alias4((helpers.tSB||(depth0 && depth0.tSB)||alias3).call(alias2,((stack1 = (depth0 != null ? depth0.sharedBy : depth0)) != null ? stack1.user_id : stack1),{"name":"tSB","hash":{},"data":data,"loc":{"start":{"line":18,"column":54},"end":{"line":18,"column":79}}}))
    + "\"></div>\n						<div class=\"icon-header-note icon-delete hide-header-icon icon-delete-note\" title=\""
    + alias4((helpers.t||(depth0 && depth0.t)||alias3).call(alias2,"quicknotes","Delete shared note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":19,"column":89},"end":{"line":19,"column":128}}}))
    + "\"></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isPinned : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":25,"column":13}}})) != null ? stack1 : "")
    + "						<div class=\"icon-header-note icon-delete hide-header-icon icon-delete-note\" title=\""
    + container.escapeExpression((helpers.t||(depth0 && depth0.t)||container.hooks.helperMissing).call(alias2,"quicknotes","Delete note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":121}}}))
    + "\"></div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "							<div class=\"icon-header-note icon-pinned fixed-header-icon\" title=\""
    + container.escapeExpression((helpers.t||(depth0 && depth0.t)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"quicknotes","Unpin note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":74},"end":{"line":22,"column":105}}}))
    + "\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "							<div class=\"icon-header-note icon-pin hide-header-icon\" title=\""
    + container.escapeExpression((helpers.t||(depth0 && depth0.t)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"quicknotes","Pin note",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":24,"column":70},"end":{"line":24,"column":99}}}))
    + "\"></div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "						<div class=\"icon-user slim-share\" share-id=\""
    + alias5(((helper = (helper = helpers.shared_user || (depth0 != null ? depth0.shared_user : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shared_user","hash":{},"data":data,"loc":{"start":{"line":37,"column":50},"end":{"line":37,"column":67}}}) : helper)))
    + "\" title=\""
    + alias5((helpers.tSW||(depth0 && depth0.tSW)||alias3).call(alias2,(depth0 != null ? depth0.shared_user : depth0),{"name":"tSW","hash":{},"data":data,"loc":{"start":{"line":37,"column":76},"end":{"line":37,"column":95}}}))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.shared_user || (depth0 != null ? depth0.shared_user : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shared_user","hash":{},"data":data,"loc":{"start":{"line":37,"column":97},"end":{"line":37,"column":116}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "						<div class='icon-tag slim-tag' tag-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":42,"column":45},"end":{"line":42,"column":53}}}) : helper)))
    + "\">\n							"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":43,"column":7},"end":{"line":43,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n						</div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.loaded : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":104,"column":0},"end":{"line":119,"column":0}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<div class=\"emptycontent\">\n	<div class=\"icon-quicknotes svg\"></div>\n	<h2>\n		"
    + container.escapeExpression(((helper = (helper = helpers.emptyMsg || (depth0 != null ? depth0.emptyMsg : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"emptyMsg","hash":{},"data":data,"loc":{"start":{"line":108,"column":2},"end":{"line":108,"column":16}}}) : helper)))
    + "\n	</h2>\n</div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"emptycontent\">\n	<div class=\"icon-quicknotes svg\"></div>\n	<h2>\n		"
    + alias5(((helper = (helper = helpers.loadingMsg || (depth0 != null ? depth0.loadingMsg : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"loadingMsg","hash":{},"data":data,"loc":{"start":{"line":115,"column":2},"end":{"line":115,"column":16}}}) : helper)))
    + "\n	</h2>\n	<img class=\"loadingimport\" src=\""
    + alias5(((helper = (helper = helpers.loadingIcon || (depth0 != null ? depth0.loadingIcon : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"loadingIcon","hash":{},"data":data,"loc":{"start":{"line":117,"column":33},"end":{"line":117,"column":48}}}) : helper)))
    + "\"/>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.notes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":119,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['settings'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "<div>\n	<label>"
    + container.escapeExpression((helpers.t||(depth0 && depth0.t)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"quicknotes","Default color for new notes",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":56}}}))
    + "</label>\n</div>\n<div id=\"setting-defaul-color\">\n	<div id=\"defaultColor\" style=\"display: flex; justify-content: center;\">\n		<div class=\"colors-toolbar\">\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #F7EB96\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #88B7E3\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #C1ECB0\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #BFA6E9\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #DAF188\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #FF96AC\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #FCF66F\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #F2F1EF\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #C1D756\"></a>\n			<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #CECECE\"></a>\n		</div>\n	</div>\n</div>";
},"useData":true});
templates['shares'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "		<div class=\"icon-user slim-share\" share-id=\""
    + alias5(((helper = (helper = helpers.shared_user || (depth0 != null ? depth0.shared_user : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shared_user","hash":{},"data":data,"loc":{"start":{"line":3,"column":46},"end":{"line":3,"column":63}}}) : helper)))
    + "\" title=\""
    + alias5((helpers.tSW||(depth0 && depth0.tSW)||alias3).call(alias2,(depth0 != null ? depth0.shared_user : depth0),{"name":"tSW","hash":{},"data":data,"loc":{"start":{"line":3,"column":72},"end":{"line":3,"column":91}}}))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.shared_user || (depth0 != null ? depth0.shared_user : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shared_user","hash":{},"data":data,"loc":{"start":{"line":3,"column":93},"end":{"line":3,"column":112}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class='note-shares'>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sharedWith : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":10}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['tags'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "		<div class=\"icon-tag slim-tag\" tag-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":41},"end":{"line":3,"column":49}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":63}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class='note-tags'>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":10}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();