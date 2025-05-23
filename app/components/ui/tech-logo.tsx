"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface TechLogoProps {
  name: string
  logo: string
  color: string
}

export const TechLogo = ({ name, logo, color = "" }: TechLogoProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative flex items-center justify-center p-2 rounded-lg ${color} h-12 w-12 md:h-14 md:w-14`}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: Math.random() * 0.3, // Random delay for staggered animation
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image src={logo || "/placeholder.svg"} alt={name} width={40} height={40} className="object-contain" />

      {isHovered && (
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background dark:bg-black px-2 py-1 rounded-md shadow-lg text-xs whitespace-nowrap z-10"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.div>
      )}
    </motion.div>
  )
}
