import { TypeaheadPo } from '../support/typeahead.po';

describe('Typeahead demo page test suite', () => {
  const typeahead = new TypeaheadPo();

  beforeEach(() => typeahead.navigateTo());

  describe('Basic array', () => {
    const basicDemo = typeahead.exampleDemosArr.basic;
    const formTemplate = 'Model: ';
    const noMatchText = 'qwerty';
    const stateForCheck = 'Alabama';

    it('User scrolls to Basic array sub-menu and sees typeahead input and typeahead card with "Model:" text', () => {
      typeahead.scrollToMenu('Basic array');
      typeahead.isElementVisible(basicDemo, typeahead.cardHeader);
      typeahead.isPreviewExist(basicDemo, formTemplate);
      typeahead.isElementVisible(basicDemo, typeahead.inputSelector);
    });

    it('When a user starts typing the dropdown does not shown if there are no matches', () => {
      typeahead.clearInputAndSendKeys(basicDemo, noMatchText);
      typeahead.isDropdownDisabled(basicDemo, typeahead.activeDropdown);
      typeahead.isDemoContainsTxt(basicDemo, noMatchText);
    });

    it('When a user starts typing the dropdown with matches is shown. click on an item auto-fills typeahead container',
      () => {
        typeahead.clearInputAndSendKeys(basicDemo, stateForCheck);
        typeahead.isElementVisible(basicDemo, typeahead.activeDropdown);
        typeahead.clickByText(basicDemo, stateForCheck);
        typeahead.isDemoContainsTxt(basicDemo, stateForCheck);
      });
  });
});
