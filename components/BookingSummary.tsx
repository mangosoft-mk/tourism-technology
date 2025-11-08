import React from 'react';
import type { BookingDetails } from '../types';

interface BookingSummaryProps {
  details: BookingDetails;
}

const SummaryItem: React.FC<{ label: string; value: string | number | null }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-600/50">
    <span className="text-gray-400">{label}</span>
    <span className={`font-medium ${value ? 'text-white' : 'text-gray-500'}`}>
      {value ?? 'Not set'}
    </span>
  </div>
);

const BookingSummary: React.FC<BookingSummaryProps> = ({ details }) => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-gray-700 w-full lg:w-96">
      <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Booking Summary</h2>
      <div className="space-y-2">
        <SummaryItem label="Check-in Date" value={details.checkInDate} />
        <SummaryItem label="Nights" value={details.nights} />
        <SummaryItem label="Adults" value={details.adults} />
        <SummaryItem label="Children" value={details.children} />
        <SummaryItem label="Children Ages" value={details.childrenAges ? details.childrenAges.join(', ') : null} />
      </div>
    </div>
  );
};

export default BookingSummary;
