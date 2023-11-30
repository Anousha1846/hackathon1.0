// contact start


    function hogya() {
        var named = document.getElementById('name');

        var Email = document.getElementById('Email');
        var YOURCONCERN = document.getElementById('YOUR-CONCERN');
        var cNIC = document.getElementById('nic');
        var City = document.getElementById('City');

        // let data;
        if (!named.value && !Email.value && !YOURCONCERN.value && !cNIC.value && !City.value  ) {
        //   form validation through js
          alert("please fill Out the form");
        } 
        else{
            console.log('t4fthryb');
        }
        // else {
        //   !named
        //     ? alert("Name is required")
        //     : !Email
        //     ? alert("Email is required")
        //     : !YOURCONCERN
        //     ? alert("YOURCONCERN is required")
        //     : !cNIC
        //     ? alert("CNIC is required")
        //     : !City
        //     ? alert("City is required")
        //     : (data = { named, YOURCONCERN, cNIC, City  });
        //   console.log(data);
        //   resetForm();
        // }
      }

// contact end

var main = document.getElementById("main")
var display = 0;

function hideShow() {
    if (display == 1) {
        main.style.display = 'block';
        display = 0;
    }
    else {
        main.style.display = 'none';
        display = 1;
    }
}

