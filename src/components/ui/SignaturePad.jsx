import React, { useRef, useImperativeHandle } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from './Button';

export const SignaturePad = React.forwardRef(({ onEnd, className }, ref) => {
  const sigCanvas = useRef({});

  useImperativeHandle(ref, () => ({
    clear: () => sigCanvas.current.clear(),
    getSignature: () => sigCanvas.current.isEmpty() ? null : sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'),
    isEmpty: () => sigCanvas.current.isEmpty(),
  }));

  return (
    <div className="flex flex-col space-y-3 w-full">
      <div className={`border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 overflow-hidden relative ${className}`}>
        <SignatureCanvas
          ref={sigCanvas}
          penColor="#0F172A"
          canvasProps={{
            className: "w-full h-48 sm:h-64 cursor-crosshair"
          }}
          onEnd={onEnd}
        />
      </div>
      <div className="flex justify-end">
        <Button variant="ghost" size="sm" type="button" onClick={() => sigCanvas.current.clear()}>
          Clear Signature
        </Button>
      </div>
    </div>
  );
});
SignaturePad.displayName = "SignaturePad";
