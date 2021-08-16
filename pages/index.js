import styles from "../styles/Home.module.css"
import { motion } from "https://framer.com/m/framer/framer-motion.js"
import confetti from "https://framer.com/m/framer/confetti.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.box}
        whileTap={{ scale: 1.5, rotate: 90 }}
        onTap={confetti}
      >
        Click Me!
      </motion.div>
    </div>
  )
}
