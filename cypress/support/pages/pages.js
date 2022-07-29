import createOrEditPage from './tournamentPages/adminPages/createOrEditPage';
import logosPage from './tournamentPages/adminPages/logosPage';
import classesPage from './tournamentPages/adminPages/classesPage';
import playersPage from './tournamentPages/adminPages/playersPage';
import closeSignInPage from './tournamentPages/adminPages/closeSignInPage';
import drawsPage from './tournamentPages/adminPages/drawsPage';
import timesPage from './tournamentPages/adminPages/timesPage';
import matchesPage from './tournamentPages/adminPages/matchesPage';
import startFinishPage from './tournamentPages/adminPages/startFinishPage';
import addPlayersPage from './tournamentPages/adminPages/addPlayersPage';
import previewDrawsPage from './tournamentPages/adminPages/previewDrawsPage';

import tnHomepage from './tournamentPages/publicPages/tnHomepage';

export class Pages {
  constructor() {
    this.tournament = {
      adminPages: {
        createPage: createOrEditPage,
        logosPage: logosPage,
        classesPage: classesPage,
        playersPage: playersPage,
        closeSignInPage: closeSignInPage,
        drawsPage: drawsPage,
        timesPage: timesPage,
        matchesPage: matchesPage,
        startFinishPage: startFinishPage,
        addPlayersPage: addPlayersPage,
        previewDrawsPage: previewDrawsPage,
      },
      publicPages: {
        tnHomepage: tnHomepage,
      },
    };
  }
}

export default new Pages();
