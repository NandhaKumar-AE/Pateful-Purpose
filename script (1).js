let currentIndex = 1;
  const totalItems = 3;
  const intervalTime = 5000; //5 sec

  setInterval(() => {
    document.getElementById(`item-${currentIndex}`).checked = false;
    currentIndex = currentIndex % totalItems + 1;
    document.getElementById(`item-${currentIndex}`).checked = true;
  }, intervalTime);