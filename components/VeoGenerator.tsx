
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';

const VEO_MESSAGES = [
  "Crafting your cinematic motion...",
  "Analyzing visual depths...",
  "Synthesizing temporal layers...",
  "Polishing the final frames...",
  "Almost there, finalizing your masterpiece..."
];

const VeoGenerator: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [statusMessage, setStatusMessage] = useState(VEO_MESSAGES[0]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!image) return;

    try {
      // 1. Handle API Key Selection (Mandatory for Veo)
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
        // Proceeding assuming success as per guidelines (mitigating race condition)
      }

      setIsGenerating(true);
      setVideoUrl(null);
      
      // Rotate messages
      let msgIndex = 0;
      const interval = setInterval(() => {
        msgIndex = (msgIndex + 1) % VEO_MESSAGES.length;
        setStatusMessage(VEO_MESSAGES[msgIndex]);
      }, 8000);

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Professional cinematic motion, subtle camera movement, high quality textures',
        image: {
          imageBytes: base64Data,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio,
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      clearInterval(interval);

      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        const downloadLink = operation.response.generatedVideos[0].video.uri;
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
      }
    } catch (error: any) {
      console.error("Video generation failed:", error);
      if (error.message?.includes("Requested entity was not found")) {
        await (window as any).aistudio.openSelectKey();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50 overflow-hidden" id="ai-lab">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] tracking-[0.4em] uppercase text-slate-400 mb-4"
            >
              AI Lab
            </motion.p>
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-slate-900 mb-8"
            >
              Animate your vision with Veo
            </motion.h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-md">
              Experience the next frontier of web design. Upload a static image and let our AI engine bring it to life with professional cinematic motion.
            </p>
            
            <div className="flex gap-4 mb-8">
              {(['16:9', '9:16'] as const).map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    aspectRatio === ratio ? 'bg-slate-900 text-white' : 'bg-white text-slate-400 border border-slate-200'
                  }`}
                >
                  {ratio}
                </button>
              ))}
            </div>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-4 bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all text-xs font-bold uppercase tracking-widest rounded-sm mb-4 w-full sm:w-auto"
            >
              {image ? 'Change Image' : 'Upload Image'}
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div 
                    key="generating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-slate-900/90 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6" />
                    <p className="text-white text-sm font-medium tracking-wide animate-pulse">
                      {statusMessage}
                    </p>
                    <p className="text-slate-500 text-[10px] mt-4 uppercase tracking-[0.2em]">
                      Generation takes about 2-3 minutes
                    </p>
                  </motion.div>
                ) : videoUrl ? (
                  <motion.video 
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-full object-cover"
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : image ? (
                  <motion.img 
                    key="image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={image}
                    className="w-full h-full object-cover opacity-80"
                  />
                ) : (
                  <div className="text-slate-300 flex flex-col items-center">
                    <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[10px] uppercase tracking-widest">Awaiting Input</p>
                  </div>
                )}
              </AnimatePresence>

              {image && !isGenerating && !videoUrl && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full px-6"
                >
                  <button
                    onClick={generateVideo}
                    className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold uppercase tracking-widest text-xs shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                  >
                    Animate Now
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeoGenerator;
