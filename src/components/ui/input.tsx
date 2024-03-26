import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={`${className} ps-10 p-2.5 ex h-10 w-full rounded-md border bg-background px-3 py-2 text-md  
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
      `}
      {...props}
    />
  );
};
