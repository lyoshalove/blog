import { getByTestId } from "../../helpers";

describe('Роутинг', () => {
  describe('Проверка неавторизованного пользователя', () => {
    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(getByTestId('MainPage')).should('exist');
    });
  
    it('Проверка на несуществующий роут', () => {
      cy.visit('/asdafsdf');
      cy.get(getByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('Проверка авторизованного пользователя', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });

    it('Переход на страницу профилья', () => {
      cy.visit('/profile/1');
      cy.get(getByTestId('ProfilePage')).should('exist');
    });

    it('Переход на страницу статей', () => {
      cy.visit('/articles');
      cy.get(getByTestId('ArticlesPage')).should('exist');
    });
  });
})