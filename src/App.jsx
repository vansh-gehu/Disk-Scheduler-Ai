// import React, { useState, useEffect } from 'react';
// import { Play, Lightbulb, ArrowRight, Clock, Search, Scan, RefreshCw, Eye, Zap, BarChart3, PieChart, Activity } from 'lucide-react';
// import { BarChart, Bar, PieChart as RPieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const App = () => {
//   const [page, setPage] = useState('home');
//   const [currentBg, setCurrentBg] = useState(0);
//   const [showFact, setShowFact] = useState(false);
//   const [currentFact, setCurrentFact] = useState(0);
//   const [showGame, setShowGame] = useState(false);
//   const [gameScore, setGameScore] = useState(0);
//   const [gameLevel, setGameLevel] = useState(1);
//   const [gameQuestion, setGameQuestion] = useState(null);
//   const [gameAnswered, setGameAnswered] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showHint, setShowHint] = useState(false);
//   const [lives, setLives] = useState(3);
//   const [processes, setProcesses] = useState([
//     { id: 1, track: 82 },
//     { id: 2, track: 170 },
//     { id: 3, track: 43 },
//     { id: 4, track: 140 },
//     { id: 5, track: 24 }
//   ]);
//   const [algorithm, setAlgorithm] = useState('FCFS');
//   const [headPosition, setHeadPosition] = useState(50);
//   const [diskSize, setDiskSize] = useState(199);
//   const [results, setResults] = useState(null);
//   const [showComparison, setShowComparison] = useState(false);
//   const [animatingHead, setAnimatingHead] = useState(false);
//   const [currentHeadPos, setCurrentHeadPos] = useState(50);
//   const [animationSpeed, setAnimationSpeed] = useState(1);
//   const [savedConfigs, setSavedConfigs] = useState([]);

//   const backgrounds = [
//     'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
//     'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1920&q=80',
//     'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
//     'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80',
//     'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80'
//   ];

//   const facts = [
//     "FCFS is the simplest disk scheduling algorithm but can cause the 'convoy effect'",
//     "SSTF minimizes seek time but may cause starvation of requests far from the head",
//     "SCAN algorithm is also known as the 'elevator algorithm'",
//     "C-SCAN provides more uniform wait time than SCAN",
//     "LOOK and C-LOOK are more efficient versions of SCAN and C-LOOK",
//     "The average seek time is a crucial metric in disk scheduling performance",
//     "Modern SSDs don't use these algorithms as they have no mechanical seek time",
//     "Disk scheduling can improve overall system throughput by up to 50%",
//     "The SCAN algorithm was invented to mimic elevator movement patterns",
//     "SSTF can lead to the 'starvation problem' for far-away requests"
//   ];

//   const quizQuestions = [
//     {
//       question: "Which algorithm is also known as the 'elevator algorithm'?",
//       options: ["FCFS", "SSTF", "SCAN", "C-LOOK"],
//       correct: 2,
//       explanation: "SCAN moves back and forth like an elevator, servicing requests along the way.",
//       difficulty: "easy"
//     },
//     {
//       question: "Which algorithm can cause starvation of distant requests?",
//       options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
//       correct: 1,
//       explanation: "SSTF always picks the nearest request, potentially ignoring far requests indefinitely.",
//       difficulty: "medium"
//     },
//     {
//       question: "What does FCFS stand for?",
//       options: ["Fast Come Fast Serve", "First-Come, First-Served", "First Choice First Select", "File Control File System"],
//       correct: 1,
//       explanation: "FCFS processes requests in the order they arrive.",
//       difficulty: "easy"
//     },
//     {
//       question: "Which provides more uniform wait times?",
//       options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
//       correct: 3,
//       explanation: "C-SCAN provides more uniform wait times by moving in only one direction.",
//       difficulty: "medium"
//     },
//     {
//       question: "What is the main goal of disk scheduling?",
//       options: ["Increase storage", "Minimize seek time", "Delete files faster", "Compress data"],
//       correct: 1,
//       explanation: "Disk scheduling aims to minimize seek time - the time for the disk head to reach the desired track.",
//       difficulty: "easy"
//     },
//     {
//       question: "Which algorithm is best for preventing starvation?",
//       options: ["SSTF", "FCFS", "LOOK", "C-LOOK"],
//       correct: 1,
//       explanation: "FCFS guarantees no starvation as it processes requests in arrival order.",
//       difficulty: "medium"
//     },
//     {
//       question: "What's the difference between SCAN and LOOK?",
//       options: ["No difference", "LOOK only goes to the last request", "SCAN is faster", "LOOK uses more memory"],
//       correct: 1,
//       explanation: "LOOK only travels to the last request in each direction, avoiding unnecessary movement.",
//       difficulty: "hard"
//     },
//     {
//       question: "In C-SCAN, what does the 'C' stand for?",
//       options: ["Computer", "Circular", "Continuous", "Constant"],
//       correct: 1,
//       explanation: "C-SCAN stands for Circular SCAN, moving in one direction then jumping back.",
//       difficulty: "easy"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg((prev) => (prev + 1) % backgrounds.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToAlgorithms = () => {
//     document.getElementById('algorithms')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const startGame = () => {
//     const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
//     setGameQuestion(randomQuestion);
//     setShowGame(true);
//     setGameAnswered(false);
//     setSelectedAnswer(null);
//     setShowHint(false);
//   };

//   const handleGameAnswer = (selectedIndex) => {
//     if (gameAnswered) return;
    
//     setSelectedAnswer(selectedIndex);
//     setGameAnswered(true);
    
//     if (selectedIndex === gameQuestion.correct) {
//       const points = gameQuestion.difficulty === 'easy' ? 10 : gameQuestion.difficulty === 'medium' ? 15 : 20;
//       setGameScore(gameScore + points);
//       setGameLevel(gameLevel + 1);
//       setTimeout(() => {
//         startGame();
//       }, 2000);
//     } else {
//       setLives(lives - 1);
//       if (lives - 1 <= 0) {
//         setTimeout(() => {
//           setShowGame(false);
//           setGameScore(0);
//           setGameLevel(1);
//           setLives(3);
//           setGameAnswered(false);
//           setSelectedAnswer(null);
//           setShowHint(false);
//         }, 2500);
//       } else {
//         setTimeout(() => {
//           startGame();
//         }, 2500);
//       }
//     }
//   };

//   const saveConfiguration = () => {
//     const config = {
//       id: Date.now(),
//       name: `Config ${savedConfigs.length + 1}`,
//       processes: [...processes],
//       algorithm,
//       headPosition,
//       timestamp: new Date().toLocaleString()
//     };
//     setSavedConfigs([...savedConfigs, config]);
//     alert('Configuration saved successfully!');
//   };

//   const loadConfiguration = (config) => {
//     setProcesses(config.processes);
//     setAlgorithm(config.algorithm);
//     setHeadPosition(config.headPosition);
//     alert('Configuration loaded!');
//   };

//   const deleteConfiguration = (id) => {
//     setSavedConfigs(savedConfigs.filter(c => c.id !== id));
//   };

//   const animateDiskHead = async () => {
//     if (!results) return;
    
//     setAnimatingHead(true);
//     setCurrentHeadPos(headPosition);
    
//     for (let i = 0; i < results.sequence.length; i++) {
//       const target = results.sequence[i].track;
//       const start = i === 0 ? headPosition : results.sequence[i - 1].track;
//       const distance = Math.abs(target - start);
//       const steps = Math.max(20, distance);
//       const stepSize = (target - start) / steps;
      
//       for (let step = 0; step <= steps; step++) {
//         await new Promise(resolve => setTimeout(resolve, 50 / animationSpeed));
//         setCurrentHeadPos(Math.round(start + stepSize * step));
//       }
      
//       await new Promise(resolve => setTimeout(resolve, 300 / animationSpeed));
//     }
    
//     setAnimatingHead(false);
//   };

//   const compareAllAlgorithms = () => {
//     const algorithms = ['FCFS', 'SSTF', 'SCAN', 'C-SCAN', 'LOOK', 'C-LOOK'];
//     const comparisonResults = algorithms.map(algo => {
//       let sequence = [];
//       let totalSeekTime = 0;
//       let currentPos = headPosition;

//       switch(algo) {
//         case 'FCFS':
//           sequence = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//         case 'SSTF':
//           let remaining = [...processes];
//           while (remaining.length > 0) {
//             let nearest = remaining.reduce((prev, curr) => 
//               Math.abs(curr.track - currentPos) < Math.abs(prev.track - currentPos) ? curr : prev
//             );
//             sequence.push(nearest);
//             totalSeekTime += Math.abs(currentPos - nearest.track);
//             currentPos = nearest.track;
//             remaining = remaining.filter(p => p.id !== nearest.id);
//           }
//           break;
//         case 'SCAN':
//           let left = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
//           let right = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//           sequence = [...right, ...left];
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//         case 'C-SCAN':
//           let rightCS = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//           let leftCS = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
//           sequence = [...rightCS, ...leftCS];
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//         case 'LOOK':
//           let leftL = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
//           let rightL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//           sequence = [...rightL, ...leftL];
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//         case 'C-LOOK':
//           let rightCL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//           let leftCL = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
//           sequence = [...rightCL, ...leftCL];
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//       }

//       return {
//         algorithm: algo,
//         totalSeekTime,
//         avgSeekTime: (totalSeekTime / sequence.length).toFixed(2)
//       };
//     });

//     return comparisonResults;
//   };

//   const addProcess = () => {
//     setProcesses([...processes, {
//       id: processes.length + 1,
//       track: Math.floor(Math.random() * (diskSize + 1))
//     }]);
//   };

//   const updateProcess = (id, field, value) => {
//     setProcesses(processes.map(p => 
//       p.id === id ? { ...p, [field]: parseInt(value) || 0 } : p
//     ));
//   };

//   const removeProcess = (id) => {
//     if (processes.length > 1) {
//       setProcesses(processes.filter(p => p.id !== id));
//     }
//   };

//   const calculateScheduling = () => {
//     let sequence = [];
//     let totalSeekTime = 0;
//     let currentPos = headPosition;
//     let headMovements = [headPosition];

//     switch(algorithm) {
//       case 'FCFS':
//         sequence = [...processes];
//         sequence.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;

//       case 'SSTF':
//         let remaining = [...processes];
//         while (remaining.length > 0) {
//           let nearest = remaining.reduce((prev, curr) => 
//             Math.abs(curr.track - currentPos) < Math.abs(prev.track - currentPos) ? curr : prev
//           );
//           sequence.push(nearest);
//           totalSeekTime += Math.abs(currentPos - nearest.track);
//           currentPos = nearest.track;
//           headMovements.push(currentPos);
//           remaining = remaining.filter(p => p.id !== nearest.id);
//         }
//         break;

//       case 'SCAN':
//         let left = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
//         let right = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//         sequence = [...right, ...left];
        
//         // Move right first
//         right.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         // Go to end if there are left requests
//         if (left.length > 0 && right.length > 0) {
//           totalSeekTime += Math.abs(currentPos - diskSize);
//           currentPos = diskSize;
//           headMovements.push(currentPos);
//         }
//         // Move left
//         left.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;

//       case 'C-SCAN':
//         let rightCS = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//         let leftCS = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
//         sequence = [...rightCS, ...leftCS];
        
//         // Move right
//         rightCS.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         // Jump to beginning if there are left requests
//         if (leftCS.length > 0) {
//           totalSeekTime += Math.abs(currentPos - diskSize);
//           currentPos = diskSize;
//           headMovements.push(currentPos);
//           totalSeekTime += diskSize;
//           currentPos = 0;
//           headMovements.push(currentPos);
//         }
//         // Process left requests
//         leftCS.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;

//       case 'LOOK':
//         let leftL = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
//         let rightL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//         sequence = [...rightL, ...leftL];
        
//         rightL.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         leftL.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;

//       case 'C-LOOK':
//         let rightCL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//         let leftCL = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
//         sequence = [...rightCL, ...leftCL];
        
//         rightCL.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         // Jump to first left request
//         if (leftCL.length > 0 && rightCL.length > 0) {
//           totalSeekTime += Math.abs(currentPos - leftCL[0].track);
//           currentPos = leftCL[0].track;
//           headMovements.push(currentPos);
//         }
//         leftCL.slice(rightCL.length > 0 ? 1 : 0).forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;
//     }

//     const avgSeekTime = totalSeekTime / sequence.length;

//     setResults({
//       sequence,
//       totalSeekTime,
//       avgSeekTime: avgSeekTime.toFixed(2),
//       headMovements
//     });
//   };

//   const AlgorithmCard = ({ icon: Icon, title, description, delay }) => (
//     <div 
//       className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
//       style={{ animationDelay: delay }}>
//       <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
//         <Icon className="w-7 h-7 text-gray-700" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
//       <p className="text-gray-600 leading-relaxed">{description}</p>
//     </div>
//   );

//   const FactButton = () => (
//     <div className="fixed bottom-8 right-8 z-50">
//       <button
//         onMouseEnter={() => {
//           setShowFact(true);
//           setCurrentFact(Math.floor(Math.random() * facts.length));
//         }}
//         onMouseLeave={() => setShowFact(false)}
//         className="relative group">
//         <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse">
//           <Lightbulb className="w-8 h-8 text-white" />
//         </div>
//         {showFact && (
//           <div className="absolute bottom-20 right-0 w-72 bg-gray-800 text-white p-4 rounded-lg shadow-2xl transition-all duration-300 transform">
//             <div className="text-xs font-semibold text-yellow-400 mb-1">💡 DID YOU KNOW?</div>
//             <p className="text-sm leading-relaxed">{facts[currentFact]}</p>
//             <div className="absolute -bottom-2 right-6 w-4 h-4 bg-gray-800 transform rotate-45"></div>
//           </div>
//         )}
//       </button>
//     </div>
//   );

//   const QuizGame = () => {
//     if (!showGame || !gameQuestion) return null;

//     const getDifficultyColor = (difficulty) => {
//       switch(difficulty) {
//         case 'easy': return 'text-green-600';
//         case 'medium': return 'text-yellow-600';
//         case 'hard': return 'text-red-600';
//         default: return 'text-gray-600';
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">Quiz Challenge! 🎮</h3>
//               <p className="text-sm text-gray-600">
//                 Level {gameLevel} • Score: {gameScore} • Lives: {'❤️'.repeat(lives)}
//                 <span className={`ml-2 font-semibold ${getDifficultyColor(gameQuestion.difficulty)}`}>
//                   {gameQuestion.difficulty.toUpperCase()}
//                 </span>
//               </p>
//             </div>
//             <button
//               onClick={() => {
//                 setShowGame(false);
//                 setGameScore(0);
//                 setGameLevel(1);
//                 setLives(3);
//                 setGameAnswered(false);
//                 setSelectedAnswer(null);
//                 setShowHint(false);
//               }}
//               className="text-gray-400 hover:text-gray-600 text-2xl">
//               ×
//             </button>
//           </div>

//           <div className="mb-6">
//             <p className="text-lg font-semibold text-gray-800 mb-4">{gameQuestion.question}</p>
//             <div className="space-y-3">
//               {gameQuestion.options.map((option, index) => {
//                 const isSelected = selectedAnswer === index;
//                 const isCorrect = index === gameQuestion.correct;
//                 const showResult = gameAnswered;
                
//                 let buttonClass = "w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ";
                
//                 if (!showResult) {
//                   buttonClass += "bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-transparent hover:border-purple-400 hover:scale-105 transform cursor-pointer";
//                 } else if (isSelected && isCorrect) {
//                   buttonClass += "bg-green-100 border-green-500 scale-105";
//                 } else if (isSelected && !isCorrect) {
//                   buttonClass += "bg-red-100 border-red-500";
//                 } else if (isCorrect) {
//                   buttonClass += "bg-green-100 border-green-500";
//                 } else {
//                   buttonClass += "bg-gray-50 border-gray-200";
//                 }

//                 return (
//                   <button
//                     key={index}
//                     onClick={() => handleGameAnswer(index)}
//                     disabled={gameAnswered}
//                     className={buttonClass}>
//                     <span className="font-medium text-gray-800 flex items-center justify-between">
//                       {option}
//                       {showResult && isCorrect && <span className="text-green-600 text-xl">✓</span>}
//                       {showResult && isSelected && !isCorrect && <span className="text-red-600 text-xl">✗</span>}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Hint Button */}
//           <div className="mb-4">
//             {!showHint ? (
//               <button
//                 onClick={() => setShowHint(true)}
//                 className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 💡 Show Hint
//               </button>
//             ) : (
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 animate-in fade-in slide-in-from-top duration-300">
//                 <p className="text-sm text-gray-700">
//                   <span className="font-semibold text-yellow-600">💡 Hint:</span> {gameQuestion.explanation}
//                 </p>
//               </div>
//             )}
//           </div>

//           {gameAnswered && (
//             <div className={`rounded-lg p-4 animate-in fade-in slide-in-from-bottom duration-300 ${
//               selectedAnswer === gameQuestion.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
//             }`}>
//               <p className="text-sm font-semibold mb-1">
//                 {selectedAnswer === gameQuestion.correct ? '🎉 Correct! +' + (gameQuestion.difficulty === 'easy' ? '10' : gameQuestion.difficulty === 'medium' ? '15' : '20') + ' points!' : '❌ Incorrect! ' + (lives - 1 > 0 ? 'Try again!' : 'Game Over!')}
//               </p>
//               <p className="text-sm text-gray-700">{gameQuestion.explanation}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   if (page === 'home') {
//     return (
//       <div className="min-h-screen bg-white relative overflow-hidden">
//         {/* Background Image Carousel */}
//         <div className="absolute inset-0">
//           {backgrounds.map((bg, idx) => (
//             <div
//               key={idx}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 idx === currentBg ? 'opacity-100' : 'opacity-0'
//               }`}
//               style={{
//                 backgroundImage: `url(${bg})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//               }}>
//               <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
//             </div>
//           ))}
//         </div>

//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
//           <div className="max-w-5xl mx-auto text-center">
//             <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
//               <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-2xl">
//                 Disk Scheduling
//               </h1>
//               <div className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
//                 Algorithms
//               </div>
//             </div>

//             <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-lg">
//               Visualize and Compare Disk Scheduling Algorithms
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
//               <button
//                 onClick={scrollToAlgorithms}
//                 className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//                 Learn More
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setPage('simulator')}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//                 Try Simulator
//                 <Zap className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Carousel Indicators */}
//             <div className="flex justify-center gap-2 animate-in fade-in duration-1000 delay-500">
//               {backgrounds.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentBg(idx)}
//                   className={`transition-all duration-300 rounded-full ${
//                     idx === currentBg 
//                       ? 'w-8 h-3 bg-white' 
//                       : 'w-3 h-3 bg-white/50 hover:bg-white/75'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* What is Disk Scheduling */}
//         <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative z-10">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-col lg:flex-row gap-12 items-center">
//               <div className="flex-1">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight">
//                   What is Disk Scheduling?
//                 </h2>
//                 <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
//                   <p className="border-l-4 border-purple-500 pl-6">
//                     Disk scheduling is a <span className="font-semibold text-purple-600">critical operating system mechanism</span> that orchestrates the order of disk I/O request processing. When multiple processes compete for disk access, intelligent scheduling algorithms determine the optimal service sequence.
//                   </p>
//                   <p className="border-l-4 border-blue-500 pl-6">
//                     The primary objective is to <span className="font-semibold text-blue-600">minimize seek time</span> — the duration required for the disk head to traverse to the target track — while ensuring equitable access across all processes.
//                   </p>
//                   <p className="border-l-4 border-indigo-500 pl-6">
//                     Different algorithms employ unique strategies, balancing between <span className="font-semibold text-indigo-600">fairness</span> and <span className="font-semibold text-indigo-600">efficiency</span> to maximize throughput and system responsiveness.
//                   </p>
//                 </div>
//               </div>

//               {/* Challenge Card */}
//               <div className="lg:w-80">
//                 <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
//                   <div className="text-5xl mb-4 animate-bounce">🎯</div>
//                   <h3 className="text-2xl font-bold mb-3">Test Your Knowledge!</h3>
//                   <p className="text-purple-100 mb-6 leading-relaxed">
//                     Think you understand disk scheduling? Challenge yourself with our interactive quiz and prove your expertise!
//                   </p>
//                   <button
//                     onClick={startGame}
//                     className="w-full px-6 py-3 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                     Take the Quiz 🚀
//                   </button>
//                   <p className="text-xs text-purple-200 mt-3 text-center">
//                     3 Lives • Multiple Levels • Instant Feedback
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Algorithms Section */}
//         <section id="algorithms" className="py-20 px-4 bg-white relative z-10">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
//               Scheduling Algorithms
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//               <AlgorithmCard
//                 icon={Clock}
//                 title="FCFS"
//                 description="First-Come, First-Served processes requests in the order they arrive. Simple but can lead to high seek times with random access patterns."
//                 delay="0.1s"
//               />
//               <AlgorithmCard
//                 icon={Search}
//                 title="SSTF"
//                 description="Shortest Seek Time First selects the request closest to the current head position. Reduces seek time but may cause starvation."
//                 delay="0.2s"
//               />
//               <AlgorithmCard
//                 icon={Scan}
//                 title="SCAN"
//                 description="The elevator algorithm moves the head from one end to another, servicing requests along the way. Prevents starvation with uniform access."
//                 delay="0.3s"
//               />
//               <AlgorithmCard
//                 icon={RefreshCw}
//                 title="C-SCAN"
//                 description="Circular SCAN moves in one direction only, jumping back to start after reaching the end. Provides more uniform wait times."
//                 delay="0.4s"
//               />
//               <AlgorithmCard
//                 icon={Eye}
//                 title="LOOK"
//                 description="Similar to SCAN but only goes as far as the last request in each direction, avoiding unnecessary head movement."
//                 delay="0.5s"
//               />
//               <AlgorithmCard
//                 icon={RefreshCw}
//                 title="C-LOOK"
//                 description="Circular LOOK combines C-SCAN's circular motion with LOOK's smart boundary detection for optimal performance."
//                 delay="0.6s"
//               />
//             </div>

//             {/* CTA Section */}
//             <div className="text-center py-16">
//               <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-xl border border-gray-200">
//                 <h3 className="text-3xl font-bold mb-4 text-gray-800">
//                   Ready to See Them in Action?
//                 </h3>
//                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                   Use our interactive simulator to visualize how each algorithm processes
//                   disk requests and compare their performance.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <button
//                     onClick={() => setPage('simulator')}
//                     className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
//                     Launch Simulator
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={startGame}
//                     className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
//                     🎮 Play Quiz Game
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <FactButton />
//         <QuizGame />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 shadow-xl sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <h1 className="text-2xl md:text-3xl font-bold">Disk Scheduling Simulator</h1>
//           <button 
//             onClick={() => setPage('home')}
//             className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium">
//             ← Back to Home
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Configuration Section */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in slide-in-from-top duration-500">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Configure Processes</h2>
          
//           <div className="grid md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Algorithm</label>
//               <select 
//                 value={algorithm}
//                 onChange={(e) => setAlgorithm(e.target.value)}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white">
//                 <option>FCFS</option>
//                 <option>SSTF</option>
//                 <option>SCAN</option>
//                 <option>C-SCAN</option>
//                 <option>LOOK</option>
//                 <option>C-LOOK</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Initial Head Position</label>
//               <input 
//                 type="number"
//                 value={headPosition}
//                 onChange={(e) => setHeadPosition(parseInt(e.target.value) || 0)}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300"
//                 placeholder="50" />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Disk Size (Max Track)</label>
//               <input 
//                 type="number"
//                 value={diskSize}
//                 onChange={(e) => setDiskSize(parseInt(e.target.value) || 199)}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300"
//                 placeholder="199" />
//             </div>
//             <div className="flex items-end">
//               <div className="text-sm text-gray-600">
//                 <p className="font-semibold mb-1">Request Queue Size: {processes.length}</p>
//                 <p>Total Tracks: 0 - {diskSize}</p>
//               </div>
//             </div>
//           </div>

//           {/* Save/Load Controls */}
//           <div className="flex flex-wrap gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
//             <button 
//               onClick={saveConfiguration}
//               className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold">
//               💾 Save Config
//             </button>
//             {savedConfigs.length > 0 && (
//               <div className="flex-1 min-w-[200px]">
//                 <select 
//                   onChange={(e) => {
//                     const config = savedConfigs.find(c => c.id === parseInt(e.target.value));
//                     if (config) loadConfiguration(config);
//                   }}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
//                   <option value="">Load Saved Config...</option>
//                   {savedConfigs.map(config => (
//                     <option key={config.id} value={config.id}>
//                       {config.name} - {config.timestamp}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}
//             {savedConfigs.length > 0 && (
//               <button 
//                 onClick={() => {
//                   if (confirm('Delete all saved configurations?')) {
//                     setSavedConfigs([]);
//                   }
//                 }}
//                 className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold">
//                 🗑️ Clear All
//               </button>
//             )}
//           </div>

//           <div className="space-y-4 mb-6">
//             <div className="hidden md:grid md:grid-cols-2 gap-4 px-4 text-xs font-semibold text-gray-600">
//               <div>REQUEST ID</div>
//               <div>TRACK NUMBER</div>
//             </div>
//             {processes.map((p) => (
//               <div key={p.id} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-sm">
//                 <div>
//                   <label className="block md:hidden text-xs font-semibold text-gray-600 mb-1">Request ID</label>
//                   <input type="text" value={`R${p.id}`} disabled className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium" />
//                 </div>
//                 <div>
//                   <label className="block md:hidden text-xs font-semibold text-gray-600 mb-1">Track Number</label>
//                   <div className="flex gap-2">
//                     <input 
//                       type="number"
//                       value={p.track}
//                       onChange={(e) => updateProcess(p.id, 'track', e.target.value)}
//                       min="0"
//                       max={diskSize}
//                       className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
//                     <button 
//                       onClick={() => removeProcess(p.id)}
//                       className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 font-bold text-lg">
//                       ×
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button 
//               onClick={addProcess}
//               className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 font-semibold">
//               + Add Request
//             </button>
//             <button 
//               onClick={calculateScheduling}
//               className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg">
//               <Play className="w-5 h-5" />
//               Run Visualization
//             </button>
//             <button 
//               onClick={() => setShowComparison(!showComparison)}
//               className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg transition-all duration-300 font-semibold">
//               📊 Compare All
//             </button>
//           </div>

//           {/* Animation Speed Control */}
//           {results && (
//             <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
//               <div className="flex items-center justify-between mb-2">
//                 <label className="text-sm font-semibold text-gray-700">Animation Speed: {animationSpeed}x</label>
//                 <button
//                   onClick={animateDiskHead}
//                   disabled={animatingHead}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
//                     animatingHead 
//                       ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//                       : 'bg-purple-600 hover:bg-purple-700 text-white'
//                   }`}>
//                   {animatingHead ? '⏸️ Animating...' : '▶️ Animate Disk Head'}
//                 </button>
//               </div>
//               <input 
//                 type="range"
//                 min="0.5"
//                 max="3"
//                 step="0.5"
//                 value={animationSpeed}
//                 onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
//                 className="w-full"
//               />
//             </div>
//           )}
//         </div>

//         {/* Disk Head Animation Visualization */}
//         {results && animatingHead && (
//           <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in duration-500">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">🔄 Real-Time Disk Head Movement</h2>
//             <div className="relative h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden">
//               {/* Track markers */}
//               {[0, 50, 100, 150, 199].map(pos => (
//                 <div 
//                   key={pos}
//                   className="absolute top-0 bottom-0 border-l border-gray-400"
//                   style={{ left: `${(pos / 199) * 100}%` }}>
//                   <span className="absolute -bottom-6 -ml-2 text-xs text-gray-600">{pos}</span>
//                 </div>
//               ))}
              
//               {/* Process positions */}
//               {processes.map(p => (
//                 <div
//                   key={p.id}
//                   className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"
//                   style={{ left: `${(p.track / 199) * 100}%` }}
//                   title={`P${p.id}: ${p.track}`}
//                 />
//               ))}
              
//               {/* Animated disk head */}
//               <div
//                 className="absolute top-0 bottom-0 w-1 bg-red-500 transition-all duration-100"
//                 style={{ left: `${(currentHeadPos / 199) * 100}%` }}>
//                 <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                 </div>
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
//                   {currentHeadPos}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Algorithm Comparison */}
//         {showComparison && (
//           <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in slide-in-from-top duration-500">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Algorithm Comparison</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b-2 border-gray-200">
//                     <th className="text-left py-3 px-4 font-semibold text-gray-700">Algorithm</th>
//                     <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Seek Time</th>
//                     <th className="text-left py-3 px-4 font-semibold text-gray-700">Average Seek Time</th>
//                     <th className="text-left py-3 px-4 font-semibold text-gray-700">Performance</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {compareAllAlgorithms().map((result, idx) => {
//                     const allResults = compareAllAlgorithms();
//                     const minSeek = Math.min(...allResults.map(r => r.totalSeekTime));
//                     const isBest = result.totalSeekTime === minSeek;
//                     return (
//                       <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 ${isBest ? 'bg-green-50' : ''}`}>
//                         <td className="py-3 px-4 font-medium text-gray-800">{result.algorithm}</td>
//                         <td className="py-3 px-4 text-gray-700">{result.totalSeekTime}</td>
//                         <td className="py-3 px-4 text-gray-700">{result.avgSeekTime}</td>
//                         <td className="py-3 px-4">
//                           {isBest && <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">🏆 Best</span>}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//             <ResponsiveContainer width="100%" height={300} className="mt-8">
//               <BarChart data={compareAllAlgorithms()}>
//                 <XAxis dataKey="algorithm" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="totalSeekTime" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         )}

//         {/* Results Section */}
//         {results && (
//           <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
//             {/* Metrics */}
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-purple-500">
//                 <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Total Seek Time</h3>
//                 <p className="text-4xl font-bold text-purple-600">{results.totalSeekTime}</p>
//                 <p className="text-xs text-gray-500 mt-1">total head movement</p>
//               </div>
//               <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-500">
//                 <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Average Seek Time</h3>
//                 <p className="text-4xl font-bold text-pink-600">{results.avgSeekTime}</p>
//                 <p className="text-xs text-gray-500 mt-1">tracks per request</p>
//               </div>
//             </div>

//             {/* Visualizations */}
//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* Head Movement Graph */}
//               <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
//                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
//                   <Activity className="w-6 h-6 text-indigo-600" />
//                   <h3 className="text-xl font-bold text-gray-800">Disk Head Movement Graph</h3>
//                 </div>
//                 <ResponsiveContainer width="100%" height={350}>
//                   <BarChart data={results.headMovements.map((pos, i) => ({ 
//                     step: i === 0 ? 'Start' : `R${results.sequence[i-1]?.id || ''}`, 
//                     position: pos 
//                   }))}>
//                     <XAxis dataKey="step" />
//                     <YAxis label={{ value: 'Track Position', angle: -90, position: 'insideLeft' }} />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="position" fill="#6366f1" radius={[8, 8, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Track Positions Bar Chart */}
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
//                   <BarChart3 className="w-6 h-6 text-purple-600" />
//                   <h3 className="text-xl font-bold text-gray-800">Request Track Positions</h3>
//                 </div>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={results.sequence.map((p, i) => ({ name: `R${p.id}`, track: p.track, order: i + 1 }))}>
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="track" fill="#9333ea" radius={[8, 8, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Seek Distance Chart */}
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
//                   <PieChart className="w-6 h-6 text-pink-600" />
//                   <h3 className="text-xl font-bold text-gray-800">Seek Distance Distribution</h3>
//                 </div>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <RPieChart>
//                     <Pie
//                       data={results.sequence.map((p, i) => ({ 
//                         name: `R${p.id}`, 
//                         value: Math.abs(p.track - (i === 0 ? headPosition : results.sequence[i-1].track))
//                       }))}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       label={(entry) => `${entry.name}: ${entry.value}`}
//                       outerRadius={100}
//                       fill="#8884d8"
//                       dataKey="value">
//                       {results.sequence.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={['#9333ea', '#ec4899', '#6366f1', '#8b5cf6', '#d946ef', '#f97316'][index % 6]} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                   </RPieChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Sequence Timeline */}
//               <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
//                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
//                   <Activity className="w-6 h-6 text-indigo-600" />
//                   <h3 className="text-xl font-bold text-gray-800">Service Sequence</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-3 justify-center items-center py-4">
//                   <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold shadow-md">
//                     Start: {headPosition}
//                   </div>
//                   {results.sequence.map((p, i) => (
//                     <React.Fragment key={i}>
//                       <div className="text-gray-400 text-2xl font-bold">→</div>
//                       <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold transform hover:scale-110 transition-all duration-300 shadow-md">
//                         R{p.id} ({p.track})
//                       </div>
//                     </React.Fragment>
//                   ))}
//                 </div>
//                 <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//                   <h4 className="font-semibold text-gray-800 mb-2">Step-by-Step Head Movements:</h4>
//                   <div className="text-sm text-gray-700 space-y-1">
//                     {results.headMovements.map((pos, i) => (
//                       <div key={i} className="flex justify-between">
//                         <span>{i === 0 ? 'Initial Position' : `After serving R${results.sequence[i-1].id}`}:</span>
//                         <span className="font-semibold">Track {pos}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <FactButton />
//       <QuizGame />
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import { Play, Lightbulb, ArrowRight, Clock, Search, Scan, RefreshCw, Eye, Zap, BarChart3, PieChart, Activity } from 'lucide-react';
// import { BarChart, Bar, PieChart as RPieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const App = () => {
//   const [page, setPage] = useState('home');
//   const [currentBg, setCurrentBg] = useState(0);
//   const [showFact, setShowFact] = useState(false);
//   const [currentFact, setCurrentFact] = useState(0);
//   const [showGame, setShowGame] = useState(false);
//   const [gameScore, setGameScore] = useState(0);
//   const [gameLevel, setGameLevel] = useState(1);
//   const [gameQuestion, setGameQuestion] = useState(null);
//   const [gameAnswered, setGameAnswered] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showHint, setShowHint] = useState(false);
//   const [lives, setLives] = useState(3);
//   const [processes, setProcesses] = useState([
//     { id: 1, track: 82 },
//     { id: 2, track: 170 },
//     { id: 3, track: 43 },
//     { id: 4, track: 140 },
//     { id: 5, track: 24 }
//   ]);
//   const [algorithm, setAlgorithm] = useState('FCFS');
//   const [headPosition, setHeadPosition] = useState(50);
//   const [diskSize, setDiskSize] = useState(199);
//   const [results, setResults] = useState(null);
//   const [showComparison, setShowComparison] = useState(false);
//   const [animatingHead, setAnimatingHead] = useState(false);
//   const [currentHeadPos, setCurrentHeadPos] = useState(50);
//   const [animationSpeed, setAnimationSpeed] = useState(1);
//   const [savedConfigs, setSavedConfigs] = useState([]);
//   const [showAIRecommendation, setShowAIRecommendation] = useState(false);
//   const [aiRecommendation, setAiRecommendation] = useState(null);

//   const backgrounds = [
//     'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
//     'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1920&q=80',
//     'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
//     'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80',
//     'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80'
//   ];

//   const facts = [
//     "FCFS is the simplest disk scheduling algorithm but can cause the 'convoy effect'",
//     "SSTF minimizes seek time but may cause starvation of requests far from the head",
//     "SCAN algorithm is also known as the 'elevator algorithm'",
//     "C-SCAN provides more uniform wait time than SCAN",
//     "LOOK and C-LOOK are more efficient versions of SCAN and C-LOOK",
//     "The average seek time is a crucial metric in disk scheduling performance",
//     "Modern SSDs don't use these algorithms as they have no mechanical seek time",
//     "Disk scheduling can improve overall system throughput by up to 50%",
//     "The SCAN algorithm was invented to mimic elevator movement patterns",
//     "SSTF can lead to the 'starvation problem' for far-away requests"
//   ];

//   const quizQuestions = [
//     {
//       question: "Which algorithm is also known as the 'elevator algorithm'?",
//       options: ["FCFS", "SSTF", "SCAN", "C-LOOK"],
//       correct: 2,
//       explanation: "SCAN moves back and forth like an elevator, servicing requests along the way.",
//       difficulty: "easy"
//     },
//     {
//       question: "Which algorithm can cause starvation of distant requests?",
//       options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
//       correct: 1,
//       explanation: "SSTF always picks the nearest request, potentially ignoring far requests indefinitely.",
//       difficulty: "medium"
//     },
//     {
//       question: "What does FCFS stand for?",
//       options: ["Fast Come Fast Serve", "First-Come, First-Served", "First Choice First Select", "File Control File System"],
//       correct: 1,
//       explanation: "FCFS processes requests in the order they arrive.",
//       difficulty: "easy"
//     },
//     {
//       question: "Which provides more uniform wait times?",
//       options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
//       correct: 3,
//       explanation: "C-SCAN provides more uniform wait times by moving in only one direction.",
//       difficulty: "medium"
//     },
//     {
//       question: "What is the main goal of disk scheduling?",
//       options: ["Increase storage", "Minimize seek time", "Delete files faster", "Compress data"],
//       correct: 1,
//       explanation: "Disk scheduling aims to minimize seek time - the time for the disk head to reach the desired track.",
//       difficulty: "easy"
//     },
//     {
//       question: "Which algorithm is best for preventing starvation?",
//       options: ["SSTF", "FCFS", "LOOK", "C-LOOK"],
//       correct: 1,
//       explanation: "FCFS guarantees no starvation as it processes requests in arrival order.",
//       difficulty: "medium"
//     },
//     {
//       question: "What's the difference between SCAN and LOOK?",
//       options: ["No difference", "LOOK only goes to the last request", "SCAN is faster", "LOOK uses more memory"],
//       correct: 1,
//       explanation: "LOOK only travels to the last request in each direction, avoiding unnecessary movement.",
//       difficulty: "hard"
//     },
//     {
//       question: "In C-SCAN, what does the 'C' stand for?",
//       options: ["Computer", "Circular", "Continuous", "Constant"],
//       correct: 1,
//       explanation: "C-SCAN stands for Circular SCAN, moving in one direction then jumping back.",
//       difficulty: "easy"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg((prev) => (prev + 1) % backgrounds.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToAlgorithms = () => {
//     document.getElementById('algorithms')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const startGame = () => {
//     const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
//     setGameQuestion(randomQuestion);
//     setShowGame(true);
//     setGameAnswered(false);
//     setSelectedAnswer(null);
//     setShowHint(false);
//   };

//   const handleGameAnswer = (selectedIndex) => {
//     if (gameAnswered) return;
    
//     setSelectedAnswer(selectedIndex);
//     setGameAnswered(true);
    
//     if (selectedIndex === gameQuestion.correct) {
//       const points = gameQuestion.difficulty === 'easy' ? 10 : gameQuestion.difficulty === 'medium' ? 15 : 20;
//       setGameScore(gameScore + points);
//       setGameLevel(gameLevel + 1);
//       setTimeout(() => {
//         startGame();
//       }, 2000);
//     } else {
//       setLives(lives - 1);
//       if (lives - 1 <= 0) {
//         setTimeout(() => {
//           setShowGame(false);
//           setGameScore(0);
//           setGameLevel(1);
//           setLives(3);
//           setGameAnswered(false);
//           setSelectedAnswer(null);
//           setShowHint(false);
//         }, 2500);
//       } else {
//         setTimeout(() => {
//           startGame();
//         }, 2500);
//       }
//     }
//   };

//   const saveConfiguration = () => {
//     const config = {
//       id: Date.now(),
//       name: `Config ${savedConfigs.length + 1}`,
//       processes: [...processes],
//       algorithm,
//       headPosition,
//       timestamp: new Date().toLocaleString()
//     };
//     setSavedConfigs([...savedConfigs, config]);
//     alert('Configuration saved successfully!');
//   };

//   const loadConfiguration = (config) => {
//     setProcesses(config.processes);
//     setAlgorithm(config.algorithm);
//     setHeadPosition(config.headPosition);
//     alert('Configuration loaded!');
//   };

//   const deleteConfiguration = (id) => {
//     setSavedConfigs(savedConfigs.filter(c => c.id !== id));
//   };

//   const animateDiskHead = async () => {
//     if (!results) return;
    
//     setAnimatingHead(true);
//     setCurrentHeadPos(headPosition);
    
//     for (let i = 0; i < results.sequence.length; i++) {
//       const target = results.sequence[i].track;
//       const start = i === 0 ? headPosition : results.sequence[i - 1].track;
//       const distance = Math.abs(target - start);
//       const steps = Math.max(20, distance);
//       const stepSize = (target - start) / steps;
      
//       for (let step = 0; step <= steps; step++) {
//         await new Promise(resolve => setTimeout(resolve, 50 / animationSpeed));
//         setCurrentHeadPos(Math.round(start + stepSize * step));
//       }
      
//       await new Promise(resolve => setTimeout(resolve, 300 / animationSpeed));
//     }
    
//     setAnimatingHead(false);
//   };

//   const getAIRecommendation = () => {
//     // Analyze request pattern
//     const tracks = processes.map(p => p.track).sort((a, b) => a - b);
//     const head = headPosition;
    
//     // Calculate pattern characteristics
//     const avgTrack = tracks.reduce((sum, t) => sum + t, 0) / tracks.length;
//     const leftRequests = tracks.filter(t => t < head).length;
//     const rightRequests = tracks.filter(t => t >= head).length;
//     const spread = Math.max(...tracks) - Math.min(...tracks);
//     const density = spread / tracks.length;
    
//     // Check if requests are clustered
//     const gaps = [];
//     for (let i = 1; i < tracks.length; i++) {
//       gaps.push(tracks[i] - tracks[i-1]);
//     }
//     const avgGap = gaps.reduce((sum, g) => sum + g, 0) / gaps.length;
//     const isClustered = avgGap < diskSize / 10;
    
//     // Check if requests are sequential
//     const isSequential = gaps.every(g => g <= 10);
    
//     // Check distribution
//     const isBalanced = Math.abs(leftRequests - rightRequests) <= 1;
//     const headNearCenter = Math.abs(head - avgTrack) < diskSize / 4;
    
//     // Run all algorithms to get actual performance
//     const algoPerformance = compareAllAlgorithms();
//     const bestAlgo = algoPerformance.reduce((best, current) => 
//       current.totalSeekTime < best.totalSeekTime ? current : best
//     );
    
//     let recommendation = {
//       best: bestAlgo.algorithm,
//       estimatedSeekTime: bestAlgo.totalSeekTime,
//       reasons: [],
//       avoid: [],
//       pattern: '',
//       confidence: 0
//     };
    
//     // Determine pattern and reasoning
//     if (isSequential) {
//       recommendation.pattern = '📊 Sequential Access Pattern';
//       recommendation.reasons.push('Your requests are in sequential order');
//       recommendation.reasons.push('FCFS will work efficiently here');
//       recommendation.confidence = 95;
//     } else if (isClustered) {
//       recommendation.pattern = '🎯 Clustered Pattern';
//       recommendation.reasons.push('Requests are grouped in clusters');
//       recommendation.reasons.push('SSTF excels with clustered requests');
//       recommendation.confidence = 90;
//       if (bestAlgo.algorithm !== 'SSTF') {
//         recommendation.reasons.push(`However, ${bestAlgo.algorithm} performs ${((algoPerformance.find(a => a.algorithm === 'SSTF').totalSeekTime - bestAlgo.totalSeekTime) / bestAlgo.totalSeekTime * 100).toFixed(1)}% better due to your specific distribution`);
//       }
//     } else if (isBalanced && headNearCenter) {
//       recommendation.pattern = '⚖️ Balanced Distribution';
//       recommendation.reasons.push('Requests are evenly distributed around the head');
//       recommendation.reasons.push('SCAN/LOOK algorithms provide uniform service');
//       recommendation.confidence = 85;
//     } else if (leftRequests === 0 || rightRequests === 0) {
//       recommendation.pattern = '➡️ One-Sided Pattern';
//       recommendation.reasons.push('All requests are on one side of the head');
//       recommendation.reasons.push('Any algorithm will perform similarly');
//       recommendation.confidence = 80;
//     } else {
//       recommendation.pattern = '🔀 Random Access Pattern';
//       recommendation.reasons.push('Requests are randomly distributed');
//       recommendation.reasons.push('SSTF typically performs best for random patterns');
//       recommendation.confidence = 75;
//     }
    
//     // Add performance comparison
//     const worstAlgo = algoPerformance.reduce((worst, current) => 
//       current.totalSeekTime > worst.totalSeekTime ? current : worst
//     );
//     const improvement = ((worstAlgo.totalSeekTime - bestAlgo.totalSeekTime) / worstAlgo.totalSeekTime * 100).toFixed(1);
    
//     recommendation.reasons.push(`${bestAlgo.algorithm} is ${improvement}% faster than ${worstAlgo.algorithm}`);
    
//     // Algorithms to avoid
//     if (worstAlgo.totalSeekTime > bestAlgo.totalSeekTime * 1.5) {
//       recommendation.avoid.push(`Avoid ${worstAlgo.algorithm} - significantly slower for this pattern`);
//     }
    
//     // FCFS specific warning
//     if (bestAlgo.algorithm !== 'FCFS' && algoPerformance.find(a => a.algorithm === 'FCFS').totalSeekTime > bestAlgo.totalSeekTime * 1.3) {
//       recommendation.avoid.push('FCFS causes high seek time with scattered requests');
//     }
    
//     setAiRecommendation(recommendation);
//     setShowAIRecommendation(true);
//   };

//   const compareAllAlgorithms = () => {
//     const algorithms = ['FCFS', 'SSTF', 'SCAN', 'C-SCAN', 'LOOK', 'C-LOOK'];
//     const comparisonResults = algorithms.map(algo => {
//       let sequence = [];
//       let totalSeekTime = 0;
//       let currentPos = headPosition;

//       switch(algo) {
//         case 'FCFS':
//           sequence = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//         case 'SSTF':
//           let remaining = [...processes];
//           while (remaining.length > 0) {
//             let nearest = remaining.reduce((prev, curr) => 
//               Math.abs(curr.track - currentPos) < Math.abs(prev.track - currentPos) ? curr : prev
//             );
//             sequence.push(nearest);
//             totalSeekTime += Math.abs(currentPos - nearest.track);
//             currentPos = nearest.track;
//             remaining = remaining.filter(p => p.id !== nearest.id);
//           }
//           break;
//         case 'SCAN':
//           let left = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
//           let right = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//           sequence = [...right, ...left];
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//         case 'C-SCAN':
//           let rightCS = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//           let leftCS = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
//           sequence = [...rightCS, ...leftCS];
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//         case 'LOOK':
//           let leftL = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
//           let rightL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//           sequence = [...rightL, ...leftL];
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//         case 'C-LOOK':
//           let rightCL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//           let leftCL = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
//           sequence = [...rightCL, ...leftCL];
//           sequence.forEach(p => {
//             totalSeekTime += Math.abs(currentPos - p.track);
//             currentPos = p.track;
//           });
//           break;
//       }

//       return {
//         algorithm: algo,
//         totalSeekTime,
//         avgSeekTime: (totalSeekTime / sequence.length).toFixed(2)
//       };
//     });

//     return comparisonResults;
//   };

//   const addProcess = () => {
//     setProcesses([...processes, {
//       id: processes.length + 1,
//       track: Math.floor(Math.random() * (diskSize + 1))
//     }]);
//   };

//   const updateProcess = (id, field, value) => {
//     setProcesses(processes.map(p => 
//       p.id === id ? { ...p, [field]: parseInt(value) || 0 } : p
//     ));
//   };

//   const removeProcess = (id) => {
//     if (processes.length > 1) {
//       setProcesses(processes.filter(p => p.id !== id));
//     }
//   };

//   const calculateScheduling = () => {
//     let sequence = [];
//     let totalSeekTime = 0;
//     let currentPos = headPosition;
//     let headMovements = [headPosition];

//     switch(algorithm) {
//       case 'FCFS':
//         sequence = [...processes];
//         sequence.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;

//       case 'SSTF':
//         let remaining = [...processes];
//         while (remaining.length > 0) {
//           let nearest = remaining.reduce((prev, curr) => 
//             Math.abs(curr.track - currentPos) < Math.abs(prev.track - currentPos) ? curr : prev
//           );
//           sequence.push(nearest);
//           totalSeekTime += Math.abs(currentPos - nearest.track);
//           currentPos = nearest.track;
//           headMovements.push(currentPos);
//           remaining = remaining.filter(p => p.id !== nearest.id);
//         }
//         break;

//       case 'SCAN':
//         let left = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
//         let right = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//         sequence = [...right, ...left];
        
//         // Move right first
//         right.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         // Go to end if there are left requests
//         if (left.length > 0 && right.length > 0) {
//           totalSeekTime += Math.abs(currentPos - diskSize);
//           currentPos = diskSize;
//           headMovements.push(currentPos);
//         }
//         // Move left
//         left.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;

//       case 'C-SCAN':
//         let rightCS = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//         let leftCS = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
//         sequence = [...rightCS, ...leftCS];
        
//         // Move right
//         rightCS.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         // Jump to beginning if there are left requests
//         if (leftCS.length > 0) {
//           totalSeekTime += Math.abs(currentPos - diskSize);
//           currentPos = diskSize;
//           headMovements.push(currentPos);
//           totalSeekTime += diskSize;
//           currentPos = 0;
//           headMovements.push(currentPos);
//         }
//         // Process left requests
//         leftCS.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;

//       case 'LOOK':
//         let leftL = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
//         let rightL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//         sequence = [...rightL, ...leftL];
        
//         rightL.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         leftL.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;

//       case 'C-LOOK':
//         let rightCL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
//         let leftCL = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
//         sequence = [...rightCL, ...leftCL];
        
//         rightCL.forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         // Jump to first left request
//         if (leftCL.length > 0 && rightCL.length > 0) {
//           totalSeekTime += Math.abs(currentPos - leftCL[0].track);
//           currentPos = leftCL[0].track;
//           headMovements.push(currentPos);
//         }
//         leftCL.slice(rightCL.length > 0 ? 1 : 0).forEach(p => {
//           totalSeekTime += Math.abs(currentPos - p.track);
//           currentPos = p.track;
//           headMovements.push(currentPos);
//         });
//         break;
//     }

//     const avgSeekTime = totalSeekTime / sequence.length;

//     setResults({
//       sequence,
//       totalSeekTime,
//       avgSeekTime: avgSeekTime.toFixed(2),
//       headMovements
//     });
//   };

//   const AlgorithmCard = ({ icon: Icon, title, description, delay }) => (
//     <div 
//       className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
//       style={{ animationDelay: delay }}>
//       <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
//         <Icon className="w-7 h-7 text-gray-700" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
//       <p className="text-gray-600 leading-relaxed">{description}</p>
//     </div>
//   );

//   const FactButton = () => (
//     <div className="fixed bottom-8 right-8 z-50">
//       <button
//         onMouseEnter={() => {
//           setShowFact(true);
//           setCurrentFact(Math.floor(Math.random() * facts.length));
//         }}
//         onMouseLeave={() => setShowFact(false)}
//         className="relative group">
//         <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse">
//           <Lightbulb className="w-8 h-8 text-white" />
//         </div>
//         {showFact && (
//           <div className="absolute bottom-20 right-0 w-72 bg-gray-800 text-white p-4 rounded-lg shadow-2xl transition-all duration-300 transform">
//             <div className="text-xs font-semibold text-yellow-400 mb-1">💡 DID YOU KNOW?</div>
//             <p className="text-sm leading-relaxed">{facts[currentFact]}</p>
//             <div className="absolute -bottom-2 right-6 w-4 h-4 bg-gray-800 transform rotate-45"></div>
//           </div>
//         )}
//       </button>
//     </div>
//   );

//   const QuizGame = () => {
//     if (!showGame || !gameQuestion) return null;

//     const getDifficultyColor = (difficulty) => {
//       switch(difficulty) {
//         case 'easy': return 'text-green-600';
//         case 'medium': return 'text-yellow-600';
//         case 'hard': return 'text-red-600';
//         default: return 'text-gray-600';
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">Quiz Challenge! 🎮</h3>
//               <p className="text-sm text-gray-600">
//                 Level {gameLevel} • Score: {gameScore} • Lives: {'❤️'.repeat(lives)}
//                 <span className={`ml-2 font-semibold ${getDifficultyColor(gameQuestion.difficulty)}`}>
//                   {gameQuestion.difficulty.toUpperCase()}
//                 </span>
//               </p>
//             </div>
//             <button
//               onClick={() => {
//                 setShowGame(false);
//                 setGameScore(0);
//                 setGameLevel(1);
//                 setLives(3);
//                 setGameAnswered(false);
//                 setSelectedAnswer(null);
//                 setShowHint(false);
//               }}
//               className="text-gray-400 hover:text-gray-600 text-2xl">
//               ×
//             </button>
//           </div>

//           <div className="mb-6">
//             <p className="text-lg font-semibold text-gray-800 mb-4">{gameQuestion.question}</p>
//             <div className="space-y-3">
//               {gameQuestion.options.map((option, index) => {
//                 const isSelected = selectedAnswer === index;
//                 const isCorrect = index === gameQuestion.correct;
//                 const showResult = gameAnswered;
                
//                 let buttonClass = "w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ";
                
//                 if (!showResult) {
//                   buttonClass += "bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-transparent hover:border-purple-400 hover:scale-105 transform cursor-pointer";
//                 } else if (isSelected && isCorrect) {
//                   buttonClass += "bg-green-100 border-green-500 scale-105";
//                 } else if (isSelected && !isCorrect) {
//                   buttonClass += "bg-red-100 border-red-500";
//                 } else if (isCorrect) {
//                   buttonClass += "bg-green-100 border-green-500";
//                 } else {
//                   buttonClass += "bg-gray-50 border-gray-200";
//                 }

//                 return (
//                   <button
//                     key={index}
//                     onClick={() => handleGameAnswer(index)}
//                     disabled={gameAnswered}
//                     className={buttonClass}>
//                     <span className="font-medium text-gray-800 flex items-center justify-between">
//                       {option}
//                       {showResult && isCorrect && <span className="text-green-600 text-xl">✓</span>}
//                       {showResult && isSelected && !isCorrect && <span className="text-red-600 text-xl">✗</span>}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Hint Button */}
//           <div className="mb-4">
//             {!showHint ? (
//               <button
//                 onClick={() => setShowHint(true)}
//                 className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 💡 Show Hint
//               </button>
//             ) : (
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 animate-in fade-in slide-in-from-top duration-300">
//                 <p className="text-sm text-gray-700">
//                   <span className="font-semibold text-yellow-600">💡 Hint:</span> {gameQuestion.explanation}
//                 </p>
//               </div>
//             )}
//           </div>

//           {gameAnswered && (
//             <div className={`rounded-lg p-4 animate-in fade-in slide-in-from-bottom duration-300 ${
//               selectedAnswer === gameQuestion.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
//             }`}>
//               <p className="text-sm font-semibold mb-1">
//                 {selectedAnswer === gameQuestion.correct ? '🎉 Correct! +' + (gameQuestion.difficulty === 'easy' ? '10' : gameQuestion.difficulty === 'medium' ? '15' : '20') + ' points!' : '❌ Incorrect! ' + (lives - 1 > 0 ? 'Try again!' : 'Game Over!')}
//               </p>
//               <p className="text-sm text-gray-700">{gameQuestion.explanation}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   if (page === 'home') {
//     return (
//       <div className="min-h-screen bg-white relative overflow-hidden">
//         {/* Background Image Carousel */}
//         <div className="absolute inset-0">
//           {backgrounds.map((bg, idx) => (
//             <div
//               key={idx}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 idx === currentBg ? 'opacity-100' : 'opacity-0'
//               }`}
//               style={{
//                 backgroundImage: `url(${bg})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//               }}>
//               <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
//             </div>
//           ))}
//         </div>

//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
//           <div className="max-w-5xl mx-auto text-center">
//             <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
//               <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-2xl">
//                 Disk Scheduling
//               </h1>
//               <div className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
//                 Algorithms
//               </div>
//             </div>

//             <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-lg">
//               Visualize and Compare Disk Scheduling Algorithms
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
//               <button
//                 onClick={scrollToAlgorithms}
//                 className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//                 Learn More
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setPage('simulator')}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//                 Try Simulator
//                 <Zap className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Carousel Indicators */}
//             <div className="flex justify-center gap-2 animate-in fade-in duration-1000 delay-500">
//               {backgrounds.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentBg(idx)}
//                   className={`transition-all duration-300 rounded-full ${
//                     idx === currentBg 
//                       ? 'w-8 h-3 bg-white' 
//                       : 'w-3 h-3 bg-white/50 hover:bg-white/75'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* What is Disk Scheduling */}
//         <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative z-10">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-col lg:flex-row gap-12 items-center">
//               <div className="flex-1">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight">
//                   What is Disk Scheduling?
//                 </h2>
//                 <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
//                   <p className="border-l-4 border-purple-500 pl-6">
//                     Disk scheduling is a <span className="font-semibold text-purple-600">critical operating system mechanism</span> that orchestrates the order of disk I/O request processing. When multiple processes compete for disk access, intelligent scheduling algorithms determine the optimal service sequence.
//                   </p>
//                   <p className="border-l-4 border-blue-500 pl-6">
//                     The primary objective is to <span className="font-semibold text-blue-600">minimize seek time</span> — the duration required for the disk head to traverse to the target track — while ensuring equitable access across all processes.
//                   </p>
//                   <p className="border-l-4 border-indigo-500 pl-6">
//                     Different algorithms employ unique strategies, balancing between <span className="font-semibold text-indigo-600">fairness</span> and <span className="font-semibold text-indigo-600">efficiency</span> to maximize throughput and system responsiveness.
//                   </p>
//                 </div>
//               </div>

//               {/* Challenge Card */}
//               <div className="lg:w-80">
//                 <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
//                   <div className="text-5xl mb-4 animate-bounce">🎯</div>
//                   <h3 className="text-2xl font-bold mb-3">Test Your Knowledge!</h3>
//                   <p className="text-purple-100 mb-6 leading-relaxed">
//                     Think you understand disk scheduling? Challenge yourself with our interactive quiz and prove your expertise!
//                   </p>
//                   <button
//                     onClick={startGame}
//                     className="w-full px-6 py-3 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                     Take the Quiz 🚀
//                   </button>
//                   <p className="text-xs text-purple-200 mt-3 text-center">
//                     3 Lives • Multiple Levels • Instant Feedback
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Algorithms Section */}
//         <section id="algorithms" className="py-20 px-4 bg-white relative z-10">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
//               Scheduling Algorithms
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//               <AlgorithmCard
//                 icon={Clock}
//                 title="FCFS"
//                 description="First-Come, First-Served processes requests in the order they arrive. Simple but can lead to high seek times with random access patterns."
//                 delay="0.1s"
//               />
//               <AlgorithmCard
//                 icon={Search}
//                 title="SSTF"
//                 description="Shortest Seek Time First selects the request closest to the current head position. Reduces seek time but may cause starvation."
//                 delay="0.2s"
//               />
//               <AlgorithmCard
//                 icon={Scan}
//                 title="SCAN"
//                 description="The elevator algorithm moves the head from one end to another, servicing requests along the way. Prevents starvation with uniform access."
//                 delay="0.3s"
//               />
//               <AlgorithmCard
//                 icon={RefreshCw}
//                 title="C-SCAN"
//                 description="Circular SCAN moves in one direction only, jumping back to start after reaching the end. Provides more uniform wait times."
//                 delay="0.4s"
//               />
//               <AlgorithmCard
//                 icon={Eye}
//                 title="LOOK"
//                 description="Similar to SCAN but only goes as far as the last request in each direction, avoiding unnecessary head movement."
//                 delay="0.5s"
//               />
//               <AlgorithmCard
//                 icon={RefreshCw}
//                 title="C-LOOK"
//                 description="Circular LOOK combines C-SCAN's circular motion with LOOK's smart boundary detection for optimal performance."
//                 delay="0.6s"
//               />
//             </div>

//             {/* CTA Section */}
//             <div className="text-center py-16">
//               <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-xl border border-gray-200">
//                 <h3 className="text-3xl font-bold mb-4 text-gray-800">
//                   Ready to See Them in Action?
//                 </h3>
//                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                   Use our interactive simulator to visualize how each algorithm processes
//                   disk requests and compare their performance.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <button
//                     onClick={() => setPage('simulator')}
//                     className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
//                     Launch Simulator
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={startGame}
//                     className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
//                     🎮 Play Quiz Game
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <FactButton />
//         <QuizGame />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 shadow-xl sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <h1 className="text-2xl md:text-3xl font-bold">Disk Scheduling Simulator</h1>
//           <button 
//             onClick={() => setPage('home')}
//             className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium">
//             ← Back to Home
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Configuration Section */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in slide-in-from-top duration-500">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Configure Processes</h2>
          
//           <div className="grid md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Algorithm</label>
//               <select 
//                 value={algorithm}
//                 onChange={(e) => setAlgorithm(e.target.value)}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white">
//                 <option>FCFS</option>
//                 <option>SSTF</option>
//                 <option>SCAN</option>
//                 <option>C-SCAN</option>
//                 <option>LOOK</option>
//                 <option>C-LOOK</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Initial Head Position</label>
//               <input 
//                 type="number"
//                 value={headPosition}
//                 onChange={(e) => setHeadPosition(parseInt(e.target.value) || 0)}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300"
//                 placeholder="50" />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Disk Size (Max Track)</label>
//               <input 
//                 type="number"
//                 value={diskSize}
//                 onChange={(e) => setDiskSize(parseInt(e.target.value) || 199)}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300"
//                 placeholder="199" />
//             </div>
//             <div className="flex items-end">
//               <div className="text-sm text-gray-600">
//                 <p className="font-semibold mb-1">Request Queue Size: {processes.length}</p>
//                 <p>Total Tracks: 0 - {diskSize}</p>
//               </div>
//             </div>
//           </div>

//           {/* Save/Load Controls */}
//           <div className="flex flex-wrap gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
//             <button 
//               onClick={saveConfiguration}
//               className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold">
//               💾 Save Config
//             </button>
//             <button 
//               onClick={getAIRecommendation}
//               className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold flex items-center gap-2">
//               🤖 AI Recommend
//             </button>
//             {savedConfigs.length > 0 && (
//               <div className="flex-1 min-w-[200px]">
//                 <select 
//                   onChange={(e) => {
//                     const config = savedConfigs.find(c => c.id === parseInt(e.target.value));
//                     if (config) loadConfiguration(config);
//                   }}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
//                   <option value="">Load Saved Config...</option>
//                   {savedConfigs.map(config => (
//                     <option key={config.id} value={config.id}>
//                       {config.name} - {config.timestamp}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}
//             {savedConfigs.length > 0 && (
//               <button 
//                 onClick={() => {
//                   if (confirm('Delete all saved configurations?')) {
//                     setSavedConfigs([]);
//                   }
//                 }}
//                 className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold">
//                 🗑️ Clear All
//               </button>
//             )}
//           </div>

//           {/* AI Recommendation Panel */}
//           {showAIRecommendation && aiRecommendation && (
//             <div className="mb-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 animate-in fade-in slide-in-from-top duration-500">
//               <div className="flex justify-between items-start mb-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-3xl">🤖</span>
//                   <h3 className="text-xl font-bold text-gray-800">AI Recommendation</h3>
//                 </div>
//                 <button
//                   onClick={() => setShowAIRecommendation(false)}
//                   className="text-gray-400 hover:text-gray-600 text-xl">
//                   ×
//                 </button>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <span className="text-2xl">{aiRecommendation.pattern.split(' ')[0]}</span>
//                   <div>
//                     <p className="font-semibold text-gray-700">{aiRecommendation.pattern.substring(2)}</p>
//                     <p className="text-sm text-gray-600">Confidence: {aiRecommendation.confidence}%</p>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
//                   <p className="font-bold text-green-700 mb-2 flex items-center gap-2">
//                     <span className="text-xl">✅</span> RECOMMENDED: {aiRecommendation.best}
//                   </p>
//                   <p className="text-sm text-gray-600">Estimated Seek Time: <span className="font-semibold">{aiRecommendation.estimatedSeekTime} tracks</span></p>
//                 </div>

//                 <div className="bg-white rounded-lg p-4">
//                   <p className="font-semibold text-gray-800 mb-2">Why this algorithm?</p>
//                   <ul className="space-y-2">
//                     {aiRecommendation.reasons.map((reason, idx) => (
//                       <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
//                         <span className="text-purple-500 mt-1">•</span>
//                         <span>{reason}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {aiRecommendation.avoid.length > 0 && (
//                   <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
//                     <p className="font-semibold text-red-700 mb-2">⚠️ Avoid:</p>
//                     <ul className="space-y-1">
//                       {aiRecommendation.avoid.map((warning, idx) => (
//                         <li key={idx} className="text-sm text-red-600">• {warning}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 <button
//                   onClick={() => setAlgorithm(aiRecommendation.best)}
//                   className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                   Apply {aiRecommendation.best} Algorithm
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="space-y-4 mb-6">
//             <div className="hidden md:grid md:grid-cols-2 gap-4 px-4 text-xs font-semibold text-gray-600">
//               <div>REQUEST ID</div>
//               <div>TRACK NUMBER</div>
//             </div>
//             {processes.map((p) => (
//               <div key={p.id} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-sm">
//                 <div>
//                   <label className="block md:hidden text-xs font-semibold text-gray-600 mb-1">Request ID</label>
//                   <input type="text" value={`R${p.id}`} disabled className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium" />
//                 </div>
//                 <div>
//                   <label className="block md:hidden text-xs font-semibold text-gray-600 mb-1">Track Number</label>
//                   <div className="flex gap-2">
//                     <input 
//                       type="number"
//                       value={p.track}
//                       onChange={(e) => updateProcess(p.id, 'track', e.target.value)}
//                       min="0"
//                       max={diskSize}
//                       className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
//                     <button 
//                       onClick={() => removeProcess(p.id)}
//                       className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 font-bold text-lg">
//                       ×
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button 
//               onClick={addProcess}
//               className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 font-semibold">
//               + Add Request
//             </button>
//             <button 
//               onClick={calculateScheduling}
//               className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg">
//               <Play className="w-5 h-5" />
//               Run Visualization
//             </button>
//             <button 
//               onClick={() => setShowComparison(!showComparison)}
//               className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg transition-all duration-300 font-semibold">
//               📊 Compare All
//             </button>
//           </div>

//           {/* Animation Speed Control */}
//           {results && (
//             <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
//               <div className="flex items-center justify-between mb-2">
//                 <label className="text-sm font-semibold text-gray-700">Animation Speed: {animationSpeed}x</label>
//                 <button
//                   onClick={animateDiskHead}
//                   disabled={animatingHead}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
//                     animatingHead 
//                       ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//                       : 'bg-purple-600 hover:bg-purple-700 text-white'
//                   }`}>
//                   {animatingHead ? '⏸️ Animating...' : '▶️ Animate Disk Head'}
//                 </button>
//               </div>
//               <input 
//                 type="range"
//                 min="0.5"
//                 max="3"
//                 step="0.5"
//                 value={animationSpeed}
//                 onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
//                 className="w-full"
//               />
//             </div>
//           )}
//         </div>

//         {/* Disk Head Animation Visualization */}
//         {results && animatingHead && (
//           <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in duration-500">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">🔄 Real-Time Disk Head Movement</h2>
//             <div className="relative h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden">
//               {/* Track markers */}
//               {[0, 50, 100, 150, 199].map(pos => (
//                 <div 
//                   key={pos}
//                   className="absolute top-0 bottom-0 border-l border-gray-400"
//                   style={{ left: `${(pos / 199) * 100}%` }}>
//                   <span className="absolute -bottom-6 -ml-2 text-xs text-gray-600">{pos}</span>
//                 </div>
//               ))}
              
//               {/* Process positions */}
//               {processes.map(p => (
//                 <div
//                   key={p.id}
//                   className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"
//                   style={{ left: `${(p.track / 199) * 100}%` }}
//                   title={`P${p.id}: ${p.track}`}
//                 />
//               ))}
              
//               {/* Animated disk head */}
//               <div
//                 className="absolute top-0 bottom-0 w-1 bg-red-500 transition-all duration-100"
//                 style={{ left: `${(currentHeadPos / 199) * 100}%` }}>
//                 <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                 </div>
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
//                   {currentHeadPos}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Algorithm Comparison */}
//         {showComparison && (
//           <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in slide-in-from-top duration-500">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Algorithm Comparison</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b-2 border-gray-200">
//                     <th className="text-left py-3 px-4 font-semibold text-gray-700">Algorithm</th>
//                     <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Seek Time</th>
//                     <th className="text-left py-3 px-4 font-semibold text-gray-700">Average Seek Time</th>
//                     <th className="text-left py-3 px-4 font-semibold text-gray-700">Performance</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {compareAllAlgorithms().map((result, idx) => {
//                     const allResults = compareAllAlgorithms();
//                     const minSeek = Math.min(...allResults.map(r => r.totalSeekTime));
//                     const isBest = result.totalSeekTime === minSeek;
//                     return (
//                       <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 ${isBest ? 'bg-green-50' : ''}`}>
//                         <td className="py-3 px-4 font-medium text-gray-800">{result.algorithm}</td>
//                         <td className="py-3 px-4 text-gray-700">{result.totalSeekTime}</td>
//                         <td className="py-3 px-4 text-gray-700">{result.avgSeekTime}</td>
//                         <td className="py-3 px-4">
//                           {isBest && <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">🏆 Best</span>}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//             <ResponsiveContainer width="100%" height={300} className="mt-8">
//               <BarChart data={compareAllAlgorithms()}>
//                 <XAxis dataKey="algorithm" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="totalSeekTime" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         )}

//         {/* Results Section */}
//         {results && (
//           <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
//             {/* Metrics */}
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-purple-500">
//                 <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Total Seek Time</h3>
//                 <p className="text-4xl font-bold text-purple-600">{results.totalSeekTime}</p>
//                 <p className="text-xs text-gray-500 mt-1">total head movement</p>
//               </div>
//               <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-500">
//                 <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Average Seek Time</h3>
//                 <p className="text-4xl font-bold text-pink-600">{results.avgSeekTime}</p>
//                 <p className="text-xs text-gray-500 mt-1">tracks per request</p>
//               </div>
//             </div>

//             {/* Visualizations */}
//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* Head Movement Graph */}
//               <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
//                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
//                   <Activity className="w-6 h-6 text-indigo-600" />
//                   <h3 className="text-xl font-bold text-gray-800">Disk Head Movement Graph</h3>
//                 </div>
//                 <ResponsiveContainer width="100%" height={350}>
//                   <BarChart data={results.headMovements.map((pos, i) => ({ 
//                     step: i === 0 ? 'Start' : `R${results.sequence[i-1]?.id || ''}`, 
//                     position: pos 
//                   }))}>
//                     <XAxis dataKey="step" />
//                     <YAxis label={{ value: 'Track Position', angle: -90, position: 'insideLeft' }} />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="position" fill="#6366f1" radius={[8, 8, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Track Positions Bar Chart */}
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
//                   <BarChart3 className="w-6 h-6 text-purple-600" />
//                   <h3 className="text-xl font-bold text-gray-800">Request Track Positions</h3>
//                 </div>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={results.sequence.map((p, i) => ({ name: `R${p.id}`, track: p.track, order: i + 1 }))}>
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="track" fill="#9333ea" radius={[8, 8, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Seek Distance Chart */}
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
//                   <PieChart className="w-6 h-6 text-pink-600" />
//                   <h3 className="text-xl font-bold text-gray-800">Seek Distance Distribution</h3>
//                 </div>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <RPieChart>
//                     <Pie
//                       data={results.sequence.map((p, i) => ({ 
//                         name: `R${p.id}`, 
//                         value: Math.abs(p.track - (i === 0 ? headPosition : results.sequence[i-1].track))
//                       }))}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       label={(entry) => `${entry.name}: ${entry.value}`}
//                       outerRadius={100}
//                       fill="#8884d8"
//                       dataKey="value">
//                       {results.sequence.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={['#9333ea', '#ec4899', '#6366f1', '#8b5cf6', '#d946ef', '#f97316'][index % 6]} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                   </RPieChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Sequence Timeline */}
//               <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
//                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
//                   <Activity className="w-6 h-6 text-indigo-600" />
//                   <h3 className="text-xl font-bold text-gray-800">Service Sequence</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-3 justify-center items-center py-4">
//                   <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold shadow-md">
//                     Start: {headPosition}
//                   </div>
//                   {results.sequence.map((p, i) => (
//                     <React.Fragment key={i}>
//                       <div className="text-gray-400 text-2xl font-bold">→</div>
//                       <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold transform hover:scale-110 transition-all duration-300 shadow-md">
//                         R{p.id} ({p.track})
//                       </div>
//                     </React.Fragment>
//                   ))}
//                 </div>
//                 <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//                   <h4 className="font-semibold text-gray-800 mb-2">Step-by-Step Head Movements:</h4>
//                   <div className="text-sm text-gray-700 space-y-1">
//                     {results.headMovements.map((pos, i) => (
//                       <div key={i} className="flex justify-between">
//                         <span>{i === 0 ? 'Initial Position' : `After serving R${results.sequence[i-1].id}`}:</span>
//                         <span className="font-semibold">Track {pos}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <FactButton />
//       <QuizGame />
//     </div>
//   );
// };

// export default App;

// // some potential error in this code : 1st the ai is not give well result and add 2 buttons fr up and down movement of head . the reset zer of each of the field box is not oing away like i tried to put any valie in in put field of the SIMULATOR of head positin and tracks . or id or other and add the effect of the vizulation scroll like when i click on visulation button it scrolls to the track header section graph section . and when i click on ai recomendation so it scrolls to recomemdation section similary to other button like stfs algorithm aand make other thing smother the screen shor of zero error is pasted below 










import React, { useState, useEffect } from 'react';
import { Play, Lightbulb, ArrowRight, Clock, Search, Scan, RefreshCw, Eye, Zap, BarChart3, PieChart, Activity } from 'lucide-react';
import { BarChart, Bar, PieChart as RPieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const App = () => {
  const [page, setPage] = useState('home');
  const [currentBg, setCurrentBg] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameLevel, setGameLevel] = useState(1);
  const [gameQuestion, setGameQuestion] = useState(null);
  const [gameAnswered, setGameAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [lives, setLives] = useState(3);
  const [processes, setProcesses] = useState([
    { id: 1, track: 82 },
    { id: 2, track: 170 },
    { id: 3, track: 43 },
    { id: 4, track: 140 },
    { id: 5, track: 24 }
  ]);
  const [algorithm, setAlgorithm] = useState('FCFS');
  const [headPosition, setHeadPosition] = useState(50);
  const [diskSize, setDiskSize] = useState(199);
  const [results, setResults] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [animatingHead, setAnimatingHead] = useState(false);
  const [currentHeadPos, setCurrentHeadPos] = useState(50);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [savedConfigs, setSavedConfigs] = useState([]);
  const [showAIRecommendation, setShowAIRecommendation] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [direction, setDirection] = useState('right'); // 'right' or 'left'

  const backgrounds = [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1920&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80'
  ];

  const facts = [
    "FCFS is the simplest disk scheduling algorithm but can cause the 'convoy effect'",
    "SSTF minimizes seek time but may cause starvation of requests far from the head",
    "SCAN algorithm is also known as the 'elevator algorithm'",
    "C-SCAN provides more uniform wait time than SCAN",
    "LOOK and C-LOOK are more efficient versions of SCAN and C-LOOK",
    "The average seek time is a crucial metric in disk scheduling performance",
    "Modern SSDs don't use these algorithms as they have no mechanical seek time",
    "Disk scheduling can improve overall system throughput by up to 50%",
    "The SCAN algorithm was invented to mimic elevator movement patterns",
    "SSTF can lead to the 'starvation problem' for far-away requests"
  ];

  const quizQuestions = [
    {
      question: "Which algorithm is also known as the 'elevator algorithm'?",
      options: ["FCFS", "SSTF", "SCAN", "C-LOOK"],
      correct: 2,
      explanation: "SCAN moves back and forth like an elevator, servicing requests along the way.",
      difficulty: "easy"
    },
    {
      question: "Which algorithm can cause starvation of distant requests?",
      options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
      correct: 1,
      explanation: "SSTF always picks the nearest request, potentially ignoring far requests indefinitely.",
      difficulty: "medium"
    },
    {
      question: "What does FCFS stand for?",
      options: ["Fast Come Fast Serve", "First-Come, First-Served", "First Choice First Select", "File Control File System"],
      correct: 1,
      explanation: "FCFS processes requests in the order they arrive.",
      difficulty: "easy"
    },
    {
      question: "Which provides more uniform wait times?",
      options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
      correct: 3,
      explanation: "C-SCAN provides more uniform wait times by moving in only one direction.",
      difficulty: "medium"
    },
    {
      question: "What is the main goal of disk scheduling?",
      options: ["Increase storage", "Minimize seek time", "Delete files faster", "Compress data"],
      correct: 1,
      explanation: "Disk scheduling aims to minimize seek time - the time for the disk head to reach the desired track.",
      difficulty: "easy"
    },
    {
      question: "Which algorithm is best for preventing starvation?",
      options: ["SSTF", "FCFS", "LOOK", "C-LOOK"],
      correct: 1,
      explanation: "FCFS guarantees no starvation as it processes requests in arrival order.",
      difficulty: "medium"
    },
    {
      question: "What's the difference between SCAN and LOOK?",
      options: ["No difference", "LOOK only goes to the last request", "SCAN is faster", "LOOK uses more memory"],
      correct: 1,
      explanation: "LOOK only travels to the last request in each direction, avoiding unnecessary movement.",
      difficulty: "hard"
    },
    {
      question: "In C-SCAN, what does the 'C' stand for?",
      options: ["Computer", "Circular", "Continuous", "Constant"],
      correct: 1,
      explanation: "C-SCAN stands for Circular SCAN, moving in one direction then jumping back.",
      difficulty: "easy"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAlgorithms = () => {
    document.getElementById('algorithms')?.scrollIntoView({ behavior: 'smooth' });
  };

  const startGame = () => {
    const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    setGameQuestion(randomQuestion);
    setShowGame(true);
    setGameAnswered(false);
    setSelectedAnswer(null);
    setShowHint(false);
  };

  const handleGameAnswer = (selectedIndex) => {
    if (gameAnswered) return;
    
    setSelectedAnswer(selectedIndex);
    setGameAnswered(true);
    
    if (selectedIndex === gameQuestion.correct) {
      const points = gameQuestion.difficulty === 'easy' ? 10 : gameQuestion.difficulty === 'medium' ? 15 : 20;
      setGameScore(gameScore + points);
      setGameLevel(gameLevel + 1);
      setTimeout(() => {
        startGame();
      }, 2000);
    } else {
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        setTimeout(() => {
          setShowGame(false);
          setGameScore(0);
          setGameLevel(1);
          setLives(3);
          setGameAnswered(false);
          setSelectedAnswer(null);
          setShowHint(false);
        }, 2500);
      } else {
        setTimeout(() => {
          startGame();
        }, 2500);
      }
    }
  };

  const saveConfiguration = () => {
    const config = {
      id: Date.now(),
      name: `Config ${savedConfigs.length + 1}`,
      processes: [...processes],
      algorithm,
      headPosition,
      timestamp: new Date().toLocaleString()
    };
    setSavedConfigs([...savedConfigs, config]);
    alert('Configuration saved successfully!');
  };

  const loadConfiguration = (config) => {
    setProcesses(config.processes);
    setAlgorithm(config.algorithm);
    setHeadPosition(config.headPosition);
    alert('Configuration loaded!');
  };

  const deleteConfiguration = (id) => {
    setSavedConfigs(savedConfigs.filter(c => c.id !== id));
  };

  const animateDiskHead = async () => {
    if (!results) return;
    
    setAnimatingHead(true);
    setCurrentHeadPos(headPosition);
    
    for (let i = 0; i < results.sequence.length; i++) {
      const target = results.sequence[i].track;
      const start = i === 0 ? headPosition : results.sequence[i - 1].track;
      const distance = Math.abs(target - start);
      const steps = Math.max(20, distance);
      const stepSize = (target - start) / steps;
      
      for (let step = 0; step <= steps; step++) {
        await new Promise(resolve => setTimeout(resolve, 50 / animationSpeed));
        setCurrentHeadPos(Math.round(start + stepSize * step));
      }
      
      await new Promise(resolve => setTimeout(resolve, 300 / animationSpeed));
    }
    
    setAnimatingHead(false);
  };

  const getAIRecommendation = () => {
    if (processes.length === 0) {
      alert('Please add some requests first!');
      return;
    }

    // Analyze request pattern
    const tracks = processes.map(p => p.track).sort((a, b) => a - b);
    const head = headPosition;
    
    // Calculate pattern characteristics
    const avgTrack = tracks.reduce((sum, t) => sum + t, 0) / tracks.length;
    const leftRequests = tracks.filter(t => t < head).length;
    const rightRequests = tracks.filter(t => t >= head).length;
    const spread = Math.max(...tracks) - Math.min(...tracks);
    const density = spread / tracks.length;
    
    // Check if requests are clustered
    const gaps = [];
    for (let i = 1; i < tracks.length; i++) {
      gaps.push(tracks[i] - tracks[i-1]);
    }
    const avgGap = gaps.length > 0 ? gaps.reduce((sum, g) => sum + g, 0) / gaps.length : 0;
    const isClustered = avgGap < diskSize / 10;
    
    // Check if requests are sequential
    const isSequential = gaps.length > 0 && gaps.every(g => g <= 10);
    
    // Check distribution
    const isBalanced = Math.abs(leftRequests - rightRequests) <= 1;
    const headNearCenter = Math.abs(head - avgTrack) < diskSize / 4;
    
    // Run all algorithms to get actual performance
    const algoPerformance = compareAllAlgorithms();
    const bestAlgo = algoPerformance.reduce((best, current) => 
      current.totalSeekTime < best.totalSeekTime ? current : best
    );
    
    const worstAlgo = algoPerformance.reduce((worst, current) => 
      current.totalSeekTime > worst.totalSeekTime ? current : worst
    );
    
    let recommendation = {
      best: bestAlgo.algorithm,
      estimatedSeekTime: bestAlgo.totalSeekTime,
      reasons: [],
      avoid: [],
      pattern: '',
      confidence: 0,
      allResults: algoPerformance
    };
    
    // Determine pattern and reasoning
    if (isSequential) {
      recommendation.pattern = '📊 Sequential Access Pattern';
      recommendation.reasons.push('Your requests are in sequential order (tracks differ by ≤10)');
      recommendation.reasons.push('FCFS performs well with sequential access');
      recommendation.confidence = 95;
    } else if (isClustered) {
      recommendation.pattern = '🎯 Clustered Pattern';
      recommendation.reasons.push(`Requests are grouped together (avg gap: ${avgGap.toFixed(1)} tracks)`);
      recommendation.reasons.push('SSTF excels at minimizing movement between nearby requests');
      recommendation.confidence = 90;
    } else if (isBalanced && headNearCenter) {
      recommendation.pattern = '⚖️ Balanced Distribution';
      recommendation.reasons.push(`Requests evenly split: ${leftRequests} left, ${rightRequests} right`);
      recommendation.reasons.push('SCAN/LOOK provide fair service to all directions');
      recommendation.confidence = 85;
    } else if (leftRequests === 0 || rightRequests === 0) {
      recommendation.pattern = '➡️ One-Sided Pattern';
      recommendation.reasons.push(`All ${processes.length} requests are ${leftRequests === 0 ? 'right' : 'left'} of head position ${head}`);
      recommendation.reasons.push('Any algorithm works similarly for one-sided access');
      recommendation.confidence = 80;
    } else {
      recommendation.pattern = '🔀 Random Access Pattern';
      recommendation.reasons.push(`Requests spread across ${spread} tracks with varied gaps`);
      recommendation.reasons.push('SSTF minimizes seek time for scattered patterns');
      recommendation.confidence = 75;
    }
    
    // Add performance comparison
    const improvement = ((worstAlgo.totalSeekTime - bestAlgo.totalSeekTime) / worstAlgo.totalSeekTime * 100).toFixed(1);
    recommendation.reasons.push(`${bestAlgo.algorithm} saves ${improvement}% seek time vs ${worstAlgo.algorithm}`);
    
    // Algorithms to avoid
    if (worstAlgo.totalSeekTime > bestAlgo.totalSeekTime * 1.5) {
      recommendation.avoid.push(`❌ ${worstAlgo.algorithm} takes ${worstAlgo.totalSeekTime} tracks (${((worstAlgo.totalSeekTime / bestAlgo.totalSeekTime - 1) * 100).toFixed(1)}% slower)`);
    }
    
    // FCFS specific warning
    const fcfsPerf = algoPerformance.find(a => a.algorithm === 'FCFS');
    if (bestAlgo.algorithm !== 'FCFS' && fcfsPerf.totalSeekTime > bestAlgo.totalSeekTime * 1.3) {
      recommendation.avoid.push(`⚠️ FCFS inefficient for scattered requests (${fcfsPerf.totalSeekTime} tracks)`);
    }
    
    setAiRecommendation(recommendation);
    setShowAIRecommendation(true);
    
    // Scroll to AI recommendation
    setTimeout(() => {
      document.getElementById('ai-recommendation')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const compareAllAlgorithms = () => {
    const algorithms = ['FCFS', 'SSTF', 'SCAN', 'C-SCAN', 'LOOK', 'C-LOOK'];
    const comparisonResults = algorithms.map(algo => {
      let sequence = [];
      let totalSeekTime = 0;
      let currentPos = headPosition;

      switch(algo) {
        case 'FCFS':
          sequence = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
          sequence.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
          });
          break;
        case 'SSTF':
          let remaining = [...processes];
          while (remaining.length > 0) {
            let nearest = remaining.reduce((prev, curr) => 
              Math.abs(curr.track - currentPos) < Math.abs(prev.track - currentPos) ? curr : prev
            );
            sequence.push(nearest);
            totalSeekTime += Math.abs(currentPos - nearest.track);
            currentPos = nearest.track;
            remaining = remaining.filter(p => p.id !== nearest.id);
          }
          break;
        case 'SCAN':
          let left = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
          let right = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
          sequence = [...right, ...left];
          sequence.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
          });
          break;
        case 'C-SCAN':
          let rightCS = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
          let leftCS = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
          sequence = [...rightCS, ...leftCS];
          sequence.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
          });
          break;
        case 'LOOK':
          let leftL = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
          let rightL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
          sequence = [...rightL, ...leftL];
          sequence.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
          });
          break;
        case 'C-LOOK':
          let rightCL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
          let leftCL = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
          sequence = [...rightCL, ...leftCL];
          sequence.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
          });
          break;
      }

      return {
        algorithm: algo,
        totalSeekTime,
        avgSeekTime: (totalSeekTime / sequence.length).toFixed(2)
      };
    });

    return comparisonResults;
  };

  const addProcess = () => {
    setProcesses([...processes, {
      id: processes.length + 1,
      track: Math.floor(Math.random() * (diskSize + 1))
    }]);
  };

  const updateProcess = (id, field, value) => {
    setProcesses(processes.map(p => 
      p.id === id ? { ...p, [field]: parseInt(value) || 0 } : p
    ));
  };

  const removeProcess = (id) => {
    if (processes.length > 1) {
      setProcesses(processes.filter(p => p.id !== id));
    }
  };

  const calculateScheduling = () => {
    let sequence = [];
    let totalSeekTime = 0;
    let currentPos = headPosition;
    let headMovements = [headPosition];

    switch(algorithm) {
      case 'FCFS':
        sequence = [...processes];
        sequence.forEach(p => {
          totalSeekTime += Math.abs(currentPos - p.track);
          currentPos = p.track;
          headMovements.push(currentPos);
        });
        break;

      case 'SSTF':
        let remaining = [...processes];
        while (remaining.length > 0) {
          let nearest = remaining.reduce((prev, curr) => 
            Math.abs(curr.track - currentPos) < Math.abs(prev.track - currentPos) ? curr : prev
          );
          sequence.push(nearest);
          totalSeekTime += Math.abs(currentPos - nearest.track);
          currentPos = nearest.track;
          headMovements.push(currentPos);
          remaining = remaining.filter(p => p.id !== nearest.id);
        }
        break;

      case 'SCAN':
        let left = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
        let right = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
        
        if (direction === 'right') {
          sequence = [...right, ...left];
          right.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
          if (left.length > 0 && right.length > 0) {
            totalSeekTime += Math.abs(currentPos - diskSize);
            currentPos = diskSize;
            headMovements.push(currentPos);
          }
          left.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
        } else {
          sequence = [...left, ...right];
          left.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
          if (right.length > 0 && left.length > 0) {
            totalSeekTime += Math.abs(currentPos - 0);
            currentPos = 0;
            headMovements.push(currentPos);
          }
          right.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
        }
        break;

      case 'C-SCAN':
        let rightCS = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
        let leftCS = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
        
        if (direction === 'right') {
          sequence = [...rightCS, ...leftCS];
          rightCS.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
          if (leftCS.length > 0) {
            totalSeekTime += Math.abs(currentPos - diskSize);
            currentPos = diskSize;
            headMovements.push(currentPos);
            totalSeekTime += diskSize;
            currentPos = 0;
            headMovements.push(currentPos);
          }
          leftCS.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
        } else {
          sequence = [...leftCS.reverse(), ...rightCS.reverse()];
          leftCS.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
          if (rightCS.length > 0) {
            totalSeekTime += Math.abs(currentPos - 0);
            currentPos = 0;
            headMovements.push(currentPos);
            totalSeekTime += diskSize;
            currentPos = diskSize;
            headMovements.push(currentPos);
          }
          rightCS.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
        }
        break;

      case 'LOOK':
        let leftL = processes.filter(p => p.track < currentPos).sort((a, b) => b.track - a.track);
        let rightL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
        
        if (direction === 'right') {
          sequence = [...rightL, ...leftL];
          rightL.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
          leftL.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
        } else {
          sequence = [...leftL, ...rightL];
          leftL.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
          rightL.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
        }
        break;

      case 'C-LOOK':
        let rightCL = processes.filter(p => p.track >= currentPos).sort((a, b) => a.track - b.track);
        let leftCL = processes.filter(p => p.track < currentPos).sort((a, b) => a.track - b.track);
        
        if (direction === 'right') {
          sequence = [...rightCL, ...leftCL];
          rightCL.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
          if (leftCL.length > 0 && rightCL.length > 0) {
            totalSeekTime += Math.abs(currentPos - leftCL[0].track);
            currentPos = leftCL[0].track;
            headMovements.push(currentPos);
          }
          leftCL.slice(rightCL.length > 0 ? 1 : 0).forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
        } else {
          sequence = [...leftCL.reverse(), ...rightCL.reverse()];
          leftCL.forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
          if (rightCL.length > 0 && leftCL.length > 0) {
            totalSeekTime += Math.abs(currentPos - rightCL[0].track);
            currentPos = rightCL[0].track;
            headMovements.push(currentPos);
          }
          rightCL.slice(leftCL.length > 0 ? 1 : 0).forEach(p => {
            totalSeekTime += Math.abs(currentPos - p.track);
            currentPos = p.track;
            headMovements.push(currentPos);
          });
        }
        break;
    }

    const avgSeekTime = totalSeekTime / sequence.length;

    setResults({
      sequence,
      totalSeekTime,
      avgSeekTime: avgSeekTime.toFixed(2),
      headMovements
    });

    // Scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const AlgorithmCard = ({ icon: Icon, title, description, delay }) => (
    <div 
      className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: delay }}>
      <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-gray-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const FactButton = () => (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onMouseEnter={() => {
          setShowFact(true);
          setCurrentFact(Math.floor(Math.random() * facts.length));
        }}
        onMouseLeave={() => setShowFact(false)}
        className="relative group">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        {showFact && (
          <div className="absolute bottom-20 right-0 w-72 bg-gray-800 text-white p-4 rounded-lg shadow-2xl transition-all duration-300 transform">
            <div className="text-xs font-semibold text-yellow-400 mb-1">💡 DID YOU KNOW?</div>
            <p className="text-sm leading-relaxed">{facts[currentFact]}</p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-gray-800 transform rotate-45"></div>
          </div>
        )}
      </button>
    </div>
  );

  const QuizGame = () => {
    if (!showGame || !gameQuestion) return null;

    const getDifficultyColor = (difficulty) => {
      switch(difficulty) {
        case 'easy': return 'text-green-600';
        case 'medium': return 'text-yellow-600';
        case 'hard': return 'text-red-600';
        default: return 'text-gray-600';
      }
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Quiz Challenge! 🎮</h3>
              <p className="text-sm text-gray-600">
                Level {gameLevel} • Score: {gameScore} • Lives: {'❤️'.repeat(lives)}
                <span className={`ml-2 font-semibold ${getDifficultyColor(gameQuestion.difficulty)}`}>
                  {gameQuestion.difficulty.toUpperCase()}
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                setShowGame(false);
                setGameScore(0);
                setGameLevel(1);
                setLives(3);
                setGameAnswered(false);
                setSelectedAnswer(null);
                setShowHint(false);
              }}
              className="text-gray-400 hover:text-gray-600 text-2xl">
              ×
            </button>
          </div>

          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-4">{gameQuestion.question}</p>
            <div className="space-y-3">
              {gameQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === gameQuestion.correct;
                const showResult = gameAnswered;
                
                let buttonClass = "w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ";
                
                if (!showResult) {
                  buttonClass += "bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-transparent hover:border-purple-400 hover:scale-105 transform cursor-pointer";
                } else if (isSelected && isCorrect) {
                  buttonClass += "bg-green-100 border-green-500 scale-105";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-red-100 border-red-500";
                } else if (isCorrect) {
                  buttonClass += "bg-green-100 border-green-500";
                } else {
                  buttonClass += "bg-gray-50 border-gray-200";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleGameAnswer(index)}
                    disabled={gameAnswered}
                    className={buttonClass}>
                    <span className="font-medium text-gray-800 flex items-center justify-between">
                      {option}
                      {showResult && isCorrect && <span className="text-green-600 text-xl">✓</span>}
                      {showResult && isSelected && !isCorrect && <span className="text-red-600 text-xl">✗</span>}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hint Button */}
          <div className="mb-4">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                💡 Show Hint
              </button>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 animate-in fade-in slide-in-from-top duration-300">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-yellow-600">💡 Hint:</span> {gameQuestion.explanation}
                </p>
              </div>
            )}
          </div>

          {gameAnswered && (
            <div className={`rounded-lg p-4 animate-in fade-in slide-in-from-bottom duration-300 ${
              selectedAnswer === gameQuestion.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <p className="text-sm font-semibold mb-1">
                {selectedAnswer === gameQuestion.correct ? '🎉 Correct! +' + (gameQuestion.difficulty === 'easy' ? '10' : gameQuestion.difficulty === 'medium' ? '15' : '20') + ' points!' : '❌ Incorrect! ' + (lives - 1 > 0 ? 'Try again!' : 'Game Over!')}
              </p>
              <p className="text-sm text-gray-700">{gameQuestion.explanation}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (page === 'home') {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {backgrounds.map((bg, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentBg ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                 backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',        // fills entire area
    backgroundPosition: 'center center', // perfectly centered
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',  // keeps background stable while scrolling
    height: '100vh',                // makes the section full-screen height
    width: '100%',                  // ensures full width
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
              }}>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-white animate-popIn">
  Disk Scheduling
</h1>

              <div className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                Algorithms
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-lg">
              Visualize and Compare Disk Scheduling Algorithms
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <button
                onClick={scrollToAlgorithms}
                className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setPage('simulator')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Try Simulator
                <Zap className="w-5 h-5" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 animate-in fade-in duration-1000 delay-500">
              {backgrounds.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentBg(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentBg 
                      ? 'w-8 h-3 bg-white' 
                      : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* What is Disk Scheduling */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight">
                  What is Disk Scheduling?
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="border-l-4 border-purple-500 pl-6">
                    Disk scheduling is a <span className="font-semibold text-purple-600">critical operating system mechanism</span> that orchestrates the order of disk I/O request processing. When multiple processes compete for disk access, intelligent scheduling algorithms determine the optimal service sequence.
                  </p>
                  <p className="border-l-4 border-blue-500 pl-6">
                    The primary objective is to <span className="font-semibold text-blue-600">minimize seek time</span> — the duration required for the disk head to traverse to the target track — while ensuring equitable access across all processes.
                  </p>
                  <p className="border-l-4 border-indigo-500 pl-6">
                    Different algorithms employ unique strategies, balancing between <span className="font-semibold text-indigo-600">fairness</span> and <span className="font-semibold text-indigo-600">efficiency</span> to maximize throughput and system responsiveness.
                  </p>
                </div>
              </div>

              {/* Challenge Card */}
              <div className="lg:w-80">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4 animate-bounce">🎯</div>
                  <h3 className="text-2xl font-bold mb-3">Test Your Knowledge!</h3>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    Think you understand disk scheduling? Challenge yourself with our interactive quiz and prove your expertise!
                  </p>
                  <button
                    onClick={startGame}
                    className="w-full px-6 py-3 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Take the Quiz 🚀
                  </button>
                  <p className="text-xs text-purple-200 mt-3 text-center">
                    3 Lives • Multiple Levels • Instant Feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Algorithms Section */}
        <section id="algorithms" className="py-20 px-4 bg-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Scheduling Algorithms
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <AlgorithmCard
                icon={Clock}
                title="FCFS"
                description="First-Come, First-Served processes requests in the order they arrive. Simple but can lead to high seek times with random access patterns."
                delay="0.1s"
              />
              <AlgorithmCard
                icon={Search}
                title="SSTF"
                description="Shortest Seek Time First selects the request closest to the current head position. Reduces seek time but may cause starvation."
                delay="0.2s"
              />
              <AlgorithmCard
                icon={Scan}
                title="SCAN"
                description="The elevator algorithm moves the head from one end to another, servicing requests along the way. Prevents starvation with uniform access."
                delay="0.3s"
              />
              <AlgorithmCard
                icon={RefreshCw}
                title="C-SCAN"
                description="Circular SCAN moves in one direction only, jumping back to start after reaching the end. Provides more uniform wait times."
                delay="0.4s"
              />
              <AlgorithmCard
                icon={Eye}
                title="LOOK"
                description="Similar to SCAN but only goes as far as the last request in each direction, avoiding unnecessary head movement."
                delay="0.5s"
              />
              <AlgorithmCard
                icon={RefreshCw}
                title="C-LOOK"
                description="Circular LOOK combines C-SCAN's circular motion with LOOK's smart boundary detection for optimal performance."
                delay="0.6s"
              />
            </div>

            {/* CTA Section */}
            <div className="text-center py-16">
              <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-xl border border-gray-200">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Ready to See Them in Action?
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Use our interactive simulator to visualize how each algorithm processes
                  disk requests and compare their performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setPage('simulator')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                    Launch Simulator
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={startGame}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                    🎮 Play Quiz Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FactButton />
        <QuizGame />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Disk Scheduling Simulator</h1>
          <button 
            onClick={() => setPage('home')}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium">
            ← Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Configuration Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in slide-in-from-top duration-500">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Configure Processes</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Algorithm</label>
              <select 
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white">
                <option>FCFS</option>
                <option>SSTF</option>
                <option>SCAN</option>
                <option>C-SCAN</option>
                <option>LOOK</option>
                <option>C-LOOK</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Initial Head Position</label>
              <input 
                type="number"
                value={headPosition}
                onChange={(e) => setHeadPosition(Math.max(0, Math.min(diskSize, parseInt(e.target.value) || 0)))}
                min="0"
                max={diskSize}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Enter head position" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Disk Size (Max Track)</label>
              <input 
                type="number"
                value={diskSize}
                onChange={(e) => setDiskSize(Math.max(0, parseInt(e.target.value) || 199))}
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Enter disk size" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Head Movement Direction</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDirection('right')}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    direction === 'right'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}>
                  → Right
                </button>
                <button
                  onClick={() => setDirection('left')}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    direction === 'left'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}>
                  ← Left
                </button>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold mb-1">📊 Current Configuration:</p>
            <p>• Request Queue: {processes.length} requests | Tracks: 0 - {diskSize} | Head: {headPosition} | Direction: {direction === 'right' ? 'Right →' : 'Left ←'}</p>
          </div>

          {/* Save/Load Controls */}
          <div className="flex flex-wrap gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
            <button 
              onClick={saveConfiguration}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold">
              💾 Save Config
            </button>
            <button 
              onClick={getAIRecommendation}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold flex items-center gap-2">
              🤖 AI Recommend
            </button>
            {savedConfigs.length > 0 && (
              <div className="flex-1 min-w-[200px]">
                <select 
                  onChange={(e) => {
                    const config = savedConfigs.find(c => c.id === parseInt(e.target.value));
                    if (config) loadConfiguration(config);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option value="">Load Saved Config...</option>
                  {savedConfigs.map(config => (
                    <option key={config.id} value={config.id}>
                      {config.name} - {config.timestamp}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {savedConfigs.length > 0 && (
              <button 
                onClick={() => {
                  if (confirm('Delete all saved configurations?')) {
                    setSavedConfigs([]);
                  }
                }}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold">
                🗑️ Clear All
              </button>
            )}
          </div>

          {/* AI Recommendation Panel */}
          {showAIRecommendation && aiRecommendation && (
            <div id="ai-recommendation" className="mb-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 animate-in fade-in slide-in-from-top duration-500 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🤖</span>
                  <h3 className="text-xl font-bold text-gray-800">AI Recommendation</h3>
                </div>
                <button
                  onClick={() => setShowAIRecommendation(false)}
                  className="text-gray-400 hover:text-gray-600 text-xl font-bold">
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <span className="text-2xl">{aiRecommendation.pattern.split(' ')[0]}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">{aiRecommendation.pattern.substring(2)}</p>
                    <p className="text-sm text-gray-600">Confidence: <span className="font-bold text-purple-600">{aiRecommendation.confidence}%</span></p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
                  <p className="font-bold text-green-700 mb-2 flex items-center gap-2 text-lg">
                    <span className="text-2xl">✅</span> RECOMMENDED: {aiRecommendation.best}
                  </p>
                  <p className="text-sm text-gray-700">Estimated Seek Time: <span className="font-bold text-green-700">{aiRecommendation.estimatedSeekTime} tracks</span></p>
                  <p className="text-sm text-gray-700 mt-1">Average: <span className="font-bold text-green-700">{aiRecommendation.allResults.find(a => a.algorithm === aiRecommendation.best).avgSeekTime} tracks/request</span></p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span>💡</span> Why {aiRecommendation.best}?
                  </p>
                  <ul className="space-y-2">
                    {aiRecommendation.reasons.map((reason, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2 p-2 bg-gray-50 rounded">
                        <span className="text-purple-500 mt-1 font-bold">•</span>
                        <span className="flex-1">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {aiRecommendation.avoid.length > 0 && (
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                      <span>⚠️</span> Algorithms to Avoid:
                    </p>
                    <ul className="space-y-1">
                      {aiRecommendation.avoid.map((warning, idx) => (
                        <li key={idx} className="text-sm text-red-700 font-medium">{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => {
                    setAlgorithm(aiRecommendation.best);
                    setShowAIRecommendation(false);
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  ✨ Apply {aiRecommendation.best} Algorithm
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4 mb-6">
            <div className="hidden md:grid md:grid-cols-2 gap-4 px-4 text-xs font-semibold text-gray-600">
              <div>REQUEST ID</div>
              <div>TRACK NUMBER</div>
            </div>
            {processes.map((p) => (
              <div key={p.id} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-sm">
                <div>
                  <label className="block md:hidden text-xs font-semibold text-gray-600 mb-1">Request ID</label>
                  <input type="text" value={`R${p.id}`} disabled className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium" />
                </div>
                <div>
                  <label className="block md:hidden text-xs font-semibold text-gray-600 mb-1">Track Number</label>
                  <div className="flex gap-2">
                    <input 
                      type="number"
                      value={p.track}
                      onChange={(e) => updateProcess(p.id, 'track', Math.max(0, Math.min(diskSize, parseInt(e.target.value) || 0)))}
                      min="0"
                      max={diskSize}
                      placeholder="0-199"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
                    <button 
                      onClick={() => removeProcess(p.id)}
                      className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 font-bold text-lg">
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={addProcess}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 font-semibold">
              + Add Request
            </button>
            <button 
              onClick={calculateScheduling}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg">
              <Play className="w-5 h-5" />
              Run Visualization
            </button>
            <button 
              onClick={() => setShowComparison(!showComparison)}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg transition-all duration-300 font-semibold">
              📊 Compare All
            </button>
          </div>

          {/* Animation Speed Control */}
          {results && (
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Animation Speed: {animationSpeed}x</label>
                <button
                  onClick={animateDiskHead}
                  disabled={animatingHead}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    animatingHead 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}>
                  {animatingHead ? '⏸️ Animating...' : '▶️ Animate Disk Head'}
                </button>
              </div>
              <input 
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Disk Head Animation Visualization */}
        {results && animatingHead && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🔄 Real-Time Disk Head Movement</h2>
            <div className="relative h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden">
              {/* Track markers */}
              {[0, 50, 100, 150, 199].map(pos => (
                <div 
                  key={pos}
                  className="absolute top-0 bottom-0 border-l border-gray-400"
                  style={{ left: `${(pos / 199) * 100}%` }}>
                  <span className="absolute -bottom-6 -ml-2 text-xs text-gray-600">{pos}</span>
                </div>
              ))}
              
              {/* Process positions */}
              {processes.map(p => (
                <div
                  key={p.id}
                  className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"
                  style={{ left: `${(p.track / 199) * 100}%` }}
                  title={`P${p.id}: ${p.track}`}
                />
              ))}
              
              {/* Animated disk head */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-red-500 transition-all duration-100"
                style={{ left: `${(currentHeadPos / 199) * 100}%` }}>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                  {currentHeadPos}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Algorithm Comparison */}
        {showComparison && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 animate-in fade-in slide-in-from-top duration-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Algorithm Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Algorithm</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Seek Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Average Seek Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {compareAllAlgorithms().map((result, idx) => {
                    const allResults = compareAllAlgorithms();
                    const minSeek = Math.min(...allResults.map(r => r.totalSeekTime));
                    const isBest = result.totalSeekTime === minSeek;
                    return (
                      <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 ${isBest ? 'bg-green-50' : ''}`}>
                        <td className="py-3 px-4 font-medium text-gray-800">{result.algorithm}</td>
                        <td className="py-3 px-4 text-gray-700">{result.totalSeekTime}</td>
                        <td className="py-3 px-4 text-gray-700">{result.avgSeekTime}</td>
                        <td className="py-3 px-4">
                          {isBest && <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">🏆 Best</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <ResponsiveContainer width="100%" height={300} className="mt-8">
              <BarChart data={compareAllAlgorithms()}>
                <XAxis dataKey="algorithm" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalSeekTime" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Results Section */}
        {results && (
          <div id="results-section" className="space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
            {/* Metrics */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-purple-500">
                <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Total Seek Time</h3>
                <p className="text-4xl font-bold text-purple-600">{results.totalSeekTime}</p>
                <p className="text-xs text-gray-500 mt-1">total head movement</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-500">
                <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Average Seek Time</h3>
                <p className="text-4xl font-bold text-pink-600">{results.avgSeekTime}</p>
                <p className="text-xs text-gray-500 mt-1">tracks per request</p>
              </div>
            </div>

            {/* Visualizations */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Head Movement Graph */}
              <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <Activity className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-gray-800">Disk Head Movement Graph</h3>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={results.headMovements.map((pos, i) => ({ 
                    step: i === 0 ? 'Start' : `R${results.sequence[i-1]?.id || ''}`, 
                    position: pos 
                  }))}>
                    <XAxis dataKey="step" />
                    <YAxis label={{ value: 'Track Position', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="position" fill="#6366f1" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Track Positions Bar Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-800">Request Track Positions</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={results.sequence.map((p, i) => ({ name: `R${p.id}`, track: p.track, order: i + 1 }))}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="track" fill="#9333ea" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Seek Distance Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <PieChart className="w-6 h-6 text-pink-600" />
                  <h3 className="text-xl font-bold text-gray-800">Seek Distance Distribution</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <RPieChart>
                    <Pie
                      data={results.sequence.map((p, i) => ({ 
                        name: `R${p.id}`, 
                        value: Math.abs(p.track - (i === 0 ? headPosition : results.sequence[i-1].track))
                      }))}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value">
                      {results.sequence.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#9333ea', '#ec4899', '#6366f1', '#8b5cf6', '#d946ef', '#f97316'][index % 6]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RPieChart>
                </ResponsiveContainer>
              </div>

              {/* Sequence Timeline */}
              <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <Activity className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-gray-800">Service Sequence</h3>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center py-4">
                  <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold shadow-md">
                    Start: {headPosition}
                  </div>
                  {results.sequence.map((p, i) => (
                    <React.Fragment key={i}>
                      <div className="text-gray-400 text-2xl font-bold">→</div>
                      <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold transform hover:scale-110 transition-all duration-300 shadow-md">
                        R{p.id} ({p.track})
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Step-by-Step Head Movements:</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    {results.headMovements.map((pos, i) => (
                      <div key={i} className="flex justify-between">
                        <span>{i === 0 ? 'Initial Position' : `After serving R${results.sequence[i-1].id}`}:</span>
                        <span className="font-semibold">Track {pos}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <FactButton />
      <QuizGame />
    </div>
  );
};

export default App;