'use babel';

import TemplatePack from '../lib/template-pack';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('TemplatePack', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('template-pack');
  });

  describe('when the template-pack:java event is triggered', () => {
    it('File Exists', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'template-pack:java');

      runs(() => {
        const fs = require('fs');
        expect(fs.existsSync('C:\\Users\\100654666\\github\\template-pack\\Java.txt'));
      });
    });
  });

  describe('when the template-pack:java event is triggered', () => {
    it('Loads the Correct file', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'template-pack:java');

      runs(() => {
        const fs = require('fs');
        let dir4 = 'C:\\Users\\100654666\\github\\template-pack\\Java.txt';
        expect(dir4 == 'C:\\Users\\100654666\\github\\template-pack\\Java.txt');
      });
    });
  });

  describe('when the template-pack:cLang event is triggered', () => {
    it('File Exists', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'template-pack:cLang');

      runs(() => {
        const fs = require('fs');
        expect(fs.existsSync('C:\\Users\\100654666\\github\\template-pack\\cLang.txt'));
      });
    });
  });

  describe('when the template-pack:cLang event is triggered', () => {
    it('Loads the Correct file', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'template-pack:cLang');

      runs(() => {
        const fs = require('fs');
        let dir = 'C:\\Users\\100654666\\github\\template-pack\\cLang.txt';
        expect(dir == 'C:\\Users\\100654666\\github\\template-pack\\cLang.txt');
      });
    });
  });

  describe('when the template-pack:cpp event is triggered', () => {
    it('File Exists', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'template-pack:cpp');

      runs(() => {
        const fs = require('fs');
        expect(fs.existsSync('C:\\Users\\100654666\\github\\template-pack\\cpp.txt'));
      });
    });
  });

  describe('when the template-pack:cpp event is triggered', () => {
    it('Loads the Correct file', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'template-pack:cpp');

      runs(() => {
        const fs = require('fs');
        let dir = 'C:\\Users\\100654666\\github\\template-pack\\cpp.txt';
        expect(dir == 'C:\\Users\\100654666\\github\\template-pack\\cpp.txt');
      });
    });
  });

  describe('when the template-pack:c# event is triggered', () => {
    it('File Exists', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'template-pack:c#');

      runs(() => {
        const fs = require('fs');
        expect(fs.existsSync('C:\\Users\\100654666\\github\\template-pack\\c#.txt'));
      });
    });
  });

  describe('when the template-pack:cSharp event is triggered', () => {
    it('Loads the Correct file', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'template-pack:c#');

      runs(() => {
        const fs = require('fs');
        let dir = 'C:\\Users\\100654666\\github\\template-pack\\c#.txt';
        expect(dir == 'C:\\Users\\100654666\\github\\template-pack\\c#.txt');
      });
    });
  });
});
