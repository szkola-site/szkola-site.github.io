document.addEventListener("mousemove", (e) => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor-trail");

  document.body.appendChild(cursor);


  cursor.style.left = `${e.pageX - 20}px`; 
  cursor.style.top = `${e.pageY - 20}px`;


  setTimeout(() => {
    cursor.remove();
  }, 400); 
});
