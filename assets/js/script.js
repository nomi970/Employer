// ----------------------===============Jquery Form Validation===============-----------------------
// jQuery('#frm').validate({
//     rules: {
//       industry: {
//         required: true,
//         minlength: 4
//       },
//       location: {
//         required: true,
//       },
//       employees: {
//         required: true,
//         minlength: 1
//       },
//       revenue: {
//         required: true,
//         minlength: 2,
//       },
//       payroll: {
//         required: true,
//         minlength: 2,
//       },
//       'textarea': {
//         required: true,
//         minlength: 15,
//       },
      
//     },
//     messages: {
//       industry: {
//         required: "Please enter your industry",
//         minlength: "Industry must be at least 4 characters long"
//       },
//       location: {
//         required: "Please enter your location"
//       },
//       employees: {
//         required: "Please enter the number of employees",
//         minlength: "Employee count must be at least 1"
//       },
//       revenue: {
//         required: "Please enter your revenue",
//         minlength: "Revenue must be at least 2 characters long"
//       },
//       payroll: {
//         required: "Please enter your payroll",
//         minlength: "Payroll must be at least 2 characters long"
//       },
//       'textarea': {
//         required: 'This Field is required',
//         minlength: 'Message must be at least 10 characters long',
//       },
     
//     }
//   });



// ----------------------===============Jquery Form Validation===============-----------------------
const navbar = document.getElementById('dashboard-2')
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll')
  }
  else {
    navbar.classList.remove('navbar-scroll')
  }
});
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
var Filebutton = document.getElementById('fileButton');
var fileInput = document.getElementById('fileInput');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');
Filebutton.addEventListener('click', (event) => {
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
  liked.classList.toggle('text-primary');
  liked.classList.toggle('text-success');
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
  uploadButton.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.classList.add('d-none');
    document.body.appendChild(fileInput);
    fileInput.click();
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        Array.from(fileInput.files).forEach(file => {
          const fileDiv = document.createElement('div');
          fileDiv.classList.add('col-4', 'mb-4');
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
              const img = document.createElement('img');
              img.src = e.target.result;
              img.classList.add('img-fluid', 'preview-img');
              fileDiv.appendChild(img);
              fileContainer.appendChild(fileDiv);
            };
            reader.readAsDataURL(file);
          } else {
            const p = document.createElement('p');
            p.textContent = file.name;
            fileDiv.appendChild(p);
            fileContainer.appendChild(fileDiv);
          }
        });
      }
    });
  });
})();
// ------------------------------Date picker we are using in the calendar----------------------------------
const selectAllCheckbox = document.getElementById("select-all");
const rowCheckboxes = document.querySelectorAll(".row-checkbox");
selectAllCheckbox.addEventListener("change", () => {
  const isChecked = selectAllCheckbox.checked;
  rowCheckboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
});
// -------------------------------Input type number validation--------------------------------
document.getElementById('cNumber').addEventListener('input', function (e) {
  const maxLength = 16; 
  let value = e.target.value.replace(/\D/g, ''); 
  if (value.length > maxLength) {
    value = value.slice(0, maxLength);  
  }
  e.target.value = value;
});
// -------------------------------Navbar scroll up --------------------------------
