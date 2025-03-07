"use client"

import { useEffect, useState } from "react"

export default function ThankYouPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [showIcons, setShowIcons] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setShowConfetti(true), 300)
    setTimeout(() => setShowIcons(true), 1000)
  }, [])

  // Inline styles
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      background: "linear-gradient(to bottom, #f0f9ff, #e6f2ff)",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    card: {
      maxWidth: "28rem",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(10px)",
      borderRadius: "0.75rem",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      transition: "all 0.5s ease",
      transform: "scale(1)",
    },
    cardHover: {
      transform: "scale(1.02)",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
    cardContent: {
      padding: "2rem",
      textAlign: "center" as const,
    },
    iconCircle: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "4rem",
      height: "4rem",
      borderRadius: "9999px",
      backgroundColor: "#ecfdf5",
      color: "#059669",
      marginBottom: "1.5rem",
      animation: "bounce 3s infinite",
    },
    heading: {
      fontSize: "2.25rem",
      fontWeight: "700",
      marginBottom: "0.5rem",
      color: "#1f2937",
      animation: "fadeIn 1s ease-out forwards",
    },
    paragraph: {
      color: "#4b5563",
      marginBottom: "1.5rem",
      animation: "slideUp 0.8s ease-out forwards",
    },
    iconRow: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      marginBottom: "1.5rem",
      transition: "opacity 0.7s ease",
    },
    icon: {
      width: "1.5rem",
      height: "1.5rem",
    },
    button: {
      width: "100%",
      background: "linear-gradient(to right, #3b82f6, #2563eb)",
      color: "white",
      fontWeight: "500",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    buttonHover: {
      background: "linear-gradient(to right, #2563eb, #1d4ed8)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    confettiContainer: {
      position: "absolute" as const,
      inset: 0,
      pointerEvents: "none" as const,
    },
    confetti: (i: number) => ({
      position: "absolute" as const,
      width: "10px",
      height: "10px",
      left: `${Math.random() * 100}%`,
      opacity: 0,
      backgroundColor: getRandomColor(),
      animation: `confetti 5s ease-in-out forwards ${Math.random() * 3}s`,
      transform: "rotate(0deg)",
    }),
  }

  // Animation keyframes as a string to be added to the document
  const keyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes confetti {
      0% { opacity: 1; transform: translateY(-10vh) rotate(0deg); }
      100% { opacity: 0; transform: translateY(100vh) rotate(720deg); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `

  // Add keyframes to document
  useEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.innerHTML = keyframes
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  // State for hover effects
  const [isCardHovered, setIsCardHovered] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  function getRandomColor() {
    const colors = ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d", "#43aa8b", "#577590", "#277da1"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div style={styles.container}>
      {/* Confetti animation */}
      {showConfetti && (
        <div style={styles.confettiContainer}>
          {[...Array(50)].map((_, i) => (
            <div key={i} style={styles.confetti(i)} />
          ))}
        </div>
      )}

      <div
        style={{ ...styles.card, ...(isCardHovered ? styles.cardHover : {}) }}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        <div style={styles.cardContent}>
          <div style={styles.iconCircle}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>

          <h1 style={styles.heading}>Thank You!</h1>

          <p style={styles.paragraph}>
            Your submission has been received. We appreciate your support and will get back to you soon.
          </p>

          {/* Animated icons */}
          <div
            style={{
              ...styles.iconRow,
              opacity: showIcons ? 1 : 0,
            }}
          >
            <div style={{ animation: "float 3s ease-in-out infinite 0.1s" }}>
              <svg
                style={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div style={{ animation: "float 3s ease-in-out infinite 0.3s" }}>
              <svg
                style={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <div style={{ animation: "float 3s ease-in-out infinite 0.5s" }}>
              <svg
                style={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
          </div>

<a href="/">
          <button
            style={{ ...styles.button, ...(isButtonHovered ? styles.buttonHover : {}) }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            >
            Return Home
          </button>
            </a>
        </div>
      </div>
    </div>
  )
}

