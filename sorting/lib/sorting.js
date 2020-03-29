'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'sorting:quickSort': () => this.quickSort()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  quickSort() {
    const editor = atom.workspace.getActiveTextEditor()
    console.log(editor);
    if (editor) {
      const fs = require('fs');
      let dir = 'C:\\Users\\EL Luchador\\github\\sorting\\quicksort.txt';
      console.log(dir);
      fs.readFile(dir, (err, data) => {
        if (err) throw err;
        editor.insertText(data.toString())
        console.log(editor.insertText(data.toString()))
      })
    }
  }
};
