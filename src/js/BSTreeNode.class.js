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
import setBoolean from './set-boolean.function';

/**
 * ----------------------------------------------------------------------
 * Constants
 * ----------------------------------------------------------------------
 */
const NAME = 'bstree';
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

/*const Selector = {
    CHECKBOX: 'input:checkbox'
};*/

export default class BSTreeNode {
    constructor(options, treeOptions) {
        this.$element = $('<li>');
        this.$text = $('<span>').addClass(ClassName.NODE_TEXT);
        this.attributes = {};
        this.$anchor = null;
        this.treeOptions = treeOptions;

        this.initialize(options);
    }

    set leaf(value) {
        this._leaf = setBoolean(value);
        this.role = this._leaf ? 'leaf' : 'branch';
    }

    get leaf() {
        return this._leaf;
    }

    set value(value) {
        this.attributes['data-value'] = value;
    }

    get value() {
        return this.attributes['data-value'];
    }

    set id(value) {
        this.attributes.id = value;
    }

    get id() {
        return this.attributes.id;
    }

    set checked(value) {
        this.attributes['data-checked'] = value !== undefined && value !== 'none' ? setBoolean(value) : 'none';
    }

    get checked() {
        return this.attributes['data-checked'];
    }

    set checkable(value) {
        if (value !== undefined) {
            this.attributes['data-checkable'] = setBoolean(value);
        }
    }

    get checkable() {
        return this.attributes['data-checkable'];
    }

    set expanded(value) {
        this._expanded = value;
    }

    get expanded() {
        return this._expanded;
    }

    set element($el) {
        this.$element = $el;
        const options = $el.data();
        options.id = $el.attr('id');

        this.initialize(options);
    }

    get element() {
        return this.$element;
    }

    initialize(options) {
        this.setOptions(options);
        this.setNodeClass();
        this.normalizeCheckbox();
        this.setHref();
        this.setText();
        this.attachAttributes();
        this.attachChildren();
    }

    setOptions(options) {
        $.extend(true, this, {
            text: undefined,
            leaf: false,
            value: undefined,
            expanded: false,
            cls: undefined,
            id: undefined,
            href: undefined,
            checkable: false,
            checked: 'none',
            children: []
        }, options);
    }

    setNodeClass() {
        if (this.leaf) {
            this.$element.addClass(ClassName.TREE_LEAF);
        } else {
            this.$element.addClass(this.expanded ? ClassName.TREE_OPEN : ClassName.TREE_CLOSED);
        }
    }

    normalizeCheckbox() {
        if (!this.treeOptions.checkbox) {
            delete this.attributes['data-checkable'];
            delete this.attributes['data-checked'];
        }
    }

    setHref() {
        if (this.href) {
            if (this.leaf) {
                this.$anchor = $('<a>').attr('href', this.href);
            } else {
                this.attributes['data-href'] = this.href;
            }
        }
    }

    setText() {
        if (this.$anchor) {
            this.$anchor.html(this.text);
            this.$text.append(this.$anchor);
        } else {
            this.$text.html(this.text);
        }

        this.$element.append(this.$text);
    }

    attachAttributes() {
        this.$element.attr(this.attributes);
    }

    attachChildren() {
        if (this.children && this.children.length) {
            const $ul = $('<ul>').addClass(ClassName.TREE_BRANCH);

            this.children.forEach((child) => {
                const node = new BSTreeNode(child, this.treeOptions);
                const $node = node.element;
                $ul.append($node);
            });
            this.$element.append($ul);
        }
    }
}