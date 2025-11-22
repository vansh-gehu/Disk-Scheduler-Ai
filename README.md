📀 Disk Scheduling Simulator — Interactive Visualization + AI Recommendation

An advanced, interactive, and visually rich Disk Scheduling Simulator built using React, TailwindCSS, and Recharts, designed to help students understand and compare popular OS Disk Scheduling Algorithms.
The project features:

✅ Real-time disk head animation
✅ AI-based algorithm recommendation
✅ Side-by-side algorithm comparison
✅ Quiz game for learning
✅ Beautiful UI with animations
✅ Full visualization using charts

🚀 Live Features

This project includes:

🔹 1. Disk Scheduling Algorithms Implemented

FCFS

SSTF

SCAN

C-SCAN

LOOK

C-LOOK

🔹 2. Interactive Visualizations

Disk Head Movement Animation

Seek-Time Calculations

Track-by-Track Bar Graph

Pie Chart for Seek Distance Distribution

Step-by-Step Timeline

🔹 3. AI Recommendation System

A built-in expert-system-based AI analyzes:

Request distribution

Sequential patterns

Gaps between requests

Cluster density

Head position relation

Algorithm performance

The AI:

Simulates all algorithms

Chooses the one with minimum seek time

Provides confidence percentage

Explains reasons

Warns about inefficient algorithms

🔹 4. Process Queue Controls

Add/Delete requests

Edit track numbers

Set head position

Set disk size

Select movement direction

Save & load configurations

🔹 5. Gamified Learning

Includes a built-in Quiz Challenge:

Easy, Medium, Hard levels

Score, Lives, Levels

Instant feedback

Hints & explanations

🔹 6. Beautiful Frontend

Built with:

React

TailwindCSS

Lucide Icons

Recharts

Smooth animations

Glassmorphism + gradients

🎯 Purpose of the Project

This project visually demonstrates how disk scheduling algorithms work by simulating:

Total head movement

Average seek time

Order of servicing requests

How different algorithms behave under the same conditions

Perfect for:

Operating System students

BCA/B.Tech/MCA projects

Lab demonstrations

OS viva preparation

🧠 How the AI Works (Simple Explanation)

This project uses Expert System AI, NOT neural networks.

The AI performs 3 steps:
🔹 1. Pattern Analysis

Computes:

Left vs right requests

Request spread

Whether tracks are sequential

Whether requests are clustered

Average gap

🔹 2. Simulation

It runs all 6 algorithms internally using the function:

compareAllAlgorithms()


This returns:

Total seek time

Average seek time

Sequence for each algorithm

🔹 3. Decision

AI selects:

🏆 The algorithm with lowest total seek time

NOT the one with highest percentage.

Confidence % only describes how strong the pattern matched.

🛠️ Tech Stack
Technology	Used For
React	UI + state management
TailwindCSS	Styling + animations
Recharts	Graphs and charts
Lucide Icons	Icons
JavaScript	Algorithm logic
Expert System AI	Recommending best algorithm
📦 Installation
git clone <repository-url>
cd disk-scheduling-simulator
npm install
npm start


This will start the development server:

http://localhost:3000

📸 Screenshots

(Add your screenshots here in GitHub after uploading images in issues → copy image link)

Example:

![Home Screen](https://your-image-link.png)
![Simulator](https://your-image-link.png)

📘 How to Use
1️⃣ Select Algorithm

Choose from FCFS, SSTF, SCAN, C-SCAN, LOOK, or C-LOOK.

2️⃣ Add Requests

Add track numbers (0–disk size).

3️⃣ Set Head Position

Starting point of the disk head.

4️⃣ Run Simulation

Click Run Visualization to see:

Sequence

Total seek time

Graphs

Step-by-step head path

5️⃣ Animate Disk Head

Shows actual movement in real-time.

6️⃣ Compare All Algorithms

Displays table + chart comparison.

7️⃣ AI Recommend

Click to get:

Best algorithm

Confidence

Explanation

Algorithms to avoid

🎮 Quiz Mode

The app includes a learning quiz:

MCQs based on disk scheduling

Lives + scoring

Hints and answers

Levels increase automatically

This makes OS learning fun and interactive.

📂 Project Structure
src/
 ├── components/ (optional)
 ├── App.js (main file)
 ├── index.js
 └── styles.css


Major logic is inside App.js.

🧮 Algorithms Implemented (Simple Explanation)
✔ FCFS

Processes requests in arrival order.

✔ SSTF

Chooses nearest request next.

✔ SCAN

Moves like elevator → left/right then reverse.

✔ C-SCAN

Moves in one direction only → circular reset.

✔ LOOK

SCAN but stops at last request instead of disk end.

✔ C-LOOK

Circular LOOK → optimal for uniform distribution.

📊 Outputs Shown

Total seek time

Average seek time

Sequence of head movement

Bar graph of track access

Pie chart of seek distances

Real-time animation

Comparison with other algorithms

🧪 Testing

Checked with various random request patterns

Verified correctness with OS textbook examples

Cross-verified with online disk scheduling tools

🤖 Future Improvements

Real machine learning model

Backend for saving user profiles

More visual modes

CSV import/export of requests

Dark mode

Multi-direction scanning

📄 License

MIT License — free to use, modify, and share.

🙌 Contributors

Vansh Singh Bisht 

