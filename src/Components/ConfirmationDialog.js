// ConfirmationDialog.js
import React from 'react';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, message ,theme}) => {
  if (!isOpen) return null;
  const confirmClass=`rounded-lg p-6 w-1/3 ${theme=='light'?'bg-white':'bg-black text-white'}`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={confirmClass}>
        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
