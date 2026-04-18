import React, { useState } from 'react';
import { UploadCloud, X } from 'lucide-react';
import { cn } from '../../utils/utils';

export const FileUpload = ({ label, onFileSelect, accept = "image/*, .pdf", className }) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (newFile) => {
    setFile(newFile);
    if (onFileSelect) onFileSelect(newFile);
  };

  const removeFile = () => {
    setFile(null);
    if (onFileSelect) onFileSelect(null);
  };

  return (
    <div className="w-full space-y-2">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <div className={cn(
        "relative flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-xl transition-colors duration-200",
        dragActive ? "border-monta-blue bg-blue-50" : "border-slate-300 bg-slate-50 hover:bg-slate-100",
        file ? "border-solid border-slate-200 bg-white" : "",
        className
      )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="flex items-center justify-between w-full p-2 bg-slate-50/50 rounded-lg border border-slate-100">
            <div className="flex items-center space-x-3 overflow-hidden text-ellipsis whitespace-nowrap">
              <div className="p-2 bg-blue-100 text-monta-blue rounded-md">
                <UploadCloud className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-slate-700 truncate">{file.name}</span>
            </div>
            <button type="button" onClick={removeFile} className="p-1 text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-200 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
              accept={accept}
              onChange={handleChange}
            />
            <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
              <div className="p-3 bg-white shadow-sm rounded-full text-monta-blue">
                <UploadCloud className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-700">Click to upload <span className="font-normal text-slate-500">or drag and drop</span></p>
                <p className="text-xs text-slate-400 mt-1">SVG, PNG, JPG or PDF (max. 5MB)</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
