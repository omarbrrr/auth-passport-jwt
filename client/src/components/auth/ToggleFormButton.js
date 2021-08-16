import React from 'react';
import { Link } from 'react-router-dom';

export default function ToggleFormButton({ route, text, buttonLabel }) {
  return (
    <p className="mt-4 text-center text-xs">
      {text}{' '}
      <Link
        to={route}
        className="font-semibold text-indigo-600 hover:text-indigo-800 pointer"
      >
        {buttonLabel}
      </Link>
    </p>
  );
}
