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
    };

    const ClassName = {
        TREE_ICON: `${NAME}-icon`,
        TREE_NOICON: `${NAME}-noicon`,
        TREE_LEAF: `${NAME}-leaf`,
        TREE_BRANCH: `${NAME}-branch`,
        TREE_FIRST: `${NAME}-first`,
        TREE_LAST: `${NAME}-last`,
        TREE_HEADER_ICON: `${NAME}-header-icon`,
        TREE_ROOT_HEADER: `${NAME}-root-header`,
        TREE_OPEN: `${NAME}-open`,
        TREE_CLOSED: `${NAME}-closed`,
        TREE_CHECKBOX: `${NAME}-checkbox`,
        TREE_CHECKED: `${NAME}-checked`,
        TREE_LOADING: `${NAME}-loading`,
        TREE_HOVERED: `${NAME}-hovered`,
        TREE_UNCHECKED: `${NAME}-unchecked`,
        TREE_UNDETERMINED: `${NAME}-undetermined`,
        TOGGLE_RIGHT: 'glyphicon-chevron-right',
        TOGGLE_DOWN: 'glyphicon-chevron-down',
        NODE_TEXT: 'node-text'
    };

    const Selector = {
        CHECKBOX: 'input:checkbox'
    };

    class BSTree {
        constructor(element, options) {
            this.type = NAME;
            this.$element = $(element);
            this.options = $.extend(true, {}, $.fn[this.type].defaults, this.$element.data(), options);
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
            this.checkLastNode();

            this.setupEventHandlers();

            //this.addIcons();
        }

        setupEventHandlers() {
            this.$element
                /* on click for tree icons */
                .on(`${Event.CLICK}.coll-icon`, `li>i.${ClassName.TREE_ICON}`, (event) => this.treeIconClick(event))
                /* on click for the tree header icon */
                .on(`${Event.CLICK}.coll-icon`, `li>span.${ClassName.NODE_TEXT}>i.${ClassName.TREE_HEADER_ICON}`,
                    (event) => this.treeHeaderIconClick(event))
                /* mouseenter and mouseleave for hover state on a node */
                .on(`${Event.MOUSEENTER}`, `.${ClassName.NODE_TEXT} ${Event.MOUSELEAVE}`, `.${ClassName.NODE_TEXT}`,
                    (event) => this.hoverNode(event))
                /* on change of checkboxes */
                .on(`${Event.CHANGE}.checkbox`, Selector.CHECKBOX, (event) => this.setNewState(event))
                /* on click of checkboxes */
                .on(`${Event.CLICK}.checkbox`, `.${ClassName.TREE_CHECKBOX}`, (event) => this.checkboxHandler(event))
                .on('show.bs.collapse', '.cc-bstree-branch', (event) => {
                    const $el = $(event.currentTarget);
                    $el.parent().toggleClass(`${ClassName.TREE_CLOSED} ${ClassName.TREE_OPEN}`);
                })
                .on('hide.bs.collapse', '.cc-bstree-branch', (event) => {
                    const $el = $(event.currentTarget);
                    $el.parent().toggleClass(`${ClassName.TREE_CLOSED} ${ClassName.TREE_OPEN}`);
                });
        }

        treeIconClick(event) {
            const $this = $(event.currentTarget);
            const $parent = $this.parent();
            const data = $parent.data();

            if (!$parent.hasClass(ClassName.TREE_LEAF)) {
                if (!$.isEmptyObject(data)) {
                    this.processNode($this, $parent, data);
                } else {
                    $parent.toggleClass(`${ClassName.TREE_OPEN} ${ClassName.TREE_CLOSED}`);
                }
            }
        }

        treeHeaderIconClick(event) {
            const $this = $(event.currentTarget);
            const $parent = $this.parent();
            const data = $parent.data();

            if (!$parent.hasClass(ClassName.TREE_LEAF)) {
                if (!$.isEmptyObject(data)) {
                    this.processNode($this, $parent, data);
                } else {
                    $parent.parent().toggleClass(`${ClassName.TREE_OPEN} ${ClassName.TREE_CLOSED}`);
                    $this.toggleClass(`${ClassName.TOGGLE_RIGHT} ${ClassName.TOGGLE_DOWN}`);
                }
            }
        }

        hoverNode(event) {
            $(event.currentTarget).toggleClass(ClassName.TREE_HOVERED);
        }

        setNewState(event, ctrlKey = null, checked = null) {
            const $this = $(event.currentTarget);
            const $parentLi = $this.closest('li');
            const $leaves = $('ul li', $parentLi);
            const $icon = $this.prev(`i[class~=${ClassName.TREE_CHECKBOX}]`);
            checked = checked !== null ? checked : $this.prop('checked');

            $icon.removeClass(`${ClassName.TREE_CHECKED} ${ClassName.TREE_UNCHECKED} ${ClassName.TREE_UNDETERMINED}`);

            if ($leaves) {
                $icon.addClass(checked ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
            } else {
                const $leafCheckboxes = $(Selector.CHECKBOX, $leaves);
                const $leafIcons = $(`i[class~=${ClassName.TREE_CHECKBOX}]`, $leaves);

                if (!ctrlKey) {
                    $icon.addClass(checked ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
                    $leafCheckboxes.prop('checked', checked);
                    $leafCheckboxes.each((idx, el) => {
                        const $li = $(el).closest('li');
                        const leafData = $li.data();

                        if (leafData.checked !== checked) {
                            $li.data('checked', checked);
                        }
                    });
                    $leafIcons
                        .removeClass(ClassName.TREE_CHECKED)
                        .removeClass(ClassName.TREE_UNCHECKED)
                        .removeClass(ClassName.TREE_UNDETERMINED);
                } else {
                    const $selectedChild = $.grep($leafCheckboxes, (el) => $(el).prop('checked'));

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

        checkParent ($node) {
            const $parent = $node.closest('ul').parent('li');
            const $span = $parent.children('span');
            const $childCheckboxes = $(`ul li>span>${Selector.CHECKBOX}`, $parent);
            const $checkedCheckboxes = $childCheckboxes.filter(':checked');
            let state = 'checked';

            if (!$parent) {
                return;
            }

            if (!$checkedCheckboxes) {
                state = 'unchecked';
            } else if ($checkedCheckboxes.length < $childCheckboxes.length) {
                state = 'undetermined';
            }

            const $spanChildren = $span.children(Selector.CHECKBOX);
            const checked = state === 'checked';

            $spanChildren.prop('checked', checked);
            $spanChildren.each((idx, el) => {
                const $li = $(el).closest('li');
                const leafData = $li.data();

                if (leafData.checked !== checked) {
                    $li.data('checked', checked);
                }
            });

            $(`i.${ClassName.TREE_CHECKBOX}`, $span)
                .removeClass(`${ClassName.TREE_CHECKED} ${ClassName.TREE_UNCHECKED} ${ClassName.TREE_UNDETERMINED}`)
                .addClass(ClassName[`TREE_${state.toUpperCase()}`]);
            // Do we open, or close the branch?
            $parent
                .removeClass(`${ClassName.TREE_OPEN} ${ClassName.TREE_CLOSED}`)
                .addClass(state === 'checked' ? ClassName.TREE_CLOSED : ClassName.TREE_OPEN);
            this.checkParent($parent);
        }

        checkboxHandler(event) {
            const $this = $(event.currentTarget);
            const $parentLi = $this.closest('li');
            //const parentData = $parentLi.data();
            const checkbox = $this.next(Selector.CHECKBOX);
            const checked = checkbox.prop('checked');

            $parentLi.data('checked', !checked);
            checkbox.prop('checked', !checked).trigger(Event.CHANGE, [event.ctrlKey, !checked]);
        }

        processNode($node, $parent, data) {
            data.loaded = data.loaded !== undefined ? data.loaded : false;
            data.reload = data.reload !== undefined ? data.reload : false;
            data.href = data.href !== undefined ? data.href : null;

            if ($parent.hasClass(ClassName.TREE_CLOSED) && data.href) {
                if (!data.loaded || data.reload) {
                    this.getRemoteData($node, $parent, data)
                        .always(() => $parent.toggleClass(`${ClassName.TREE_CLOSED} ${ClassName.TREE_OPEN}`));
                }
            }
        }

        getRemoteData($node, $parent, data) {
            let opts = $.extend(true, {}, this.options.params);
            let requestParams = {
                url: `${opts.base}${data.href}`,
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

            const $children = $parent.children(`i.${ClassName.TREE_ICON}`);

            $children.addClass(ClassName.TREE_LOADING);

            return $.ajax(requestParams)
                .done((data, status, xhr) => {
                    this.buildOutput(data, $parent);
                    return this.options.params.request.success(data, status, xhr);
                })
                .fail(this.options.params.request.error)
                .always((data, status) => {
                    $children.removeClass(ClassName.TREE_LOADING);
                    return this.options.params.request.complete(data, status);
                });
        }

        buildOutput(data, $parent) {
            if (data && Array.isArray(data) && data.length) {
                $parent.children(`ul.${ClassName.TREE_BRANCH}`).remove(); // remove the old one, if replacing

                const $branch = this.createNodes(data);

                $parent.append($branch);
                //this.addIcons($branch);
                $parent.data('loaded', true);
            }
        }

        createNodes(nodes) {
            const $branch = $('<ul>').addClass(ClassName.TREE_BRANCH);

            nodes.forEach((treeNode) => {
                const node = new BSTreeNode({options: treeNode, treeOptions: this.options});
                const $node= node.element;
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

        checkLastNode() {
            const $lastChild = $('li:last-child', this.$element);
            if ($lastChild.css('background') !== 'transparent') {
                $lastChild.addClass(ClassName.TREE_LAST);
            }
        }

        addIcons($element=this.$element) {
            const $li = $(`li:not(:has(>i.${ClassName.TREE_ICON}))`, $element);
            const treeData = this.options;
            const baseIcon = $('<i>').addClass(ClassName.TREE_ICON);

            $li.prepend(baseIcon);

            if (treeData.checkbox) {
                $li.each((idx, el) => this.initCheckbox(idx, el, treeData, baseIcon));
                $(`li:last-child>span>${Selector.CHECKBOX}`, this.$element).trigger(Event.CHANGE, [true]);
            } else if (treeData.foldertree) {
                const newIcon = baseIcon.clone();
                $(`span.${ClassName.NODE_TEXT}`, $li).prepend(newIcon);
            }

            const $first = $li.filter(':first');
            if ($first.hasClass(ClassName.TREE_ROOT_HEADER)) {
                const newIcon = $('<i>')
                    .addClass(ClassName.TREE_HEADER_ICON)
                    .addClass('glyphicon')
                    .addClass($first.hasClass(ClassName.TREE_CLOSED) ? ClassName.TOGGLE_RIGHT : ClassName.TOGGLE_DOWN);
                $first.children(`i.${ClassName.TREE_ICON}`).remove();
                $first.children(`span.${ClassName.NODE_TEXT}`).prepend(newIcon);
            }
        }

        initCheckbox(index, element, treeData, baseIcon) {
            const $el = $(element);
            const data = $el.data();
            const thisIcon = baseIcon.clone();
            const node = $el.children(`span.${ClassName.NODE_TEXT}`);

            if (data.checked !== undefined && data.checked !== 'none') {
                const fieldName = data.checkbox !== undefined ? data.checkbox : treeData.checkbox;
                const field = $('<input>')
                    .attr({
                        type: 'checkbox',
                        value: data.value !== undefined ? data.value : 0,
                        name: fieldName
                    })
                    .prop('checked', data.checked);

                thisIcon
                    .addClass(ClassName.TREE_CHECKBOX)
                    .addClass(data.checked ? ClassName.TREE_CHECKED : ClassName.TREE_UNCHECKED);
                node.prepend(field).prepend(thisIcon);
            } else {
                $el.addClass(ClassName.TREE_NOICON);
            }
        }

        static _jQueryInterface(config, relatedTarget) {
            return this.each(function () {
                const $this = $(this);
                let data = $this.data(DATA_KEY);
                const _config = $.extend(true, {}, Default, data, typeof config === 'object' && config);

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
            const $checked = $(`${Selector.CHECKBOX}:checked`, $this);
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