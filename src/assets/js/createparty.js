$(document).ready(function () {
    $(function(){

        $(".sidenav").sidenav();
        $(".parallax").parallax();
        $(".modal").modal();
    });
    $(".generalbabypic").click(function(){
        $(".jumbotronpic").attr("src", "assets/images/baby-shower-neutral.jpg")
        console.log("general baby pic clicked")
      });
})