import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import DOMPurify from 'dompurify';

const Playground = () => {
    const [code, setCode] = useState();

    useEffect(() => {
        const fetchModel = async () => {
            try {
                const res = await fetch('/content.html');
                const model = await res.text();
                setCode(model);
            } catch (err) {
                console.error('ERROR:', err.message);
            }
        };

        fetchModel();
    }, []);

    const onChange = (v, e) => {
        setCode(v);
    };

    const sanitizedCode = DOMPurify.sanitize(code);

    return (

        <div className="d-f h-1/1">
            <div className="f-1">
                <CodeEditor code={code} onChange={onChange} />
            </div>
            <div className="f-1 ovf-auto">
                <LiveProvider code={sanitizedCode}>
                    <LivePreview />
                    <LiveError />
                </LiveProvider>
            </div>
        </div>
    );
};

export default Playground;
