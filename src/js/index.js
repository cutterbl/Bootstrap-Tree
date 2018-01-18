import $ from 'jquery';
import BSTree from './BSTree.class';

(($) => {
    if (typeof $ === 'undefined') {
        throw new Error('CC-Bootstrap-Tree\'s JavaScript requires jQuery. jQuery must be included beforehand.');
    }

    const version = $.fn.jquery.split(' ')[0].split('.');
    const minMajor = 1;
    const ltMajor  = 2;
    const minMinor = 9;
    const minPatch = 1;
    const maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor
        && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('CC-Bootstrap-Tree\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
})($);

export default BSTree;