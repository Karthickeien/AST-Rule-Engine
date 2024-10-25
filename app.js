class RuleEngine {
    constructor() {
        this.rules = new Map();
        this.setupEventListeners();
        this.loadRules();
    }

    setupEventListeners() {
        // Rule Creation
        document.getElementById('ruleForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.createRule();
        });

        // Rule Evaluation
        document.getElementById('evaluationForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.evaluateRule();
        });
    }

    loadRules() {
        // Sample rules
        const sampleRules = [
            {
                name: 'Sales Rule',
                expression: "age > 30 AND department = 'Sales' AND salary >= 50000"
            },
            {
                name: 'Marketing Rule',
                expression: "age < 25 AND department = 'Marketing' AND (salary > 20000 OR experience > 5)"
            }
        ];

        sampleRules.forEach(rule => {
            this.rules.set(rule.name, rule);
        });

        this.updateRulesList();
        this.updateRuleSelect();
    }

    createRule() {
        const name = document.getElementById('ruleName').value;
        const expression = document.getElementById('ruleString').value;

        if (this.validateRuleExpression(expression)) {
            this.rules.set(name, { name, expression });
            this.updateRulesList();
            this.updateRuleSelect();
            document.getElementById('ruleForm').reset();
        } else {
            alert('Invalid rule expression!');
        }
    }

    validateRuleExpression(expression) {
        const validOperators = ['AND', 'OR'];
        const validComparisons = ['>', '<', '=', '>=', '<='];
        const validAttributes = ['age', 'department', 'salary', 'experience'];

        const hasValidOperators = validOperators.some(op => expression.includes(op));
        const hasValidAttributes = validAttributes.some(attr => expression.includes(attr));
        const hasValidComparisons = validComparisons.some(comp => expression.includes(comp));

        return hasValidOperators && hasValidAttributes && hasValidComparisons;
    }

    updateRulesList() {
        const rulesList = document.getElementById('rulesList');
        rulesList.innerHTML = '';

        this.rules.forEach((rule, name) => {
            const ruleElement = document.createElement('div');
            ruleElement.className = 'p-4 border rounded bg-gray-50';
            ruleElement.innerHTML = `
                <h4 class="font-semibold">${name}</h4>
                <p class="text-sm text-gray-600">${rule.expression}</p>
                <div class="mt-2">
                    <button onclick="ruleEngine.deleteRule('${name}')" 
                            class="text-red-500 hover:text-red-700 text-sm">
                        Delete
                    </button>
                </div>
            `;
            rulesList.appendChild(ruleElement);
        });
    }

    updateRuleSelect() {
        const select = document.getElementById('ruleSelect');
        select.innerHTML = '<option value="">Select a rule...</option>';

        this.rules.forEach((rule, name) => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            select.appendChild(option);
        });
    }

    deleteRule(name) {
        this.rules.delete(name);
        this.updateRulesList();
        this.updateRuleSelect();
    }

    evaluateRule() {
        const ruleName = document.getElementById('ruleSelect').value;
        if (!ruleName) {
            alert('Please select a rule to evaluate');
            return;
        }

        const data = {
            age: parseInt(document.getElementById('age').value),
            department: document.getElementById('department').value,
            salary: parseInt(document.getElementById('salary').value),
            experience: parseInt(document.getElementById('experience').value)
        };

        const result = this.evaluateExpression(this.rules.get(ruleName).expression, data);
        this.displayResult(result, data);
        this.addToHistory(ruleName, result, data);
    }

    evaluateExpression(expression, data) {
        try {
            let evalString = expression.replace(/age/g, data.age)
                .replace(/salary/g, data.salary)
                .replace(/experience/g, data.experience)
                .replace(/department = '([^']+)'/g, (_, dept) => `'${data.department}' === '${dept}'`)
                .replace(/AND/g, '&&')
                .replace(/OR/g, '||');

            return eval(evalString);
        } catch (error) {
            console.error('Evaluation error:', error);
            return false;
        }
    }

    displayResult(result, data) {
        const resultDiv = document.getElementById('evaluationResult');
        resultDiv.className = `mt-6 p-4 rounded-lg ${result ? 'bg-green-100' : 'bg-red-100'}`;
        resultDiv.innerHTML = `
            <h4 class="font-semibold ${result ? 'text-green-800' : 'text-red-800'}">
                Evaluation Result: ${result ? 'PASS' : 'FAIL'}
            </h4>
            <div class="mt-2 text-sm">
                <p>Age: ${data.age}</p>
                <p>Department: ${data.department}</p>
                <p>Salary: ${data.salary}</p>
                <p>Experience: ${data.experience}</p>
            </div>
        `;
        resultDiv.classList.remove('hidden');
    }

    addToHistory(ruleName, result, data) {
        const historyDiv = document.getElementById('evaluationHistory');
        const entry = document.createElement('div');
        entry.className = `p-4 border rounded ${result ? 'bg-green-50' : 'bg-red-50'}`;
        entry.innerHTML = `
            <p class="font-semibold">${ruleName}</p>
            <p class="text-sm">Result: ${result ? 'PASS' : 'FAIL'}</p>
            <p class="text-sm text-gray-600">
                ${new Date().toLocaleTimeString()}
            </p>
        `;
        historyDiv.insertBefore(entry, historyDiv.firstChild);
    }
}

// Initialize the Rule Engine
const ruleEngine = new RuleEngine();
