/// <reference types='codeceptjs' />
type HomePage = typeof import('./pages/homePage.js');
type MyOrdersPage = typeof import('./pages/myOrdersPage.js');
type AssertWrapper = import('codeceptjs-assert');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, HomePage: HomePage, MyOrdersPage: MyOrdersPage }
  interface Methods extends Playwright, AssertWrapper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
