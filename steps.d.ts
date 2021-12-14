/// <reference types='codeceptjs' />
type HomePage = typeof import('./homePage.js');
type MyOrdersPage = typeof import('./myOrdersPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, HomePage: HomePage, MyOrdersPage: MyOrdersPage }
  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
