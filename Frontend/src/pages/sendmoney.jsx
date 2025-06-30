import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NotPage } from "./pagenotfound";
import { useSearchParams } from "react-router-dom";
import { PaymentSuccess } from "./succespage";
export function SendMoneyPage() {
  const [searchparams] = useSearchParams();
  const id = searchparams.get("id");
  const name = searchparams.get("name");
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return (
      <div>
        <NotPage></NotPage>
      </div>
    );
  }

  const [balance, setbalance] = useState(0);
  const [moneysending, usemoneysend] = useState(0);
  const [user, setuser] = useState({});
  const [msg, setmsg] = useState("");
  const[transid,setid]=useState("");

  async function b() {
    console.log(token);
    const resp = await axios.get(
      "http://localhost:3000/api/v1/account/balance",
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("here");
    setbalance(resp.data.balance);
    setuser(resp.data.user);
  }
  useEffect(() => {
    b();
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    transferMoney();
  };
  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showPopup]);
  async function transferMoney() {
    console.log("here tokem", token);
    const response = await axios.post(
      "http://localhost:3000/api/v1/account/transfer",
      {
        toaccount: id,
        amount: parseFloat(moneysending),
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    await setbalance(response.data.update);
    setid(response.data.tid);
    
    if (response.data.msg == "Transaction completed") {
      setmsg(response.data.msg);
    } else {
      setmsg("Transaction Failed");
    }
  }

  return (
    <div>
      {showPopup && <PaymentSuccess balance={balance} amount={moneysending} tid={transid}/>}
      <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
        <div className="w-full max-w-sm text-white bg-gray-900 p-6 m-2 rounded-xl h-120">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">{user.firstname}</h2>
              <p className="text-sm text-gray-400">{user.username}</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <div className="w-full h-full object-cover p-1">{"$"}</div>
            </div>
          </div>

          <div className="text-center mb-2">
            <h1 className="text-5xl font-bold">
              Rs<span className="text-gray-400">{moneysending}</span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">No fees</p>
          </div>

          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center bg-[#1f1f1f] px-4 py-2 rounded-full space-x-2">
              <span className="text-xl"></span>
              <span className="text-sm text-white font-bold">
                Savings: Rs.{balance}
              </span>
            </div>
          </div>
          <div className="h-15 p-6 text-green-300 text-center">{msg}</div>

          <div className="mt-6">
            <input
              onChange={(e) => {
                usemoneysend(e.target.value);
              }}
              type="text"
              placeholder="Enter Amount"
              className="w-full px-4 py-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <button className="w-12 h-12 rounded-full bg-[#2e2e2e] flex items-center justify-center">
              📅
            </button>
            <button
              onClick={handleButtonClick}
              className="flex-1 bg-white hover:bg-gray-500  text-black font-bold py-3 rounded-full cursor-pointer"
            >
              Transfer to {name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
