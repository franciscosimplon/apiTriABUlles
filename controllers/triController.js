

exports.arrayNumbers = (req, res) => {
        
        res.send({
            
        msg: [0,1,2,3,4,5]
        })
}

exports.triArray =  (req, res ) => {
    let array = req.body.test
    // console.log(array)
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - (1 + i)); j++) {
            if (array[j] > array[j + 1]) {
                let v = array[j];
                array[j] = array[j + 1];
                array[j + 1] = v;
            }
        }
    }

    res.send({
        msg: array
    })
    
}
