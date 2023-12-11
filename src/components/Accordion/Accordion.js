import { useRef, useState } from 'react';
import './Accordion.scss';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef(null);
  return (
    <div className="accordion">
      <div className="accordion__header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="accordion__title">{title}</h3>
        <span
          className={
            'accordion__marker' + (isOpen ? ' accordion__marker_opened' : '')
          }
        ></span>
      </div>
      <div
        ref={contentEl}
        style={
          isOpen
            ? { height: contentEl.current.scrollHeight, marginBottom: '8px' }
            : { height: '0px', margin: '0px' }
        }
        className="accordion__content"
      >
        {content}
      </div>
    </div>
  );
}

export default Accordion;
