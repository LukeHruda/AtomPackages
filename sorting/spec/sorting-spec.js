'use babel';

import Sorting from '../lib/sorting';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Sorting', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('sorting');
  });

  describe('when the sorting:quickSort event is triggered', () => {
    it('The File exists', () => {
      atom.commands.dispatch(workspaceElement, 'sorting:quickSort');
      runs(() => {
        const fs = require('fs');
        expect(fs.existsSync('C:\\Users\\EL Luchador\\github\\sorting\\quicksort.txt'));
      });
    });
  });
  describe('when the sorting:quickSort event is triggered', () => {
    it('The Active text editor is grabbed', () => {
      atom.commands.dispatch(workspaceElement, 'sorting:quickSort');
      runs(() => {
        const editor = atom.workspace.getActiveTextEditor()
        expect(editor != null);
      });
    });
  });
  describe('when the sorting:quickSort event is triggered', () => {
    it('The File is read without error', () => {
      atom.commands.dispatch(workspaceElement, 'sorting:quickSort');
      runs(() => {
        const fs = require('fs');
        let dir = 'C:\\Users\\EL Luchador\\github\\sorting\\quicksort.txt';
        console.log(dir);
        fs.readFile(dir, (err, data) => {
          expect(err == null);
        })
      });
    });
  });
  describe('when the sorting:quickSort event is triggered', () => {
    it('The File is written without error', () => {
      atom.commands.dispatch(workspaceElement, 'sorting:quickSort');
      runs(() => {
        const editor = atom.workspace.getActiveTextEditor()
        console.log(editor);
        if (editor) {
          const fs = require('fs');
          let dir = 'C:\\Users\\EL Luchador\\github\\sorting\\quicksort.txt';
          console.log(dir);
          fs.readFile(dir, (err, data) => {
            if (err) throw err;
            expect(editor.insertText(data.toString()) != null);
          })
        }
      });
    });
  });
  describe('when the sorting:quickSort event is triggered', () => {
    it('The entire file is written', () => {
      atom.commands.dispatch(workspaceElement, 'sorting:quickSort');
      runs(() => {
        const editor = atom.workspace.getActiveTextEditor()
        console.log(editor);
        if (editor) {
          const fs = require('fs');
          let dir = 'C:\\Users\\EL Luchador\\github\\sorting\\quicksort.txt';
          console.log(dir);
          fs.readFile(dir, (err, data) => {
            if (err) throw err;
            expect(editor.insertText(data.toString()) == 1);
          })
        }
      });
    });
  });
  describe('when the sorting:quickSort event is triggered', () => {
    it('The entire file is written', () => {
      atom.commands.dispatch(workspaceElement, 'sorting:quickSort');
      runs(() => {
        const editor = atom.workspace.getActiveTextEditor()
        console.log(editor);
        if (editor) {
          const fs = require('fs');
          let dir = 'C:\\Users\\EL Luchador\\github\\sorting\\quicksort.txt';
          fs.open('dir', 'r', function (err, fd) {});
          fs.close(fd, function(err) {
            expect(err == null);
          });
        }
      });
    });
  });
});
