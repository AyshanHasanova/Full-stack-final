import catchAsyncErrors from "../middlewares/catchAsyncErrors.js"
import User from "../models/User.js"
import ErrorHandler from "../utils/errorHandler.js"
import sendToken from "../utils/sendToken.js"






export const registerUser = catchAsyncErrors( async(req,res,next)=>{
    const {name,email,password} = req.body

    const user = await User.create({
         name,
         email,
         password})

     

    //   before
    //   const token = user.JwtTokeniEldeEt()   
    // res.status(201).json({
    //    token
    // })

    // after
    sendToken(user,201,res)
})


export const loginUser = catchAsyncErrors(async(req,res,next)=>{
  const{email,password}=req.body

  if(!email || !password){
      return next(new ErrorHandler("Zehmet olmasa email ve ya shifreni daxil edin",400))
  }
  const user = await User.findOne({email,}).select("+password")
  if(!user){
      return next (new ErrorHandler ("Bele bir emaili olan istfadeci tapilmadi",404))
  }
  const isPasswordMatched = await user.shifreleriMuqayiseEt(password)

  if(!isPasswordMatched){
      // unauthorized request
      return next (new ErrorHandler ("Shifreniz yalnisdir",401))
  }
//   const token = user.JwtTokeniEldeEt()

//   res.status(200).json({
//       token
//   })

  sendToken(user,200,res)
}
  
)

// Cookieden melumat silinmesi
export const logout = catchAsyncErrors ( async (req,res,next)=>{
  res.cookie("token",null,{
      expires : new Date (Date.now()),
      httpOnly : true
  })

  res.status(200).json({
      message : "Cixis etdiniz"
  })
})


export const getUserProfile = catchAsyncErrors(async(req,res,next)=> {
  const user = await User.findById(req.user.id)

  res.status(200).json({
      success:true,
      user
  })
})