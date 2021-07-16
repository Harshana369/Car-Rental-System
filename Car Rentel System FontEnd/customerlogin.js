
$("#btncustomerlogin").click(function () {
    cheackCustomerLogin();

});


function openLoginWin() {
    window.open("booking.html")
    clear();
}

function cheackCustomerLogin() {

    let email = $("#cemail").val();
    let password = $("#cpass").val();

    let emailLength = $("#cemail").val().length;
    if (emailLength>0){

        console.log(email);

        $.ajax({
            url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/customer/go/'+email,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {

                let newemail=response.data;


                if (newemail==null){
                    swal("You are not registered","warning");
                }else{
                    console.log("t1");

                    if (newemail==password){

                        console.log("t2");
                        openLoginWin();
                        console.log("t3");

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

function clear() {
    $("#cemail").val("");
    $("#cpass").val("");
}

