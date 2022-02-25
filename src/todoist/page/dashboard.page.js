import { Selector, t } from "testcafe";

class DashboardPage{
    constructor(){
        this.mainTitle          = Selector('h1 > span.simple_content');
        this.addTaskButton      = Selector('button.empty-state-button');
        this.addTaskPlusButton  = Selector('button.plus_add_button');
        this.taskList           = Selector('div.task_content');
        this.completeTaskButton = Selector('div.task_checkbox__circle');
    }

    async isTaskDisplayed(taskTitle){
        return this.taskList.withText(taskTitle).exists;
    }

    async marckAsConcludedTask(){
        while(await this.completeTaskButton.nth(0).exists){
            await t
                .click(this.completeTaskButton.nth(0))
                .wait(1000);
        }
    }
}

export default new DashboardPage();