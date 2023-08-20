// Thundertronics.com CubeArrays v1.0
//
// INSTRUCTIONS:
//
// Step 1: Open "Setup" tab and set number of outputs
//    equal to number of arrays _N_
//
// Step 2: Open "On Message" tab and fill in arrayNames
//         with _N_ array names (case sensitive!)
//
// Step 3: Add _N_ chart nodes, connect their inputs to
//         this function outputs
//
// Step 4: Open each chart node, set "X-axis-Label" to
//         "custom" and enter x as a label
//
// Step 5: Open each chart node, set "X-axis" "OR" points
//         equal to number of array elements for this chart
//
// Check www.thundertronics.com for updates and more
// examples

// Replace "arrayName1", "arrayName2", "arrayName 3"
// with actual array names, e.g. "myArray", "signal",
// "TESTARRAY", etc.:
const arrayNames=["arrayName1","arrayName2","arrayName3"];

let str=msg.payload.variablename;

if (str.indexOf("[")===-1) {return null;} 

let arrayName = str.substring(
    0,
    str.indexOf("[")
);

let arrayIndex = parseInt(str.substring(
    str.indexOf("[")+1,
    str.indexOf("]")
));

let globalArrayName="global"+arrayName;

if (global.get(globalArrayName) === undefined) 
{
    global.set(globalArrayName, []);
}

global.set(globalArrayName+"["+arrayIndex+"]",msg.payload.variabledata[0].y);

if (arrayIndex===9) 
    {
        let tmpArr = [];
        let array_size = global.get(globalArrayName).length;

        if (array_size===0) return null;

        for (let i = 0; i < array_size; i++) {
            tmpArr.push({ "x": i, "y": global.get(globalArrayName+"["+i+"]") })
        }



        msg.payload = [{
            "series": ["signal"],
            "data": [tmpArr],
            "labels": ["myLabel"]
            }]

        for (let i = 0; i < arrayNames.length; i++) 
        if (arrayName===arrayNames[i])       
        {
            let chartMessages = new Array(arrayNames.length).fill(null);
            chartMessages[i]=msg;
            return chartMessages;
        }
    }

return null;
