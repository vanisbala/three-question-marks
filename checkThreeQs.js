
//This program checks whether the given string contains '???' three consecutive question mark in between two numbers whose 
// added value is ten.

      
      var checkstr;
      var numArr= [];
      var flagForThreeQs = false;
      //console.log("Entered String:"+ checkstr);

      function check(){
        checkstr = document.getElementById('userStr').value;
        console.log(checkstr);
        numArr=checkNumbers(checkstr); // Array of Number,position pair
        numArr.forEach(checkAddTen);
          if (flagForThreeQs){
          
            outputStyle("","limegreen");
          }
          else{
            outputStyle("does not","firebrick");  
          }

      }

      function outputStyle(yesOrNo, color) {
        document.getElementById('getResult').innerHTML = `Given string ${yesOrNo} contains '???' in between the number pair which has the sum value 10`;
        document.getElementById('getResult').style.color = color;
        document.getElementById('getResult').style.fontSize = "large";
        document.getElementById('getResult').style.fontWeight="bold";
      }

      // This function checks weather any of the number pair makes 10. if so it then calls checkQuestionMark function.
      function checkAddTen(item,index,numArr){
        if (numArr.length !== 0){
          if( (index+1) < numArr.length){
            var current = parseInt(item.value);
            var next = parseInt(numArr[index+1].value);
            console.log(typeof(next), next);
            if( (current + next) === 10){
              
              checkQuestionMark(item.pos , numArr[index+1].pos);
              
            }
            else{
              console.log(`${item.value} and ${numArr[index+1].value} doesn't make 10`);
            }
          }
          else{
            console.log("No more value to compare")
          }
        }
        else{
          console.log("No numbers in the String")
        }
      }


    
      // This function checks weather there are ??? pattern exists in the substring obtained from the given first and second 
      //position index. If so it turns the universal flag true;
      function checkQuestionMark(first,second){
        console.log(first,second,checkstr);
        chksubstr = checkstr.slice(first,second+1);
        console.log("substring :" + chksubstr);
        let regex = /\?\?\?/gi;
        if (regex.test(chksubstr)){
          flagForThreeQs = true;  

        }
      }

      //This function will check for numbers in the given string and push the numbers and their positions into the array object 
      // with {value : number, pos: position} pairs
      function checkNumbers(str) {
        var len = str.length;
        for (let i = 0; i < len; i++) {
          var charAscii = str.charCodeAt(i);
          console.log(`Ascii of ${str[i]} is ${charAscii}`);
          if ((charAscii>47) && (charAscii < 58)){
            numArr.push({ value: str[i], pos: i });
          }
        }
        console.log(numArr);
        return numArr;
      }
    