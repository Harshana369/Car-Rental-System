
$("#btncustomerlogin").click(function () {
    cheackCustomerLogin();

});


function openLoginWin() {
    window.open("dashbord.html")
  //  $("#cemail").val("");
   // $("#cpass").val("");
}

function cheackCustomerLogin() {

    let email = $("#cemail").val();
    let password = $("#cpass").val();

    let emailLength = $("#cemail").val().length;
    if (emailLength>0){

        console.log(email);

        $.ajax({
            url: 'http://localhost:8081/Easy_Car_war_exploded/login/go/'+email,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                let newemail=response.data;
                if (newemail==null){
                    swal("You are not registered","warning");
                }else{
                    if (newemail==password){
                        openLoginWin();
                    }else{
                        swal("Wrong Password","warning");
                    }
                }
            }
        });
    }else{
        $('#cemail').focus();
        $('#cemail').css('border','2px solid red');
    }

}

