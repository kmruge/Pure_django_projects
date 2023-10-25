// GET V1 token
async function getV1Token() {
    
    // To Get the status of the v1 api app (enabled/disabled)
      try {
          let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/integrations/api/", {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    }
    })
    
    v1AppStatus = Object.assign({}, await res.json()); // it has "Active","is_insatalled" details 
          
      } catch (error) {
          console.log(error);
      }
    
    //To Get the api_key and Auth_code
      try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/integrations/api/keys/", {
    method: 'GET', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
    }
    })
    
    v1ApiKeys = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }

    // All Validations
    if(v1AppStatus["detail"] == "Requested feature is blocked for trial account" ){
        diasble_buttons();
        document.getElementById("apiKey").textContent = "Please Contact Support Team to Enable V1 API";
    }
    else if (v1AppStatus["is_installed"]== false){
        diasble_buttons();
        document.getElementById("apiKey").textContent = "Please Install V1 API App";
    }
    else if (v1AppStatus["is_installed"]== true && v1AppStatus["active"]== false){
        diasble_buttons();
        document.getElementById("apiKey").textContent = "Please Enable V1 API App";
    }
    else if(v1AppStatus["is_installed"]== true && v1AppStatus["active"]== true){
        if(v1ApiKeys["results"] == 0){
            diasble_buttons();
            document.getElementById("apiKey").textContent = "Please add v1 API keys to display";
        }
        else{
            v1_token();
        }

    }

async function v1_token(){ 
    document.getElementById("v1section").style.display = "block";
    
    // Get the necessary elements
    var apiKey = document.getElementById("apiKey");
    var showAuthCodeButton = document.getElementById("showAuthCodeButton");
    var copyButton = document.getElementById("copyButton");
    
    // Variables to store API Key and Auth Code
    var apiKeyValue = v1ApiKeys["results"][0]["api_key"];
    var authCodeValue = v1ApiKeys["results"][0]["auth_code"];
    
    // Variable to track current state
    var isAuthCodeVisible = false;
    
    
    // Function to toggle between API Key and Auth Code
    function toggleAuthCodeVisibility() {
      isAuthCodeVisible = !isAuthCodeVisible;
    
      if (isAuthCodeVisible) {
        apiKey.textContent = authCodeValue;
        showAuthCodeButton.textContent = "Show API Key";
        copyButton.innerHTML = '<i class="fa fa-files-o" aria-hidden="true"></i>';
      } else {
        apiKey.textContent = apiKeyValue;
        showAuthCodeButton.textContent = "Show Auth Code";
        copyButton.innerHTML = '<i class="fa fa-files-o" aria-hidden="true"></i>';
      }
    }
    
    // Function to copy the value to clipboard
    function copyToClipboard() {
      var value = isAuthCodeVisible ? authCodeValue : apiKeyValue;
    
      if (value === apiKeyValue || value === authCodeValue) {
        navigator.clipboard.writeText(value)
          .then(function() {
            console.log("Copied to clipboard!");
            copyButton.removeAttribute("title");
            copyButton.innerHTML = '<i class="fa fa-files-o" aria-hidden="true"></i> Copied';
            setTimeout(function() {
              copyButton.setAttribute("title", "Copy to clipboard");
              copyButton.innerHTML = '<i class="fa fa-files-o" aria-hidden="true"></i>';
            }, 1000);
          })
          .catch(function(error) {
            console.error("Failed to copy text:", error);
            alert("Failed to copy text: " + error);
          });
      }
    }
    
    // Attach click event listener to "Show Auth Code" button
    showAuthCodeButton.addEventListener("click", function() {
      toggleAuthCodeVisibility();
    });
    
    // Attach click event listener to "Copy" button
    copyButton.addEventListener("click", function() {
      copyToClipboard();
    });
    // Set initial aria-label for the "Copy" button
    copyButton.setAttribute("aria-label", "Copy to clipboard");
}
}

async function diasble_buttons(){
    document.getElementById("v1section").style.display = "block";
        document.getElementById("showAuthCodeButton").style.display = "none";
        document.getElementById("copyButton").style.display = "none";
}