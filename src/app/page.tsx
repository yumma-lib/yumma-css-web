'use client';

import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import Navbar from './components/Navbar';
import Playground from './components/Playground';

const Home = () => {
  const [code, setCode] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const res = await fetch('/content.html');
        const content = await res.text();
        setCode(content);
      } catch (e) {
        console.error('Error:', e);
      }
    };

    fetchModel();
  }, []);

  const onChange = (v: string | undefined, e: any) => {
    setCode(v);
  };

  const sanitizedCode = code ? DOMPurify.sanitize(code) : 'Something went wrong...';

  return (
    <main>
      <Navbar />
      <div className="d-f h-1/1">
        <div className="f-1">
          <Playground code={code} onChange={onChange} />
        </div>
        <div className="f-1 ovf-auto">
          <LiveProvider code={sanitizedCode}>
            <LivePreview />
            <LiveError />
          </LiveProvider>
        </div>
      </div>
    </main>
  );
};

export default Home;
