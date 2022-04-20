import React from 'react';

type Props = {
  type: string;
  options: {
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
  };
};

const Options = ({ type, options }: Props) => {
  return (
    <div>
      {type === 'DVD' && <p>Size: {options.size} MB</p>}
      {type === 'FURNITURE' && (
        <p>{`Dimension: ${options.length}x${options.height}x${options.width}`}</p>
      )}
      {type === 'BOOK' && <p>Weight:{options.weight}KG</p>}
    </div>
  );
};

export default Options;
