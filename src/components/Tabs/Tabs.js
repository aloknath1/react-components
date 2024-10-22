import React, { useEffect, useState } from "react";

const Tabs = (props) => {
    const [tabsHeaders, setTabsHeaders] = useState([]);
    const [contentMap, setContentMap] = useState([]);
    const [active, setActive] = useState('');
    const { children } = props;

    useEffect(() => {
        const headers = [];
        const map = {};
        React.Children.forEach(children, (element) => {
            //console.log('Element : ', element);
            if(!React.isValidElement(element)){
                return;
            }
                
            const {title} = element.props;
            headers.push(title);
            map[title] = element.props.children;

        });
       // console.log("headers", headers);
        setTabsHeaders(headers);
        setActive(headers[0]);
        setContentMap(map);
    },[props, children]);

    const changeTab = (header) => {
        setActive(header);
    }
    return (
        <>
            <div className="headers">
                {
                    tabsHeaders.map((header) => {
                        return <button 
                                className={active === header ? "selected" : ""}
                                key={header}
                                onClick={()=>changeTab(header)}>{header}</button>
                    })
                }
            </div>
            <div>
                {
                    Object.keys(contentMap).map((key, idx) => {
                        if(key === active){
                            return <div key={idx}>{contentMap[key]}</div>
                        }else{
                            return null;
                        }
                        
                    })
                }
            </div>
        </>
    ) 

}

export default Tabs;
