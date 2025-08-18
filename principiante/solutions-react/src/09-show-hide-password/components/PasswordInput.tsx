import { useState } from "react";

const EyeOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EyeClosedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 .527-1.666 1.32-3.206 2.278-4.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9.982 9.982 0 00-2.278-4.5M3 3l18 18"
    />
  </svg>
);

export const PasswordInput = () => {

  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  }
  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="password-input"
        className="mb-2 block font-semibold text-gray-300"
      >
        Contraseña
      </label>
      <div className="relative">
        <input
          id="password-input"
          type={isVisible ? "text" : "password"}
          className="w-full rounded-md border border-gray-300 p-3 pr-12 text-lg text-gray-300 shadow-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
          aria-label={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          onClick={toggleVisibility}
        >
          {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </button>
      </div>
    </div>
  );
};
