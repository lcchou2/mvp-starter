import React from 'react';

class Beginning extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      display: 'none'
    }
  }

  componentDidMount() {
  
    setTimeout(() => {
      this.setState({ display: 'block' })
    }, 3000)

    
   
  }

  
  render() {
    return(

      <div>
            {/* <style>{'body { background-color: black; }'}</style> */}
     
    <div className = 'firstPage'>
    
     <img src="/europeslostf.jpg" alt=""></img>
      
      
      

      </div>


      <div className = 'container'>
      
      <div>
        
      </div>
      <div className = 'text'>
      {/* (You see a path ahead of you, but hear faint sounds behind)<br />
      {'                              '}<br/>
      Me: I.. know this forest. I know this moment in time.. it was right before I lost my friend to the
      <div className = 'textcolor'>₧₫Ω¬</div> 
      {'                              '}<br/>
      (It's time for a decision) */}
            <p>(You see a path ahead of you, but hear faint sounds behind)</p>
<p>Me: I.. know this forest. I know this moment in time.. </p>
<p>it was right before I lost my friend to the ₧₫Ω¬ <span>|</span></p>
<p></p>
      <div className = 'choiceonce'>
      <div style = {{display:this.state.display}}>

      <button className = 'buttono' onClick = {this.props.clickForm}>Continue</button>
      </div>

      </div>

      </div>
      </div>
      
      


      </div>
    

    )
   
  }
}

export default Beginning