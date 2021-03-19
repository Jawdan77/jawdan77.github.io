$(function() {
    /* LOAD ALL STUFF */   
    let bodyContent = $(document.body).contents();
    $.ajax({
        type: "GET",
        url: "https://jawdan77.github.io/Template/Body.html",
        async: false,
        success : function(data) {
          $(document.body).append(data);
          $(".tutorial").append(bodyContent);           
          $.ajax({
            type: "GET",
            url: "https://jawdan77.github.io/Template/Head.html",
            async: false,
            success : function(data) {
              $(document.head).append(data);
            }    
          });
        }    
    });

    /* LOW-KEY FORMATTING */
    var totalHeaders = 0;
    $("h2").each(function() {
      if (totalHeaders > 0) {
        $(this).append("<hr>");
        var header = $(this);
        $(".tutorialBookmarks").append("<a href=#Heading" + totalHeaders.toString() + ">" + header.text() + "</a>");
        $(this).attr("id", "Heading" + totalHeaders.toString());
      }
      totalHeaders++;
    });
    $(".tutorialBookmarks").append("<hr>")
    
    ///* FORMATTING */
    $(".gifPreview").hover(
      function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.substring(0, src.length - 4) + ".gif");
        console.log("gif'd up");
      },
      function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.substring(0, src.length - 4) + ".png");
        console.log("png'd up");
      }
    );  
    
    
    
});