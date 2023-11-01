import React, { Component } from 'react';

class HelpItem extends Component {
    render() {
        return (
            <div className='help-item flex justify-end'>
                <div className="circle-help"></div>
                <div className="content-help">
                    <h4>دوره های اختصاصی</h4>
                    <p>با پشتیبانی و کیفیت بالا ارائه میده. چون خوش نام بودن نام برند و منافع مشتری و حفظ شان دیگر همکارانش براش مهمه</p>
                </div>
            </div>
        );
    }
}

export default HelpItem;
