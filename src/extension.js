/**
 * Main extension entry point
 * @module extension
 */

import * as vscode from 'vscode';

/**
 * Activates the extension
 * @param {vscode.ExtensionContext} context - The extension context
 */
export function activate(context) {
  console.log('Repository Manager extension is now active');
  
  // Register commands
  const disposable = vscode.commands.registerCommand('repoManager.showRepoView', () => {
    vscode.window.showInformationMessage('Repository Manager view is activated!');
  });
  
  context.subscriptions.push(disposable);
}

/**
 * Deactivates the extension
 */
export function deactivate() {
  console.log('Repository Manager extension is now deactivated');
}
