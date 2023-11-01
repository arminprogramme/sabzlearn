import React, { Component } from 'react';
import Navbar from './Navbar.js'
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div>
            <Navbar/>

            <div className="banner-header bg-custom-dark  max-width-header">
                <div className="grid gap-5 xl:grid-cols-2 bg-custom-dark">
                    <div className="img-banner p-5">
                        <img src="images/general/boy-dark.svg"  alt="" />
                    </div>
                    <div className="text-center xl:text-right">
                        <div className="message-banner flex justify-center xl:justify-end">
                            <p>
                                ۳ تا دوره جدید سبزلرنو دیدی؟🤯🔥                            </p>
                        </div>
                        <div className="title-banner">
                            <h2>
                                ما به هرقیمتی
                                <br  className=' sm:inline'/>
                                آموزش تولید نمیکنیم
                            </h2>
                            <p>
						با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن
					</p>
                        </div>
                        <div className="button-banner xl:flex justify-center xl:justify-end  items-center">
                            <div className="btn play-btn-div flex justify-center py-3 items-center ">
                            <span>ما کی هستیم</span>
                                <button>
                                    <i className="fa fa-play"></i>
                                </button>
                              
                            </div>
                            <div className="btn how-start-banner">
                            <button>از اینجا شروع کن</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Header;
