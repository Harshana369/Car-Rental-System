

var pcard = document.getElementById('prodetcart');
pcard.style.display='none';


// var uf = document.getElementById('userinterface');
// uf.style.display='none';

var userinthidebtn=document.getElementById('dashbordbtn');
userinthidebtn.style.cursor='pointer';

userinthidebtn.addEventListener("click", function () {

var uf = document.getElementById('userinterface');
uf.style.display='none';

    var pcard = document.getElementById('prodetcart');
    pcard.style.display='block';

    // userinterface.style.display='block';
    // userinthidebtn.style.display='none';

});




   let email = $("#input_email").val();
    let password = $("#input_password").val();

    let emailLength = $("#input_email").val().length;
    if (emailLength>0){
        $.ajax({
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/customer/'+email,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                let newemail=response.data;
                console.log(newemail);
                if (newemail==null){
                    swal("You are not registered","warning");
                }else{
                    if (newemail==password){
                        v1.style.display='none';
                        v2.style.display='block';
                        v3.style.display='none';
                    }else{
                        swal("Wrong Password","warning");
                    }
                }
            }
        });
    }else{
        $('#input_email').focus();
        $('#input_email').css('border','2px solid red');
        $('#lblemail').text('Fields Can not Be Empty');
    }



