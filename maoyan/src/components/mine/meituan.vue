<template>
    <div class="meituan">
        <div class="start">
        <input type="text" placeholder="账号/手机号/Email"/>
        <input type="text" placeholder="请输入您的密码"/>
        <button>登录</button>
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
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-around; 
    }
    .meituan .start>input{
        margin: 10px 0;
        width: 94%;
        margin: 0 3%;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: #f8f8f8;
    }
    .meituan .start button{
        width: 94%;
        height: 30px;
        margin: 0 3%;
        font-size: 13px;
        color: white;
        background: #DF2D2D;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .last{
        display: flex;
        justify-content: space-between;
    }
    .last>span{
        margin-top: 10px;
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