<template>
    <div class="meituan">
        <div class="start">
        <div id="one"><input type="text" placeholder="请输入手机号码"/><button>获取验证码</button></div>
        <input type="text" placeholder="请输入短信验证码"/>
        <button class="btn1">登录</button>
        </div>
        <div class="last">
            <span>立即注册</span>
            <span>找回密码</span>
        </div>
        <div class="end">
            <span>@猫眼电影客服电话：</span>
            <a href="#">400-670-5335</a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .meituan .start{
        width: 100%;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
    }
    .meituan .start #one{
        width: 94%; 
        height: 36px;
        margin: 0 3%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .meituan .start>input{
        margin: 10px 0;
        width: 94%;
        margin: 0 3%;
        height: 24px;
        border: none;
        border-radius: 5px;
        background-color: #f8f8f8;
    }
    #one input{
        width: 64%;
        height: 24px;
        border: none;
        border-radius: 5px;
    }
    #one button{
        width: 30%;
        height: 30px;
        font-size: 12px;
        color: #333;
        border:none;
        padding: none;
        border-radius: 5px;
    }
    .meituan .start .btn1{
        width: 94%;
        height: 30px;
        margin: 0 3%;
        font-size: 13px;
        padding: none;
        background: #e5e5e5;
        border: none;
        border-radius: 5px;
    }
    .last{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    .last>span{
        font-size: 12px;
        color: #f90;
        padding: 0 15px;
    }
    .end{
        font-size: 12px;
        margin-top:10px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    .end>a{
        color:#DF2D2D;
    }
</style>