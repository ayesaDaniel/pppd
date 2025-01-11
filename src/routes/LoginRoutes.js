import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import WelcomeScreen from '../pages/WelcomeScreen';
import TopRated from '../pages/TopRated';
import Schedule from '../pages/Schedule';
import SignInForm from '../pages/Auth/SignInForm';
import Experience from '../pages/Experience';
import ComfirmPassword from '../pages/Auth/ComfirmPassword';
import SignUpForm from '../pages/Auth/SignUpForm';
import EmailVerification from '../pages/Auth/EmailVerification';
import EmailSuccess from '../pages/Auth/EmailSuccess';
import SearchRepair from '../pages/SearchRepair';
import ReviewRepair from '../pages/ReviewRepair';
import SearchResult from '../pages/SearchResult';
import AutoSpecialistProfile from '../pages/AutoSpecialistProfile ';
import ReviewRating from '../pages/ReviewRating';
import ReviewSpeciaist from '../pages/ReviewSpeciaist';
import FileUpload from '../pages/FileUpload';
import WorkshopFUpload from '../pages/WorkshopFUpload';
import ReceiptUpload from '../pages/ReceiptUpload';
import YourReview from '../pages/YourReview';
import WaitlistVerf from '../pages/WaitlistVerf';
import PremiumPlan from '../pages/PremiumPlan';
import Checkout from '../pages/Payment/Checkout';
import CardPayment from '../pages/Payment/CardPayment';
import OtpEntry from '../pages/Auth/OtpEntry';



const LoginRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<WelcomeScreen/>} />
      <Route path="/rated" element={<TopRated />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/started" element={<SignInForm/>} />
      <Route path="/continue" element={<ComfirmPassword/>} />
      <Route path="/signin" element={<SignUpForm/>} />
      <Route path="/login" element={<EmailVerification/>} />
      <Route path="/emailVerification" element={<EmailSuccess/>} />
      <Route path="/search" element={<SearchRepair />} />
      <Route path="/review" element={<ReviewRepair />} />
      <Route path="/searchresult" element={<SearchResult/>} />
      <Route path="/AutoSpecialistProfile" element={<AutoSpecialistProfile/>} />
      <Route path="/ReviewRating" element={<ReviewRating/>} />
      <Route path="/reviewspecialist" element={<ReviewSpeciaist/>} />
      <Route path="/FileUpload" element={<FileUpload/>} />
      <Route path="/WorkshopUpload" element={<WorkshopFUpload/>} />
      <Route path="/ReceiptUpload" element={<ReceiptUpload/>} />
      <Route path="/YourReview" element={<YourReview/>} />
      <Route path="/WaitlistVerfication" element={<WaitlistVerf/>} />
      <Route path="/PremiumPlan" element={<PremiumPlan/>} />
      <Route path="/Checkout" element={<Checkout/>} />
      <Route path="/CardPayment" element={<CardPayment/>} />
      <Route path="/otp" element={<OtpEntry/>} />

      
    </Routes>
  </Router>
  )
}

export default LoginRoutes