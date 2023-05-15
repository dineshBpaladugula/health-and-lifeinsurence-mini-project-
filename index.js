import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/newdb", {
    dbName:"newdb",
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
    
}) 


app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
const ApplicationFormSchema = new mongoose.Schema({
        proposal : String,
        intermediaryname: String,
        intermediarycode: String,
        branchcode: String,
        rmcode: String,
        sector: String,
        fullname: String,
        contact: String,
        address: String,
        state: String,
        city: String,
        pincode: String,
        email: String,
        pan: String,
        person: String,
        date: String,
        place: String,
        policyholder: String
})

const ApplicationForm = new mongoose.model("ApplicationForm", ApplicationFormSchema)

app.post("/submit_application", (req, res)=> {
    const { proposal,intermediaryname,intermediarycode,branchcode,rmcode,sector,fullname,contact,address,state,city,pincode,email,pan,person,date,place,policyholder} = req.body
    console.log("requestbody",JSON.stringify(req.body))
    ApplicationForm.findOne({proposal : proposal}, (err,applicationForm) => {
        if(applicationForm){
            res.send({message: "Application already submitted"})
        } else {
            const Application = new ApplicationForm({
                proposal,intermediaryname,intermediarycode,branchcode,rmcode,sector,fullname,contact,address,state,city,pincode,email,pan,person,date,place,policyholder
            })
            Application.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Application is submitted" })
                }
            })
        }
    }) 
})


app.listen(9002,() => {
    console.log("BE started at port 9002")
}) 