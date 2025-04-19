import React from "react";

function Register() {
  return (
    <section className="h-screen w-full">
      <div className="max-w-md mx-auto mt-[5%] bg-gray-800 rounded-lg shadow-md px-4 md:px-8 py-10 flex flex-col items-center gap-y-7">
        <img src="/yt.svg" alt="youtube_logo" className="h-5 md:h-8" />
        <form action="#" className="w-full flex flex-col gap-8">
          <div className="form-item">
            <label for="username" className="label-text">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input-field"
            />
          </div>

          <div className="form-item">
            <label for="email" className="label-text">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
            />
          </div>

          <div className="form-item">
            <label for="password" className="label-text">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm cursor-pointer"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
          </span>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Login
          </a>
        </div>
      </div>
    </section>
  );
}

export default Register;
