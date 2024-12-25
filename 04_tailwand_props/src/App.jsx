import "./App.css";
import Card from "./components/Card.jsx";

function App() {


  // we want to pass the object and array use below systax

  let arr = [1, 2, 3, 4, 5, 6];
  let myObj = {
    username: "chirag",
    email: "Zanpadiya@0405gmail.com",
  };
  return (
    <>
      <h1 className="bg-green-500 p-5 text-center to-black text-black rounded-xl mb-4">
        Chirag Zanpdadiya
      </h1>

      {/*  we cannot directly pass the object like this */}
      {/* <Card  myArr = [1,2,3] /> */}
      {/* <Card myObj = {username : " chriag "} */}


      {/* we if want to pass the object use this systex */}
      {/* <Card username="Chirag Zanpadiya" sameObj = {arr} /> */}
      {/* <Card username="Chirag Zanpadiya" sameObj = {myObj} /> */}
      <Card username="Chirag Zanpadiya" />
      <Card  username="Prashant Zanpadiya"/>
    </>
  );
}

export default App;
