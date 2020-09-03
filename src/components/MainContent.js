import React from 'react'

const MainContent = () => {
  const date = new Date(2018, 6 ,31 ,21 );
  const hours = date.getHours();

  let timeOfDay;  
  
  const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: "100px",
    textAlign: "center"
  }

  if (hours < 12 ){
    timeOfDay = "morning";
    styles.color = "#04756F"
  } else if ( hours > 12 && hours < 17 ) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night";
    styles.color = "#D90000"
  }

  return (
  <h1 style={styles} > Good {timeOfDay}!</h1>
  )
}
export default  MainContent;
