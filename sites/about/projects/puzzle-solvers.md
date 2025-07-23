---
layout: default
title: Puzzle Solvers
permalink: /about/projects/puzzle-solvers/

left_label: Board Games
left_url: /about/projects/board-games/
right_label: Experiences
right_url: /about/experiences/
---

<!-- !PAGE CONTENT! -->
<div id="page-about-projects" class="w3-main">
  <section id="puzzle-solvers" class="w3-container">
    <h2><b>Puzzle Solvers</b> (<a href="https://github.com/leeyanleryan/Puzzle-Solvers" target="_blank">Link</a>)</h2>
    <h5 style="margin-bottom:20px">
      This project was created out of an interest in applying computer vision and AI to puzzle-solving. The end goal of this project is to make a phone application, capable of reading 
      pictures taken from the phone. Its main functionality would be to solve puzzles, but I may choose to expand into a more general direction.
    </h5>
    <h3><u>Sudoku (<a href="https://github.com/leeyanleryan/Puzzle-Solvers/tree/main/Sudoku%20(Classic)" target="_blank">Link</a>)</u></h3>
    <div style="display:flex; justify-content:center; gap:10px; align-items:center;">
      <img src="/assets/gif/puzzlesolvers_sudoku1.gif" alt="Puzzle Solvers Sudoku 1" style="width:90%;">
    </div>
    <h5 style="margin-bottom:20px">
      I developed the solver logic in Python. Currently, it is able to take a screenshot of a sudoku puzzle from <a href="https://sudoku.com" target="_blank">https://sudoku.com</a>,
      read the screenshot, solve the sudoku, and automatically inputs the solution back onto the website. The entire process is automated, and is done with the press
      of a single button.
    </h5>
    <h5>
      The solver is done using a simple AI search technique known as Depth-First Search (DFS). The image reader is done using a technique similar to the k-Nearest Neighbours (kNN) 
      algorithm. Both solver and reader are using inefficient methods, so it takes approximately 5-10 seconds to solve the sudoku, depending on the complexity.
    </h5>
  </section>
</div>