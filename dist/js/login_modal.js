$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip({title: "fill feedback ", placement: "bottom"});
  $('[data-toggle="popover"]').popover({
    placement : 'bottom',
    html : true,
    title : 'User Info <a href="#" class="close" data-dismiss="alert">&times;</a>',
    content : '<div><a href="#" id="btn_follow" >unfollow</a></div>'
});
$(document).on("click", ".popover .close" , function(){
    $(this).parents(".popover").popover('hide');
});

$('#btn_follow').on('click', function () {

var btn_val = document.getElementById("btn_follow").value;
 
  if(btn_val=="Follow"){
    document.getElementById("btn_follow").value="Following";
    

  }else{
    
  
 $(document).on("click", ".popover #btn_follow" , function(){
  
   var ele = document.getElementById("btn_follow");
       
          confirm("Are you sure you want to unfollow?")
          ele.classList.toggle("btn-primary");
          document.getElementById("btn_follow").value="Follow";
    
        });
      }
   
    });  


    $('#account-modal').on('show.bs.modal', function (event) {
        var $button = $(event.relatedTarget);
        var $case = $button.data('case');
        var $modal = $(this);

        if($case == "register") {
            $modal.find('#login-case').hide();
            $modal.find('#register-case').show();
        } else {
            $modal.find('#register-case').hide();
            $modal.find('#login-case').show();
        }
        
  });

 
 

});

