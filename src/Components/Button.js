function Button({ text, onClick }) {
  return (
    <>
      <button className="submit-button" onClick={onClick}>
        {text}
      </button>
      <style jsx>
        {`
          .submit-button {
            justify-content: center;
            border-radius: 20px;
            box-shadow: 0px 8px 30px 2px rgba(0, 0, 0, 0.1);
            background: linear-gradient(
              94deg,
              #b5179e -13.04%,
              #7209b7 124.22%
            );
            /* margin-top: 68px; */
            color: var(--text-Primary-text-02, #fefefe);
            white-space: nowrap;
            text-align: center;
            letter-spacing: -0.2px;
            padding: 12px 30px;
            font: 700 18px/133% Montserrat, -apple-system, Roboto, Helvetica,
              sans-serif;
            border: none;
            cursor: pointer;
          }

          @media (max-width: 991px) {
            .submit-button {
              margin-top: 40px;
              white-space: initial;
              padding: 0 20px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Button;
