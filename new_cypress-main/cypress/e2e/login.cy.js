describe('Тестирование формы авторизации', function () {
   it('Проверка, что при вводе верных данных, происходит авторизация', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form').contains('Форма логина');
        cy.get('#form').should('be.visible');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.visible');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form').contains('Форма логина');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm').contains('Восстановите пароль');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('#message').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

   it('Негативный кейс (Не правильный логин и пароль)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form').contains('Форма логина');
        cy.get('#form').should('be.visible');
        cy.get('#mail').type('german@dolnikov5.ru');
        cy.get('#pass').type('iLoveqastudio15');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Негативный кейс (Не правильный логин и правильный пароль)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form').contains('Форма логина');
        cy.get('#form').should('be.visible');
        cy.get('#mail').type('german@dolnikov5.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Проверка валидации (Логин без @ и правильный пароль)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form').contains('Форма логина');
        cy.get('#form').should('be.visible');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#message').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Проверка на приведение к строчным буквам в логине)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form').contains('Форма логина');
        cy.get('#form').should('be.visible');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
})
