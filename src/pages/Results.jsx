import React from "react";
import { useLocation, useNavigate , NavLink} from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;
  let salaryOfYear = formData.salary * 12 + parseInt(formData.bonus);
  let expenses = salaryOfYear * 0.5 <=100000 ? salaryOfYear * 0.5:100000 ;
  let child = parseInt(formData.child)*30000 <=60000 ? parseInt(formData.child) * 30000:60000;
  let social = parseInt(formData.social) <= 30000 ? parseInt(formData.social) : 30000;
  let lifeinsurance = parseInt(formData.lifeinsurance) <=100000 ? parseInt(formData.lifeinsurance) : 100000;
  let deduction = 60000 + child + social + lifeinsurance;
  let income = salaryOfYear - expenses - deduction 
  let ptax = 0
  if (income <= 100000 ) ptax = 0
  else if (income <= 300000) ptax = 0.05
  else if (income <= 1000000) ptax = 0.10
  else ptax = 0.15

  
  return ( 
    <div className="bg-gray-300 flex justify-center min-h-screen">
      <div className="flex flex-col">
            <h1 className="bg-blue-500 text-3xl p-2 mt-[150px] mb-5 rounded-lg shadow-lg text-white w-full text-center">แบบฟอร์มคำนวณภาษีเงินได้</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                
                <h1 className="bg-blue-500 text-white rounded-md p-2 text-2xl text-center font-bold">คำนวณภาษี</h1>
                <div className="grid grid-row gap-2 text-xl pt-5">
                    <p className="bg-blue-500 text-white rounded-md p-2 flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                        เงินได้ทั้งปี: <span className="text-red-400 font-bold">{(salaryOfYear).toLocaleString()} </span>บาท
                    </p>
                    <p className="bg-blue-500 text-white rounded-md p-2 flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
                        ค่าใช้จ่าย: <span className="text-red-400 font-bold">{(expenses).toLocaleString()} </span>บาท
                    </p>
                    <p className="bg-blue-500 text-white rounded-md p-2 flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                        ค่าลดหย่อน: <span className="text-red-400 font-bold">{(deduction).toLocaleString()} </span>บาท
                    </p>
                    <p className="bg-blue-500 text-white rounded-md p-2 flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                        เงินได้พึ่งประเมินสุทธิ: <span className="text-red-400 font-bold">{(income).toLocaleString()} </span>บาท
                    </p>
                    <p className="bg-blue-500 text-white rounded-md p-2 flex gap-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M3 11h18M3 15h18M8 10.792V19m4-8.208V19m4-8.208V19M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
                        ภาษี <span className="text-red-400 font-bold">{ptax*100}%</span>
                    </p>
                    <p className="bg-blue-500 text-white rounded-md p-2 flex gap-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>
                        ภาษีที่ต้องชำระ: <span className="text-red-400 font-bold">{(income*ptax).toLocaleString()} </span>บาท
                    </p>
                </div>

                
            </div>
            <NavLink to="/"><button className="bg-blue-500 w-full p-2 mt-5 rounded-lg text-white hover:bg-blue-700 shadow-lg">ย้อนกลับ</button></NavLink>
        </div>
    </div>
  );
};
export default Results;
