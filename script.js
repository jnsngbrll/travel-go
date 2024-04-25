const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const cbDest = document.querySelectorAll('input[name="dest"]:checked');
  const budg = document.getElementById('budget');

  let dest = [];

  cbDest.forEach((destination) => {
    dest.push(destination.value);
  });

  if (cbDest.length === 0 || budg.value === 'Select Your Budget:') {
    alert('Please complete the selection.');
  } else {
    alert(dest + ' ' + budg.value);
  }
});
