import loginPage from "../page/login.page";
import dashboardPage from "../page/dashboard.page";
import taskPage from "../page/task.page";
import dataSet from "../data/data.provider.json";

const BASE_URL   = dataSet.baseUrl;
const EMAIL      = dataSet.email;
const PASSWORD   = dataSet.password;
const TASK_DESC  = dataSet.taskDescription;
const randomNum  = Math.trunc(Math.random() * 1000) + 1;
const TASK_TITLE = `${dataSet.taskTitle}-${randomNum}`;

fixture `Task tests`
    .page `${BASE_URL}`
    .beforeEach(async t => {
        await loginPage.login(EMAIL, PASSWORD);
    });

/*
    Test Case: User can create a new task,  typing  the name and description
    Expected: New task should be listed on the dashboard
*/
test('User can create a new task', async t => {
    await t.click(await dashboardPage.addTaskPlusButton);
    await taskPage.addTask(TASK_TITLE, TASK_DESC);
    await t.wait(2000);
    for(let i=0; i < dashboardPage.taskList.count; i++){
        await t.expect(dashboardPage.taskList.nth(i).innerText).eql(TASK_TITLE);
    }
});
