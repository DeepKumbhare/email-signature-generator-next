"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import EmailSignature from "@/components/EmailSignature";
import Form from "@/components/Form";

const EmailSignatureWrapper = () => {
  const signatureRef = useRef(null);
//   const [isClicked, setisClicked] = useState(false)

  const handleCopy = () => {
    if (signatureRef.current) {
      const range = document.createRange();
      range.selectNodeContents(signatureRef.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();  
      selection?.addRange(range);
      document.execCommand('copy');

      selection?.removeAllRanges();
    }
  };

  const handleCopyHtml = async () => {
    try {
      if (signatureRef.current) {
        console.log(signatureRef.current)
        await navigator.clipboard.writeText(signatureRef.current.outerHTML);
        
      }
    }
    catch (e) {
      console.error('falied to copy html', e);
    }
  }

  return (
    <div className="container mx-auto">
      <div className="text-center">
        Email Signature Generator

        <div className="flex gap-4 items-center">
          <EmailSignature ref={signatureRef} />
          <Form/>
        </div>
          <div className="my-4 flex gap-4">
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCopyHtml}>
              Copy HTML
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCopy}>
              Copy Signature
            </button>
          </div>
      </div>
    </div>
  );
}

export default EmailSignatureWrapper;