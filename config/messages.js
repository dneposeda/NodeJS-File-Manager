export const messages = {
    showWelcome: (username) => console.log(`Welcome to the File Manager, ${username}`),
    showBye: (username) => console.log(`Thank you for using File Manager, ${username}!`),
    showCurrentPath: (path) => console.log(`You are currently in ${path}`),
    showInvalidInput: () => console.log(`Invalid input`),
    showOperationFailed: () => console.log(`Operation failed`),
    show: (message) => console.log(message),
}
