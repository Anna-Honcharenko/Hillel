/// <reference types="cypress" />

describe ('QAuto',()=>{
    it('Create User',()=>{
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
        cy.get('body > app-root > app-global-layout > div > div > app-header > header > div > div > div.header_right.d-flex.align-items-center > button.btn.btn-outline-white.header_signin').click();
       
        cy.get('body > ngb-modal-window > div > div > app-signin-modal > div.modal-footer.d-flex.justify-content-between > button.btn.btn-link').click()
        cy.get('#signupName').type('White');
        cy.get('#signupLastName').type('Black');
        cy.get('#signupEmail').type('WBlack13@gmail.com');
        cy.get('#signupPassword').type('WBl1234567');
        cy.get('#signupRepeatPassword').type('WBl1234567');
        cy.get('body > ngb-modal-window > div > div > app-signup-modal > div.modal-footer > button').click();
        cy.get('body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-3.d-none.d-lg-block.sidebar-wrapper > nav > div > a.btn.btn-white.btn-sidebar.sidebar_btn.-profile').click();
        cy.get('body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-profile > div > div.panel-page_content > div > p')
        .should('have.text',  'White Black');
        cy.get('body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-3.d-none.d-lg-block.sidebar-wrapper > nav > a:nth-child(1)').click();
        cy.get('body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-garage > div > div.panel-page_heading.d-flex.justify-content-between > button').click();
        cy.get('#addCarBrand').select('Ford');
        cy.get('#addCarModel').select('Fiesta');
        cy.get('#addCarMileage').type(1);
        cy.get('body > ngb-modal-window > div > div > app-add-car-modal > div.modal-footer.d-flex.justify-content-end > button.btn.btn-primary').click();
        cy.get('body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-garage > div > div.panel-page_content > div > ul > li:nth-child(1) > app-car > div > div.car-heading.d-flex.flex-column.flex-sm-row.justify-content-sm-between > div.car_actions > button.car_add-expense.btn.btn-success').click();
        cy.get('#addExpenseMileage').type(3);
        cy.get('#addExpenseLiters').type(5);
        cy.get('#addExpenseTotalCost').type(67);
        cy.get('body > ngb-modal-window > div > div > app-add-expense-modal > div.modal-footer.d-flex.justify-content-end > button.btn.btn-primary').click();
        cy.get('body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-3.d-none.d-lg-block.sidebar-wrapper > nav > div > a:nth-child(2)').click();
        cy.get('body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-settings > div > div.panel-page_content > div > div.user-settings_item.-form.-remove-account > div > button').click();
        cy.get('body > ngb-modal-window > div > div > app-remove-account-modal > div.modal-footer.d-flex.justify-content-end > button.btn.btn-danger').click()



        
      



}); 
        });
        
        
        
  ;

    
    


