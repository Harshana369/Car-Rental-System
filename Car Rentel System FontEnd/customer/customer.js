var CustomerNic=/^[0-9]{8,16}(V)$/;
$('#customernic').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#customernic').val();
    if (CustomerNic.test(inputName)){
        $('#lblnic').text('');
        $('#customernic').css('border','2px solid lime');
        if (input=="Enter"){
            $('#drivinlicen').focus();
        }
    }else {
        $('#customernic').css('border','2px solid red');
        $('#lblnic').text('Your Input Data format Is Wrong(Ex:-45354354654V)');
        $('#customernic').focus();
    }
});



var email=/^[a-z]{1,9}(@gmail.com)$/;
$('#customeremail').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#customeremail').val();
    if (email.test(inputAddress)){
        $('#lblemail').text('');
        $('#customeremail').css('border','2px solid lime');
        if (input=="Enter"){
            $('#customeraddress').focus();
        }
    }else {
        $('#customeremail').css('border','2px solid red');
        $('#lblemail').text('Your Input Data format Is Wrong(Ex:- harshana@gmail.com)');
        $('#customeremail').focus();
    }
});

var address=/^[A-Z]{1}[a-z]{1,15}$/;
$('#customeraddress').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#customeraddress').val();
    if (address.test(inputAddress)){
        $('#lbladdress').text('');
        $('#customeraddress').css('border','2px solid lime');
        if (input=="Enter"){
            $('#customername').focus();
        }
    }else {
        $('#customeraddress').css('border','2px solid red');
        $('#lbladdress').text('Your Input Data format Is Wrong(Ex:- Gampaha)');
        $('#customeraddress').focus();
    }
});

var CustomerName=/^[A-Z]{1}[a-z]{1,9}( )[A-Z]{1}[a-z]{1,9}$/;
$('#customername').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#customername').val();
    if (CustomerName.test(inputName)){
        $('#lblname').text('');
        $('#customername').css('border','2px solid lime');
        if (input=="Enter"){
            $('#customerphone').focus();
        }
    }else {
        $('#customername').css('border','2px solid red');
        $('#lblname').text('Your Input Data format Is Wrong(Ex:-Kasun Perera)');
        $('#customername').focus();
    }
});



var CustomerPhone=/^[0-8]{3}[0-9]{7}$/;
$('#customerphone').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#customerphone').val();
    if (CustomerPhone.test(inputName)){
        $('#lblphn').text('');
        $('#customerphone').css('border','2px solid lime');
        if (input=="Enter"){
            $('#customerpassword').focus();
        }
    }else {
        $('#customerphone').css('border','2px solid red');
        $('#lblphn').text('Your Input Data format Is Wrong(Ex:-0778956678)');
        $('#customerphone').focus();
    }
});


$("#btncustomersave").click(function () {

    //driven img
    var fileObject = $("#drivinlicen")[0].files[0];

    var data = new FormData();
    data.append("file", fileObject);
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
        async: true,
        processData: false,
        contentType: false,
        data: data,
        success: function (resp) {

            if (resp.code == 200) {
                let cid = $("#customernic").val();
                let enail = $("#customeremail").val();
                let address = $("#customeraddress").val();
                let name = $("#customername").val();
                let password = $("#customerpassword").val();
                let phn = $("#customerphone").val();

                $.ajax({
                    method: 'POST',
                    url: "http://localhost:8081/Easy_Car_war_exploded/api/v1/customer",
                    contentType: 'application/json',
                    async: true,
                    data: JSON.stringify({
                        nic:cid,
                        name:name,
                        email:enail,
                        address:address,
                        phn:phn,
                        password:password,

                    }),
                    success: function (data,message) {
                        swal("Customer Save Sussesfull","success" );

                    },

                    error: function (data,message) {
                        swal("Customer Save Fail","fail" );
                    }

                });
            }

        }

    });

});











