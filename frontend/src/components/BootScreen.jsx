import { motion } from "framer-motion";

function BootScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="boot-screen"
    >
      <div className="boot-box">
        <h1>🤖 INVENTORY AI</h1>

        <p>Initializing AI Core...</p>
        <p>Loading Security Modules...</p>
        <p>Connecting Database...</p>
        <p>Authentication Ready...</p>

        <div className="loading-bar">
          <div className="loading-fill"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default BootScreen;