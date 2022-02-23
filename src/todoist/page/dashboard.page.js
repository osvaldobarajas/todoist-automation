import { Selector } from "testcafe";

class DashboardPage{
    constructor(){
        this.mainTitle = Selector('h1 > span.simple_content');
    }
}

export default new DashboardPage();