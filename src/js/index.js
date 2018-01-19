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