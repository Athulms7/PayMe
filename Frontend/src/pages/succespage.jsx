import React from 'react';
import { Link } from 'react-router-dom';
export function PaymentSuccess ({balance,amount,tid}){
  const today = new Date();
  const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const currentDate = month + "/" + date + "/" + year;
const showTime = today.getHours() + ':' + today.getMinutes();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div>
        <h1 className="text-2xl font-semibold text-gray-800">Payment successful</h1>
        <p className="text-gray-500 mt-1">Successfully paid <strong>Rs. {amount} </strong></p>
              <p className="text-black mt-1">Redirecting in 5 seconds <div className='text-blue-400 hover:underline  '><Link to="/dashboard">Goto HomePage</Link></div></p>
</div>
        
        <div className="mt-6 bg-white shadow-md rounded-xl border p-5 text-left">
          <h2 className="text-md font-semibold mb-4 text-gray-700">Transaction Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Transaction ID</span>
              <span className="font-medium text-gray-900">{tid}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Date</span>
              <span className="font-medium text-gray-900">{showTime} | {currentDate}</span>
            </div>
            
            <div className="flex justify-between text-gray-600">
              <span>Amount</span>
              <span className="font-medium text-gray-900">Rs.{amount}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Fee</span>
              <span className="font-medium text-gray-900">Rz.0.0</span>
            </div>
            <div className="flex justify-between text-gray-600 items-center">
              <span>Status</span>
              <span className="text-green-600 font-semibold flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707z" clipRule="evenodd" />
                </svg>
                Success
              </span>
            </div>
          </div>
        </div>


        <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl transition duration-200">
          Download the Receipt
        </button>
      </div>
    </div>
  );
};


