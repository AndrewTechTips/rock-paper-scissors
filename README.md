<div align="center">

  <h1>✊✋✌️ Rock Paper Scissors Battle</h1>
  
  <p>
    The classic decision-making game reimagined with a <strong>sleek, modern dark interface</strong>. 
    Challenge the computer in a "First to 5" showdown featuring interactive animations and real-time score tracking.
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>

  <h3>
    <a href="https://andrewtechtips.github.io/rock-paper-scissors/">🎮 PLAY NOW</a>
  </h3>
</div>

<br />
---

## ✨ Key Features

This isn't just a static page; it's a fully interactive game experience:

* **🏆 First-to-Five System:** The game tracks the score automatically and declares a winner only when one side reaches 5 victories.
* **🌑 Modern Dark UI:** Designed with a professional color palette (slate & neon accents) that is easy on the eyes.
* **✨ Dynamic Feedback:** Text colors change instantly to reflect the round result (Green for Win, Red for Loss, Gray for Draw).
* **🤖 Smart "AI":** The computer makes unpredictable choices using randomized logic.
* **🔒 Game State Management:** Buttons are automatically disabled once the game ends to prevent further play until reset.
* **📱 Responsive Cards:** The game layout adapts beautifully, looking like a contained app card on larger screens.

---

## 🛠️ How it Works

The game logic is built entirely with **Vanilla JavaScript**:

1.  **Random Engine:** The `getComputerChoice()` function uses `Math.random()` to generate the opponent's move.
2.  **Round Logic:** The `playRound()` function compares the player's input against the computer's, updates the score variables, and modifies the DOM to show the result message.
3.  **UI Manipulation:** CSS classes like `.text-win` or `.text-lose` are added/removed dynamically to give visual cues.
4.  **Endgame Trigger:** The `checkWinner()` function runs after every round. Once a score hits 5, it triggers the `endGame()` sequence, disabling the game buttons and revealing the "Play Again" option.

---

## 🚀 Getting Started

Want to play or modify the code?

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AndrewTechTips/rock-paper-scissors.git]
    ```

2.  **Launch the game:**
    Open `index.html` in your browser.

---

## 📬 Contact

* **LinkedIn:** www.linkedin.com/in/andrei-condrea-b32148346
* **Email:** condrea.andrey777@gmail.com

<p align="center">
    <i>Enjoy the battle! If you beat the computer, leave a ⭐ on the repo!</i>
</p>