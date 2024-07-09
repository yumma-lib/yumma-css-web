import React from 'react';
import Editor from '@monaco-editor/react';
import tags from 'html-tags';

const CodeEditor = ({ code, onChange }) => {
    const handleEditorDidMount = (editor, monaco) => {
        monaco.editor.defineTheme('vortyx', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'tag', foreground: '#dd67a1' },
                { token: 'attribute.name', foreground: '#e3e3e3' },
                { token: 'attribute.value', foreground: '#50bfd2' },
                { token: 'string', foreground: '#50bfd2' },
                { token: 'delimiter.angle', foreground: '#dbbcd6' },
                { token: 'delimiter.curly', foreground: '#dbbcd6' },
                { token: 'delimiter.square', foreground: '#dbbcd6' },
                { token: 'keyword', foreground: '#e3e3e3' },
                { token: 'number', foreground: '#e3e3e3' },
                { token: 'meta.tag', foreground: '#e3e3e3' },
                { token: 'meta.tag.custom', foreground: '#e3e3e3' },
                { token: 'meta.tag.doctype', foreground: '#e3e3e3' },
                { token: 'meta.tag.inline', foreground: '#e3e3e3' },
                { token: 'meta.tag.script', foreground: '#e3e3e3' },
                { token: 'meta.tag.style', foreground: '#e3e3e3' },
                { token: 'meta.tag.xml', foreground: '#e3e3e3' },
                { token: 'comment', foreground: '#696a72' }
            ],
            colors: {
                'editor.background': '#1f212a',
                'editor.foreground': '#e3e3e3',
                'dropdown.background': '#1a1c22',
                'input.background': '#1f212a',
                'editorWidget.background': '#1a1c22',
                'editor.cursorColor': '#f4ebf3',
                'editor.lineHighlightBackground': '#1a1c22',
                'editor.selectionBackground': '#3e3f4a',
                'editorSuggestWidget.background': '#1f212a',
                'editorHoverWidget.background': '#1f212a',
                'editorFindWidget.background': '#1f212a',
                'editorFindWidget.input.background': '#1f212a'
            },
        });

        monaco.editor.setTheme('vortyx');

        const CompletionItemProvider = {
            provideCompletionItems: () => {
                return {
                    suggestions: tags.map(tag => {
                        return {
                            label: tag,
                            kind: monaco.languages.CompletionItemKind.Function,
                            insertText: `<${tag}>$0</${tag}>`,
                            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                        };
                    }),
                };
            },
        };

        monaco.languages.registerCompletionItemProvider('html', CompletionItemProvider);
    };

    return (
        <Editor
            language="html"
            value={code}
            options={{
                language: 'html',
                minimap: {
                    enabled: false
                },
                fontSize: 14
            }}

            onChange={onChange}
            onMount={handleEditorDidMount}
        />
    );
};

export default CodeEditor;
