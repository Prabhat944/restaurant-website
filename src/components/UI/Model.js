import { Fragment } from 'react';
import styles from './Model.module.css';
import ReactDom from 'react-dom';

const Backdrop=prop=>{
    return(<div className={styles.backdrop}></div>);
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
    {ReactDom.createPortal(<Backdrop />,portalElement)}
    {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
  </Fragment>)
};

export default Model;