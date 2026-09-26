import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100]"
        >
          <div className="bg-[#111113] border border-white/10 shadow-2xl rounded-xl p-4 pr-12 flex items-start gap-3.5 max-w-sm w-full relative">
            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="text-sm font-medium text-white mb-1 flex items-center gap-2">
                <span>Diagnóstico Recebido</span>
                <span className="text-[11px] font-medium text-zinc-400 bg-white/5 px-2 py-0.5 rounded">24h</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Os dados da sua operação foram enviados para análise da diretoria. Entraremos em contato via WhatsApp/E-mail em até 24h.
              </p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 text-zinc-500 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
