import {useState} from 'react';

const KeyboardClipboard = () => {
  const [content, setContent] = useState ('');

  const handleKeyDown = e => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert ('Please dont enter a number');
      e.preventDefault ();
    }
  };

  const handlePaste = e => {
    console.log (e.target);
    // e.target.style.border = '3px solid red';
    e.target.className = 'form-control border border-danger border-4';
    e.target.style.fontSize = '20px';
  };

  const handelCopy = e => {
    alert ('Coping Illegal');
    e.preventDefault ();
  };
  return (
    <div className="container mt-4">

      <h2 className="text-center">Keyboard-Clipboard</h2>

      <input
        type="text"
        className="form-control"
        onChange={e => {
          e.target.value = e.target.value.toLocaleUpperCase ();
          setContent (e.target.value);
        }}
        onKeyDown={handleKeyDown}
        value={content}
      />

      <div className="mt-4">
        <h3>Copied Content</h3>
        <p onCopy={handelCopy}>{content.toLocaleLowerCase ()}</p>
      </div>

      <textarea
        name="form-control"
        id=""
        cols="30"
        rows="10"
        onPaste={handlePaste}
      />

    </div>
  );
};

export default KeyboardClipboard;
