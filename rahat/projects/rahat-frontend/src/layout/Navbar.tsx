import React, { useState } from 'react';
import ConnectWallet from '../components/ConnectWallet'; // Adjust the import path as needed

const NavBar = () => {
  const [openWalletModal, setOpenWalletModal] = useState(false);

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal);
  };

  return (
    <div className="flex flex-row justify-between items-center mb-[35px] gap-6">
      <div className="text-white">
        <h1 className="pl-8 text-2xl text-green-400">Rahat Algorand Dapp</h1>
      </div>
      <div className="flex justify-end items-center gap-4">
        <button
          type="button"
          className="text-black  bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm mr-9 p-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={toggleWalletModal}
        >
          {openWalletModal ? 'Connect Wallet' : 'Disconnect Wallet'}
        </button>
      </div>
      {openWalletModal && <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />}
    </div>
  );
};

export default NavBar;
