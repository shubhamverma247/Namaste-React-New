import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)

        //this is same like usestate hook 
        this.state={
            UserInfo:{
                name:"",
                location:"",
            }
        }
    }

    // Construct called===>  render() called ===>  componentDdMount() called===>>

   //when there is more than one children in parent compmonent then redner cycly will be slightly different 

   //    becaus react do this for the more optimize way --- it simply rap the all chuildrens render then update the dom in commit phase 

/**
 *   -Parent Constructor
 *   -Parent Render
 *     -First child constructor
 *     -First child Render
 *     -Second child constructor
 *     -Second child Render
 *     -First child componentDidMount
 *     -Second child componentDidMount
 *   -Parent componentDidMount 
 * 
 *   there are two phases in react life cycle
 *     -Render Phase
 *       -Cosntructor
 *       -Render
 *     -Commit Phase
 *       -Acutually update the dom 
 *      
 */

    //this is method is use as useEffect whihc is use in functional component

    //this fucntion is used to call api call, 
    // componentDidMount(){

    //     //API calls
    // }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/shubhamverma247");
        const json = await data.json();
console.log(json)
        // update state 
        this.setState({
            UserInfo:json
        })
        this.timer = setInterval(()=>{
            console.log("class based component")
        },1000)
        
    }

    //will be called when set state is updated and render is called again with real data and dom updated with real data
    componentDidUpdate(){
        
    }

    componentWillUnmount(){
clearInterval(this.timer)
    }

    // how to update state variable
    render(){
        const {name,location,avatar_url} = this.state.UserInfo;
        
        return(
            <div className="user-card">
            <img src={avatar_url}></img>
           
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: vermashubham286@gmail.com</h3>
        </div>
        )
    }
}


/**
 * -----------------Mounting Cycle--------
 * 
 *  cosntructor(dummy dta)
 *  render(dummy data)
 *      <html Dummy>
 * 
 *  component did moount 
 *      <api call>
 *      <this.setstate> -> saate varaoble is upated
 * 
 * -----------------Updating Cycle--------
 * 
 *   render(api data)
 *   <html api data>
 * -----------------Unmounting Cycle
 */

export default UserClass;