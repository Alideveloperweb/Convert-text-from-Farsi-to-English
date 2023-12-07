function myFunction() {
    var persianChars = ['ض','ص','ث','ق','ف','غ','ع','ه','خ','ح','ش','س','ی','ب','ل','ا','ت','ن','م','ظ','ط','ز','ر','ذ','د','د','پ'];
    var englishChars = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    
    var input = document.getElementById('myInput');
    var persianText = input.value;
  
    for (var i = 0; i < persianChars.length; i++) {
      persianText = persianText.replace(new RegExp(persianChars[i], 'g'), englishChars[i]);
    }
  
    input.value = persianText;
  }

