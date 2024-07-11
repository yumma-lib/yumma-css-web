import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';

const Home = () => {
    const [code, setCode] = useState('');

    useEffect(() => {
        const fetchModel = async () => {
            try {
                const response = await fetch('/content.html');
                const model = await response.text();
                setCode(model);
            } catch (err) {
                console.error('ERROR:', err.message);
            }
        };

        fetchModel();
    }, []);

    const onChange = (newValue, e) => {
        setCode(newValue);
    };

    return (
        <div className="d-f h-1/1">
            <div className="f-1">
                <CodeEditor code={code} onChange={onChange} />
            </div>
            <div className="f-1 ovf-auto">
                {/* React Live */}
            </div>
        </div>
    );
};

export default Home;
