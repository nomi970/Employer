$(document).ready(function () {
  $("#right-arrow").click(function () {
    $(".dashbord-1").removeClass("show");
  });

  $("#nav-toggler").click(function () {
    $(".dashbord-1").addClass("show");
  });

  $(".decreament-btn").click(function () {
    var value = $("#temperature").val();
    value--;
    $("#temperature").val(value);
  });

  $(".increament-btn").click(function () {
    var value = $("#temperature").val();
    value++;
    $("#temperature").val(value);
  });

  $("a.sub-menu-active").closest(".accordion-item").find(".accordion-button").addClass("accordion_button-active");
});

/////////////////////////////input to get the file input///////////////////////////////////


const fileButton = document.getElementById('fileButton');
const fileInput = document.getElementById('fileInput');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');

fileButton.addEventListener('click', (event) => {
  event.preventDefault();
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  imagePreviewContainer.innerHTML = '';

  if (fileInput.files.length > 0) {
    Array.from(fileInput.files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (e) {

          const img = document.createElement('img');
          img.src = e.target.result;
          img.classList.add('preview-image');
          img.style.maxWidth = '100px';
          img.style.marginRight = '10px';
          imagePreviewContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
      } else {
        alert('Error! Only image files are supported');
      }
    });
  }
});


////////////////////////////////share and  like buttons////////////////////////////////
const liked = document.getElementById('like-icon');
liked.addEventListener('click', () => {
  liked.classList.toggle('fa-heart');
  liked.classList.toggle('fa-heart-crack');
});


const shareButton = document.getElementById('share-btn');
shareButton.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'Example Page',
      text: 'Check out this amazing page!',
      url: window.location.href
    })
      .then(() => console.log('Sharing successful'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Your browser does not support the Web Share API');
  }
});
/////////////////////////dropdowns//////////////////////////
$(document).ready(function () {

  $(document).on("shown.bs.dropdown", ".dropdown", function () {

    const button = $(this).find('[data-bs-toggle="dropdown"]');
    const buttonPos = button.offset();
    const buttonWidth = button.outerWidth();
    const buttonHeight = button.outerHeight();

    $(this).find(".dropdown-menu.custom-menu").appendTo("body").css({
      position: "absolute",
      top: buttonPos.top + buttonHeight,
      right: buttonPos.left,
      width: buttonWidth,
    });
  });

});

////////////////////////Images upload system in the document center////////////////////////////////

(function () {
  const uploadButton = document.getElementById('uploadButton');
  const fileContainer = document.getElementById('fileContainer'); // Renamed from fileRow

  // Add event listener to the "Upload Document" button
  uploadButton.addEventListener('click', () => {
    // Create a new input element dynamically each time the button is clicked
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.classList.add('d-none'); // Hide the file input initially

    // Append file input to the body to make sure it's part of the document
    document.body.appendChild(fileInput);

    // Trigger the file input when the button is clicked
    fileInput.click();

    // Handle file selection
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        Array.from(fileInput.files).forEach(file => {
          // Create a new div to hold the preview (col-3 for each file)
          const fileDiv = document.createElement('div');
          fileDiv.classList.add('col-4', 'mb-4'); // Make sure the files are spaced

          // Check if the file is an image
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
              // Create an image element for the preview
              const img = document.createElement('img');
              img.src = e.target.result;
              img.classList.add('img-fluid', 'preview-img');
              fileDiv.appendChild(img);
              fileContainer.appendChild(fileDiv); // Append to fileContainer
            };
            reader.readAsDataURL(file);
          } else {
            // Handle non-image files (e.g., document files)
            const p = document.createElement('p');
            p.textContent = file.name;
            fileDiv.appendChild(p);
            fileContainer.appendChild(fileDiv); // Append to fileContainer
          }
        });
      }
    });
  });
})();

// ------------------------------Date picker we are using in the calendar----------------------------------

const selectAllCheckbox = document.getElementById("select-all");
const rowCheckboxes = document.querySelectorAll(".row-checkbox");

// Event listener for thead checkbox
selectAllCheckbox.addEventListener("change", () => {
  const isChecked = selectAllCheckbox.checked;
  rowCheckboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
});

// -------------------------------user profile checkbox--------------------------------


