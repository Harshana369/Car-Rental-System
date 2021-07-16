
var vid=/^[A-Z]{1,3}(-)[0-9]{1,4}$/;
$('#vehicleid').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#vehicleid').val();
    if (vid.test(inputAddress)){
        $('#lblvehicleid').text('');
        $('#vehicleid').css('border','2px solid lime');
        if (input=="Enter"){
            $('#brand').focus();
        }
    }else {
        $('#vehicleid').css('border','2px solid red');
        $('#lblvehicleid').text('Your Input Data format Is Wrong(Ex:-ABC-3571)');
        $('#vehicleid').focus();
    }
});

var bran=/^[A-Z]{1}[a-z]{1,15}$/;
$('#brand').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#brand').val();
    if (bran.test(inputAddress)){
        $('#lblbrand').text('');
        $('#brand').css('border','2px solid lime');
        if (input=="Enter"){
            $('#color').focus();
        }
    }else {
        $('#brand').css('border','2px solid red');
        $('#lblbrand').text('Your Input Data format Is Wrong(Ex:-Toyota)');
        $('#brand').focus();
    }
});

var color=/^[A-Z]{1}[a-z]{1,15}$/;
$('#color').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#color').val();
    if (color.test(inputAddress)){
        $('#lblcolor').text('');
        $('#color').css('border','2px solid lime');
        if (input=="Enter"){
            $('#noofpassengers').focus();
        }
    }else {
        $('#color').css('border','2px solid red');
        $('#lblcolor').text('Your Input Data format Is Wrong(Ex:-Red)');
        $('#color').focus();
    }
});

var noofpasenger=/^[1-9]{1,2}$/;
$('#noofpassengers').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#noofpassengers').val();
    if (noofpasenger.test(inputAddress)){
        $('#lblnoofpassengers').text('');
        $('#noofpassengers').css('border','2px solid lime');
        if (input=="Enter"){
            $('#transtype').focus();
        }
    }else {
        $('#noofpassengers').css('border','2px solid red');
        $('#lblnoofpassengers').text('Your Input Data format Is Wrong(Ex:-2)');
        $('#noofpassengers').focus();
    }
});

var ttype=/^[A-Z]{1}[a-z]{1,15}$/;
$('#transtype').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#transtype').val();
    if (ttype.test(inputAddress)){
        $('#lbltranstype').text('');
        $('#transtype').css('border','2px solid lime');
        if (input=="Enter"){
            $('#fueltype').focus();
        }
    }else {
        $('#transtype').css('border','2px solid red');
        $('#lbltranstype').text('Your Input Data format Is Wrong(Ex:-Auto)');
        $('#transtype').focus();
    }
});

var ftype=/^[A-Z]{1}[a-z]{1,15}$/;
$('#fueltype').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#fueltype').val();
    if (ftype.test(inputAddress)){
        $('#lblfueltype').text('');
        $('#fueltype').css('border','2px solid lime');
        if (input=="Enter"){
            $('#dailyprice').focus();
        }
    }else {
        $('#fueltype').css('border','2px solid red');
        $('#lblfueltype').text('Your Input Data format Is Wrong(Ex:-Petral)');
        $('#fueltype').focus();
    }
});

var dprice=/^[0-9]{1,11}(.00)$/;
$('#dailyprice').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#dailyprice').val();
    if (dprice.test(inputAddress)){
        $('#lbldailyprice').text('');
        $('#dailyprice').css('border','2px solid lime');
        if (input=="Enter"){
            $('#monthlyprice').focus();
        }
    }else {
        $('#dailyprice').css('border','2px solid red');
        $('#lbldailyprice').text('Your Input Data format Is Wrong(Ex:-1000.00)');
        $('#dailyprice').focus();
    }
});

var mprice=/^[0-9]{1,11}(.00)$/;
$('#monthlyprice').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#monthlyprice').val();
    if (mprice.test(inputAddress)){
        $('#lblmonthlyprice').text('');
        $('#monthlyprice').css('border','2px solid lime');
        if (input=="Enter"){
            $('#extrakmprice').focus();
        }
    }else {
        $('#monthlyprice').css('border','2px solid red');
        $('#lblmonthlyprice').text('Your Input Data format Is Wrong(Ex:-780000.00)');
        $('#monthlyprice').focus();
    }
});

var exkmprice=/^[0-9]{1,11}(.00)$/;
$('#extrakmprice').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#extrakmprice').val();
    if (exkmprice.test(inputAddress)){
        $('#lblextrakmprice').text('');
        $('#extrakmprice').css('border','2px solid lime');
        if (input=="Enter"){
            $('#type').focus();
        }
    }else {
        $('#extrakmprice').css('border','2px solid red');
        $('#lblextrakmprice').text('Your Input Data format Is Wrong(Ex:-780000.00)');
        $('#extrakmprice').focus();
    }
});


var type=/^[A-Z]{1}[a-z]{1,15}$/;
$('#type').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#type').val();
    if (type.test(inputAddress)){
        $('#lbltype').text('');
        $('#type').css('border','2px solid lime');
        if (input=="Enter"){
            $('#daylyfreekm').focus();
        }
    }else {
        $('#type').css('border','2px solid red');
        $('#lbltype').text('Your Input Data format Is Wrong(Ex:-Luxury)');
        $('#type').focus();
    }
});




var dalyfreekm=/^[0-9]{1,15}$/;
$('#daylyfreekm').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#daylyfreekm').val();
    if (dalyfreekm.test(inputAddress)){
        $('#lbldaylyfreekm').text('');
        $('#daylyfreekm').css('border','2px solid lime');
        if (input=="Enter"){
            $('#monthlyfreekm').focus();
        }
    }else {
        $('#daylyfreekm').css('border','2px solid red');
        $('#lbldaylyfreekm').text('Your Input Data format Is Wrong(Ex:-0)');
        $('#daylyfreekm').focus();
    }
});

var monthfreekm=/^[0-9]{1,15}$/;
$('#monthlyfreekm').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#monthlyfreekm').val();
    if (monthfreekm.test(inputAddress)){
        $('#lblmonthlyfreekm').text('');
        $('#monthlyfreekm').css('border','2px solid lime');
        if (input=="Enter"){
            $('#frontimage').focus();
        }
    }else {
        $('#monthlyfreekm').css('border','2px solid red');
        $('#lblmonthlyfreekm').text('Your Input Data format Is Wrong(Ex:-0)');
        $('#monthlyfreekm').focus();
    }
});



$("#btnvclear").click(function () {

    textclear();
});



$("#btnvsave").click(function () {

    //Font img

    var fileObject = $("#frontimage")[0].files[0];

    var data = new FormData(); //setup form data object to send file data
    data.append("file", fileObject); //append data
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
        async: true,
        processData: false, //stop processing data of request body
        contentType: false, // stop setting content type by jQuery
        data: data,
        success: function (resp) {

            // Back img

            if (resp.code == 200) {
                var fileObject = $("#backimage")[0].files[0];

                var data = new FormData(); //setup form data object to send file data
                data.append("file", fileObject); //append data
                $.ajax({
                    method: 'POST',
                    url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
                    async: true,
                    processData: false, //stop processing data of request body
                    contentType: false, // stop setting content type by jQuery
                    data: data,

                    success:function (resp) {

                        //left img

                       if (resp.code == 200){
                           var fileObject = $("#leftimage")[0].files[0];

                           var data = new FormData(); //setup form data object to send file data
                           data.append("file", fileObject); //append data

                           $.ajax({
                               method: 'POST',
                               url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
                               async: true,
                               processData: false, //stop processing data of request body
                               contentType: false, // stop setting content type by jQuery
                               data: data,

                          success:function (resp) {

                                   // Right img

                              if(resp.code == 200){

                                  var fileObject = $("#rightimage")[0].files[0];

                                  var data = new FormData(); //setup form data object to send file data
                                  data.append("file", fileObject); //append data

                                  $.ajax({
                                      method: 'POST',
                                      url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
                                      async: true,
                                      processData: false, //stop processing data of request body
                                      contentType: false, // stop setting content type by jQuery
                                      data: data,

                                      success:function (resp) {

                                          if (resp.code == 200) {
                                              let vid = $("#vehicleid").val();
                                              let brand = $("#brand").val();
                                              let color = $("#color").val();
                                              let noofpasengrt = $("#noofpassengers").val();
                                              let ttype = $("#transtype").val();
                                              let ftype = $("#fueltype").val();
                                              let daylyprice = $("#dailyprice").val();
                                              let daylyfreekm = $("#daylyfreekm").val();
                                              let monthlyprice = $("#monthlyprice").val();
                                              let monthlyfreekm = $("#monthlyfreekm").val();
                                              let type = $("#type").val();
                                              let extrskmprice = $("#extrakmprice").val();
                                              let fi = $("#frontimage").val();
                                              let bi = $("#backimage").val();
                                              let li = $("#leftimage").val();
                                              let ri = $("#rightimage").val();


                                              $.ajax({
                                                  method: "POST",
                                                  url: "http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle",
                                                  contentType: 'application/json',
                                                  async: true,
                                                  data: JSON.stringify({
                                                      vid: vid,
                                                      brand: brand,
                                                      type: type,
                                                      front_image: fi,
                                                      back_image: bi,
                                                      left_image: li,
                                                      right_image: ri,
                                                      no_of_passenger: noofpasengrt,
                                                      transmission_type: ttype,
                                                      fuel_type: ftype,
                                                      daily_price:daylyprice,
                                                      monthly_price:monthlyprice,
                                                      extra_km_price:extrskmprice,
                                                      dayly_free_km:daylyfreekm,
                                                      month_free_km:monthlyfreekm,
                                                      color:color

                                                  }),
                                                  success: function (data,message) {
                                                      swal("Vehicle Save Sussesfull","success" );

                                                  },
                                                  error: function (data,message) {
                                                      swal("Vehicle Save Fail","fail" );
                                                  }
                                              });

                                          }


                                      }


                                  });



                                  }


                          }


                           });

                       }

               }

                });
            }
        }
    });

    textclear();
    allvehicleget();

})



function textclear() {

    $("#vehicleid").val('');
    $("#brand").val('');
    $("#color").val('');
    $("#noofpassengers").val('');
    $("#transtype").val('');
    $("#fueltype").val('');
    $("#dailyprice").val('');
    $("#daylyfreekm").val('');
    $("#monthlyprice").val('');
    $("#monthlyfreekm").val('');
    $("#type").val('');
    $("#extrakmprice").val('');
    $("#frontimage").val('');
    $("#backimage").val('');
    $("#leftimage").val('');
    $("#rightimage").val('');

}


$("#btnvdelete").click(function () {
    let vi = $("#vehicleid").val();

    $.ajax({
        method: "DELETE",
        url: "http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/?id="+vi,
        async: true,
        success: function (data) {
            swal("Vehicle Delete Sussesfull","success" );
            allvehicleget();

        },
        error: function (err) {
            console.log(err);
            swal("Vehicle Delete Fail","fail" );
        }
    });

    textclear();
    allvehicleget();
});


$("#btnvupdate").click(function () {

    //Font img

    var fileObject = $("#frontimage")[0].files[0];

    var data = new FormData(); //setup form data object to send file data
    data.append("file", fileObject); //append data
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
        async: true,
        processData: false, //stop processing data of request body
        contentType: false, // stop setting content type by jQuery
        data: data,
        success: function (resp) {

            // Back img

            if (resp.code == 200) {
                var fileObject = $("#backimage")[0].files[0];

                var data = new FormData(); //setup form data object to send file data
                data.append("file", fileObject); //append data
                $.ajax({
                    method: 'POST',
                    url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
                    async: true,
                    processData: false, //stop processing data of request body
                    contentType: false, // stop setting content type by jQuery
                    data: data,

                    success:function (resp) {

                        //left img

                        if (resp.code == 200){
                            var fileObject = $("#leftimage")[0].files[0];

                            var data = new FormData(); //setup form data object to send file data
                            data.append("file", fileObject); //append data

                            $.ajax({
                                method: 'POST',
                                url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
                                async: true,
                                processData: false, //stop processing data of request body
                                contentType: false, // stop setting content type by jQuery
                                data: data,

                                success:function (resp) {

                                    // Right img

                                    if(resp.code == 200){

                                        var fileObject = $("#rightimage")[0].files[0];

                                        var data = new FormData(); //setup form data object to send file data
                                        data.append("file", fileObject); //append data

                                        $.ajax({
                                            method: 'POST',
                                            url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/uplodeimg',
                                            async: true,
                                            processData: false, //stop processing data of request body
                                            contentType: false, // stop setting content type by jQuery
                                            data: data,

                                            success:function (resp) {

                                                if (resp.code == 200) {
                                                    let vid = $("#vehicleid").val();
                                                    let brand = $("#brand").val();
                                                    let color = $("#color").val();
                                                    let noofpasengrt = $("#noofpassengers").val();
                                                    let ttype = $("#transtype").val();
                                                    let ftype = $("#fueltype").val();
                                                    let daylyprice = $("#dailyprice").val();
                                                    let daylyfreekm = $("#daylyfreekm").val();
                                                    let monthlyprice = $("#monthlyprice").val();
                                                    let monthlyfreekm = $("#monthlyfreekm").val();
                                                    let type = $("#type").val();
                                                    let extrskmprice = $("#extrakmprice").val();
                                                    let fi = $("#frontimage").val();
                                                    let bi = $("#backimage").val();
                                                    let li = $("#leftimage").val();
                                                    let ri = $("#rightimage").val();



                                                    $.ajax({
                                                        method: "PUT",
                                                        url: "http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle",
                                                        contentType: 'application/json',
                                                        async: true,
                                                        data: JSON.stringify({
                                                            vid: vid,
                                                            brand: brand,
                                                            type: type,
                                                            front_image: fi,
                                                            back_image: bi,
                                                            left_image: li,
                                                            right_image: ri,
                                                            no_of_passenger: noofpasengrt,
                                                            transmission_type: ttype,
                                                            fuel_type: ftype,
                                                            daily_price:daylyprice,
                                                            monthly_price:monthlyprice,
                                                            extra_km_price:extrskmprice,
                                                            dayly_free_km:daylyfreekm,
                                                            month_free_km:monthlyfreekm,
                                                            color:color
                                                        }),
                                                        success: function (data,message) {
                                                            swal("Vehicle Save Sussesfull","success" );

                                                        },
                                                        error: function (data,message) {
                                                            swal("Vehicle Save Fail","fail" );
                                                        }
                                                    });

                                                }


                                            }


                                        });



                                    }


                                }


                            });

                        }

                    }

                });
            }
        }
    });

    textclear();
    allvehicleget();


})

function allvehicleget(){
   $("#tbody").empty();

    $.ajax({
        method: 'GET',
        url: 'http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            for (let i of array){
                let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.type}</td><td>${i.color}</td><td>${i.transmission_type}</td><td>${i.no_of_passenger}</td><td>${i.fuel_type}</td>
                            <td>${i.extra_km_price}</td><td>${i.daily_price}</td><td>${i.dayly_free_km}</td><td>${i.monthly_price}</td><td>${i.month_free_km}</td></tr>`;
                $("#tbody").append(row);

            }

        }
    });
}



$("#btnvall").click(function () {
  allvehicleget();
});




$("#btnvserach").click(function () {
    $("#tbody").empty();

    let va = $("#vehicleid").val();

    $.ajax({
        method: 'GET',
        url: "http://localhost:8081/Easy_Car_war_exploded/api/v1/vehicle/"+va,
        async: true,
        success: function (data) {

            console.log(data.brand);
            //
            // console.log(data.vid);
            // console.log(data.color);

                // let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.type}</td><td>${i.color}</td><td>${i.transmission_type}</td><td>${i.no_of_passenger}</td><td>${i.fuel_type}</td>
                //             <td>${i.extra_km_price}</td><td>${i.daily_price}</td><td>${i.dayly_free_km}</td><td>${i.monthly_price}</td><td>${i.month_free_km}</td></tr>`;
                // $("#tbody").append(row);



        }
    });
});

