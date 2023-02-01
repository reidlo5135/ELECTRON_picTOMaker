import React, {useState} from 'react';
import {useCookies} from "react-cookie";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import Top from "../../component/Top";
import Modal from "../../component/Modal";
import './main.css';
import '../../styles/font.css';
import '../../styles/modal.css';
import '../../styles/login.css';
import Logo from "../../assets/image/Logo.png";
import kakaotalk from "../../assets/image/kakaotalk.png";
import naver from "../../assets/image/naver.png";

export default function Main() {
    const [cookies, setCookie] = useCookies(["accessToken"]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();

    const openModal = () => {
        const token = cookies.accessToken;
        if ((token === null || token === undefined) && !isLogged) {
            setModalOpen(true);
        } else {
            history.push("/select");
        }
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const emailInputCheck = (event:any) => {
        setEmail(event.target.value);
    }

    const pwInputCheck = (event:any) => {
        setPassword(event.target.value);
    }

    return (
        <React.Fragment>
            <Top/>
            <div className={'explanation'}>
                <div className={'Title'}>
                    <div className='MainTitle'>
                        쉽고 재밌는 픽토그램 제작 플랫폼
                    </div>
                    <div className='SubTitle'>
                        PC와 Mobile을 통해 간단하고 재밌게
                        <div>
                            픽토그램을 제작해 보세요.
                        </div>
                    </div>
                    <button className='MainButton' onClick={openModal}>
                        무료로 시작
                    </button>
                    <div className={'loginModal'}>
                        <Modal open={modalOpen} close={closeModal}>
                            <div className='SignIn'>
                                <div className='SI-Content'>
                                        <span className={'logo_modal'}>
                                            <img src={Logo} alt="PictoMaker-Logo" />
                                        </span>
                                    <div className='SI-Input'>
                                        <form>
                                            <div className='SI-Form'>
                                                <input type={'email'} className='form-input' onChange={emailInputCheck} placeholder="이메일"/>
                                                <input type={'password'} className='form-input' onChange={pwInputCheck} placeholder="비밀번호"/>
                                            </div>
                                            <button className='SI-Button'>
                                                로그인
                                            </button>
                                        </form>
                                    </div>
                                    <p>
                                        <Link to='/signUp'>
                                            <p className={'p_signUp'}>회원가입</p>
                                        </Link>
                                    </p>
                                    <div className='Sns-Si'>
                                        <hr className='.social-inline' />
                                        <span>간편 로그인</span>
                                        <div className='Si-social-div'>
                                            <a href={"/"}><img src={kakaotalk} alt="kakaotalk-icon" /></a>
                                            <a href={"/"}><img src={naver} alt="naver-icon" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};