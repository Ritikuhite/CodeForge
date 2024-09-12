$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})
function valid_password(){
    var pass = document.getElementById("valid1").value;
    var comfirm_pass = document.getElementById("valid2").value;

    if (pass != confirm_pass)
    {
        document.getElementById('wrong_pass_alert').style.color='red';
        document.getElementById('wrong_pass_alert').innerHTML='Use same Password';
        document.getElementById('create').disabled=true;
        document.getElementById('create').style.opacity =(0.4);
    }    
    else{
        document.getElementById('wrong_pass_alert').style.color='green';
        document.getElementById('wrong_pass_alert').innerHTML='Password Matched';
        document.getElementById('create').disabled=true;
        document.getElementById('create').style.opacity =(1);
    }
    function wrong_pass_alert(){
        if (document.getElementById('valid1').value !="" && 
        document.getElementById('valid2').value != ""){
            alert("Your respose is Submitted ");
        } 
        else{
            alert("Please Fill all the Feilds ");
            
        }
    }
    
}