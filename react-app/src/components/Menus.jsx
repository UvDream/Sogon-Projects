
import React ,{useState}from 'react';
import './styles/Menus.less';
function Menus(){
    const [list] = useState([
        {name:"首页"},
        {name:"数据目录"},
        {name:"数据接口"},
        {name:"应用成果"},
        ]);
      return(
          <div className="menus">
            {list.map((val,index)=>(
                <section key={index}>{val.name}</section>
            ))}
          </div>
      )
}
export default Menus;