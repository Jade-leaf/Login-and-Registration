// 登录模块的类名
    var log_on = document.querySelector('.log-on');
    var log_inner = document.querySelector('.log-on .log-inner');
    var input_host = document.querySelector('.log-on .log-host');
    var input_assistant = document.querySelector('.log-on .log-assistant');
    var span_user = document.querySelector('.log-on .span-user');
    var span_password = document.querySelector('.log-on .span-password');
    var line_host = document.querySelector('.log-on .line-host');
    var line_assistant = document.querySelector('.log-on .line-assistant');
    var icon_display = document.querySelector(".log-on .icon-browse");
    var icon_hides = document.querySelector(".log-on .icon-browse-off");
    // 注册模块的类名
    var register = document.querySelector(".register");
    var register_inner = document.querySelector(".register .register-inner");
    var input_host_res = document.querySelector('.register .res-host');
    var input_assistant_res = document.querySelector('.register .res-assistant');
    var input_confirm = document.querySelector('.register .res-confirm');
    var span_user_res = document.querySelector('.register .span-user');
    var span_password_res = document.querySelector('.register .span-password');
    var span_password_confirm = document.querySelector('.register .span-password-confirm');
    var line_host_res = document.querySelector('.register .line-host');
    var line_assistant_res = document.querySelector('.register .line-assistant');
    var line_confirm = document.querySelector('.register .line-confirm');
    var icon_display_res = document.querySelector(".register .icon-browse");
    var icon_hide_res = document.querySelector(".register .icon-browse-off");
    // 挡板模块的类名
    var baffle = document.querySelector(".baffle");
    var baffle_inner_one = document.querySelector(".baffle-inner-one");
    var baffle_inner_two = document.querySelector(".baffle-inner-two");
    var befor_submit_one = document.querySelector(".register-button-one");
    var befor_submit_two = document.querySelector(".register-button-two");
    // 点击input标签以及进行输入文本之后的样式
    // 用户名输入的模块样式
    // 登录模块
    input_host.onfocus = function () {
        if (!onkeydown) {
            span_user.classList.add("text-movement");
            line_host.style.width = "300px";
        }
    }
    input_host.onblur = function () {
        if (input_host.value != "") {
            span_user.classList.add("text-movement");
            line_host.style.width = "300px";
        } else {
            span_user.classList.remove("text-movement");
            line_host.style.width = "0px";
        }
    }
    // 注册模块
    input_host_res.onfocus = function () {
        if (!onkeydown) {
            span_user_res.classList.add("text-movement");
            line_host_res.style.width = "300px";
        }
    }
    input_host_res.onblur = function () {
        if (input_host_res.value != "") {
            span_user_res.classList.add("text-movement");
            line_host.style.width = "300px";
        } else {
            span_user_res.classList.remove("text-movement");
            line_host_res.style.width = "0px";
        }
    }
    // 密码输入的模块样式
    // 登录模块
    input_assistant.onfocus = function () {
        if (!onkeydown) {
            span_password.classList.add("text-movement");
            line_assistant.style.width = "300px";
            icon_hides.style.display = "inline";
        }
    }
    input_assistant.onblur = function () {
        if (input_assistant.value != "") {
            span_password.classList.add("text-movement");
            line_assistant.style.width = "300px";
            icon_hides.style.display = "inline";
        } else {
            span_password.classList.remove("text-movement");
            line_assistant.style.width = "0px";
            icon_hides.style.display = "none";
        }
    }
    // 注册模块
    input_assistant_res.onfocus = function () {
        if (!onkeydown) {
            span_password_res.classList.add("text-movement");
            line_assistant_res.style.width = "300px";
            icon_hide_res.style.display = "inline";
        }
    }
    input_assistant_res.onblur = function () {
        if (input_assistant_res.value != "") {
            span_password_res.classList.add("text-movement");
            line_assistant_res.style.width = "300px";
            icon_hide_res.style.display = "inline";
        } else {
            span_password_res.classList.remove("text-movement");
            line_assistant_res.style.width = "0px";
            icon_hide_res.style.display = "none";
        }
    }
    // 注册模块的确认密码样式
    input_confirm.onfocus = function () {
        if (!onkeydown) {
            span_password_confirm.classList.add("text-movement-erro");
            line_confirm.style.width = "300px";
        }
    }
    input_confirm.onblur = function () {
        if (input_confirm.value != "") {
            span_password_confirm.classList.add("text-movement-erro");
            line_confirm.style.width = "300px";
        } else {
            span_password_confirm.classList.remove("text-movement-erro");
            line_confirm.style.width = "0px";
        }
    }

    // 点击密码模块中的查看密码以及隐藏密码的按钮
    // 登录模块
    icon_hides.onclick = function () {
        icon_hides.style.display = "none";
        icon_display.style.display = "inline";
        input_assistant.type = "text";
    }
    icon_display.onclick = function () {
        icon_display.style.display = "none";
        icon_hides.style.display = "inline";
        input_assistant.type = "password";
    }
    // 注册模块
    icon_hide_res.onclick = function () {
        icon_hide_res.style.display = "none";
        icon_display_res.style.display = "inline";
        input_assistant_res.type = "text";
    }
    icon_display_res.onclick = function () {
        icon_display_res.style.display = "none";
        icon_hide_res.style.display = "inline";
        input_assistant_res.type = "password";
    }
    // 登录注册页面往返样式
    // 点击挡板模块中的注册按钮所实现的样式模块
    befor_submit_one.onclick = function () {
        log_inner.classList.add("bounce");
        baffle.classList.add("baffle-move");
        baffle_inner_one.animate({
            transform: 'scale(0)'
        },
            {
                duration: 300,  //  动画时长  (单位毫秒)
                easing: 'linear',		// 平滑
                iterations: 1,  //  重复次数  （无限循环：Infinity）
            }
        )
        register_inner.classList.add("bounce-befo");
        register_inner.style.display = "inline";
        // log_inner.classList.remove("bounce-kile");
        setTimeout(() => {
            baffle_inner_one.style.display = "none";
            baffle_inner_two.style.display = "inline";
        }, 300);
        setTimeout(() => {
            baffle_inner_two.classList.add("baffle-bounce");
        }, 320);
        setTimeout(() => {
            log_inner.style.display = "none";
        }, 350);
    }
    // 点击挡板模块中的登录按钮所实现的样式模块
    befor_submit_two.onclick = function () {
        baffle.animate({
            transform: 'translateX(0)'
        },
            {
                duration: 300,  //  动画时长  (单位毫秒)
                easing: 'linear',		// 平滑
                iterations: 1,  //  重复次数  （无限循环：Infinity）
            }
        ),
            baffle_inner_two.animate({
                transform: 'scale(0)'
            },
                {
                    duration: 300,  //  动画时长  (单位毫秒)
                    easing: 'linear',		// 平滑
                    iterations: 1,  //  重复次数  （无限循环：Infinity）
                }
            )
        register_inner.style.display = "none";
        setTimeout(() => {
            log_inner.classList.add("bounce-kile");
            baffle.classList.remove("baffle-move"); log_inner.classList.remove("bounce");
            baffle_inner_two.style.display = "none";
            baffle_inner_one.classList.add("bounce-opposite");
            baffle_inner_one.style.display = "inline";
        }, 300);
        setTimeout(() => {
            log_inner.style.display = "inline";
        }, 305);
        setTimeout(() => {
            baffle_inner_two.classList.remove("baffle-bounce");
            register_inner.classList.remove("baffle-bounce");
        }, 580);
    }