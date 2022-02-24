import loginPage from '../page/login.page';
import dashboardPage from '../page/dashboard.page';
import dataProvider from '../data/data.provider.json';

const BASE_URL         = dataProvider.baseUrl;
const EMAIL            = dataProvider.email;
const PASSWORD         = dataProvider.password;
const INVALID_PASSWORD = dataProvider.invalidPassword;

fixture `Login tests`
    .page `${BASE_URL}`;

/*
    Test Case: User must not login with an invalid email and password
    Expected: The app should notify the user that the email or password is invalid
*/
test('User must not login with an invalid email and password', async t => {
    await loginPage.login(EMAIL, INVALID_PASSWORD);
    await t.expect(loginPage.errorMsg.exists).ok();
});

/*
*/

/*
    Test Case: User must login with a valid email and password
    Expected: The user should be redirected to the dashboard page and see the main title
*/
test('User must login with a valid email and password', async t => {
    await loginPage.login(EMAIL, PASSWORD);
    await t.expect(dashboardPage.mainTitle.exists).ok();
});
