import { useState, useEffect } from 'react';
import { CustomJumbotron } from '../shared/custom/CustomJumbotron';

const formatDateTime = (date: Date): FormattedDateTime => {
  return {
    date: date.toLocaleDateString('es', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    hours: String(date.getHours()).padStart(2, '0'),
    minutes: String(date.getMinutes()).padStart(2, '0'),
    seconds: String(date.getSeconds()).padStart(2, '0'),
  }
}

interface FormattedDateTime {
  date: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const initialDateTime: FormattedDateTime = formatDateTime(new Date());


export const DigitalClock = () => {

  const [currentDateTime, setCurrentDateTime] = useState<FormattedDateTime>(initialDateTime);

  const { date, hours, minutes, seconds } = currentDateTime;

  useEffect(() => {
    
    const timerId = setInterval(() => {
      setCurrentDateTime(formatDateTime(new Date()));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="flex flex-col gap-10 min-h-screen items-center justify-center">
      <CustomJumbotron title='Digital Clock' />

      <div className="text-center">
        <div className="rounded-lg bg-black/50 p-8 text-white shadow-2xl backdrop-blur-sm">
          <div className="font-mono text-7xl font-bold tracking-widest">
            <span>{hours}</span>
            <span className="animate-pulse">:</span>
            <span>{minutes}</span>
            <span className="animate-pulse">:</span>
            <span>{seconds}</span>
          </div>
          <div className="mt-2 text-lg text-gray-300">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};