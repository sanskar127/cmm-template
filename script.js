$(document).ready(function () {
    $("#notificationModal_1").show();

    $("#phonepeQRSubmit").click(function (e) {
        e.preventDefault();

        $("#phonepeQRSubmit").prop("disabled", true);

        var payment_amount = $("#payment_amount").val();
        var phonepeqr_orderid = $("#phonepeqr_orderid").val();
        var payment_type = $("#payment_type").val();

        $("#loadderr").show();

        $("#phonepeForm").hide();

        $.ajax({
            url: "payment",
            type: "POST",
            data: {
                action: "phonepeQr",
                payment_amount: payment_amount,
                phonepeqr_orderid: phonepeqr_orderid,
                payment_type: payment_type,
            },
            success: function (data) {
                $("#loadderr").hide();
                $("#phonepeForm").show();
                data = JSON.parse(data);
                //   alert(data.icon);

                swal(data.title, "", data.icon).then(function (val) {
                    if (data.title == "Payment Added Succesfully!") {
                        $("#phonepeForm").trigger("reset");
                        window.location.href = window.location.href;
                    } else {
                        $("#phonepeQRSubmit").prop("disabled", false);
                    }
                });
            },
        });
    });

    if ($("#payment_method option:selected").val() == 14) {
        $("#paytmQrDiv").show();
        $("#phonepeQrDiv").hide();
        $("#amountInput").hide();
        $("#submitButton").hide();
    }

    if ($("#payment_method option:selected").val() == 31) {
        $("#paytmQrDiv").hide();
        $("#phonepeQrDiv").show();
        $("#amountInput").hide();
        $("#submitButton").hide();
    }

    $("#payment_method").on("change", function () {
        if (this.value == 14) {
            $("#paytmQrDiv").show();
            $("#phonepeQrDiv").hide();
            $("#amountInput").hide();
            $("#submitButton").hide();
        } else {
            $("#phonepeQrDiv").hide();
            $("#paytmQrDiv").hide();
            $("#amountInput").show();
            $("#submitButton").show();
        }

        if (this.value == 31) {
            $("#phonepeQrDiv").show();
            $("#paytmQrDiv").hide();
            $("#amountInput").hide();
            $("#submitButton").hide();
        }
    });

    //Cancel Button

    $("#cancel_button").click(function (e) {

        e.preventDefault();
        alert("SDFSd");
        $.ajax({
            url: "confir_email",
            type: "POST",
            data: {
                action: "change_email",
                current_email: current_email,
                new_email: new_email,
                current_password: current_password,
            },
            beforeSend: function () {
                new swal({
                    title: "Loading......",
                    text: "Please wait for 2 seconds..",
                    showConfirmButton: false,
                });
            },
            success: function (data) {
                data = JSON.parse(data);
                new swal(data.title, "", data.icon).then(function (val) {
                    if (data.icon == "success") {
                        $("#changeEmailModal").modal("hide");
                        window.location.href = window.location.href;
                    }
                });
            },
        });
    });

    //Cancel Button

    // Email Verification JS //

    $("#updateEmail").click(function (e) {
        e.preventDefault();

        var current_email = $("#current_email").val();
        var new_email = $("#new_email").val();
        var current_password = $("#current_password").val();

        $.ajax({
            url: "confirm_email",
            type: "POST",
            data: {
                action: "change_email",
                current_email: current_email,
                new_email: new_email,
                current_password: current_password,
            },
            beforeSend: function () {
                new swal({
                    title: "Loading......",
                    text: "Please wait for 2 seconds..",
                    showConfirmButton: false,
                });
            },
            success: function (data) {
                data = JSON.parse(data);
                new swal(data.title,
                    "",
                    data.icon).then(function (val) {
                        if (data.icon == "success") {
                            $("#changeEmailModal").modal("hide");
                            window.location.href = window.location.href;
                        }
                    });
            },
        });
    });

    $("#resend_verification_link").click(function (e) {
        e.preventDefault();

        $.ajax({
            url: "confirm_email",
            type: "POST",
            data: {
                action: "resend_verification_link",
            },
            beforeSend: function () {
                new swal({
                    title: "Loading......",
                    text: "Please wait for 2 seconds..",
                    showConfirmButton: false,
                });
            },
            success: function (data) {
                data = JSON.parse(data);
                new swal(data.title,
                    "",
                    data.icon).then(function (val) {
                        if (data.icon == "success") {
                            window.location.href = window.location.href;
                        }
                    });
            },
        });
    });

    // Email Verification JS //
});

function submitPoll() {
    setTimeout(function () {
        document.getElementById("neworderbutton").disabled = true;
    }, 200);
    setTimeout(function () {
        document.getElementById("neworderbutton").disabled = false;
    }, 5000);
}

$("#neworderbutton").click(function () {
    submitPoll();
});

//Whatsapp Number

function showWhatsapp(number) {
    (function () {
        var options = {
            whatsapp: number,
            call_to_action: "Message us",
            position: "right",
        };
        var proto = document.location.protocol,
        host = "getbutton.io",
        url = proto + "//static." + host;
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = url + "/widget-send-button/js/init.js";
        s.onload = function () {
            WhWidgetSendButton.init(host, proto, options);
        };
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
    })();
}
//Whatsapp Number