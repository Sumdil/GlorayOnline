import React from 'react';
import { CustomerDetails } from '../types';

interface CustomerFormProps {
  onSubmit: (details: CustomerDetails) => void;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit }) => {
  const [details, setDetails] = React.useState<CustomerDetails>({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Customer Details</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={details.address}
            onChange={(e) => setDetails({ ...details, address: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              value={details.city}
              onChange={(e) => setDetails({ ...details, city: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              value={details.zipCode}
              onChange={(e) => setDetails({ ...details, zipCode: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              required
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
      >
        Continue to Payment
      </button>
    </form>
  );
};