import NewUser from "../support/page/newLibraryUser";
describe("register a new usr for online library store", ()=> {
    it('should show reCAPTCHA validation error when registering new user', ()=> {
      NewUser.visitBookStore();
      const user = {
         firstname: 'snigdha',
         lastname: 'swapan',
         username: 'swagandha',
         password: '7536ADgfhh.;'

      };
      NewUser.newRegister(user);  
    })
})

