import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
export function LoginPage() {
    let navigate = useNavigate()
    const [username, setUsername] = useState('')

    const handleChange = (set : any) => (event : any) => {
      set(event.target.value);
    }

    const authenticate = () => {
      axios.put('user', { 
          username: username, 
      })
      .then((response) => {
        if(response?.headers?.getAuthorization) {
          localStorage.setItem('authorization', "AUTH")
          navigate("/dashboard")
        } else {
          navigate("/registration")
        }
      })
      .catch((err) => {
        console.log("Invalid Login.")
      })
    }


  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="header w-[700px] max-w-[200vw] p-4">
            Wolfenbaum
          </div>
        </header>
        <div className="max-w-[400px] w-full space-y-6 px-4">
          <nav className="text-center rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200">
              Please enter your username or email.
            </p>
            <div className="self-center text-red bg-white text-gray-700">
              <input type="text"
                      onInput={handleChange(setUsername)}
                      aria-label="Username or Email"
                      className="text-center" />
            </div>
            <div className="self-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={authenticate}>
                Login
              </button>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}
