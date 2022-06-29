import { Fragment } from 'react';
import styles from './Model.module.css';
import ReactDom from 'react-dom';

const Backdrop=props=>{
    return(<div className={styles.backdrop} onClick={props.onClose}></div>);
};

const ModelOverlay=props=>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

const portalElement=document.getElementById('overlays');

const Model=(props)=>{
  return(<Fragment>
    {ReactDom.createPortal(<Backdrop  onClose={props.onCloseCart} />,portalElement)}
    {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
  </Fragment>)
};

export default Model;