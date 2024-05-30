function callback(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('active');
      }
    });
  }
  
  let options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.5
   };
  let observer = new IntersectionObserver(callback, options);
  
  
  let elements = document.querySelectorAll('.anim');
  
  elements.forEach( elem =>{
    observer.observe(elem);
  })
  