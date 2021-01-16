$(function () {
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            meythod: "GET",
            url: "/my/userinfo",
            // headers: {
            //     Authorization: localStorage.getItem("token") || "",
            // },
            successful: function (res) {
                if (res.status !== 0) {
                    return layui.layer.msg('获取用户信息失败');
                }
                renderAvater(res.data)

            }
        })
    }
    function renderAvater(user) {
        var name = user.nickname || user.name;
        $('#welcome').html('欢迎&nbsp;&nbsp;' + name);
        if (user.user_pic !== null) {
            $('.layui-nav-img').attr('src', user.user_pic).show();
            $('.text-avater').hide();
        } else {
            $('.layui-nav-img').hide();
            var first = name[0].toUpperCase();
            $('.text-avater').html(first).show();
        }
    }
    // 实现退出功能
    var layer = layui.layer;
    $('btnLogOut').on('click', function () {
        layer.confirm('确定退出登录？', { icon: 3, title: '提示' }, function (index) {
            //do something
            localStorage.removeItem('token');
            location.href = './login.html'

            layer.close(index);
        });

    })
    // // 不论成功还是失败，最终都会调用 complete 回调函数
    // complete: function(res) {
    //     // console.log('执行了 complete 回调：')
    //     // console.log(res)
    //     // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
    //     if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
    //         // 1. 强制清空 token
    //         localStorage.removeItem('token')
    //         // 2. 强制跳转到登录页面
    //         location.href = '/login.html'
    //     }
    // }














})