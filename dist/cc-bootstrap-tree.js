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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _BSTree = __webpack_require__(3);

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
/* 3 */
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

var _BSTreeNode = __webpack_require__(4);

var _BSTreeNode2 = _interopRequireDefault(_BSTreeNode);

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
    //const DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];

    var Default = {
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

    var Event = {
        CLICK: 'click' + EVENT_KEY,
        MOUSEENTER: 'mouseenter' + EVENT_KEY,
        MOUSELEAVE: 'mouseleave' + EVENT_KEY,
        CHANGE: 'change' + EVENT_KEY
    };

    var ClassName = {
        TREE_ICON: NAME + '-icon',
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
        TREE_LOADING: NAME + '-loading',
        TREE_HOVERED: NAME + '-hovered',
        TREE_UNCHECKED: NAME + '-unchecked',
        TREE_UNDETERMINED: NAME + '-undetermined',
        TOGGLE_RIGHT: 'glyphicon-chevron-right',
        TOGGLE_DOWN: 'glyphicon-chevron-down',
        NODE_TEXT: 'node-text'
    };

    var Selector = {
        CHECKBOX: 'input:checkbox'
    };

    var BSTree = function () {
        function BSTree(element, options) {
            _classCallCheck(this, BSTree);

            this.type = NAME;
            this.$element = $(element);
            this.options = $.extend(true, {}, $.fn[this.type].defaults, this.$element.data(), options);
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
                this.checkLastNode();

                this.setupEventHandlers();

                //this.addIcons();
            }
        }, {
            key: 'setupEventHandlers',
            value: function setupEventHandlers() {
                var _this = this;

                this.$element
                /* on click for tree icons */
                .on(Event.CLICK + '.coll-icon', 'li>i.' + ClassName.TREE_ICON, function (event) {
                    return _this.treeIconClick(event);
                })
                /* on click for the tree header icon */
                .on(Event.CLICK + '.coll-icon', 'li>span.' + ClassName.NODE_TEXT + '>i.' + ClassName.TREE_HEADER_ICON, function (event) {
                    return _this.treeHeaderIconClick(event);
                })
                /* mouseenter and mouseleave for hover state on a node */
                .on('' + Event.MOUSEENTER, '.' + ClassName.NODE_TEXT + ' ' + Event.MOUSELEAVE, '.' + ClassName.NODE_TEXT, function (event) {
                    return _this.hoverNode(event);
                })
                /* on change of checkboxes */
                .on(Event.CHANGE + '.checkbox', Selector.CHECKBOX, function (event) {
                    return _this.setNewState(event);
                })
                /* on click of checkboxes */
                .on(Event.CLICK + '.checkbox', '.' + ClassName.TREE_CHECKBOX, function (event) {
                    return _this.checkboxHandler(event);
                }).on('show.bs.collapse', '.cc-bstree-branch', function (event) {
                    var $el = $(event.currentTarget);
                    $el.parent().toggleClass(ClassName.TREE_CLOSED + ' ' + ClassName.TREE_OPEN);
                }).on('hide.bs.collapse', '.cc-bstree-branch', function (event) {
                    var $el = $(event.currentTarget);
                    $el.parent().toggleClass(ClassName.TREE_CLOSED + ' ' + ClassName.TREE_OPEN);
                });
            }
        }, {
            key: 'treeIconClick',
            value: function treeIconClick(event) {
                var $this = $(event.currentTarget);
                var $parent = $this.parent();
                var data = $parent.data();

                if (!$parent.hasClass(ClassName.TREE_LEAF)) {
                    if (!$.isEmptyObject(data)) {
                        this.processNode($this, $parent, data);
                    } else {
                        $parent.toggleClass(ClassName.TREE_OPEN + ' ' + ClassName.TREE_CLOSED);
                    }
                }
            }
        }, {
            key: 'treeHeaderIconClick',
            value: function treeHeaderIconClick(event) {
                var $this = $(event.currentTarget);
                var $parent = $this.parent();
                var data = $parent.data();

                if (!$parent.hasClass(ClassName.TREE_LEAF)) {
                    if (!$.isEmptyObject(data)) {
                        this.processNode($this, $parent, data);
                    } else {
                        $parent.parent().toggleClass(ClassName.TREE_OPEN + ' ' + ClassName.TREE_CLOSED);
                        $this.toggleClass(ClassName.TOGGLE_RIGHT + ' ' + ClassName.TOGGLE_DOWN);
                    }
                }
            }
        }, {
            key: 'hoverNode',
            value: function hoverNode(event) {
                $(event.currentTarget).toggleClass(ClassName.TREE_HOVERED);
            }
        }, {
            key: 'setNewState',
            value: function setNewState(event) {
                var ctrlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                var $this = $(event.currentTarget);
                var $parentLi = $this.closest('li');
                var $leaves = $('ul li', $parentLi);
                var $icon = $this.prev('i[class~=' + ClassName.TREE_CHECKBOX + ']');
                checked = checked !== null ? checked : $this.prop('checked');

                $icon.removeClass(ClassName.TREE_CHECKED + ' ' + ClassName.TREE_UNCHECKED + ' ' + ClassName.TREE_UNDETERMINED);

                if ($leaves) {
                    $icon.addClass(checked ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
                } else {
                    var $leafCheckboxes = $(Selector.CHECKBOX, $leaves);
                    var $leafIcons = $('i[class~=' + ClassName.TREE_CHECKBOX + ']', $leaves);

                    if (!ctrlKey) {
                        $icon.addClass(checked ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
                        $leafCheckboxes.prop('checked', checked);
                        $leafCheckboxes.each(function (idx, el) {
                            var $li = $(el).closest('li');
                            var leafData = $li.data();

                            if (leafData.checked !== checked) {
                                $li.data('checked', checked);
                            }
                        });
                        $leafIcons.removeClass(ClassName.TREE_CHECKED).removeClass(ClassName.TREE_UNCHECKED).removeClass(ClassName.TREE_UNDETERMINED);
                    } else {
                        var $selectedChild = $.grep($leafCheckboxes, function (el) {
                            return $(el).prop('checked');
                        });

                        if ($selectedChild) {
                            $icon.addClass(checked ? ClassName.TREE_CHECKED : ClassName.TREE_UNDETERMINED);
                        } else {
                            $icon.addClass(checked ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
                        }
                    }
                }

                //this.checkParent($parentLi);
                console.log('event data', event.data); // eslint-disable-line no-console
            }
        }, {
            key: 'checkParent',
            value: function checkParent($node) {
                var $parent = $node.closest('ul').parent('li');
                var $span = $parent.children('span');
                var $childCheckboxes = $('ul li>span>' + Selector.CHECKBOX, $parent);
                var $checkedCheckboxes = $childCheckboxes.filter(':checked');
                var state = 'checked';

                if (!$parent) {
                    return;
                }

                if (!$checkedCheckboxes) {
                    state = 'unchecked';
                } else if ($checkedCheckboxes.length < $childCheckboxes.length) {
                    state = 'undetermined';
                }

                var $spanChildren = $span.children(Selector.CHECKBOX);
                var checked = state === 'checked';

                $spanChildren.prop('checked', checked);
                $spanChildren.each(function (idx, el) {
                    var $li = $(el).closest('li');
                    var leafData = $li.data();

                    if (leafData.checked !== checked) {
                        $li.data('checked', checked);
                    }
                });

                $('i.' + ClassName.TREE_CHECKBOX, $span).removeClass(ClassName.TREE_CHECKED + ' ' + ClassName.TREE_UNCHECKED + ' ' + ClassName.TREE_UNDETERMINED).addClass(ClassName['TREE_' + state.toUpperCase()]);
                // Do we open, or close the branch?
                $parent.removeClass(ClassName.TREE_OPEN + ' ' + ClassName.TREE_CLOSED).addClass(state === 'checked' ? ClassName.TREE_CLOSED : ClassName.TREE_OPEN);
                this.checkParent($parent);
            }
        }, {
            key: 'checkboxHandler',
            value: function checkboxHandler(event) {
                var $this = $(event.currentTarget);
                var $parentLi = $this.closest('li');
                //const parentData = $parentLi.data();
                var checkbox = $this.next(Selector.CHECKBOX);
                var checked = checkbox.prop('checked');

                $parentLi.data('checked', !checked);
                checkbox.prop('checked', !checked).trigger(Event.CHANGE, [event.ctrlKey, !checked]);
            }
        }, {
            key: 'processNode',
            value: function processNode($node, $parent, data) {
                data.loaded = data.loaded !== undefined ? data.loaded : false;
                data.reload = data.reload !== undefined ? data.reload : false;
                data.href = data.href !== undefined ? data.href : null;

                if ($parent.hasClass(ClassName.TREE_CLOSED) && data.href) {
                    if (!data.loaded || data.reload) {
                        this.getRemoteData($node, $parent, data).always(function () {
                            return $parent.toggleClass(ClassName.TREE_CLOSED + ' ' + ClassName.TREE_OPEN);
                        });
                    }
                }
            }
        }, {
            key: 'getRemoteData',
            value: function getRemoteData($node, $parent, data) {
                var _this2 = this;

                var opts = $.extend(true, {}, this.options.params);
                var requestParams = {
                    url: '' + opts.base + data.href,
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

                var $children = $parent.children('i.' + ClassName.TREE_ICON);

                $children.addClass(ClassName.TREE_LOADING);

                return $.ajax(requestParams).done(function (data, status, xhr) {
                    _this2.buildOutput(data, $parent);
                    return _this2.options.params.request.success(data, status, xhr);
                }).fail(this.options.params.request.error).always(function (data, status) {
                    $children.removeClass(ClassName.TREE_LOADING);
                    return _this2.options.params.request.complete(data, status);
                });
            }
        }, {
            key: 'buildOutput',
            value: function buildOutput(data, $parent) {
                if (data && Array.isArray(data) && data.length) {
                    $parent.children('ul.' + ClassName.TREE_BRANCH).remove(); // remove the old one, if replacing

                    var $branch = this.createNodes(data);

                    $parent.append($branch);
                    //this.addIcons($branch);
                    $parent.data('loaded', true);
                }
            }
        }, {
            key: 'createNodes',
            value: function createNodes(nodes) {
                var _this3 = this;

                var $branch = $('<ul>').addClass(ClassName.TREE_BRANCH);

                nodes.forEach(function (treeNode) {
                    var node = new BSTreeNode({ options: treeNode, treeOptions: _this3.options });
                    var $node = node.element;
                    $branch.append($node);
                });

                return $branch;
            }

            /*buildOutput(data, $parent) {
                const nodes = this.buildNodes(data);
                 $parent.children(`ul.${ClassName.TREE_BRANCH}`).remove(); // remove the old one, if replacing
                 const output = this.createNodes(nodes);
                 $parent.append(output);
                this.addIcons(output);
                $parent.data('loaded', true)
                    .toggleClass(`${ClassName.TREE_CLOSED} ${ClassName.TREE_OPEN}`);
            }
             buildNodes(data) {
                return data.map((node) => {
                    const nodeOptions = this.buildNode(node);
                     return new BSTreeNode(nodeOptions);
                });
            }
             buildNode(node) {
                const options = {};
                 for (let key in node) {
                    let keyValue = key !== 'children' ? node[key] : this.buildNodes(node.children);
                     if (!Array.isArray(keyValue)) {
                        keyValue = $.trim(keyValue);
                    }
                    if (keyValue.length) {
                        options[key] = ['leaf', 'expanded', 'checkable', 'checked'].includes(key)
                            ? setBoolean(keyValue) : keyValue;
                    }
                }
                 return options;
            }
             createNode(treeNode) {
                const node = $('<li>');
                const role = setBoolean(treeNode.leaf) ? 'leaf' : 'branch';
                const attributes = {};
                let anchor = null;
                 if (role === 'leaf') {
                    attributes['class'] = ClassName.TREE_LEAF;
                } else {
                    attributes['class'] = treeNode.expanded ? ClassName.TREE_OPEN : ClassName.TREE_CLOSED;
                }
                 if (treeNode.value !== undefined) {
                    attributes['data-value'] = treeNode.value;
                }
                 if (treeNode.id) {
                    attributes.id = treeNode.id;
                }
                 for (let key in treeNode) {
                    if (key.indexOf('data-') !== -1) {
                        attributes[key] = treeNode[key];
                    }
                }
                 if (this.options.checkbox) {
                    attributes['data-checked'] = treeNode.checked !== undefined && treeNode.checked !== 'none'
                        ? setBoolean(treeNode.checked) : 'none';
                    if (treeNode.checkable !== undefined) {
                        attributes['data-checkable'] = setBoolean(treeNode.checkable);
                    }
                }
                 if (treeNode.href) {
                    if (role === 'leaf') {
                        anchor = $('<a>').attr('href', treeNode.href);
                    } else {
                        attributes['data-href'] = treeNode.href;
                    }
                }
                 const $text = $('<span>').addClass(ClassName.NODE_TEXT);
                 if (anchor) {
                    $text.append(anchor.html(treeNode.text));
                } else {
                    $text.html(treeNode.text);
                }
                 node.attr(attributes).append($text);
                 if (treeNode.children) {
                    node.append(this.createNodes(treeNode.children));
                }
                 return node;
            }
             createNodes(nodes) {
                const branch = $('ul').addClass(ClassName.TREE_BRANCH);
                 nodes.forEach((treeNode) => branch.append(this.createNode(treeNode)));
                 return branch;
            }*/

        }, {
            key: 'checkLastNode',
            value: function checkLastNode() {
                var $lastChild = $('li:last-child', this.$element);
                if ($lastChild.css('background') !== 'transparent') {
                    $lastChild.addClass(ClassName.TREE_LAST);
                }
            }
        }, {
            key: 'addIcons',
            value: function addIcons() {
                var _this4 = this;

                var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$element;

                var $li = $('li:not(:has(>i.' + ClassName.TREE_ICON + '))', $element);
                var treeData = this.options;
                var baseIcon = $('<i>').addClass(ClassName.TREE_ICON);

                $li.prepend(baseIcon);

                if (treeData.checkbox) {
                    $li.each(function (idx, el) {
                        return _this4.initCheckbox(idx, el, treeData, baseIcon);
                    });
                    $('li:last-child>span>' + Selector.CHECKBOX, this.$element).trigger(Event.CHANGE, [true]);
                } else if (treeData.foldertree) {
                    var newIcon = baseIcon.clone();
                    $('span.' + ClassName.NODE_TEXT, $li).prepend(newIcon);
                }

                var $first = $li.filter(':first');
                if ($first.hasClass(ClassName.TREE_ROOT_HEADER)) {
                    var _newIcon = $('<i>').addClass(ClassName.TREE_HEADER_ICON).addClass('glyphicon').addClass($first.hasClass(ClassName.TREE_CLOSED) ? ClassName.TOGGLE_RIGHT : ClassName.TOGGLE_DOWN);
                    $first.children('i.' + ClassName.TREE_ICON).remove();
                    $first.children('span.' + ClassName.NODE_TEXT).prepend(_newIcon);
                }
            }
        }, {
            key: 'initCheckbox',
            value: function initCheckbox(index, element, treeData, baseIcon) {
                var $el = $(element);
                var data = $el.data();
                var thisIcon = baseIcon.clone();
                var node = $el.children('span.' + ClassName.NODE_TEXT);

                if (data.checked !== undefined && data.checked !== 'none') {
                    var fieldName = data.checkbox !== undefined ? data.checkbox : treeData.checkbox;
                    var field = $('<input>').attr({
                        type: 'checkbox',
                        value: data.value !== undefined ? data.value : 0,
                        name: fieldName
                    }).prop('checked', data.checked);

                    thisIcon.addClass(ClassName.TREE_CHECKBOX).addClass(data.checked ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
                    node.prepend(field).prepend(thisIcon);
                } else {
                    $el.addClass(ClassName.TREE_NOICON);
                }
            }
        }, {
            key: 'getSelected',
            value: function getSelected() {
                var $this = this.$element;
                var $checked = $(Selector.CHECKBOX + ':checked', $this);
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
                    var _config = $.extend(true, {}, Default, data, (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

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
/* 4 */
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

var _setBoolean = __webpack_require__(5);

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
    TREE_LOADING: NAME + '-loading',
    TREE_HOVERED: NAME + '-hovered',
    TREE_UNCHECKED: NAME + '-unchecked',
    TREE_UNDETERMINED: NAME + '-undetermined',
    TOGGLE_RIGHT: 'glyphicon-chevron-right',
    TOGGLE_DOWN: 'glyphicon-chevron-down',
    NODE_TEXT: 'node-text'
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);