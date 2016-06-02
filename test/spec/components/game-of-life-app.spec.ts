/// <reference path="../../../reference.ts" />
'use strict';

class GameOfLifeAppDriver extends WixBaseViewUnitDriver {

  render(name = '') {
    this.renderFromTemplate(`<game-of-life-app name="name"></game-of-life-app>`, {name});
  }

  getContainerElement() {
    return this.findByDataHook('container');
  }

  getCounterElement() {
    return this.findByDataHook('counter');
  }
}

describe('Component: gameOfLifeApp', () => {
  let driver: GameOfLifeAppDriver;

  beforeEach(() => {
    module('gameOfLifeAppInternal');
    driver = new GameOfLifeAppDriver();
  });

  afterEach(() => {
    driver.disconnectFromBody();
  });

  it('should display name', () => {
    driver.render('kukuchumuku');
    expect(driver.element.text()).toContain('This is kukuchumuku');
  });

  it('should increase counter on click', () => {
    driver.render();
    expect(driver.getCounterElement().text()).toBe('0');

    driver.getContainerElement().click();
    expect(driver.getCounterElement().text()).toBe('1');
  });
});
