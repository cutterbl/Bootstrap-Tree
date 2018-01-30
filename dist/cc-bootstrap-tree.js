/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setBoolean;
function setBoolean(value) {
    if (!value) {
        return false;
    }

    if (typeof value === 'string') {
        value = value.trim();

        if (!isNaN(value)) {
            return Boolean(parseFloat(value));
        }

        switch (value) {
            case 'true':
            case 'yes':
                value = true;
                break;
            case 'false':
            case 'no':
                value = false;
                break;
        }
    }

    return Boolean(value);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(6);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _BSTree = __webpack_require__(4);

var _BSTree2 = _interopRequireDefault(_BSTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

(function ($) {
    if (typeof $ === 'undefined') {
        throw new Error('CC-Bootstrap-Tree\'s JavaScript requires jQuery. jQuery must be included beforehand.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('CC-Bootstrap-Tree\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
})(_jquery2.default);

exports.default = _BSTree2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* =============================================================
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

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _BSTreeNode = __webpack_require__(5);

var _BSTreeNode2 = _interopRequireDefault(_BSTreeNode);

var _setBoolean = __webpack_require__(1);

var _setBoolean2 = _interopRequireDefault(_setBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BSTree = function ($, BSTreeNode) {

    /**
     * ----------------------------------------------------------------------
     * Constants
     * ----------------------------------------------------------------------
     */
    var NAME = 'bstree';
    var VERSION = '0.0.5';
    var DATA_KEY = 'bs.tree';
    var EVENT_KEY = '.' + DATA_KEY;
    var COLLAPSE_EVENT_KEY = '.bs.collapse';
    //const DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];

    var Default = {
        base: '',
        params: {
            request: {
                dataType: 'json',
                type: 'POST',
                complete: $.noop,
                error: $.noop,
                success: $.noop
            }
        }
    };

    var Event = {
        CHECKBOX_CLICK: 'click.checkbox' + EVENT_KEY,
        CHECKBOX_CHANGE: 'change.checkbox' + EVENT_KEY,
        CHECKALL_CHANGE: 'change.checkall' + EVENT_KEY,
        COLLAPSE_SHOW: 'show' + COLLAPSE_EVENT_KEY,
        COLLAPSE_HIDE: 'hide' + COLLAPSE_EVENT_KEY
    };

    var ClassName = {
        FA_ADDER: 'fa fa-fw',
        TREE_ICON: NAME + '-icon',
        NODE_TEXT: 'node-text',
        TOGGLE_EXPAND: 'fa-chevron-right',
        TOGGLE_COLLAPSE: 'fa-chevron-down',
        TREE_LOADING: 'fa-spinner fa-spin',
        TREE_OPEN: 'fa-folder-open',
        TREE_CLOSED: 'fa-folder',
        TREE_CHECK: NAME + '-check',
        TREE_CHECKALL: NAME + '-check-all',
        TREE_CHECKBOX: NAME + '-checkbox',
        TREE_UNCHECKED: 'fa-square-o',
        TREE_CHECKED: 'fa-check-square',
        TREE_PARTIAL: 'fa-check-square-o',
        ALL_CHECK_STATES: 'fa-square-o fa-check-square fa-check-square-o',
        CHECKBOX_SETUP: 'fa fa-fw ' + NAME + '-checkbox fa-square-o',

        TREE_NOICON: NAME + '-noicon',
        TREE_LEAF: NAME + '-leaf',
        TREE_BRANCH: NAME + '-branch',
        TREE_FIRST: NAME + '-first',
        TREE_LAST: NAME + '-last',
        TREE_HEADER_ICON: NAME + '-header-icon',
        TREE_ROOT_HEADER: NAME + '-root-header',
        TREE_UNDETERMINED: NAME + '-undetermined',
        TOGGLE_RIGHT: 'fa-chevron-right',
        TOGGLE_DOWN: 'fa-chevron-down'
    };

    var Selector = {
        TREE_ICON: '.' + ClassName.TREE_ICON,
        COLLAPSE: '.collapse',
        CHECKBOX: 'input:checkbox',
        CHECKED: 'input:checked',
        CHECKBOX_LINKS: '.' + ClassName.TREE_CHECK,
        CHECKALL_LINKS: '.' + ClassName.TREE_CHECKALL,
        ALLCHECK_LINKS: '.' + ClassName.TREE_CHECK + ', .' + ClassName.TREE_CHECKALL,
        ANYCHECK_LINKS: '[class^="' + ClassName.TREE_CHECK + '"]',
        CHECKBOX_INPUTS: '.' + ClassName.TREE_CHECK + '>input',
        ALLCHECK_INPUTS: '.' + ClassName.TREE_CHECKALL + '>input',
        CHECKBOX_ICON: '.' + ClassName.TREE_CHECKBOX
    };

    var BSTree = function () {
        function BSTree(element, options) {
            _classCallCheck(this, BSTree);

            this.type = NAME;
            this.$element = $(element);
            this.options = $.extend(true, {}, $.fn[this.type].defaults, this.$element.data(), options);
            this.expandIcon = this.options.foldertree ? ClassName.TREE_CLOSED : ClassName.TOGGLE_EXPAND;
            this.collapseIcon = this.options.foldertree ? ClassName.TREE_OPEN : ClassName.TOGGLE_COLLAPSE;
            this.initialize();
        }

        _createClass(BSTree, [{
            key: 'dispose',
            value: function dispose() {
                $.removeData(this.$element, DATA_KEY);

                this.type = null;
                this.$element = null;
                this.options = null;
            }
        }, {
            key: 'initialize',
            value: function initialize() {
                this.addIcons();

                this.createEventHandlers();
            }
        }, {
            key: 'createEventHandlers',
            value: function createEventHandlers() {
                var _this = this;

                this.$element.on(Event.COLLAPSE_SHOW, Selector.COLLAPSE, function (event) {
                    return _this.expandTree(event);
                }).on(Event.COLLAPSE_HIDE, Selector.COLLAPSE, function (event) {
                    return _this.collapseTree(event);
                }).on(Event.CHECKBOX_CLICK, Selector.ALLCHECK_LINKS, function (event) {
                    return _this.checkClickHandler(event);
                }).on(Event.CHECKBOX_CHANGE, Selector.CHECKBOX_INPUTS, function (event) {
                    return _this.checkboxChangeHandler(event);
                }).on(Event.CHECKALL_CHANGE, Selector.ALLCHECK_INPUTS, function (event) {
                    return _this.checkallChangeHandler(event);
                });
            }
        }, {
            key: 'checkClickHandler',
            value: function checkClickHandler(event) {
                event.preventDefault();
                var $target = $(event.currentTarget);
                var href = $target.attr('href');
                var $input = $(href);
                var checked = $input.prop('checked');
                this.toggleCheckboxValue($input, !checked);
                $input.change();
                // now normalize the branch
                var $branch = $target.closest('ul');
                this.normalizeBranch($branch);
            }
        }, {
            key: 'checkboxChangeHandler',
            value: function checkboxChangeHandler(event) {
                event.preventDefault();
                var $target = $(event.currentTarget);
                var checked = $target.prop('checked');
                var $parent = $target.parent();
                var $icon = $(Selector.CHECKBOX_ICON, $parent);
                this.toggleCheckMark($icon, checked);
            }
        }, {
            key: 'checkallChangeHandler',
            value: function checkallChangeHandler(event) {
                event.preventDefault();
                var $target = $(event.currentTarget);
                var checked = $target.prop('checked');
                var $parent = $target.parent();
                var $icon = $(Selector.CHECKBOX_ICON, $parent);
                // toggle the checkmark of this checkall
                this.toggleCheckMark($icon, checked);
                // find the 'branch'
                var branchId = $parent.prev().attr('href');
                var $branch = $(branchId, $parent.closest('li'));
                this.toggleAll($branch, checked);
            }
        }, {
            key: 'toggleCheckMark',
            value: function toggleCheckMark($icon, value) {
                $icon.removeClass(ClassName.ALL_CHECK_STATES).addClass(value ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
            }
        }, {
            key: 'toggleCheckboxValue',
            value: function toggleCheckboxValue($input, value) {
                $input.prop('checked', value);
            }
        }, {
            key: 'toggleAll',
            value: function toggleAll($branch, value) {
                var $inputs = $(Selector.CHECKBOX, $branch);
                $inputs.prop('checked', value).change();
            }
        }, {
            key: 'normalizeBranch',
            value: function normalizeBranch($branch) {
                var $checkAll = $(Selector.CHECKALL_LINKS, $branch.prev());
                var $inputs = $(Selector.CHECKBOX, $branch);
                if ($inputs.length) {
                    var $checked = $inputs.filter(':checked');
                    var iconClass = ClassName.TREE_UNCHECKED;
                    var value = false;
                    if ($inputs.length === $checked.length) {
                        iconClass = ClassName.TREE_CHECKED;
                        value = true;
                    } else if ($checked.length < $inputs.length) {
                        iconClass = ClassName.TREE_PARTIAL;
                    }
                    var $input = $(Selector.CHECKBOX, $checkAll);
                    this.toggleCheckboxValue($input, value);
                    $(Selector.CHECKBOX_ICON, $checkAll).removeClass(ClassName.ALL_CHECK_STATES).addClass(iconClass);
                }
            }
        }, {
            key: 'expandTree',
            value: function expandTree(event) {
                var _this2 = this;

                event.stopPropagation();
                var $el = $(event.currentTarget);
                var data = $el.data();
                var $icon = $(Selector.TREE_ICON, $el.prev());
                $icon.removeClass(this.expandIcon);
                if (!data.href || (0, _setBoolean2.default)(data.loaded)) {
                    $icon.addClass(this.collapseIcon);
                }
                if (data.href && ((0, _setBoolean2.default)(data.reload) || !(0, _setBoolean2.default)(data.loaded))) {
                    $icon.addClass(ClassName.TREE_LOADING);
                    this.getData($el).always(function () {
                        return $icon.removeClass(ClassName.TREE_LOADING).addClass(_this2.collapseIcon);
                    });
                }
            }
        }, {
            key: 'collapseTree',
            value: function collapseTree(event) {
                event.stopPropagation();
                var $el = $(event.currentTarget);
                var $icon = $(Selector.TREE_ICON, $el.prev());
                $icon.removeClass(this.collapseIcon).addClass(this.expandIcon);
            }
        }, {
            key: 'getData',
            value: function getData($node) {
                var _this3 = this;

                var data = $node.data();
                var opts = $.extend(true, {}, this.options.params);
                var requestParams = {
                    url: '' + this.options.base + data.href,
                    context: $node,
                    data: $.extend(true, {}, data)
                };

                delete opts.request.complete;
                delete opts.request.error;
                delete opts.request.success;
                delete requestParams.data.reload;
                delete requestParams.data.loaded;
                delete requestParams.data.href;

                requestParams = $.extend(true, opts.request, requestParams);

                return $.ajax(requestParams).done(function (data, status, xhr) {
                    _this3.buildBranch($node, data);
                    $node.data('loaded', true);
                    return _this3.options.params.request.success(data, status, xhr);
                }).fail(this.options.params.request.error).always(function (data, status) {
                    return _this3.options.params.request.complete(data, status);
                });
            }
        }, {
            key: 'buildBranch',
            value: function buildBranch($branch, data) {
                if (data && Array.isArray(data) && data.length) {
                    $branch.empty(); // this is in case it is being 'reloaded', otherwise it's already empty

                    var nodes = this.buildNodes(data);

                    $branch.append(nodes);
                }
            }
        }, {
            key: 'buildNodes',
            value: function buildNodes(nodes) {
                var _this4 = this;

                var newNodes = [];

                nodes.forEach(function (treeNode) {
                    var $node = _this4.buildNode(treeNode);
                    newNodes.push($node);
                });

                return newNodes;
            }
        }, {
            key: 'buildNode',
            value: function buildNode(leaf) {
                var node = new BSTreeNode({ options: leaf, treeOptions: this.options });
                return node.element;
            }
        }, {
            key: 'addIcons',
            value: function addIcons() {
                var _this5 = this;

                var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$element;

                if (this.options.checkbox) {
                    var $anchors = $(Selector.ANYCHECK_LINKS, $element);
                    var $icon = $('<i>').addClass(ClassName.CHECKBOX_SETUP);
                    $anchors.prepend($icon);
                    var $checked = $(Selector.CHECKED, $anchors);
                    var $checkedAnchors = $checked.prev();
                    $checkedAnchors.removeClass(ClassName.TREE_UNCHECKED).addClass(ClassName.TREE_CHECKED);

                    var $checkAlls = $anchors.filter(Selector.CHECKALL_LINKS);
                    $checkAlls.each(function (index, anchor) {
                        var $anchor = $(anchor);
                        var branchId = $anchor.prev().attr('href');
                        var $branch = $(branchId, $anchor.closest('li'));
                        _this5.normalizeBranch($branch);
                    });
                }
            }
        }, {
            key: 'getSelected',
            value: function getSelected() {
                var $this = this.$element;
                var $checked = $(Selector.CHECKBOX_LINKS + '>' + Selector.CHECKED, $this);
                var selected = [];

                $checked.each(function (idx, el) {
                    return selected.push($(el).val());
                });

                return selected.join();
            }
        }, {
            key: 'version',
            get: function get() {
                return VERSION;
            }
        }, {
            key: 'default',
            get: function get() {
                return Default;
            }
        }], [{
            key: '_jQueryInterface',
            value: function _jQueryInterface(config, relatedTarget) {
                return this.each(function () {
                    var $this = $(this);
                    var data = $this.data(DATA_KEY);
                    var _config = $.extend(true, {}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

                    if (!data) {
                        data = new BSTree(this, _config);
                        $this.data(DATA_KEY, data);
                    }

                    if (typeof config === 'string') {
                        if (_typeof(data[config]) === undefined) {
                            throw new Error('No method named ' + config);
                        }
                        return data[config](relatedTarget);
                    }
                });
            }
        }]);

        return BSTree;
    }();

    $.fn[NAME] = BSTree._jQueryInterface;
    $.fn[NAME].Constructor = BSTree;
    $.fn[NAME].getSelected = BSTree.getSelected;
    $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return BSTree._jQueryInterface;
    };

    return BSTree;
}(_jquery2.default, _BSTreeNode2.default);

exports.default = BSTree;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* =============================================================
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

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _setBoolean = __webpack_require__(1);

var _setBoolean2 = _interopRequireDefault(_setBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ----------------------------------------------------------------------
 * Constants
 * ----------------------------------------------------------------------
 */
var NAME = 'bstree';
/*const VERSION = '0.0.5';
const DATA_KEY = 'bs.tree';
const EVENT_KEY = `.${DATA_KEY}`;
//const DATA_API_KEY = '.data-api';
const JQUERY_NO_CONFLICT = $.fn[NAME];

const Default = {
    params: {
        base: '',
        request: {
            dataType: 'json',
            type: 'POST',
            complete: $.noop,
            error: $.noop,
            success: $.noop
        }
    }
};

const Event = {
    CLICK: `click${EVENT_KEY}`,
    MOUSEENTER: `mouseenter${EVENT_KEY}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY}`,
    CHANGE: `change${EVENT_KEY}`
};*/

var ClassName = {
    TREE_ICON: NAME + '-icon',
    NODE_TEXT: 'node-text',
    TOGGLE_EXPAND: 'fa-chevron-right',
    TOGGLE_COLLAPSE: 'fa-chevron-down',
    TREE_LOADING: 'fa-spinner fa-spin',

    TREE_NOICON: NAME + '-noicon',
    TREE_LEAF: NAME + '-leaf',
    TREE_BRANCH: NAME + '-branch',
    TREE_FIRST: NAME + '-first',
    TREE_LAST: NAME + '-last',
    TREE_HEADER_ICON: NAME + '-header-icon',
    TREE_ROOT_HEADER: NAME + '-root-header',
    TREE_OPEN: NAME + '-open',
    TREE_CLOSED: NAME + '-closed',
    TREE_CHECKBOX: NAME + '-checkbox',
    TREE_CHECKED: NAME + '-checked',
    TREE_UNCHECKED: NAME + '-unchecked',
    TREE_UNDETERMINED: NAME + '-undetermined',
    TOGGLE_RIGHT: 'fa-chevron-right',
    TOGGLE_DOWN: 'fa-chevron-down'
};

/*const Selector = {
    CHECKBOX: 'input:checkbox'
};*/

var BSTreeNode = function () {
    function BSTreeNode(_ref) {
        var _ref$options = _ref.options,
            options = _ref$options === undefined ? {
            text: '',
            leaf: false,
            value: undefined,
            expanded: false,
            cls: undefined,
            id: undefined,
            href: undefined,
            checkable: false,
            checked: 'none',
            children: []
        } : _ref$options,
            _ref$treeOptions = _ref.treeOptions,
            treeOptions = _ref$treeOptions === undefined ? {} : _ref$treeOptions;

        _classCallCheck(this, BSTreeNode);

        this.$element = (0, _jquery2.default)('<li>');
        this.$text = (0, _jquery2.default)('<span>').addClass(ClassName.NODE_TEXT);
        this.attributes = {};
        this.$anchor = null;
        this.treeOptions = treeOptions;

        this.initialize(options);
    }

    _createClass(BSTreeNode, [{
        key: 'initialize',
        value: function initialize(options) {
            this.setOptions(options);
            this.setNodeClass();
            this.normalizeCheckbox();
            this.setHref();
            this.setText();
            this.attachAttributes();
            this.attachChildren();
        }
    }, {
        key: 'setOptions',
        value: function setOptions(options) {
            Object.assign(this, options);
        }
    }, {
        key: 'setNodeClass',
        value: function setNodeClass() {
            if (this.leaf) {
                this.$element.addClass(ClassName.TREE_LEAF);
            } else {
                this.$element.addClass(this.expanded ? ClassName.TREE_OPEN : ClassName.TREE_CLOSED);
            }
        }
    }, {
        key: 'normalizeCheckbox',
        value: function normalizeCheckbox() {
            if (!this.treeOptions.checkbox) {
                delete this.attributes['data-checkable'];
                delete this.attributes['data-checked'];
            }
        }
    }, {
        key: 'setHref',
        value: function setHref() {
            if (this.href) {
                if (this.leaf) {
                    this.$anchor = (0, _jquery2.default)('<a>').attr('href', this.href);
                } else {
                    this.attributes['data-href'] = this.href;
                }
            }
        }
    }, {
        key: 'setText',
        value: function setText() {
            if (this.$anchor) {
                this.$anchor.html(this.text);
                this.$text.append(this.$anchor);
            } else {
                this.$text.html(this.text);
            }

            this.$element.append(this.$text);
        }
    }, {
        key: 'attachAttributes',
        value: function attachAttributes() {
            this.$element.attr(this.attributes);
        }
    }, {
        key: 'attachChildren',
        value: function attachChildren() {
            var _this = this;

            if (this.children && this.children.length) {
                var $ul = (0, _jquery2.default)('<ul>').addClass(ClassName.TREE_BRANCH);

                this.children.forEach(function (child) {
                    var node = new BSTreeNode({ options: child, treeOptions: _this.treeOptions });
                    var $node = node.element;
                    $ul.append($node);
                });
                this.$element.append($ul);
            }
        }
    }, {
        key: 'leaf',
        set: function set(value) {
            this._leaf = (0, _setBoolean2.default)(value);
            this.role = this._leaf ? 'leaf' : 'branch';
        },
        get: function get() {
            return this._leaf;
        }
    }, {
        key: 'value',
        set: function set(value) {
            this.attributes['data-value'] = value;
        },
        get: function get() {
            return this.attributes['data-value'];
        }
    }, {
        key: 'id',
        set: function set(value) {
            this.attributes.id = value;
        },
        get: function get() {
            return this.attributes.id;
        }
    }, {
        key: 'checked',
        set: function set(value) {
            this.attributes['data-checked'] = value !== undefined && value !== 'none' ? (0, _setBoolean2.default)(value) : 'none';
        },
        get: function get() {
            return this.attributes['data-checked'];
        }
    }, {
        key: 'checkable',
        set: function set(value) {
            if (value !== undefined) {
                this.attributes['data-checkable'] = (0, _setBoolean2.default)(value);
            }
        },
        get: function get() {
            return this.attributes['data-checkable'];
        }
    }, {
        key: 'expanded',
        set: function set(value) {
            this._expanded = value;
        },
        get: function get() {
            return this._expanded;
        }
    }, {
        key: 'element',
        set: function set($el) {
            this.$element = $el;
            var options = $el.data();
            options.id = $el.attr('id');

            this.initialize(options);
        },
        get: function get() {
            return this.$element;
        }
    }]);

    return BSTreeNode;
}();

exports.default = BSTreeNode;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);