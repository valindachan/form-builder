// The Form Data
// An array of objects
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    type: "text",
    label: "First Name",
    id: "user-first-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "text",
    label: "Last Name",
    id: "user-last-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "email",
    label: "Email Address",
    id: "user-email",
    icon: "fa-envelope",
    options: []
  },
  {
    type: "text",
    label: "Current Website URL",
    id: "user-website",
    icon: "fa-globe",
    options: []
  },
  {
    type: "select",
    label: "Select Language",
    id: "user-language",
    icon: "",
    options: [
      {
        label: "English",
        value: "EN"
      },
      {
        label: "French",
        value: "FR"
      },
      {
        label: "Spanish",
        value: "SP"
      },
      {
        label: "Chinese",
        value: "CH"
      },
      {
        label: "Japanese",
        value: "JP"
      }
    ]
  },
  {
    type: "textarea",
    label: "Your Comment",
    id: "user-comment",
    icon: "fa-comments",
    options: []
  },
  {
    type: "tel",
    label: "Mobile Number",
    id: "user-mobile",
    icon: "fa-mobile-phone",
    options: []
  },
  {
    type: "tel",
    label: "Home Number",
    id: "user-phone",
    icon: "fa-phone",
    options: []
  }
]

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
;(function() {
  // Select the first element from the array
  let first = formData[0]
  // Log the first object
  console.log(first)
  // Log the string "First Name"
  console.log(first.label)
})()

// -------- Your Code Goes Below this Line --------

// Loop through formData
// Create the HTML
// Add to the DOM

// Define variable for fields in HTML so you don't have to keep querying it
// in each lop
const _fields = document.querySelector("#fields")

// Create field for each object in array
for (var i = 0; i < formData.length; i++) {
  // Define a variable for corresponding object of array so you don't
  // have to type and call formData[i] each time. Gets long and repetitive
  // after a while. Works for that specific object we are up to in the loop.
  // The '_' in the front of '_data' indicates to Mark that that variable
  // can only be accessed inside a for loop
  let _data = formData[i]

  console.log(`creating HTML for ${_data.label}`)

  if (_data.type === "textarea") {
    let textarea = document.createElement("textarea")

    textarea.placeholder = _data.label
    textarea.id = _data.id

    _fields.appendChild(textarea)
  } else if (_data.type === "select") {
    let select = document.createElement("select")

    select.id = _data.id

    // Create placeholder before creating our list of options
    // And append to Select
    let placeholder = document.createElement("option")
    placeholder.value = 0
    placeholder.innerHTML = _data.label
    select.appendChild(placeholder)

    // Loop through each option and create an element for each option
    // Then append to Select
    for (var j = 0; j < _data.options.length; j++) {
      let _opt = _data.options[j]
      let option = document.createElement("option")

      option.value = _opt.value

      // Add what goes in between the option tags
      option.innerHTML = _opt.label

      select.appendChild(option)
    }

    console.log(select)

    // for (var i = 0; i < _data.length; i++) {
    //   console.log('hiya');
    // }

    select.id = _data.id

    _fields.appendChild(select)
  } else {
    // Create variable so you can reuse and modify that element
    let element = document.createElement("input")

    // Set attributes for this field
    element.type = _data.type
    element.placeholder = _data.label
    element.id = _data.id

    _fields.appendChild(element)
  }
}

//
