var exceltojson = require("xls-to-json-lc");

  exceltojson({
    input: "pass the input excel file here (.xls format)",
    // output: "if you want output to be stored in a file",
    // sheet: "sheetname",  // specific sheetname inside excel file (if you have multiple sheets)
    lowerCaseHeaders:true //to convert all excel headers to lowr case in json

  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      return result;
      //result will contain the overted json data
    }
  });