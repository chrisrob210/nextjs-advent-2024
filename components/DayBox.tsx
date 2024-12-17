import { motion } from 'framer-motion'

interface DayBoxProps {
    day: number
    onClick: () => void
}

export default function DayBox({ day, onClick }: DayBoxProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="aspect-square bg-gradient-to-br from-red-600 to-red-700 
                     rounded-lg shadow-lg hover:from-red-500 hover:to-red-600
                     transition-colors duration-200 flex items-center justify-center
                     text-2xl font-bold text-white relative overflow-hidden
                     border-2 border-gold"
        >
            {/* Decorative ribbon */}
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-600 rotate-45 transform origin-bottom-left" />

            {/* Day number */}
            <span className="z-10">{day}</span>

            {/* Snow effect */}
            <div className="absolute inset-0 bg-white opacity-10 
                          background-snow-pattern" />
        </motion.button>
    )
}