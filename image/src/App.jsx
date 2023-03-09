import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active:'ram',
    };
  }
  render(){
    let labels = ['ram', 'hari','ragava','krishna','nadana']
    return(
    <>
      <div>
        {
          labels.map((label)=> (
            <button 
            key={label}
            className={this.state.active === label ? 'active' : ''}
            onClick={()=>{
              this.setState({
                active:label,
              });
            }
            }>{label}</button>
          ))}
      </div> 
      <img 
              alt={this.state.active} 
              src={"./images/${this.state.active}.jpeg"}
              /> 
    </>
    );
  }
}

export default App;





