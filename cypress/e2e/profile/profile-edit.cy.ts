import { getByTestId } from "cypress/helpers";

describe('Переход на страницу профиля', () => {
  beforeEach(() => {
    cy.login('admin', '123')
      .then((data) => {
        cy.visit(`/profile/${data.id}`);
      })
  });

  afterEach(() => {
    cy.resetProfile();
  });

  it('Успешная загрузка профиля', () => {
    cy.get(getByTestId('ProfilePage')).should('exist');
    cy.get(getByTestId('ProfileCard.firstname')).should('have.value', 'timur');
  });

  it('Редактирование данных', () => {
    cy.updateProfile()
      .then(data => {
        cy.log(JSON.stringify(data));
        cy.get(getByTestId('ProfileCard.firstname')).should('have.value', data.first);
        cy.get(getByTestId('ProfileCard.lastname')).should('have.value', data.lastname);
      });
  });
});