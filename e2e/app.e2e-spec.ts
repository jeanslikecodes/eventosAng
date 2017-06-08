import { EventosAngPage } from './app.po';

describe('eventos-ang App', () => {
  let page: EventosAngPage;

  beforeEach(() => {
    page = new EventosAngPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
