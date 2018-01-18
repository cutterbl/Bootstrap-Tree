import $ from 'jquery';

export default class BSTreeNode {
    constructor(options) {
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
}