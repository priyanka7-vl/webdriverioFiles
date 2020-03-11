let Page = require('./function');
let LoginPage = Object.create(Page,{
    username:{
        get:function() { 
            return browser.$('#email');
        }
    },
    password:{
        get:function() { 
            return browser.$('#password');
    }
},
    form:{get:function() { 
        return browser.$('#login_btn');
    }
},

    open: { value:function() {
        browser.setWindowSize(1800,1200);
        Page.open.call(this,'login');
    }},
    submit: { value:function() {
        this.form.click();
    }}
});
module.exports = LoginPage;