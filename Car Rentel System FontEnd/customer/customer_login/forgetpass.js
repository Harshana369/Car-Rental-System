
$("#btncustomerfoget").click(function () {
    cheackCustomerLogin();

});


function cheackCustomerLogin() {

    let nic = $("#cfnic").val();


    let nicLength = $("#cfnic").val().length;
    if (nicLength>0){


        $.ajax({
            url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/customer/goNic/'+nic,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                let password=response.data;
                if (password==null){
                    swal("You are not registered","warning");
                }else{
                    if (password==null){
                        swal("NOt Register Customer");

                    }else{
                       $("#cfpass").val(password);
                    }
                }
            }
        });
    }else{
        $('#cfnic').focus();
        $('#cfnic').css('border','2px solid red');
    }

}

