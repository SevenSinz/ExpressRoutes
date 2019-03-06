const express = require('express');
const ExpressError = require('./expressError')
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


/** function calculate mean */
app.get('/mean', function(req, res, next){
    try{
        let nums = req.query.nums;
        // create an array from input [ '1', '2', '3' ]
        nums = nums.split(',');
        let total=0;
        let numCount = nums.length;
        for (i=0; i<numCount; i++) {
            if (Number(nums[i])===NaN){
                throw new ExpressError("Input should be valid number", 400)
            }
            total += Number(nums[i])
        } 
        let mean = total/numCount;
        return res.json({   response: {
                            operation: "mean",
                            value: mean
                            }});
    } 
    catch(err) {
        return next(err);
    } 
})

 
/** function calculate median */
app.get('/median', function(req, res, next){
    try{
        let nums = req.query.nums;
        // create an array from input [ '1', '2', '3' ]
        nums = nums.split(',');
        let numCount = nums.length;
        let arr=[];
        let median=0;

        for (i=0; i<numCount; i++) {
            if (Number(nums[i])===NaN){
                throw new ExpressError("Input should be valid number", 400)
            }
            arr.push(Number(nums[i]));
        } 
        arr.sort(function(a, b) {
                return a - b;
                });
                console.log("arr=",arr);

        if (numCount%2 === 0) {
            let index = numCount/2;
            median = (arr[index-1] + arr[index]) / 2;
            console.log("median even=", median);
            console.log("arr[",index-1,"] even=", arr[index-1]);
            console.log("arr[",index,"] even=", arr[index]);
        }   
        else {
            let index = Math.ceil(numCount/2);
            median = arr[index-1];
            console.log("median odd=", median);
        }
        return res.json({   response: {
                            operation: "median",
                            value: median
                            }});
    } 
    catch(err) {
        return next(err);
    } 
})


/** function calculate median */
app.get('/median', function(req, res, next){
    try{
        let nums = req.query.nums;
        // create an array from input [ '1', '2', '3' ]
        nums = nums.split(',');
        let numCount = nums.length;
        let arr=[];
        let median=0;

        for (i=0; i<numCount; i++) {
            if (Number(nums[i])===NaN){
                throw new ExpressError("Input should be valid number", 400)
            }
            arr.push(Number(nums[i]));
        } 
        arr.sort(function(a, b) {
                return a - b;
                });
                console.log("arr=",arr);

        if (numCount%2 === 0) {
            let index = numCount/2;
            median = (arr[index-1] + arr[index]) / 2;
            console.log("median even=", median);
            console.log("arr[",index-1,"] even=", arr[index-1]);
            console.log("arr[",index,"] even=", arr[index]);
        }   
        else {
            let index = Math.ceil(numCount/2);
            median = arr[index-1];
            console.log("median odd=", median);
        }
        return res.json({   response: {
                            operation: "median",
                            value: median
                            }});
    } 
    catch(err) {
        return next(err);
    } 
})




// 404 error handler
//  4 parameters error handler



app.listen(3000, function () {
    console.log('Lets get the 3000 party started!');
  })
  