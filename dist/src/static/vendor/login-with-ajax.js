jQuery(document).ready(function($) {

    $('#LoginWithAjax_Form').submit(function(e) {

          $('#LoginMessageContainer').slideUp();
        $('<div class="LoginWithAjax_Loading" id="LoginWithAjax_Loading"></div>').prependTo('#LoginWithAjax');
        $.post(
          ajax_login_object.ajaxurl,
            {
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('#login_username').val(),
                'password': $('#login_password').val(),
                'rememberme': $('#login_remember').val(),
                'privacy': $('#privacy_plc').prop('checked'),
                'security': $('#security').val() },
            function(data){
              var newdata = $.parseJSON(data.trim());
              $('#LoginWithAjax_Loading').fadeOut();
              $('#LoginMessage').html(newdata.message);
              $('#LoginMessageContainer').slideDown();

                if (newdata.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        );
        e.preventDefault();
    });


    $('#LoginWithAjax_Remember').submit(function(event) {
        event.preventDefault();
        $('<div class="LoginWithAjax_Loading" id="LoginWithAjax_Loading"></div>').prependTo('#LoginWithAjax');
        var url = $('#LoginWithAjax_Remember').attr('action');
        var postData = getPostData('#LoginWithAjax_Remember *[name]');
        $.post(url, postData, function(data) {
            lwaAjax(data, 'LoginWithAjax_Status', '#login-with-ajax');
        }, "json");
    });

    $('#LoginWithAjax_Register_Form').submit(function(event) {
        event.preventDefault();
        $('<div class="LoginWithAjax_Loading" id="LoginWithAjax_Loading"></div>').prependTo('#LoginWithAjax_Register');
        var url = $('#LoginWithAjax_Register_Form').attr('action');
        var postData = getPostData('#LoginWithAjax_Register_Form *[name]');

        if($('#privacy_plc_reg').length > 0 && !$('#privacy_plc_reg').prop('checked')){
        	$('#LoginWithAjax_Register_Status').attr('class', 'error').html('<span id="LoginWithAjax_Register_Status" class="invalid"><strong>'+ajax_login_object.error+'</strong>: '+ajax_login_object.privacy+'</span>');
        	$('#LoginWithAjax_Loading').fadeOut();
        }else{
        postData['login-with-ajax'] = 'register';
        $.post(url, postData, function(data) {
            lwaAjax(data, 'LoginWithAjax_Register_Status', '#LoginWithAjax_Register');
            if (data.result === true) {
                if (data.widget != null) {
                    $.get(data.widget, function(widget_result) {
                        $('#LoginWithAjax_Register').replaceWith(widget_result);
                        $('#LoginWithAjax_Title').replaceWith($('#LoginWithAjax_Title_Substitute').text());
                    });
                } else {
                    if (data.redirect == null) {
                        window.location.reload();
                    } else {
                        window.location = data.redirect;
                    }
                }
            }
        }, "json");
       }
    });



    $('#LoginWithAjax_Remember').hide();
    $('#LoginWithAjax_Links_Remember').click(function(event) {
        event.preventDefault();
        $('#LoginWithAjax_Remember').show('slow');
    });
    $('#LoginWithAjax_Links_Remember_Cancel').click(function(event) {
        event.preventDefault();
        $('#LoginWithAjax_Remember').hide('slow');
    });

    function lwaAjax(data, statusElement, prependTo) {
        $('#LoginWithAjax_Loading').remove();
        if (data.result === true || data.result === false) {
            if (data.result === true) {
                if ($('#' + statusElement).length > 0) {
                    $('#' + statusElement).attr('class', 'confirm').html(data.message);
                } else {
                    $('<span id="' + statusElement + '" class="confirm">' + data.message + '</span>').prependTo(prependTo);
                }
            } else {
                if ($('#' + statusElement).length > 0) {
                    $('#' + statusElement).attr('class', 'invalid').html(data.error);
                } else {
                    $('<span id="' + statusElement + '" class="invalid">' + data.error + '</span>').prependTo(prependTo);
                }
                $('#' + statusElement).click(function(event) {
                    event.preventDefault();
                    $('#LoginWithAjax_Remember').show('slow');
                });
            }
        } else {
            if ($('#' + statusElement).length > 0) {
                $('#' + statusElement).attr('class', 'invalid').html('An error has occured. Please try again.');
            } else {
                $('<span id="' + statusElement + '" class="invalid">An error has occured. Please try again.</span>').prependTo(prependTo);
            }
        }
    }

    function getPostData(selector) {
        var postData = {};
        $.each($(selector), function(index, el) {
            el = $(el);
            postData[el.attr('name')] = el.val();
        });
        return postData
    }
});
