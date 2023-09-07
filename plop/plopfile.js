export default function (plop) {
    plop.setGenerator('component', {
        description: 'application component logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'please enter your component name:'
        }],
        actions: [{
            type: 'add',
            path: '../src/app/components/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/component/index.tsx'
        },
        {
            type: 'add',
            path: '../src/app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/component/Component.tsx'
        },
        {
            type: 'add',
            path: '../src/app/components/{{pascalCase name}}/{{kebabCase name}}.module.css',
            templateFile: 'templates/component/component-style.module.css'
        },
        {
            type: 'add',
            path: '../src/app/components/{{pascalCase name}}/index.test.tsx',
            templateFile: 'templates/component/index.test.tsx'
        }]
    });
};