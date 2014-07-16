// http://jsfiddle.net/thewocky/Sc7Up/11/

function stringDelimiter (str, sep)
{
    // the easy way
    var arr = str.split (sep);
    // cleanup empty values
    // let's go backwards for a change
    var arrSplit = [];
    for (var i=arr.length-1, localArr=[]; i>=0; i--)
    {
        if (!arr[i])
        {    
            arr.splice(i,1);
        }
    }
    
    // if
	var arrIf = [], sepAt=0;
    for (var i=0, l=str.length; i<l; i++)
    {
        // using if & continue
        if (str[i]===sep)
        {
            if (i === sepAt)
            {
                // console.log ("continue here: "+i+"; "+sepAt);
                sepAt++;
                continue;
            }
            // console.log ("new string here: "+i+"; "+sepAt);
            arrIf.push( str.substring(sepAt,i) );
            sepAt = i+1;
        }
    }
    
    
    // switch
    var arrSwitch = [];
    for (var i=0, l=str.length, sepAt=0; i<l; i++)
    {
        switch (str[i])
        {
            case (sep):
                // console.log (sep+" at "+i+"; "+(i !== sepAt));
                if (i !== sepAt)
                {
                    arrSwitch.push( str.substring(sepAt,i) );
                }
                sepAt = i+1;
                break;
            default:
						// don't need default but it's good practice, right?
        }  
    }
    
    
		//while
    var arrWhile = [], strDo = str;
    while (str.length)
    {
        var sepStr = str.indexOf(sep);
        if (sepStr)
        {
            arrWhile.push(str.slice(0,sepStr));
        }
        str = str.substr(sepStr+1);
    }
    
    
		// do
    var arrDo = [];
    do
    {
        var sepStr = strDo.indexOf(sep);
        if (sepStr)
        {
            arrDo.push(strDo.slice(0,sepStr));
        }
        strDo = strDo.substr(sepStr+1);
    } while (strDo.length);
    
    
		console.log ("using if:<br>"+arrIf);
    console.log ("using switch:<br>"+arrSwitch);
    console.log ("using do:<br>"+arrDo);
    console.log ("using while:<br>"+arrWhile);
    
    return arrDo;
    
}


var sampleInput = 'asdf$lskd1234$asdo$$$';
// not enough $$$ (story of my life)
sampleInput = '$asdf$$$lskd1234$asdo$$$';

stringDelimiter(sampleInput, '$');
// -> ['asdf', 'lskd1234', 'asdo']