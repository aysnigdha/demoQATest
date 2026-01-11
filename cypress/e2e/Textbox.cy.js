import Home from "../support/page/demoqaHome";
describe('Navigate the DemoQA' , ()=> {
  it('should able to view the home page and click elements successfully', ()=> {
      Home.visitHome();
      Home.goToElements();
  })
})