import loginPage from "../page/login.page";
import dashboardPage from "../page/dashboard.page";
import taskPage from "../page/task.page";
import dataSet from "../data/data.provider.json";

const BASE_URL   = dataSet.baseUrl;
const EMAIL      = dataSet.email;
const PASSWORD   = dataSet.password;
const TASK_DESC  = dataSet.taskDescription;
const TASKS_NUM  = 10;
let randomNum    = Math.trunc(Math.random() * 1000) + 1;
let TASK_TITLE   = `${dataSet.taskTitle}-${randomNum}`;
let speed        = 0.7

fixture `Task tests`
    .page `${BASE_URL}`
    .beforeEach(async t => {
        await t.setTestSpeed(speed);
        await loginPage.login(EMAIL, PASSWORD);
    })
    .afterEach(async t => {
        await dashboardPage.marckAsConcludedTask();
    });

/*
    Test Case: User can create a new task,  typing  the name and description
    Expected: New task should be listed on the dashboard
*/
test.skip('User can create a new task', async t => {
    await t.click(dashboardPage.addTaskPlusButton);
    await taskPage.addTask(TASK_TITLE, TASK_DESC);
    await t.expect(await dashboardPage.isTaskDisplayed(TASK_TITLE)).ok();
});

/*
    Test Case: User can create miltiple task
    Expected: Create 10 task
*/
test('User can create multiple tasks', async t => {
    await t.click(dashboardPage.addTaskPlusButton);
    for(let i =0; i < TASKS_NUM; i++){
        randomNum = Math.trunc(Math.random() * 1000) + 1;
        TASK_TITLE = `${dataSet.taskTitle}-${randomNum}`;
        await taskPage.addTask(TASK_TITLE, TASK_DESC);
        await t.expect(await dashboardPage.isTaskDisplayed(TASK_TITLE)).ok();
    }
})

