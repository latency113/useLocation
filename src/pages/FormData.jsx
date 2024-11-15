import React, { useState }from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <div className="bg-gray-300 flex justify-center min-h-screen">
      <div className="flex flex-col items-center">
      <h1 className="bg-blue-500 text-3xl p-2 mt-[150px] mb-5 rounded-lg shadow-lg text-white w-full text-center">แบบฟอร์มคำนวณภาษีเงินได้</h1>
        <div className="bg-white shadow-lg p-6 rounded-lg text-2xl">
            <h1 className="text-center font-bold text-3xl bg-blue-500 text-white rounded-md p-2">กรุณากรอกข้อมูล</h1>
              <form onSubmit={submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-4">
                <label className="bg-blue-500 text-white flex p-1 rounded-md justify-center gap-1">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>
                  เงินเดือน
                </label>
                  <input className="border-black border rounded-md text-center w-full "  type="number" name="salary" id="salary" min="0" onChange={handleChange} required/>
                <label className="bg-blue-500 text-white flex p-1 rounded-md justify-center gap-1">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"/></svg>
                  โบนัส
                </label>
                  <input className="border-black border rounded-md text-center w-full" type="number" name="bonus" id="bonus" min="0"onChange={handleChange} required/>
                <label className="bg-blue-500 text-white flex p-1 rounded-md justify-center gap-1">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/></svg>
                  ค่าประกันสังคม
                </label> 
                  <input className="border-black border rounded-md text-center w-full"  type="number" name="social" id="social" min="0" onChange={handleChange} required/>
                <label className="bg-blue-500 text-white flex p-1 rounded-md justify-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>
                  จำนวนบุตร 
                </label>
                  <input className="border-black border rounded-md text-center w-full" type="number" name="child" id="child" min="0" onChange={handleChange} required/>
                <label className="bg-blue-500 text-white flex p-1 rounded-md justify-center gap-1">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"/></svg>
                  ค่าเบี้ยประกันชีวิต
                </label>
                  <input className="border-black border rounded-md text-center w-full"  type="number" name="lifeinsurance" id="lifeinsurance" min="0" onChange={handleChange} required/>
                <p></p><button className="bg-blue-500 text-white text-xl p-2 mt-3 rounded-md hover:bg-blue-700 " type="submit">คำนวณ</button>
              </form>
        </div>
      </div>
    </div>
  );
};
export default FormData;
