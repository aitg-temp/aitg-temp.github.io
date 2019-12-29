function initializeModal(modalID, buttonID) {
  // Get the modal element
  var modal = document.getElementById(modalID);

  // Get the button that opens the modal
  var btn = document.getElementById(buttonID);

  // Get the <span> element that closes the modal
  var span = modal.querySelector('.close');

  // When the user clicks on the button, open the modal
  btn.addEventListener('click', function() {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', function() {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

window.addEventListener('load', function() {
  initializeModal('myModal', 'myBtn');
  initializeModal('myModal1', 'myBtn1');
  initializeModal('myModal2', 'myBtn2');
  initializeModal('myModal3', 'myBtn3');
  initializeModal('myModal4', 'myBtn4');
  initializeModal('myModal5', 'myBtn5');
  initializeModal('myModal6', 'myBtn6');
});
