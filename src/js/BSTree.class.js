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

import $ from 'jquery';
import BSTreeNode from './BSTreeNode.class';
import setBoolean from './set-boolean.function';

const BSTree = (($, BSTreeNode) => {

    /**
     * ----------------------------------------------------------------------
     * Constants
     * ----------------------------------------------------------------------
     */
    const NAME = 'bstree';
    const VERSION = '0.0.5';
    const DATA_KEY = 'bs.tree';
    const EVENT_KEY = `.${DATA_KEY}`;
    const COLLAPSE_EVENT_KEY = '.bs.collapse';
    //const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];

    const Default = {
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

    const Event = {
        CHECKBOX_CLICK: `click.checkbox${EVENT_KEY}`,
        CHECKBOX_CHANGE: `change.checkbox${EVENT_KEY}`,
        CHECKALL_CHANGE: `change.checkall${EVENT_KEY}`,
        COLLAPSE_SHOW: `show${COLLAPSE_EVENT_KEY}`,
        COLLAPSE_HIDE: `hide${COLLAPSE_EVENT_KEY}`
    };

    const ClassName = {
        FA_ADDER: 'fa fa-fw',
        TREE_ICON: `${NAME}-icon`,
        NODE_TEXT: 'node-text',
        TOGGLE_EXPAND: 'fa-chevron-right',
        TOGGLE_COLLAPSE: 'fa-chevron-down',
        TREE_LOADING: 'fa-spinner fa-spin',
        TREE_OPEN: 'fa-folder-open',
        TREE_CLOSED: 'fa-folder',
        TREE_CHECK: `${NAME}-check`,
        TREE_CHECKALL: `${NAME}-check-all`,
        TREE_CHECKBOX: `${NAME}-checkbox`,
        TREE_UNCHECKED: 'fa-square-o',
        TREE_CHECKED: 'fa-check-square',
        TREE_PARTIAL: 'fa-check-square-o',
        ALL_CHECK_STATES: 'fa-square-o fa-check-square fa-check-square-o',
        CHECKBOX_SETUP: `fa fa-fw ${NAME}-checkbox fa-square-o`,

        TREE_NOICON: `${NAME}-noicon`,
        TREE_LEAF: `${NAME}-leaf`,
        TREE_BRANCH: `${NAME}-branch`,
        TREE_FIRST: `${NAME}-first`,
        TREE_LAST: `${NAME}-last`,
        TREE_HEADER_ICON: `${NAME}-header-icon`,
        TREE_ROOT_HEADER: `${NAME}-root-header`,
        TREE_UNDETERMINED: `${NAME}-undetermined`,
        TOGGLE_RIGHT: 'fa-chevron-right',
        TOGGLE_DOWN: 'fa-chevron-down'
    };

    const Selector = {
        TREE_ICON: `.${ClassName.TREE_ICON}`,
        COLLAPSE: '.collapse',
        CHECKBOX: 'input:checkbox',
        CHECKED: 'input:checked',
        CHECKBOX_LINKS: `.${ClassName.TREE_CHECK}`,
        CHECKALL_LINKS: `.${ClassName.TREE_CHECKALL}`,
        ALLCHECK_LINKS: `.${ClassName.TREE_CHECK}, .${ClassName.TREE_CHECKALL}`,
        ANYCHECK_LINKS: `[class^="${ClassName.TREE_CHECK}"]`,
        CHECKBOX_INPUTS: `.${ClassName.TREE_CHECK}>input`,
        ALLCHECK_INPUTS: `.${ClassName.TREE_CHECKALL}>input`,
        CHECKBOX_ICON: `.${ClassName.TREE_CHECKBOX}`
    };

    class BSTree {
        constructor(element, options) {
            this.type = NAME;
            this.$element = $(element);
            this.options = $.extend(true, {}, $.fn[this.type].defaults, this.$element.data(), options);
            this.expandIcon = this.options.foldertree ? ClassName.TREE_CLOSED : ClassName.TOGGLE_EXPAND;
            this.collapseIcon = this.options.foldertree ? ClassName.TREE_OPEN : ClassName.TOGGLE_COLLAPSE;
            this.initialize();
        }

        get version() {
            return VERSION;
        }

        get default() {
            return Default;
        }

        dispose() {
            $.removeData(this.$element, DATA_KEY);

            this.type = null;
            this.$element = null;
            this.options = null;
        }

        initialize() {
            this.addIcons();

            this.createEventHandlers();
        }

        createEventHandlers() {
            this.$element
                .on(Event.COLLAPSE_SHOW, Selector.COLLAPSE, (event) => this.expandTree(event))
                .on(Event.COLLAPSE_HIDE, Selector.COLLAPSE, (event) => this.collapseTree(event))
                .on(Event.CHECKBOX_CLICK, Selector.ALLCHECK_LINKS, (event) => this.checkClickHandler(event))
                .on(Event.CHECKBOX_CHANGE, Selector.CHECKBOX_INPUTS, (event) => this.checkboxChangeHandler(event))
                .on(Event.CHECKALL_CHANGE, Selector.ALLCHECK_INPUTS, (event) => this.checkallChangeHandler(event));
        }

        checkClickHandler(event) {
            event.preventDefault();
            const $target = $(event.currentTarget);
            const href = $target.attr('href');
            const $input = $(href);
            const checked = $input.prop('checked');
            this.toggleCheckboxValue($input, !checked);
            $input.change();
            // now normalize the branch
            const $branch = $target.closest('ul');
            this.normalizeBranch($branch);
        }

        checkboxChangeHandler(event) {
            event.preventDefault();
            const $target = $(event.currentTarget);
            const checked = $target.prop('checked');
            const $parent = $target.parent();
            const $icon = $(Selector.CHECKBOX_ICON, $parent);
            this.toggleCheckMark($icon, checked);
        }

        checkallChangeHandler(event) {
            event.preventDefault();
            const $target = $(event.currentTarget);
            const checked = $target.prop('checked');
            const $parent = $target.parent();
            const $icon = $(Selector.CHECKBOX_ICON, $parent);
            // toggle the checkmark of this checkall
            this.toggleCheckMark($icon, checked);
            // find the 'branch'
            const branchId = $parent.prev().attr('href');
            const $branch = $(branchId, $parent.closest('li'));
            this.toggleAll($branch, checked);
        }

        toggleCheckMark($icon, value) {
            $icon.removeClass(ClassName.ALL_CHECK_STATES)
                .addClass(value ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
        }

        toggleCheckboxValue($input, value) {
            $input.prop('checked', value);
        }

        toggleAll($branch, value) {
            const $inputs = $(Selector.CHECKBOX, $branch);
            $inputs.prop('checked', value).change();
        }

        normalizeBranch($branch) {
            const $checkAll = $(Selector.CHECKALL_LINKS, $branch.prev());
            const $inputs = $(Selector.CHECKBOX, $branch);
            if ($inputs.length) {
                const $checked = $inputs.filter(':checked');
                let iconClass = ClassName.TREE_UNCHECKED;
                let value = false;
                if ($inputs.length === $checked.length) {
                    iconClass = ClassName.TREE_CHECKED;
                    value = true;
                } else if ($checked.length < $inputs.length) {
                    iconClass = ClassName.TREE_PARTIAL;
                }
                const $input = $(Selector.CHECKBOX, $checkAll);
                this.toggleCheckboxValue($input, value);
                $(Selector.CHECKBOX_ICON, $checkAll)
                    .removeClass(ClassName.ALL_CHECK_STATES)
                    .addClass(iconClass);
            }
        }

        expandTree(event) {
            event.stopPropagation();
            const $el = $(event.currentTarget);
            const data = $el.data();
            const $icon = $(Selector.TREE_ICON, $el.prev());
            $icon.removeClass(this.expandIcon);
            if (!data.href || setBoolean(data.loaded)) {
                $icon.addClass(this.collapseIcon);
            }
            if (data.href && (setBoolean(data.reload) || !setBoolean(data.loaded))) {
                $icon.addClass(ClassName.TREE_LOADING);
                this.getData($el)
                    .always(() => $icon.removeClass(ClassName.TREE_LOADING).addClass(this.collapseIcon));
            }
        }

        collapseTree(event) {
            event.stopPropagation();
            const $el = $(event.currentTarget);
            const $icon = $(Selector.TREE_ICON, $el.prev());
            $icon.removeClass(this.collapseIcon).addClass(this.expandIcon);
        }

        getData($node) {
            const data = $node.data();
            let opts = $.extend(true, {}, this.options.params);
            let requestParams = {
                url: `${this.options.base}${data.href}`,
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

            return $.ajax(requestParams)
                .done((data, status, xhr) => {
                    this.buildBranch($node, data);
                    $node.data('loaded', true);
                    return this.options.params.request.success(data, status, xhr);
                })
                .fail(this.options.params.request.error)
                .always((data, status) => {
                    return this.options.params.request.complete(data, status);
                });
        }

        buildBranch($branch, data) {
            if (data && Array.isArray(data) && data.length) {
                $branch.empty(); // this is in case it is being 'reloaded', otherwise it's already empty

                const nodes = this.buildNodes(data);

                $branch.append(nodes);
            }
        }

        buildNodes(nodes) {
            const newNodes = [];

            nodes.forEach((treeNode) => {
                const $node = this.buildNode(treeNode);
                newNodes.push($node);
            });

            return newNodes;
        }

        buildNode(leaf) {
            const node = new BSTreeNode({options: leaf, treeOptions: this.options});
            return node.element;
        }

        addIcons($element=this.$element) {
            if (this.options.checkbox) {
                const $anchors = $(Selector.ANYCHECK_LINKS, $element);
                const $icon = $('<i>').addClass(ClassName.CHECKBOX_SETUP);
                $anchors.prepend($icon);
                const $checked = $(Selector.CHECKED, $anchors);
                const $checkedAnchors = $checked.prev();
                $checkedAnchors.removeClass(ClassName.TREE_UNCHECKED).addClass(ClassName.TREE_CHECKED);

                const $checkAlls = $anchors.filter(Selector.CHECKALL_LINKS);
                $checkAlls.each((index, anchor) => {
                    const $anchor = $(anchor);
                    const branchId = $anchor.prev().attr('href');
                    const $branch = $(branchId, $anchor.closest('li'));
                    this.normalizeBranch($branch);
                });
            }
        }

        static _jQueryInterface(config, relatedTarget) {
            return this.each(function () {
                const $this = $(this);
                let data = $this.data(DATA_KEY);
                const _config = $.extend(true, {}, Default, $this.data(), typeof config === 'object' && config);

                if (!data) {
                    data = new BSTree(this, _config);
                    $this.data(DATA_KEY, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === undefined) {
                        throw new Error(`No method named ${config}`);
                    }
                    return data[config](relatedTarget);
                }
            });
        }

        getSelected() {
            const $this = this.$element;
            const $checked = $(`${Selector.CHECKBOX_LINKS}>${Selector.CHECKED}`, $this);
            const selected = [];

            $checked.each((idx, el) => selected.push($(el).val()));

            return selected.join();
        }
    }

    $.fn[NAME] = BSTree._jQueryInterface;
    $.fn[NAME].Constructor = BSTree;
    $.fn[NAME].getSelected = BSTree.getSelected;
    $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return BSTree._jQueryInterface;
    };

    return BSTree;

})($, BSTreeNode);

export default BSTree;