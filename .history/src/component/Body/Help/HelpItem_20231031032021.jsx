import React, { Component } from 'react';

class HelpItem extends Component {
    render() {
        return (
            <div className='help-item flex items-center p-5 justify-end'>
                  <div className="content-help">
                    <h4>دوره های اختصاصی</h4>
                    <p>با پشتیبانی و کیفیت بالا ارائه میده. چون خوش نام بودن نام برند و منافع مشتری و حفظ شان دیگر همکارانش براش مهمه</p>
                </div>
                <div className="circle-help">
                <div id="my-pie-chart"></div>
                </div>
              
            </div>
        );
    }
}

export default HelpItem;
