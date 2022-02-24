import { Selector, t } from "testcafe";
import dashboardPage from "./dashboard.page";

class TaskPage{
    constructor(){
        this.addTaskButton     = Selector('button.reactist_button--primary');
        this.taskTitleInput    = Selector('div[role="textbox"]');
        this.taskDescTextArea  = Selector('textarea.task_editor__description_field');
    }

    async addTask(title, description){
        await t
            .typeText(this.taskTitleInput, title)
            .typeText(this.taskDescTextArea, description)
            .click(this.addTaskButton);
    }
}

export default new TaskPage();