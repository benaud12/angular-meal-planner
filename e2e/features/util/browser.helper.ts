import { browser, ExpectedConditions, element, by } from 'protractor';

export class BrowserHelper {
  baseUrl: string = browser.baseUrl;
  defaultTimeout: number = 5000;

  defaultWait(conditionFunction) {
    return browser.wait(conditionFunction, this.defaultTimeout);
  }

  get(url) {
    return browser.get(this.baseUrl + url);
  }

  getElementByTagName(tagName) {
    return element(by.tagName(tagName));
  }

  waitForExpectedUrl(expectedUrl) {
    return this.defaultWait(
      ExpectedConditions.urlIs(this.baseUrl + expectedUrl));
  }

  waitForElementByTagName(tagName) {
    return this.defaultWait(
      ExpectedConditions.visibilityOf(element(by.tagName(tagName))));
  }
}
