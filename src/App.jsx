import './App.css'

import { useState, useEffect } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isKissing, setIsKissing] = useState(false); // State for kiss effect
  const [isHugging, setIsHugging] = useState(false); // State for hug effect
  const [emojis, setEmojis] = useState([]); // State for raining emojis
  const safePassword = 'iloveaadya';

  useEffect(() => {
    if (isKissing) {
      const generateEmojis = () => {
        const newEmojis = [];
        const emojiList = ['😘', '💋']; 
        for (let i = 0; i < 100; i++) { // Generate 50 emojis
          const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
          const size = Math.random() * 50 + 10; // size between 10px and 30px
          const left = Math.random() * 100; //  horizontal position
          const duration = Math.random() * 3 ; // fall duration (increased time)
          newEmojis.push({ id: i, emoji, size, left, duration });
        }
        setEmojis(newEmojis);
      };

      generateEmojis();

      // Clear emojis after the kiss effect ends (audio onEnded handles setIsKissing(false))
      // No need to clear here, audio onEnded will trigger state change
    } else {
      setEmojis([]); // Clear emojis when not kissing
    }
  }, [isKissing]);

  useEffect(() => {
    if (isHugging) {
      const generateHeartParticles = () => {
        const newParticles = [];
        const particleCount = 50; // Generate 50 heart particles
        for (let i = 0; i < particleCount; i++) {
          const size = Math.random() * 30 + 10; // size between 10px and 40px
          const left = Math.random() * 100; // horizontal position
          const duration = Math.random() * 2 + 2; // animation duration between 2s and 4s
          const delay = Math.random() * 1; // animation delay between 0s and 1s
          newParticles.push({ id: i, size, left, duration, delay });
        }
        setHeartParticles(newParticles);
      };

      generateHeartParticles();

      // Clear particles and reset isHugging after animation
      const animationDuration = 4000; // Match CSS animation duration
      const timer = setTimeout(() => {
        setHeartParticles([]);
        setIsHugging(false);
      }, animationDuration);

      return () => clearTimeout(timer); // Cleanup timer
    } else {
      setHeartParticles([]); // Clear particles when not hugging
    }
  }, [isHugging]);

  const [heartParticles, setHeartParticles] = useState([]); // State for heart particles

  const handleLogin = () => {
    if (password === safePassword) {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
        {isLoggedIn ? (
          <>
            <div className="text-primary flex min-h-screen justify-center items-center">
                <h1 className="text-6xl font-author font-semibold"> Remember me? </h1>
            </div>

            <div className="text-primary flex min-h-screen justify-center items-center">
                <h1 className="text-6xl font-author font-semibold"> It's your girlfriend back at it again </h1>
            </div>

            <div className="text-primary flex min-h-screen justify-center items-center">
              <h1 className="text-6xl font-author font-semibold"> HEHEHEHEHE</h1>
            </div>

            <div className="text-primary flex min-h-screen justify-center items-center">
              <h1 className="text-6xl font-author font-semibold"> UAGH I love saying "your girlfriend" </h1>
            </div>

            <div className="text-primary flex min-h-screen justify-center items-center">
              <h1 className="text-6xl font-author font-semibold"> You're wondering why I did this  </h1>
            </div>

            <div className="text-primary flex min-h-screen justify-center items-center">
              <h1 className="text-6xl font-author font-semibold"> It's because I love youuuu </h1>
            </div>

            <div className="text-primary flex min-h-screen justify-center items-center">
              <h1 className="text-6xl font-author font-semibold"> and hate to see you sad... </h1>
            </div>

            <div className="text-primary flex min-h-screen justify-center items-center">
              <h1 className="text-6xl font-author font-semibold"> That's why I hope you enjoy this my love</h1>
            </div>

            <div className="text-primary flex min-h-screen gap-40 justify-center items-center">
              <button
                className="px-6 py-3 bg-secondary text-white text-3xl font-author rounded-base rounded hover:bg-accent"
                onClick={() => setIsHugging(true)}
              >
                Hug :)
              </button>

              <button
                className="px-6 py-3 bg-secondary text-white text-3xl font-author rounded-base rounded hover:bg-accent"
                onClick={() => setIsKissing(true)}
              >
                Kiss :)
              </button>

            </div>

            {/* kiss -photo of aadya enlargens, makes custom mp3 noise and it rains kiss emojis  */}
            {isKissing && (
              <div className="kiss-effect-container">
                <img src="/Aadya.JPG" alt="Aadya" className="aadya-photo" />
                <audio src="/Smooch.mp3" autoPlay onEnded={() => setIsKissing(false)} />
                <div className="emoji-rain">
                  {emojis.map(emoji => (
                    <span
                      key={emoji.id}
                      className="kiss-emoji"
                      style={{
                        fontSize: `${emoji.size}px`,
                        left: `${emoji.left}%`,
                        animationDuration: `${emoji.duration}s`,
                        animationDelay: `${Math.random() * 2}s` // Add random delay
                      }}
                    >
                      {emoji.emoji}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* hug - animated bear appears, walks to center, hugs, heart particles float up */}
            {isHugging && (
              <div className="hug-effect-container">
                {/* Bear animation and heart particles will go here */}
                <div className="bear-animation"></div>
                <div className="heart-particles">
                  {heartParticles.map(particle => (
                    <span
                      key={particle.id}
                      className="heart-particle" // Use a new class for individual particles
                      style={{
                        fontSize: `${particle.size}px`,
                        left: `${particle.left}%`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`
                      }}
                    >
                      🩷
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-primary flex min-h-screen justify-center items-center flex-col">
            <h1 className="text-4xl font-author font-semibold mb-4">Enter Password</h1>
            <div className="relative mb-4"> 
              <input
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => {
                  console.log('Input value:', e.target.value); 
                  setPassword(e.target.value);
                  console.log('Password state after update:', password); 
                }}
                className="px-4 py-2 border border-gray-300 focus:border-accent rounded text-black  pr-10"
              />
              <button
                type="button" 
                onClick={() => {
                  console.log('Toggling password visibility. Current state:', showPassword); 
                  togglePasswordVisibility();
                  console.log('Password visibility state after toggle:', !showPassword);
                }}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5"
              >
                {showPassword ? 'Hide' : 'Show'} 
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="px-3 py-1 bg-secondary text-white rounded hover:bg-accent"
            >
              Login
            </button>
          </div>
        )}
    </>
  );
}
export default App
