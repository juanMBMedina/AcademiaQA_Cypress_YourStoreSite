import RegisterPage from "./RegisterPage";

class HomePage {
    endpoint = "/index.php?route=common/home";
    elements = {
      myAccountMenu: () => cy.contains("a", "My Account"),
      registerButton: () => cy.contains("a", "Register"),
      loginButton: () => cy.contains("a", "Login")
    };
  
    navigateToPage() {
      cy.visit(this.endpoint);
    }

    clickAccOptions(){
      this.elements.myAccountMenu().click();
    }
  
    goToRegisterPage() {
      this.clickAccOptions();
      this.elements.registerButton().click();
      return new RegisterPage();
    }
  }
  
  export default HomePage;
  