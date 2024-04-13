import {USER_LOCALSTORAGE_KEY} from '../../src/shared/const/localstorage';
import type {User} from '../../src/entities/User';
import type {Profile} from '../../src/entities/Profile';
import { getByTestId } from 'cypress/helpers';

Cypress.Commands.add('login', (username:string = 'admin', password: string = '123') => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000/login",
    body: {
      username,
      password
    }
  })
  .then(({body}) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));

    return body;
  });
});

Cypress.Commands.add("resetProfile", () => {
  const resetProfileData = {
    "id": "1",
    "first": "timur",
    "lastname": "ulbi",
    "age": 465,
    "currency": "RUB",
    "country": "Belarus",
    "city": "Moscow",
    "username": "admin213",
    "avatar": "https://yt3.ggpht.com/ytc/AKedOLTYUJxG8Hu036PQ_TXpMLq2fG8Kj8NZI4h0lbn_3g=s900-c-k-c0x00ffffff-no-rj"
  };

  cy.request({
    method: "PUT",
    url: "http://localhost:8000/profile/" + resetProfileData.id,
    headers: {
      Authorization: 'dsfsdfsfd'
    },
    body: resetProfileData
  });
});

Cypress.Commands.add("updateProfile", () => {
  const newFirstname = 'new';
  const newLastname = 'new lastname';
  const resetProfileData = {
    "id": "1",
    "first": newFirstname,
    "lastname": newLastname,
    "age": 465,
    "currency": "RUB",
    "country": "Belarus",
    "city": "Moscow",
    "username": "admin213",
    "avatar": "https://yt3.ggpht.com/ytc/AKedOLTYUJxG8Hu036PQ_TXpMLq2fG8Kj8NZI4h0lbn_3g=s900-c-k-c0x00ffffff-no-rj"
  };

  cy.get(getByTestId('EditableProfileCardHeader.EditButton')).click();
  cy.get(getByTestId('ProfileCard.firstname')).clear().type(newFirstname);
  cy.get(getByTestId('ProfileCard.lastname')).clear().type(newLastname);
  cy.get(getByTestId('EditableProfileCardHeader.SaveButton')).click();

  cy.request({
    method: "PUT",
    url: "http://localhost:8000/profile/" + resetProfileData.id,
    headers: {
      Authorization: 'dsfsdfsfd'
    },
    body: resetProfileData
  }).then(({body}) => body);
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>
      resetProfile(): Chainable<void>
      updateProfile(): Chainable<Profile>
    }
  }
}

export {};