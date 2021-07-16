var DriverDid=/^[0-9]{8,16}$/;
$('#dnumerid').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#dnumerid').val();
    if (DriverDid.test(inputName)){
        $('#lbldnumber').text('');
        $('#dnumerid').css('border','2px solid lime');
        if (input=="Enter"){
            $('#driveraddress').focus();
        }
    }else {
        $('#dnumerid').css('border','2px solid red');
        $('#lbldnumber').text('Your Input Data format Is Wrong(Ex:-2456656565)');
        $('#dnumerid').focus();
    }
});

var daddress=/^[A-Z]{1}[a-z]{1,15}$/;
$('#driveraddress').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#driveraddress').val();
    if (daddress.test(inputAddress)){
        $('#lbldriveraddress').text('');
        $('#driveraddress').css('border','2px solid lime');
        if (input=="Enter"){
            $('#driveremail').focus();
        }
    }else {
        $('#driveraddress').css('border','2px solid red');
        $('#lbldriveraddress').text('Your Input Data format Is Wrong(Ex:- Gampaha)');
        $('#driveraddress').focus();
    }
});


var demail=/^[a-z]{1,9}(@gmail.com)$/;
$('#driveremail').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#driveremail').val();
    if (demail.test(inputAddress)){
        $('#lbldriveremail').text('');
        $('#driveremail').css('border','2px solid lime');
        if (input=="Enter"){
            $("#driverphone").focus();
        }
    }else {
        $('#driveremail').css('border','2px solid red');
        $('#lblemail').text('Your Input Data format Is Wrong(Ex:- harshana@gmail.com)');
        $('#driveremail').focus();
    }
});


var dPhone=/^[0-8]{3}[0-9]{7}$/;
$('#driverphone').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#driverphone').val();
    if (dPhone.test(inputName)){
        $('#lbldriverphone').text('');
        $('#driverphone').css('border','2px solid lime');
        if (input=="Enter"){
            $('#driverpassword').focus();
        }
    }else {
        $('#driverphone').css('border','2px solid red');
        $('#lbldriverphone').text('Your Input Data format Is Wrong(Ex:-0778956678)');
        $('#driverphone').focus();

    }
});


$("#btndsave").click(function () {

   let did = $("#dnumerid").val();
   let address = $("#driveraddress").val();
   let email = $("#driverphone").val();
   let phn = $("#driverphone").val();
   let password = $("#driverpassword").val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8081/Easy_Car_war_exploded/api/v1/driver",
        contentType: 'application/json',
        async: true,

        data: JSON.stringify({
            licenid:did,
            address:address,
            email:email,
            phn:phn,
            password:password,

        }),
        success: function (data,message) {
            swal("Driver Save Sussesfull","success" );
        },

        error: function (data,message) {
            swal("Driver Save Fail","fail" );
        }

    });

});

$("#btndupdate").click(function () {

    let did = $("#dnumerid").val();
    let address = $("#driveraddress").val();
    let email = $("#driverphone").val();
    let phn = $("#driverphone").val();
    let password = $("#driverpassword").val();

    $.ajax({
        method: "PUT",
        url: "http://localhost:8081/Easy_Car_war_exploded/api/v1/driver",
        contentType: 'application/json',
        async: true,

        data: JSON.stringify({
            licenid:did,
            address:address,
            email:email,
            phn:phn,
            password:password,

        }),
        success: function (data,message) {
            swal("Driver Update Sussesfull","success" );

        },

        error: function (data,message) {
            swal("Driver Update Fail","fail" );
        }

    });

});


