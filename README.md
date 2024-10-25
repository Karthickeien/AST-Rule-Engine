# Rule Engine with AST

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)](https://prettier.io/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
![Maintenance](https://img.shields.io/maintenance/yes/2024)
[![Code Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/rule-engine-ast)

## 🌐 Hosted Link
[AST - Rule Engine](https://karthickeien.github.io/AST-Rule-Engine/)

A sophisticated rule engine application that uses Abstract Syntax Trees (AST) to evaluate complex business rules based on user attributes. The system supports dynamic rule creation, combination, and modification through a clean web interface.

## 🌟 Features

- **Dynamic Rule Creation**: Create and modify rules using a simple expression language
- **AST-Based Evaluation**: Efficient rule evaluation using Abstract Syntax Trees
- **Rule Combination**: Combine multiple rules into unified decision trees
- **Real-time Evaluation**: Instant feedback on rule evaluation results
- **Intuitive UI**: Clean, modern interface for rule management
- **History Tracking**: Keep track of rule evaluations and results

## 🛠️ Technology Stack

### Core Technologies
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

### Development Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## 🎯 Rule Expression Examples

```javascript
// Example Rule 1
((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)

// Example Rule 2
((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)
```

## 📊 Data Structure

The rule engine uses a tree-based data structure for representing rules:

```javascript
class Node {
    constructor(type, value = null, left = null, right = null) {
        this.type = type;      // "operator" or "operand"
        this.value = value;    // operator (AND/OR) or condition
        this.left = left;      // left child node
        this.right = right;    // right child node
    }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Karthickeien/AST-Rule-Engine.git
cd AST-Rule-Engine
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
npm run dev
```

## 📝 Usage

### Creating a Rule

1. Navigate to the "Create Rule" section
2. Enter a unique rule name
3. Input your rule expression following the syntax:
   - Use `AND`, `OR` for logical operations
   - Use `>`, `<`, `=`, `>=`, `<=` for comparisons
   - Wrap string values in single quotes
4. Click "Create Rule" to save

### Evaluating Rules

1. Select a rule from the dropdown
2. Input the required attributes:
   - Age
   - Department
   - Salary
   - Experience
3. Click "Evaluate Rule" to see the result

## 🔍 API Reference

### Core Functions

```javascript
// Create a new rule from string expression
createRule(ruleString: string): Node

// Combine multiple rules into single AST
combineRules(rules: string[]): Node

// Evaluate rule against provided data
evaluateRule(data: Object): boolean
```

### Data Format

```javascript
// Example input data format
const data = {
    age: 35,
    department: "Sales",
    salary: 60000,
    experience: 3
};
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```
## 📸 Screenshots

### Rule Creation Interface
![Rule Creation Interface](/Images/Create%Rule%with&AST.png)
*Create complex rules using an intuitive interface with real-time validation*

### Rule Evaluation Dashboard
![Rule Evaluation Dashboard](./Images/Evaluate%Rule%with%AST.png)
*Evaluate rules against user data with immediate feedback*

### Rule Management Console
![Rule Management](./Images/Existing%Rule%with%AST.png)
*Manage, edit, and organize your business rules efficiently*

### Evaluation History
![Evaluation History](./Images/Evaluation%History%with%AST.png)
*Track and analyze rule evaluation history with detailed insights*

Key test scenarios:
- Individual rule creation and AST validation
- Rule combination logic
- Rule evaluation with various data inputs
- Error handling and edge cases
- Attribute validation

## 🔒 Validation & Error Handling

- Input validation for rule expressions
- Attribute catalog validation
- Syntax error detection
- Missing data handling
- Invalid comparison checks

## 🎁 Bonus Features

- **Rule Modification**: Update existing rules while maintaining AST structure
- **Attribute Catalog**: Predefined set of valid attributes and types
- **Custom Functions**: Support for user-defined functions in rules
- **Rule History**: Track rule modifications and evaluation history
- **Export/Import**: Save and load rule configurations


## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by business rule engines and AST implementations
- Built with modern web technologies and best practices

## 📧 Contact
For any queries or support, please contact:
* Email: karthicke243@gmail.com
* LinkedIn: [Karthickeien Elangovan](https://www.linkedin.com/in/karthickeien-elangovan/)
* GitHub: [Karthickeien](https://github.com/Karthickeien)
