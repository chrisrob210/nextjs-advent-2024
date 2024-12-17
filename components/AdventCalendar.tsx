'use client'

import { useState } from 'react'
import DayBox from './DayBox'
import VerseModal from './VerseModal'
import { motion } from 'framer-motion'

const verses = {
    1: { verse: "Luke 1:26-27", text: "In the sixth month of Elizabeth's pregnancy, God sent the angel Gabriel to Nazareth, a town in Galilee, to a virgin pledged to be married to a man named Joseph, a descendant of David. The virgin's name was Mary." },
    2: { verse: "Luke 1:30-31", text: "But the angel said to her, 'Do not be afraid, Mary; you have found favor with God. You will conceive and give birth to a son, and you are to call him Jesus.'" },
    3: { verse: "Luke 1:32-33", text: "He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, and he will reign over Jacob's descendants forever; his kingdom will never end." },
    4: { verse: "Matthew 1:20-21", text: "But after he had considered this, an angel of the Lord appeared to him in a dream and said, 'Joseph son of David, do not be afraid to take Mary home as your wife, because what is conceived in her is from the Holy Spirit. She will give birth to a son, and you are to give him the name Jesus.'" },
    5: { verse: "Luke 2:1", text: "In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world." },
    6: { verse: "Luke 2:3-4", text: "And everyone went to their own town to register. So Joseph also went up from the town of Nazareth in Galilee to Judea, to Bethlehem the town of David." },
    7: { verse: "Luke 2:5", text: "He went there to register with Mary, who was pledged to be married to him and was expecting a child." },
    8: { verse: "Luke 2:6-7", text: "While they were there, the time came for the baby to be born, and she gave birth to her firstborn, a son. She wrapped him in cloths and placed him in a manger, because there was no guest room available for them." },
    9: { verse: "Luke 2:8", text: "And there were shepherds living out in the fields nearby, keeping watch over their flocks at night." },
    10: { verse: "Luke 2:9", text: "An angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were terrified." },
    11: { verse: "Luke 2:10-11", text: "But the angel said to them, 'Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.'" },
    12: { verse: "Luke 2:12", text: "This will be a sign to you: You will find a baby wrapped in cloths and lying in a manger." },
    13: { verse: "Luke 2:13-14", text: "Suddenly a great company of the heavenly host appeared with the angel, praising God and saying, 'Glory to God in the highest heaven, and on earth peace to those on whom his favor rests.'" },
    14: { verse: "Luke 2:15", text: "When the angels had left them and gone into heaven, the shepherds said to one another, 'Let's go to Bethlehem and see this thing that has happened, which the Lord has told us about.'" },
    15: { verse: "Luke 2:16", text: "So they hurried off and found Mary and Joseph, and the baby, who was lying in the manger." },
    16: { verse: "Matthew 2:1-2", text: "After Jesus was born in Bethlehem in Judea, during the time of King Herod, Magi from the east came to Jerusalem and asked, 'Where is the one who has been born king of the Jews? We saw his star when it rose and have come to worship him.'" },
    17: { verse: "Matthew 2:9-10", text: "After they had heard the king, they went on their way, and the star they had seen when it rose went ahead of them until it stopped over the place where the child was. When they saw the star, they were overjoyed." },
    18: { verse: "Matthew 2:11", text: "On coming to the house, they saw the child with his mother Mary, and they bowed down and worshiped him. Then they opened their treasures and presented him with gifts of gold, frankincense and myrrh." },
    19: { verse: "Luke 2:19", text: "But Mary treasured up all these things and pondered them in her heart." },
    20: { verse: "John 1:14", text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth." },
    21: { verse: "Isaiah 9:6", text: "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace." },
    22: { verse: "Micah 5:2", text: "But you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel, whose origins are from of old, from ancient times." },
    23: { verse: "Isaiah 7:14", text: "Therefore the Lord himself will give you a sign: The virgin will conceive and give birth to a son, and will call him Immanuel." },
    24: { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    25: { verse: "Matthew 1:23", text: "The virgin will conceive and give birth to a son, and they will call him Immanuel (which means 'God with us')." }
}

export default function AdventCalendar() {
    const [selectedDay, setSelectedDay] = useState<number | null>(null)

    return (
        <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-6xl">
                🎄
            </div>
            <div className="absolute -top-8 left-8 text-4xl">❄️</div>
            <div className="absolute -top-8 right-8 text-4xl">❄️</div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="grid grid-cols-5 gap-4 max-w-4xl mx-auto"
            >
                {[...Array(25)].map((_, index) => (
                    <DayBox
                        key={index + 1}
                        day={index + 1}
                        onClick={() => setSelectedDay(index + 1)}
                    />
                ))}
            </motion.div>

            {selectedDay && (
                <VerseModal
                    verse={verses[selectedDay as keyof typeof verses]}
                    onClose={() => setSelectedDay(null)}
                />
            )}
        </div>
    )
}