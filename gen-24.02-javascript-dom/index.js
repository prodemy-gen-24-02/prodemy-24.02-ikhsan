$(".scnd-img").on("click", function(){
    var img = $(this).attr("src");
    $(".main-img").attr("src", img);
})