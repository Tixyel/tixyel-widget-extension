const vscode = require('vscode')
const fs = require('fs')

const { files } = require('../data/widgetZip')
const { writeZip, getAllFilesFromFolder } = require('../functions/manageFs')

module.exports = {
  name: 'finishThisWidget',
  run: async ({ fsPath }) => {
    if (!vscode.workspace.workspaceFolders) return vscode.window.showInformationMessage('Você precisa abrir uma workspace ou uma pasta')

    getAllFilesFromFolder(fsPath + '\\' + 'finished').then(async (allFiles) => {
      let createFiles = Object.entries(files).reduce((acc, [key, { fileName, content }]) => {
        acc[key] = { content: content || fs.readFileSync(fileName ? allFiles.find(({ fileName: name }) => name == fileName).path : '', 'utf8') }

        return acc
      }, {})

      writeZip(fsPath + '\\widget.io\\', { createFiles }).then(() => {
        vscode.window.showInformationMessage('Arquivo .zip criado com sucesso!')
      })
    })
  },
}
