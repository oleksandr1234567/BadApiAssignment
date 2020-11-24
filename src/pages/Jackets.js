//@Autor Oleksandr Zakirov

import React from "react";
import "./products.css";
import { FixedSizeList } from 'react-window';

//Api Url
const Url ="http://bad-api-assignment.reaktor.com";


export default class FetchJackets extends React.Component {
  // States and global variables
  state = {
    isLoading: true,
    error: null,
    FetchJackets: [],
    FetchCounter: 0
  }
  availability = {};
  manufacturers = [];

  // Initial function to fetch the jackets 
  FetchJackets() {
    // Where the data is fetched from
    fetch(Url+"/products/jackets/")
   
      // Get the API response and receive data in JSON format...
      .then(response => response.json())
      // Update the users state
      .then(data =>{

        // Get a list of manufactures to facilitate loading 
        for(let i= 0; i<data.length; i++){
          if(this.manufacturers.indexOf(data[i].manufacturer) === -1 ){
            this.manufacturers.push(data[i].manufacturer); 
          }
        }
        //console.log(this.manufacturers);
     
        this.setState(() => {
        return {          
          FetchJackets: data,
          error: null,
          };
        },
        this.FetchJacketsAvailability
        )
      })
      // Catch errors and update the app
      .catch(error => this.setState({ error , isLoading: false }));
  }

  //Function to list the manufacturers
  checkLoadStatus (){
    //if(this.state.FetchCounter === this.state.FetchJackets.length){
    if(this.state.FetchCounter === this.manufacturers.length){
      this.setState({ isLoading: false  })
    }
    //console.log(this.state.FetchCounter);
  }

  //Function check the availability of the jackets
  FetchJacketsAvailability() {

    //Loop to check availability
    for (let i=0; i < this.manufacturers.length ; i++){
    
    // Where the data is fetched from
    fetch(Url+"/availability/" + this.manufacturers[i])
   
      // Get the API response and receive data in JSON format
      .then(response => response.json())
      // Update the users state
      .then(data =>{
          if(typeof data.response  !== "string")
          {
            // Manufucturer key 
            this.availability[this.manufacturers[i]] = data.response;  
            this.setState((prevState) => {
              return { FetchCounter: prevState.FetchCounter + 1 }
            },
            //List the manufacturers
            this.checkLoadStatus
            ); //console.log(data)
          }  
          else{ 
        
            this.setState({ errorMessage: "Something went wrong.... Please try refreshing the page."  })
            
        }      
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
 
    }
    //console.log(this.availability)
    // this.setState({ isLoading: false  })
  }

  //React hook 
  componentDidMount() {
    this.FetchJackets();
  }

  
   
  

  render() {
   
      
    
    
     const Appss = () => {
    

     const Row = ({ index, style }) => {

      let availability = this.availability[this.state.FetchJackets[index].manufacturer].find(
        product => product.id.toLowerCase() === this.state.FetchJackets[index].id.toLowerCase() 
        ).DATAPAYLOAD;

        
    
          return(
          <div style={style}>

            <div className="eachListRow">
              <h4> {this.state.FetchJackets[index].name}  -   {this.state.FetchJackets[index].color}  :  {this.state.FetchJackets[index].price} € </h4>    
                <p>[ {this.state.FetchJackets[index].manufacturer.toUpperCase()} ]: {availability.indexOf("OUTOFSTOCK") === -1 ? "In Stock": "Out of Stock"} <br />
                  id: {this.state.FetchJackets[index].id} 
                </p>  
              <hr/> 
          </div>
          </div>

          )
      
    }
    
      return (
        <FixedSizeList
          height={500}
          width={"98%"}
          itemCount={this.state.FetchJackets.length}
          itemSize={110}
          overscanCount={5}
          useIsScrolling={true}
        >
          {Row}
        </FixedSizeList>
      )
    }

    const { isLoading, error } = this.state;
    //console.log(this.availability);

    if(!this.state.errorMessage){
            return (
              <React.Fragment  >
                <h1 className="titleStyle"> Jackets</h1>

                {/* Display a message if there is an error */}
                {error ? <p>{error.message}</p> : null}
                
                {/*Checking data*                     */}
                {!isLoading ? (

                //Render the list of jackets and availability
                
                <Appss></Appss>
              
              ) : (
                    //Show loading message while data is being fetched
                      <h3 className="eachListRow" >Loading...</h3>
                    )
              }
              </React.Fragment>
            );
    }
    else{
      return(
        <div className="eachListRow">
        {this.state.errorMessage}
        
        {window.location.reload()}
        </div>
        );
    }
  }
}