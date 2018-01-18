$(document).ready(function () {
  $(".bstree").bstree({
      params: {
        base: "/",
          request: {
          data: {
            method: "getData"
          }
        }
      }
  });
});