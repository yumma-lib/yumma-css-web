import Editor from '@monaco-editor/react';
import React from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';

type PlaygroundProps = {
    code: string | undefined;
    onChange: (value: string | undefined, event: any) => void;
};

const Playground: React.FC<PlaygroundProps> = ({ code, onChange }) => {
    const handleMount = (editor: any, monaco: any) => {
        monaco.editor.defineTheme('yummacss', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'attribute.name', foreground: '#e3e3e3' },
                { token: 'attribute.value', foreground: '#50bfd2' },
                { token: 'comment', foreground: '#696a72' },
                { token: 'delimiter.angle', foreground: '#dbbcd6' },
                { token: 'delimiter.curly', foreground: '#dbbcd6' },
                { token: 'delimiter.square', foreground: '#dbbcd6' },
                { token: 'keyword', foreground: '#e3e3e3' },
                { token: 'meta.tag.custom', foreground: '#e3e3e3' },
                { token: 'meta.tag.doctype', foreground: '#e3e3e3' },
                { token: 'meta.tag.inline', foreground: '#e3e3e3' },
                { token: 'meta.tag.script', foreground: '#e3e3e3' },
                { token: 'meta.tag.style', foreground: '#e3e3e3' },
                { token: 'meta.tag.xml', foreground: '#e3e3e3' },
                { token: 'meta.tag', foreground: '#e3e3e3' },
                { token: 'number', foreground: '#e3e3e3' },
                { token: 'string', foreground: '#50bfd2' },
                { token: 'tag', foreground: '#dd67a1' }
            ],
            colors: {
                'dropdown.background': '#1a1c22',
                'editor.background': '#1f212a',
                'editor.cursorColor': '#f4ebf3',
                'editor.foreground': '#e3e3e3',
                'editor.lineHighlightBackground': '#1a1c22',
                'editor.selectionBackground': '#3e3f4a',
                'editorFindWidget.background': '#1f212a',
                'editorFindWidget.input.background': '#1f212a',
                'editorHoverWidget.background': '#1f212a',
                'editorSuggestWidget.background': '#1f212a',
                'editorWidget.background': '#1a1c22',
                'input.background': '#1f212a'
            },
        });

        monaco.editor.setTheme('yummacss');
    };

    return (
        <div className="d-f h-1/1">
            <div className="f-1 md:h-full">
                <Editor
                    defaultLanguage="html"
                    value={code}
                    options={{
                        language: 'html',
                        minimap: {
                            enabled: false
                        },
                        fontSize: 14,
                    }}
                    onChange={onChange}
                    onMount={handleMount}
                />
            </div>
            <div className="d-none f-1 ovf-auto xl:d-b">
                <LiveProvider code={code}>
                    <LivePreview />
                </LiveProvider>
            </div>
        </div>
    );
};

export default Playground;
