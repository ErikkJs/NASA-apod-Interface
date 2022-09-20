import React from 'react';

import Modal from './Modal/index';
import useModal from './Modal/useModal';

export default function Card(data) {
  const { isShowing, toggle } = useModal();
  const { title, url, explanation, date, copyright, hdurl, media_type } = data
    ? data.data
    : {};

  const media =
    media_type === 'image' ? (
      <img
        alt={title}
        className="block h-max-80 mx-auto"
        src={url}
        onClick={toggle}
      />
    ) : (
      <iframe
        title={title}
        className="block h-max mx-auto"
        src={url}
        allowFullScreen
      />
    );

  return (
    <>
      <article className="overflow-hidden rounded-lg shadow-lg">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">{title}</h1>
        </header>
        {media}
      </article>
      <Modal isShowing={isShowing} onHide={toggle}>
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            {media_type === 'image' ? (
              <img alt={title} className="block h-max-80 h-min-80  mx-auto" src={hdurl} />
            ) : (
              <iframe
                title={title}
                className="block h-max mx-auto"
                src={hdurl}
                allowFullScreen
              />
            )}
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl font-bold w-full text-center my-2">{title}</h1>
            <p className="text-lg font-bold w-full text-center">{date}</p>
            <p className="text-lg font-bold w-full text-center">{copyright}</p>
            <p className="text-lg font-bold w-full text-center">
              {explanation}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
