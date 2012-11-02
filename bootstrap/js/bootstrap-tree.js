/* =============================================================
 * bootstrap-tree.js v0.1
 * http://twitter.github.com/cutterbl/Bootstrap-Tree
 * 
 * Inspired by Twitter Bootstrap, with credit to bits of code
 * from all over.
 * =============================================================
 * Copyright 2012 Cutters Crossing.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

!function ($) {

  "use strict"; // jshint ;_;


  /* TREE CLASS DEFINITION
   * ========================= */

  var Tree = function (element, options) {
	  this.$element = $(element)
	  this.$tree = this.$element.closest('.tree')
	  this.parentage = GetParentage(this.$element)
	  this.options = $.extend({}, $.fn.tree.defaults, options)

	  if (this.options.parent) {
	      this.$parent = $(this.options.parent)
	  }

	  this.options.toggle && this.toggle()
  }

      Tree.prototype = {

        constructor: Tree
        
        , toggle: function () {
        	this.$parent[this.$element.hasClass('in') ? 'addClass' : 'removeClass']('closed')
        	this.$element[this.$element.hasClass('in') ? 'removeClass' : 'addClass']('in')
        }
      
      	, getparentage: function() {
      		return this.parentage
      	}
      	
      	, node: function () {
      		var node = $.extend(true, {}, $(this.$parent).data())
      		node.branch = this.$element
      		return node
      	}

      }
      
      var GetParentBranch = function ($this) {
    	  return $this.closest('ul.branch').prev('.tree-toggle')
      }
      
      var GetParentage = function ($this) {
    	  var arr = [], tmp
    	  tmp = GetParentBranch($this)
    	  if (tmp.length) {
    		  arr = GetParentage(tmp)
    		  arr.push(tmp.attr('data-value'))
    	  }
    	  return arr
      }


     /* COLLAPSIBLE PLUGIN DEFINITION
      * ============================== */

      $.fn.tree = function (option) {
          return this.each(function () {
              var $this = $(this)
                , data = $this.data('tree')
                , options = typeof option == 'object' && option
              if (!data) $this.data('tree', (data = new Tree(this, options)))
              if (typeof option == 'string') data[option]()
            })
      }

      $.fn.tree.defaults = {
        toggle: true
      }

      $.fn.tree.Constructor = Tree

     /* COLLAPSIBLE DATA-API
      * ==================== */

      $(function () {
        $('body').on('click.tree.data-api', '[data-toggle=branch]', function (e) {
          var $this = $(this), href
            , $parent = $this.parent()
            , target = $this.next('.branch')
              || e.preventDefault()
              || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
            , option = $(target).data('tree') ? 'toggle' : $this.data()
           option.parent = $this
          $(target).tree(option)
        })
        $('body').on('click.tree.data-api', 'a:not([data-toggle=branch])', function (e) {
          e.preventDefault()
          var $this = $(this)
          	, branch = $this.closest('.branch')
          	, data = branch.data('tree')
          //console.log(data['getparentage']())
          //console.log(data['node']())
        })
      })

    }(window.jQuery);