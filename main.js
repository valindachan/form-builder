// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
var createInput;
var createSelect;

formData.forEach(function(formData){
  createInput = document.createElement('input');
  if (formData.type === 'select'){
    createSelect = document.createElement('select');
    createSelect.type = formData['type'];

    var selectLanguage = document.createElement('option')
    selectLanguage.text = "Select language...";
    selectLanguage.selected = 'selected';
    createSelect.appendChild(selectLanguage);

    formData.options.forEach(function(options, index){
      var opt = document.createElement('option');
      opt.value = formData.options[index]['value'];
      opt.text = formData.options[index]['label'];
      createSelect.appendChild(opt);
    })

    createSelect.placeholder = formData['label'];
    createSelect.id = formData['id'];
    createSelect.icon = formData['icon'];
    createSelect.options = formData['options'];

    fields.appendChild(createSelect);
  }
  else {
    createInput = document.createElement('input');
    createInput.type = formData['type'];
    createInput.placeholder = formData['label'];
    createInput.id = formData['id'];
    createInput.icon = formData['icon'];
    createInput.options = formData['options'];
    fields.appendChild(createInput);
  }

  if (formData['type'] === 'textarea') {
    let inputVal = document.getElementById("user-comment");
    createInput.style.height = "125px";
  }

  // Trying to make the icons show up
  // let iconSpace = document.querySelector('input');
  // iconSpace.innerHTML = '<i class="fa ' + createInput.icon + '" aria-hidden="true"></i>'
  // console.log(iconSpace);

})



// }

// createLabels(formData);
