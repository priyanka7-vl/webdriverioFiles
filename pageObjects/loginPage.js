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
        Page.open.call(this,'login');
    }},
    submit: { value:function() {
        this.form.click();
        browser.pause(15000);
    }}
});
module.exports = LoginPage;