import { motion, AnimatePresence } from 'framer-motion'

interface VerseModalProps {
    verse: {
        verse: string
        text: string
    }
    onClose: () => void
}

export default function VerseModal({ verse, onClose }: VerseModalProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="bg-white rounded-lg p-8 max-w-lg w-full relative"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 text-4xl">🎄</div>
                    <div className="absolute -top-4 -right-4 text-4xl">⭐</div>

                    <h2 className="text-xl font-bold mb-4 text-green-800">{verse.verse}</h2>
                    <p className="text-gray-700 mb-6">{verse.text}</p>
                    <button
                        onClick={onClose}
                        className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700
                                transition-colors duration-200"
                    >
                        Close
                    </button>

                    {/* Bottom decorations */}
                    <div className="absolute -bottom-4 -left-4 text-4xl">🕯️</div>
                    <div className="absolute -bottom-4 -right-4 text-4xl">🎁</div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}