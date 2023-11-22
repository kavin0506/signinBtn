import logo from './logo.svg';
import './App.css';
import Table from './Table';
import TableFunc from './FuncTable';
import List from './List';
import ListClass from './ClassList';
import Greet from './Greet';
import Usestate from './Usestate';
import React from 'react';
import StateMeth from './Usestate';
import UsestateCom from './UsestateCom';


function App() {
  const playerName=[
    {
    name:"bala",
    age:23,
    role:"bowler"
  },
  {
    name:"arun",
    age:23,
    role:"bowler"
  },
  {
    name:"kamesh",
    age:23,
    role:"batsman"
  },
  {
    name:"kavi",
    age:23,
    role:"allrounder"
  },
  {
    name:"prakesh",
    age:23,
    role:"bowler"
  },
]
  const userDetails=[
    {
      name:"bala",
      age:20,
      profession:"designer"
    },
    {
      name:"arun",
      age:21,
      profession:"tester"
    },{
      name:"kamesh",
      age:20,
      profession:"developer"
    },{
      name:"kavi",
      age:22,
      profession:"tester"
    }
  ]

  const sports=[
    {
      sname:"Cricket"
    },
    {
      sname:"Football"
    },{
      sname:"Kabbadi"
    },{
      sname:"Hockey"
    }
  ]

  const name=[
    {
      pname:"Ajay"
    },
    {
      pname:"Deepan"
    },{
      pname:"Sudhar"
    },{
      pname:"Hari"
    }

  
  ]
  
  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }
    
    
    ]


  return(
    <div className="App">
      <h2>Functional Component</h2>
      <TableFunc userData={userDetails}/>
      <h2>Class Component</h2>
      <Table team={playerName}/>
      <h2>List(Functional Component)</h2>
      <List sportsName={sports}/>
      <h2>List (Class Components)</h2>
      <ListClass cname={name}/>
      <Greet use="worker" age="22"/>
      <StateMeth  nameState={employee}/>
      <UsestateCom/>
      
    </div>
  );
}

export default App;
