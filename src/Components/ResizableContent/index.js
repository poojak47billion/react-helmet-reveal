/* eslint-disable  */
import React, { Fragment, useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';

const ResizableContent = props => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);
  const [aspectRatio, setAspectRatio] = useState(props.aspectRatio);
  const contentStyle = {
    top,
    left,
    width,
    height,
    position: 'absolute',
  };

  const handleResize = (style, isShiftKey, type) => {
    const { top, left, width, height, aspectRatio } = style;
    setWidth(Math.round(width));
    setHeight(Math.round(height));
    setTop(Math.round(top));
    setLeft(Math.round(left));
    setAspectRatio(Math.round(aspectRatio));
  };

  const handleDrag = (deltaX, deltaY) => {
    setLeft(left + deltaX);
    setTop(top + deltaY);
  };

  return (
    <Fragment>
      <div style={contentStyle}>{props.children}</div>
      <ResizableRect
        top={top}
        rotatable
        left={left}
        aspectRatio={aspectRatio}
        minWidth={10}
        width={width}
        minHeight={10}
        height={height}
        onDrag={handleDrag}
        onResize={handleResize}
        zoomable="nw, ne, se, sw"
      />
    </Fragment>
  );
};

export default ResizableContent;
