


$("#btnbfsubmite").click(function () {

    //driven img
    var fileObject = $("#bfpaymentrisite")[0].files[0];

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
                let cnic = $("#bfcustomernic").val();
                let bid = $("#bfbookingid").val();
                let vd = $("#bfvehicleid").val();
                let srartlocation = $("#bfstartlocation").val();
                let closelocation = $("#bfcloselocation").val();
                let driverstatus = $("#bfdriver").val();
                let statuspending = $("#bfstatus").val();


                $.ajax({
                    method: 'POST',
                    url: "http://localhost:8081/Easy_Car_war_exploded/api/v1/booking",
                    contentType: 'application/json',
                    async: true,
                    data: JSON.stringify({

                        customer:{
                            nic:cnic
                        },
                        vehicle:{
                            vid:vd
                        },

                        bookingid:bid,
                        startlocation:srartlocation,
                        closelocation:closelocation,
                        driverstatus:driverstatus,
                        status:statuspending

                    }),
                    success: function (data,message) {
                        swal("Booking Save Sussesfull","success" );
                    },

                    error: function (data,message) {
                        swal("Booking Save Fail","fail" );
                    }

                });
            }

        }

    });

});



