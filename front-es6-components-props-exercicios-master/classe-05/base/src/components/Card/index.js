import './style.css';
import CloseIcon from '../../assets/close.svg';



export default function Card({ children, image, btnColor, btnText }) {
    return (
        <>
            <div className="card">
                <img src={CloseIcon}
                    alt=""
                    className="close-icon"
                />
                <img
                    className="figure"
                    src={image}
                    alt="figure card"
                />
                {children}
                <button
                    className={`btn-${btnColor}'}`}>
                    {btnText}
                </button>
            </div>


        </>
    )
}