import React from 'react';
import CloseSVG from './delete-close.svg';

const Modal = ({ children, isShowing, onHide }) =>
  isShowing ? (
    <>
      <div className="fixed overflow-y-scroll inset-0 bg-gray-900/75 z-50">
        <div className="py-20">
          <div
            className="w-11/12 min-h-37.25 z-50 bg-white justify-center mx-auto rounded"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="relative bg-gray-50 min-w-full p-2 md:p-5 rounded ">
              {onHide && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="p-2 ml-1"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={onHide}
                  >
                    <img src={CloseSVG} height={12} width={12} alt="exit" />
                  </button>
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;

export default Modal;
