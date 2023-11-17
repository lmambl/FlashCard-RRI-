
const form = document.getElementById('answerForm');

console.log(form);
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { answer } = e.target;
    const res = await fetch('/category/questions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: e.target.dataset.id,
        answer: answer.value,
      }),
    });
    const data = await res.json();
    document.querySelector('.answerQ').innerHTML = data.message;
  });
}

