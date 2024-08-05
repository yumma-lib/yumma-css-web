'use client';

import './globals.css';
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

  const sanitizedCode = code ? DOMPurify.sanitize(code) : '';

  return (
    <main>
      <Navbar />
      <div>
        <Playground code={sanitizedCode} onChange={onChange} />
      </div>
    </main>
  );
};

export default Home;
