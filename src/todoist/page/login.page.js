import { Selector, t } from "testcafe";

class LoginPage{
    constructor(){
        this.emailInput    = Selector('#email');
        this.passwordInput = Selector('#password');
        this.loginButton   = Selector("button.submit_btn");
        this.errorMsg      = Selector('div.error_msg');
    }

    async login(email, password){
        await t
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
    }
}

export default new LoginPage();