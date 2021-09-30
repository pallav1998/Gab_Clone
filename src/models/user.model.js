const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const signupSchema = new mongoose.Schema({
  user_name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  confirm_password:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});

signupSchema.pre("save",async function(next){


  if(this.isModified("password")){
 
    this.password=await bcrypt.hash(this.password,12)
     
    this.confirm_password=await bcrypt.hash(this.confirm_password, 12);
  }
  next()
})


const User=mongoose.model("user",signupSchema);
module.exports=User;