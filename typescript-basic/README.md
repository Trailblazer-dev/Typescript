# Typescript

## Setup Instructions

This guide explains how to set up a TypeScript project and the purpose of each command used during the setup process.

### Commands Used

1. **Check Node.js Version**
   ```bash
   node -v
   ```
   This command checks the installed version of Node.js. Ensure you have a compatible version installed.

2. **Install TypeScript Globally**
   ```bash
   npm install -g typescript
   ```
   Installs TypeScript globally on your system, allowing you to use the `tsc` command anywhere.

3. **Check TypeScript Version**
   ```bash
   tsc
   ```
   Displays the installed TypeScript version and provides a list of common commands.

4. **Initialize a TypeScript Project**
   ```bash
   npx tsc --init
   ```
   Creates a `tsconfig.json` file with default configurations for your TypeScript project.

5. **Initialize a Node.js Project**
   ```bash
   npm init -y
   ```
   Creates a `package.json` file with default values, which is used to manage project dependencies and scripts.

6. **Install TypeScript as a Development Dependency**
   ```bash
   npm install typescript --save-dev
   ```
   Installs TypeScript locally in your project, ensuring consistent versions across environments.

### Running the Project

1. **Compile TypeScript Files**
   ```bash
   npx tsc
   ```
   Compiles TypeScript files into JavaScript based on the configuration in `tsconfig.json`.

2. **Run the Compiled JavaScript**
   ```bash
   node test.js
   ```
   Executes the compiled JavaScript file using Node.js.

### Additional Notes

- The `tsconfig.json` file contains various options to customize the TypeScript compiler behavior. For example, you can set the target JavaScript version, enable strict type checking, and more.
- The `package.json` file includes a `dev` script to compile and run the project:
  ```bash
  npm run dev
  ```
