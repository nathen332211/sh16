$(function () {
    var $form = $('form');
    $form.bootstrapValidator({

        //配置校验时的图标,
        feedbackIcons: {
            //校验成功的图标
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },



        fields: {
            username: {
                //配置username所有的校验规则
                validators: {
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    callback: {
                        message: "用户名不存在"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: "密码不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码长度在6-12位'
                    },
                    callback: {
                        message: "密码错误"
                    }
                }
            }
        }
    });


    //给表单注册校验成功事件 
    $form.on("success.form.bv", function (e) {
        e.preventDefault();
    });

    $.ajax({
        type: "post",
        url: "/employee/employeeLogin",
        //dataType:'json',  //如果后端返回的相应头有text/html
        data: $form.serialize(),
        success: function (data) {
            if (data.success) {
                location.href = "index.html";
            }
            if (data.error == 1000) {
                //alert("用户名不存在");
                //把用户名的校验失败
                //第一个参数：想要修改的字段
                //第二个参数：改成什么状态  INVALID  VALID
                //第三个参数： 指定显示的错误信息
               // $form.data("bootstrapValidator").
            }
        }
    })

});