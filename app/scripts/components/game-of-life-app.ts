/// <reference path="../../../reference.ts" />
'use strict';

class GameOfLifeApp {
  clicks: number;
  name: string;

  /* @ngInject */
  constructor(private $scope: ng.IScope) {

    this.clicks = 0;
  }

  onClick() {
    this.clicks++;
  }
}

angular
  .module('gameOfLifeAppInternal')
  .component('gameOfLifeApp', {

    templateUrl: 'views/game-of-life-app.html',
    controller: GameOfLifeApp,
    bindings: {
      name: '='
    }
  });
