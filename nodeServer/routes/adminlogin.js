const express = require("express")
const router = express.Router()

router.post('/', async (req, res)=>{
    if (req.body.id == "239984394" && req.body.password == "MKO@OR)3pp)U)@JPjp#PMP#{{];wI#I)#I$--3_I#%_") {
        res.json({
            success: true
        })
    }
    else{
        res.json({
            success: false
        })
    }
})

module.exports = router