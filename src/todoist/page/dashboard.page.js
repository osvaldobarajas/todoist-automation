import { Selector } from "testcafe";

class DashboardPage{
    constructor(){
        this.mainTitle     = Selector('h1 > span.simple_content');
        this.addTaskButton = Selector('button.empty-state-button');
        this.addTaskPlusButton = Selector('button.plus_add_button');
        this.taskList = Selector('div.task_content');
    }


}

export default new DashboardPage();