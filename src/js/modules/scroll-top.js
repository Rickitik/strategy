function topFunction() {

    const topBtn = document.getElementById('scroll-to-top');

    topBtn.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

export default topFunction;