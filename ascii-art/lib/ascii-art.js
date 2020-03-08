'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'ascii-art:convert': () => this.convert()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {
      asciiArtViewState: this.asciiArtView.serialize()
    };
  },

  convert () {
  const editor = atom.workspace.getActiveTextEditor()
  if (editor) {
    const selection = editor.getSelectedText()

    const figlet = require('figlet')
    const font = 'o8'
    figlet(selection, {font}, function (error, art) {
      if (error) {
        console.error(error)
      } else {
        editor.insertText(`\n${art}\n`)
      }
    })
  }
}

};
