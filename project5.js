$(document).ready(function(){
    var eThis = $(this);
    var body = $('body');

    var popup ='<div class="popup"></div>';
    var confirmBox = '<div class="confirm-box">Hello! Are you sure to delete?<br>'+
                        '<button class="btn-yes">Yes</button> <button class="btn-no">No</button>'+
                    '</div>';
    var formLogin = '<div class="form1">'+
                        '<div class="register1">'+
                            '<p style="font-size: 23px;">Create Account</p>'+
                            '<i class="fa-solid fa-xmark btn-close1"></i>'+
                        '</div>'+
                        '<div class="frm1">'+
                            '<form action="" class="form22">'+
                                '<label for="">Name Students :</label><br>'+
                                '<input type="text" name="name" id="name" placeholder="Enter name..."><br>'+
                                '<label for="">Email Students :</label><br>'+
                                '<input type="email" name="email" id="email" placeholder="Enter email..."><br>'+
                                '<label for="">Password :</label><br>'+
                                '<input type="password" name="password" id="password" placeholder="Enter password...">'+
                                '<button type="submit" id="btn-sub">Login</button>'+
                                '<div class="a">'+
                                    '<a style="text-align: center;" href="">Already have an account?</a>'+
                                '</div>'+
                                '<button type="button" id="create">Create</button>'+
                            '</form>'+
                        '</div>'+
                    '</div>';


    $('#btn-login').click(function(){
        body.append(popup);
        $('.form').show();
    })
    $('.btn-close').click(function(){
        $('.form').remove();
        body.find('.popup').remove();
    })
    body.on('click' , '.form1 .btn-close1', function(){
        $('.form1').remove();
        body.find('.popup').remove();
    })
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        });

    // about tbn submit
    body.on('click', '.form11 #btn-sub', function(event) {
        event.preventDefault(); 
        var eThis = $(this);
        var Parent = eThis.parents('.form11');
        var name = Parent.find('#name');
        var email = Parent.find('#email');
        var password = Parent.find('#password');
    
        if (name.val() == '') {
            alert('Please input name!');
            swal({
                title: "Empty Email",
                text: "Please input name!",
                icon: "error",
                button: "Done",
            });
            name.focus();
            return;
        } else if (email.val() == '') {
            swal({
                title: "Empty Email",
                text: "Please input email!",
                icon: "error",
                button: "Done",
            });
            email.focus();
            return;
        } else if (password.val() == '') {
            swal({
                title: "Empty Password",
                text: "Please input password!",
                icon: "error",
                button: "Done",
            });
            password.focus();
            return;
        }
        $('.form').hide();
        body.find('.popup').remove();
        swal({
            title: "LOGIN",
            text: "Login Successfully!",
            icon: "success",
            button: "Done",
            });
            email.val('');
            email.focus();
            password.val('');
    });

    // about btn sign in
    body.on('click' , '.form #sign-in' , function(event){
        event.preventDefault(); 
        $('.form').remove();
        body.append(formLogin);
        $('.form1').show();
        body.find('.form1 #btn-sub').remove();
        body.find('.form1 a').remove();
    })

    //about btn create
    body.on('click','.form1 #create', function(){
        var eThis = $(this);
        var Parent = eThis.parents('.form1');
        var name = Parent.find('#name');
        var email = Parent.find('#email');
        var password = Parent.find('#password');
    
        if (name.val() == '') {
            swal({
                title: "Empty Name",
                text: "Please input name!",
                icon: "error",
                button: "Done",
            });
            name.focus();
            return;
        } else if (email.val() == '') {
            swal({
                title: "Empty Email",
                text: "Please input name!",
                icon: "error",
                button: "Done",
            });
            email.focus();
            return;
        } else if (password.val() == '') {
            swal({
                title: "Empty Password",
                text: "Please input password!",
                icon: "error",
                button: "Done",
            });
            password.focus();
            return;
        }
        $('.form1').remove();
        body.find('.popup').remove();
        swal({
            title: "Create Success",
            text: "Welcome to Phyron-Coding.com!",
            icon: "success",
            button: "Done",
        });
        name.val('');
        name.focus();
        email.val('');
        password.val('');
    })

    //about target slide

    $('.phyron').hide();
    $('#phyron1').show();
    body.on('click','.boxleft ul li',function(){
        $('.boxleft ul li').removeClass('active').css({"background-color":""});
        $('.phyron').hide()

        const target = $(this).data('me');
        $(target).show();
        $(this).addClass('active').css({"background-color":"rgb(253, 177, 0)"})

    })

})