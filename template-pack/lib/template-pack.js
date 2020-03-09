const {CompositeDisposable} = require('atom')

module.exports = {
  subscriptions: null,

  activate () {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-workspace',
      {'template-pack:java': () => this.java()})
    )
    this.subscriptions.add(atom.commands.add('atom-workspace',
      {'template-pack:cLang': () => this.cLang()})
    )
    this.subscriptions.add(atom.commands.add('atom-workspace',
      {'template-pack:cpp': () => this.cpp()})
    )
    this.subscriptions.add(atom.commands.add('atom-workspace',
      {'template-pack:cSharp': () => this.cSharp()})
    )
  },

  deactivate () {
    this.subscriptions.dispose()
  },

  java() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const fs = require('fs');
      let dir = 'C:\\Users\\100654666\\github\\template-pack\\Java.txt';
      console.log(dir);
    fs.readFile(dir, (err, data) => {
        if (err) throw err;

        editor.insertText(data.toString())
    })

    }
  },

  cpp() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const fs = require('fs');
      let dir = 'C:\\Users\\100654666\\github\\template-pack\\cpp.txt';
      console.log(dir);
    fs.readFile(dir, (err, data) => {
        if (err) throw err;

        editor.insertText(data.toString())
    })

    }
  },

  cSharp() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const fs = require('fs');
      let dir = 'C:\\Users\\100654666\\github\\template-pack\\c#.txt';
      console.log(dir);
    fs.readFile(dir, (err, data) => {
        if (err) throw err;

        editor.insertText(data.toString())
    })

    }
  },

  cLang() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const fs = require('fs');
      let dir = 'C:\\Users\\100654666\\github\\template-pack\\cLang.txt';
      console.log(dir);
    fs.readFile(dir, (err, data) => {
        if (err) throw err;

        editor.insertText(data.toString())
    })

    }
  }
}
