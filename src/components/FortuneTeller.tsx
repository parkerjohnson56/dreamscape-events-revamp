'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Eye, RefreshCw, Dice1, Dice2, Info, Target, Gift } from 'lucide-react';

const fortunes = [
  "🌟 The starter tier package is in your future!",
  "💎 The premium tier package is in your future.",
  "👑 The luxury tier package is in your future.",
  "🎉 I see a magnificent celebration in your future!",
  "✨ Good news will be received soon - your event awaits!",
  "🌙 The stars say you have a magical event in your future.",
  "🎊 A beautiful gathering is destined for you!",
  "💫 Your dream event is written in the stars!"
];

export default function FortuneTeller() {
  const [userGuess, setUserGuess] = useState<number | ''>('');
  const [fortuneNumber, setFortuneNumber] = useState<number | null>(null);
  const [fortuneMessage, setFortuneMessage] = useState<string>('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [gameStats, setGameStats] = useState({ wins: 0, attempts: 0 });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  const handleGuess = () => {
    if (userGuess === '') {
      setFortuneMessage("Please enter a number between 1 and 10.");
      return;
    }
    
    if (userGuess < 1 || userGuess > 10) {
      setFortuneMessage("❌ Invalid number! Please enter a number between 1 and 10.");
      setFortuneNumber(null);
      setIsRevealed(true);
      setGameStats(prev => ({ ...prev, attempts: prev.attempts + 1 }));
      return;
    }

    const randomNumber = generateRandomNumber();
    setFortuneNumber(randomNumber);
    setIsRevealed(true);
    setGameStats(prev => ({ ...prev, attempts: prev.attempts + 1 }));

    if (userGuess === randomNumber) {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortuneMessage(randomFortune);
      setGameStats(prev => ({ ...prev, wins: prev.wins + 1 }));
    } else {
      setFortuneMessage("🎲 The cosmic dice didn't align this time! The future remains cloudy...");
    }
  };

  const resetGame = () => {
    setUserGuess('');
    setFortuneNumber(null);
    setFortuneMessage('');
    setIsRevealed(false);
  };

  return (
    <section id="game" className="bg-dark-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <motion.h2
              className="font-italiana text-2xl sm:text-3xl text-center text-primary-500 mb-3 font-semibold flex items-center justify-center"
            >
              <Eye className="w-6 h-6 mr-2 text-primary-500" />
              Cosmic Fortune Teller
            </motion.h2>
            <p className="text-base text-white max-w-2xl mx-auto leading-relaxed">
              Test your cosmic alignment with our mystical number-guessing game!
            </p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-100 to-sage-100 rounded-xl p-4 mb-6 border border-primary-200"
          >
            <div className="flex items-start space-x-4">
              <Info className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-dark-700 mb-1 text-sm">Game Disclaimer</h3>
                <p className="text-dark-600 text-xs leading-relaxed">
                  <strong>A mini game was required for this project!</strong> This is a "Snake Eyes" style guessing game. 
                  Choose a number between 1-10 and try to match the cosmic dice roll. If your numbers align, 
                  you'll receive a fortune! If not, the cosmic forces remain mysterious. 
                  It's all about chance and cosmic alignment! ✨
                </p>
              </div>
            </div>
          </motion.div>

          {/* Game Section */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Game Rules */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 h-full">
                <h3 className="font-italiana text-lg text-dark-700 mb-3 font-semibold flex items-center">
                  <Target className="w-4 h-4 mr-2 text-primary-500" />
                  How to Play
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-600 text-xs font-bold">1</span>
                    </div>
                    <p className="text-dark-600 text-sm">Choose a number between 1-10</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-600 text-xs font-bold">2</span>
                    </div>
                    <p className="text-dark-600 text-sm">The cosmic dice will roll</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-600 text-xs font-bold">3</span>
                    </div>
                    <p className="text-dark-600 text-sm">Match the numbers = Get a fortune!</p>
                  </div>
                </div>

                {/* Game Stats */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-dark-700 mb-2 text-sm">Your Cosmic Journey</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{gameStats.wins}</div>
                      <div className="text-xs text-dark-500">Fortunes Won</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-dark-600">{gameStats.attempts}</div>
                      <div className="text-xs text-dark-500">Total Attempts</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Game Interface */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 h-full">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Dice1 className="w-8 h-8 text-primary-500" />
                    <span className="text-lg font-bold text-dark-600">VS</span>
                    <Dice2 className="w-8 h-8 text-amber-500" />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-base font-medium text-dark-700">
                      Choose Your Lucky Number
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={userGuess}
                      onChange={(e) => setUserGuess(parseInt(e.target.value) || '')}
                      className="w-20 mx-auto px-4 py-2 text-center text-lg font-bold border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="?"
                    />
                  </div>

                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleGuess}
                      disabled={userGuess === ''}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-sm"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Roll the Cosmic Dice
                    </button>
                    
                    {isRevealed && (
                      <button
                        onClick={resetGame}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center text-sm"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Play Again
                      </button>
                    )}
                  </div>

                  {/* Results */}
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-center items-center space-x-6">
                        <div className="text-center">
                          <div className="text-base font-bold text-dark-600 mb-1">Your Number</div>
                          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-2xl font-bold text-primary-600">{userGuess}</span>
                          </div>
                        </div>
                        {fortuneNumber && (
                          <div className="text-center">
                            <div className="text-base font-bold text-dark-600 mb-1">Cosmic Roll</div>
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                              <span className="text-2xl font-bold text-amber-600">{fortuneNumber}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className={`p-4 rounded-xl border-2 ${
                        userGuess < 1 || userGuess > 10
                          ? 'bg-gradient-to-r from-red-50 to-orange-50 border-red-300'
                          : userGuess === fortuneNumber 
                            ? 'bg-gradient-to-r from-primary-50 to-sage-50 border-primary-200' 
                            : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'
                      }`}>
                        <div className="flex items-center justify-center mb-2">
                          <Gift className={`w-4 h-4 mr-2 ${
                            userGuess < 1 || userGuess > 10 
                              ? 'text-red-600' 
                              : userGuess === fortuneNumber ? 'text-primary-600' : 'text-red-500'
                          }`} />
                          <span className={`font-bold text-base ${
                            userGuess < 1 || userGuess > 10
                              ? 'text-red-800'
                              : userGuess === fortuneNumber ? 'text-primary-700' : 'text-red-700'
                          }`}>
                            {userGuess < 1 || userGuess > 10 
                              ? 'INVALID NUMBER!' 
                              : userGuess === fortuneNumber ? 'COSMIC ALIGNMENT!' : 'Cosmic Mismatch'}
                          </span>
                        </div>
                        <p className={`font-italiana text-base text-center font-bold ${
                          userGuess < 1 || userGuess > 10
                            ? 'text-red-800'
                            : userGuess === fortuneNumber ? 'text-primary-700' : 'text-red-700'
                        }`}>
                          {fortuneMessage}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
