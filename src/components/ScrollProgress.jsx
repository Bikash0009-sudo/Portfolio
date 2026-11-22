import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="progress">
      <motion.div style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
