/* =============================================================
 * bootstrap-tree.js v0.5
 * http://github.com/cutterbl/Bootstrap-Tree
 * 
 * Inspired by Twitter Bootstrap, with credit to bits of code
 * from all over.
 * =============================================================
 * Copyright 2012 - 2018 Cutters Crossing.
 *
 * Licensed under the GNU General Public License v2
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 ** http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

!function ($) {

  "use strict"; // jshint ;_;
  
  if (typeof $.fn.bstree != "undefined") {
	  return
  }

  /* BSTREE CLASS DEFINITION
   * ========================= */
  var BSTree = function (element, options) {
    this.init('bstree', element, options)
  }

  BSTree.prototype = {

    constructor: BSTree
    
    , init: function (type, element, options) {
        var el = this
        
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        this.enabled = true
        
        this.checkLastNode()
        
        this.$element.on("click." + this.type + ".coll-icon", "li>i.bstree-icon", function (ev) {
          var $this = $(this)
              , $parent = $this.parent()
              , data = $parent.data();
          if (!$parent.hasClass("bstree-leaf")) {

            if (!$.isEmptyObject(data)) {

              el.processNode($parent, data)
            } else {
              $parent.toggleClass("bstree-open bstree-closed")
            }
          }
        }).on("click." + this.type + ".coll-icon", "li>span.node-text>i.bstree-header-icon", function (ev) {
          var $this = $(this)
              , $parent = $this.parent().parent()
              , data = $parent.data();
          if (!$parent.hasClass("bstree-leaf")) {

            if (!$.isEmptyObject(data)) {

              el.processNode($parent, data)
            } else {
              $parent.toggleClass("bstree-open bstree-closed")
              $this.toggleClass("icon-chevron-right icon-chevron-down")
            }
          }
        }).on("mouseenter." + this.type, ".node-text mouseleave." + this.type, ".node-text", function (ev) {
          $(this).toggleClass("bstree-hovered")
        })
        .on("change." + this.type + ".checkbox", "input[type=checkbox]", this, this._setNewState)
        .on("click." + this.type + ".checkbox", ".bstree-checkbox", this, this._checkboxHandler)
        
        this._addIcons(element)
    }
  
    , _addIcons: function (el) {
      var $el = $(el)
          , $li = $("li:not(:has(>i.bstree-icon))", $el)
          , treedata = this.options
          , baseicon = $("<i>").addClass("bstree-icon")
      
      $li.prepend(baseicon)
      
      if (treedata.checkbox) {
        $li.each(function (ind, item) {
          var $item = $(item)
              , data = $item.data()
              , thisicon = baseicon.clone()
              , node = $item.children("span.node-text")
          if (data.checked !== undefined && data.checked !== "none") {
            var fldName = (data.checkbox !== undefined) ? data.checkbox : treedata.checkbox
                , fld = $("<input>").attr({type: "checkbox", value: ((data.value) ? data.value : 0), name: fldName}).prop("checked", data.checked)
            thisicon.addClass("bstree-checkbox").addClass((data.checked) ? "bstree-checked" : "bstree-unchecked")
            node.prepend(fld).prepend(thisicon)
          } else {
            $item.addClass("bstree-noicon")
          }
        })
        $("li:last-child>span>input[type=checkbox]", $el).trigger("change", [true])
      } else if (treedata.foldertree) {
        var newicon = baseicon.clone()
        $("span.node-text", $li).prepend(newicon)
      }
      
      var $first = $li.filter(":first")
      if ($first.hasClass("bstree-root-header")) {
        $first.children("i.bstree-icon").remove()
        $first.children("span.node-text").prepend($("<i>").addClass("bstree-header-icon " + (($first.hasClass("bstree-closed")) ? "icon-chevron-right": "icon-chevron-down")))
      }
    }
  
    , getOptions: function (options) {
      options = $.extend(true, {}, $.fn[this.type].defaults, this.$element.data(), options)
  
      return options
    }
    
    , checkLastNode: function () {
      var $el = this.$element
      if ($("li:last-child", $el).css("background") !== "transparent") 
        $("li:last-child", $el).addClass("bstree-last");
    }
    
    , processNode: function ($node, data) {
      data.loaded = (data.loaded !== undefined) ? data.loaded : false
      data.reload = (data.reload !== undefined) ? data.reload : false
      data.href = (data.href !== undefined) ? data.href : "";
      
      if ($node.hasClass("bstree-closed") && data.href.length) {
        if (!data.loaded || data.reload) {
          this.getRemoteData($node, data)
          return
        }
      }
      $node.toggleClass("bstree-closed bstree-open")
    }
    
    , getRemoteData: function ($node, data) {
      var el = this
          , opts = $.extend(true, {}, this.options.params)
          , rFns = {
            complete: opts.request.complete,
            error: opts.request.error,
            success: opts.request.success
          }
          , rPrms = {}
      rPrms = {
        context: this,
        success: function (d, s, x) {

          this._buildOutput(d, opts.request.dataType, $node)
          rFns.success(d, s, x)
        },
        error: rFns.error,
        complete: rFns.complete,
        data: $.extend(true, {}, data),
        url: opts.base + data.href
      }
      
      delete opts.request.complete
      delete opts.request.error
      delete opts.request.success
      delete rPrms.data.reload
      delete rPrms.data.loaded
      delete rPrms.data.href
      
      rPrms = $.extend(true, opts.request, rPrms)
      $node.children("i.bstree-icon").addClass("bstree-loading")

      $.ajax(rPrms)
    }
    
    , _buildOutput: function (d, type, parent) {
      var nodes = this._buildNodes(d, type, parent)
      parent.children("ul.bstree-branch").remove() // remove the old one, if replacing
      var out = this._createNodes(nodes)
      parent.append(out)
      this._addIcons(out)
      parent.data({loaded:true}).toggleClass("bstree-closed bstree-open").children("i.bstree-icon").removeClass("bstree-loading")
    }
    
    , _createNodes: function (nodes) {
      
      var els = []
        , $this = this
        , branch = $("<ul>").addClass("bstree-branch")
      

      
      $.each(nodes, function (ind, el) {
        var node = $("<li>")
            , role = ($this.$element.bstree.SetBoolean(el.leaf)) ? "leaf" : "branch"
            , anchor = null
            , attributes = {}

        if (role === "leaf") 
          attributes["class"] = "bstree-leaf"
        else
          attributes["class"] = (el.expanded) ? "bstree-open" : "bstree-closed"
        
        if (el.value) attributes["data-value"] = el.value
        
        if (el.id) attributes["data-itemid"] = el.id
        
        for (var key in el) { // do we have some extras?
          if (key.indexOf("data-") !== -1) attributes[key] = el[key]
        }
        
        if ($this.options.checkbox !== undefined && $this.options.checkbox) {
          console.log(el.checked)
          attributes["data-checked"] = (el.checked !== undefined && el.checked !== "none") ? $this.$element.bstree.SetBoolean(el.checked) : "none"
          if (el.checkable !== undefined)
            attributes["data-checkable"] = $this.$element.bstree.SetBoolean(el.checkable)
        }
        
        if (el.href !== undefined) {
          if (role === "leaf")
            anchor = $("<a>").attr("href", el.href)
          else
            attributes["data-href"] = el.href
        }
        
        var text = $("<span>").addClass("node-text")
        if (anchor) {
          text.append(anchor.html(el.text))
        } else {
          text.html(el.text)
        }
        
        node.attr(attributes).append(text)
        
        if (el.children !== undefined && el.children.length)
          node.append($this._createNodes(el.children))
        
        branch.append(node)
      })
      
      return branch
    }
    , _buildNodes: function (doc, type) {
      
      var nodes = []
        , $el = this.$element
      
      if (type === "json") {
        
        nodes = this._parseJsonNodes(doc)
        
      } else if (type === "xml") {
        
        nodes = this._parseXmlNodes($(doc).find("nodes").children())
        
      }
      
      return nodes
    }
    
    , _parseJsonNodes: function (doc) {
      
      var nodes = []
        , $this = $(this)
      
      $.each(doc, function (ind, el) {
        
        var opts = {}
          , boolChkArr = ["leaf","expanded","checkable","checked"]
        
        for (var item in el) {
          
          var nodeVal = (item !== "children") ? el[item] : $this[0]._parseJsonNodes(el.children)
              
          if (!$.isArray(nodeVal)) nodeVal = $.trim(nodeVal)
          if (nodeVal.length) opts[item] = ($.inArray(item, boolChkArr) > -1) ? $this.bstree.SetBoolean(nodeVal) : nodeVal
              
        }
        
        nodes.push(new Node(opts))
      })
      
      return nodes
      
    }
    
    , _parseXmlNodes: function (doc) {
      
      var nodes = []
        , $this = $(this)
        , boolChkArr = ["leaf","expanded","checkable","checked"]
      
      $.each(doc, function (ind, el) {
        
        var opts = {}
          , $el = $(el)
        
        $.each($el.children(), function (x, i) {
          
          var $i = $(i)
            , tagName = $i[0].nodeName
            , nodeVal = (tagName !== "children") ? $i.text() : $this[0]._parseXmlNodes($i.children("node"))
                
          if (!$.isArray(nodeVal)) nodeVal = $.trim(nodeVal)
          if (nodeVal.length) opts[tagName] = ($.inArray(tagName, boolChkArr) > -1) ? SetBoolean(nodeVal) : nodeVal
              
        })
        
        nodes.push(new Node(opts))
      })
      
      return nodes
      
    }

    , getparentage: function () {
      
      return this.parentage
      
    }

    , node: function (el) {
      el = el || $(this)
      
      var node = $.extend(true, {}, (el[0] === $(this)[0]) ? $(this.$parent).data() : el.data())
      
      node.branch = this.$element
      node.parentage = this.parentage
      node.el = (el[0] === $(this)[0]) ? this.$parent : el
      
      delete node.parent
      
      return node
      
    }
    
    , _checkboxHandler: function (ev) {
      var $this = $(this)
          , $parentLi = $this.closest("li")
          , parentdata = $parentLi.data()
          , cb = $this.next("input[type=checkbox]")
          , ckd = cb.prop("checked")
      $parentLi.data({checked: !ckd})
      cb.prop("checked", !ckd).trigger("change", [ev.ctrlKey, !ckd])
    }
    
    , _setNewState: function (ev, ctrlKey, checked) {

      var $this = $(this)
          , $parentLi = $this.closest("li")
          , $leaves = $("ul li", $parentLi)
          , checked = (checked) ? checked : $this.prop("checked")
          , icn = $this.prev("i[class~=bstree-checkbox]")
          , check = "checked"

      icn.removeClass("bstree-checked bstree-unchecked bstree-undetermined")
      if (!$leaves.length) {
        icn.addClass("bstree-" + ((checked) ? check : "un" + check))
      } else {
        var leafCBs = $("input[type=checkbox]", $leaves)
            , leafIcns = $("i[class~=bstree-checkbox]", $leaves)
        if (!ctrlKey) {
          icn.addClass("bstree-" + ((checked) ? check : "un" + check))
          leafCBs.prop("checked", checked)
          leafCBs.each(function (ind, el) {
            var $Li = $(el).closest("li")
                , leafdata = $Li.data()
            if (leafdata.checked !== checked)
              $Li.data({checked: checked})
          })
          leafIcns.removeClass("bstree-checked bstree-unchecked bstree-undetermined").addClass("bstree-" + ((checked) ? check : "un" + check))
        } else {
          var childSel = $.grep(leafCBs, function (el, ind) {
            return $(el).prop("checked")
          })
          if (childSel.length)
            icn.addClass("bstree-" + ((checked) ? check : "undetermined"))
          else
            icn.addClass("bstree-" + ((checked) ? check : "un" + check))
        }
      }
      ev.data._checkParent($parentLi)
    }
    
    , _checkParent: function (node) {

      var $parent = node.closest("ul").parent("li")
          , span = $parent.children("span")
          , childCBoxes = $("ul li>span>input:checkbox", $parent)
          , chkdCBoxes = childCBoxes.filter(":checked")
          , state = "checked"
            
      if (!$parent.length)
        return
        
      if (!chkdCBoxes.length)
        state = "unchecked"
      else if (chkdCBoxes.length < childCBoxes.length)
        state = "undetermined"
          
      var spanChildren = span.children("input:checkbox")
          , ckd = (state === "checked") ? true : false
      
      spanChildren.prop("checked", ckd)
      spanChildren.each(function (ind, el) {
          var $Li = $(el).closest("li")
              , leafdata = $Li.data()
          if (leafdata.checked !== ckd)
            $Li.data({checked: ckd})
        })
      $("i.bstree-checkbox", span).removeClass("bstree-checked bstree-unchecked bstree-undetermined").addClass("bstree-" + state)
      // Do we open, or close the branch?
      $parent.removeClass("bstree-closed bstree-open").addClass((state === "unchecked") ? "bstree-closed" : "bstree-open")
      this._checkParent($parent)
    }

  }
  
  /* BSTREE PLUGIN DEFINITION
   * ============================== */
  $.fn.bstree = function (option, node) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('bstree')
        , options = typeof option == 'object' && option
      if (!data) $this.data('bstree', (data = new BSTree(this, options)))
      if (typeof option == 'string') return data[option](node)
    })
  }

  $.fn.bstree.defaults = {
      params: {
        base: "",
        request: {
          dataType: "json",
          type: "POST",
          complete: $.noop,
          error: $.noop,
          success: $.noop
        }
      }
  }
  
  $.fn.bstree.getSelected = function () {
    var chkd = $("input:checkbox:checked", this.$element)
        , sel = ""
    
    chkd.each(function (ind, el) {
      if (sel.length)
        sel += ","
      sel += $(el).val()
    })
    
    return sel
  }
  
  $.fn.bstree.SetBoolean = function (value) {
    
    value = $.trim(value)
    
    if (typeof value === "undefined" || value === null) return false
    
    if (typeof value === "string" && !isNaN(value)) value = parseFloat(value)
    
    if (typeof value === "string") {
      switch (value.toLowerCase()) {
        case "true":
        case "yes":
          return true
        case "false":
        case "no":
          return false
      }
    }
    
    return Boolean(value)
  }

  $.fn.bstree.Constructor = BSTree
  
  var Node = function (options) {
    
    $.extend(true, this, {
      text: undefined,
      leaf: false,
      value: undefined,
      expanded: false,
      cls: undefined,
      id: undefined,
      href: undefined,
      checkable: false,
      checked: "none",
      children: []
    }, options)
    
  }
  
}(window.jQuery)
