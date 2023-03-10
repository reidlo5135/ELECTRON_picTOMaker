import React from 'react';

export default function Modal(props:any) {
    const { open, close, header } = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section className="modal-secs">
                    <header>
                        {header}
                    </header>
                    <main>
                        <span className={'modal-span'}>
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </span>
                        {props.children}
                    </main>
                </section>
            ) : null}
        </div>
    );
};