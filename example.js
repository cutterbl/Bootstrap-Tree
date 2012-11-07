/**
 *  Bootstrap Tree Example
 *  
 *  Copyright 2012 Cutters Crossing
 *  
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *  ========================================================================
 *  This file is to show some ways of working with the Bootstrap Tree component
 */

$(function () {

  /**
   * This is a quick example of capturing the click event on tree leaves, not branches
   * (We're going to work on this a bit)
   */
  $("body").on("click.tree.data-api", "a:not([data-toggle=branch])", function (e) {
    
    e.preventDefault()
    var $this = $(this)
      , branch = $this.closest('.branch')
      , data = branch.data('tree')
    //console.log(data['getparentage']())
    //console.log(data['node']())
      
  })
  
  /**
   * Listening for the 'opennode' event. Look for e.node, which is the
   * actual node the user opens
   */
  $("body").on("opennode.tree", "[data-toggle=branch]", function (e) {
    
    if (console) {
      console.log("opennode", e)
    } else {
      alert("Open Node Event")
    }
      
  })
  
  /**
   * Listening for the 'closenode' event. Look for e.node, which is the
   * actual node the user closed
   */
  $("body").on("closenode.tree", "[data-toggle=branch]", function (e) {
    
    if (console) {
      console.log("closenode", e)
    } else {
      alert("Close Node Event")
    }
    
  })

})

var cbExample = function (response, status, xhr) {
  console.log("this ", this)
  console.log("data", arguments)
}