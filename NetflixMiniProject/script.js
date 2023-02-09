const displayAnswer = (e) => {
  const question = document.getElementById(`question${e}`);
  const caretDown = question.getElementsByClassName('zmdi-caret-down')[0];
  const caretUp = question.getElementsByClassName('zmdi-caret-up')[0];
  caretDown.classList.toggle('noDisplay')
  caretUp.classList.toggle('noDisplay')
  const answer = document.getElementById(`answer${e}`)
  answer.classList.toggle('noDisplay')
  
}