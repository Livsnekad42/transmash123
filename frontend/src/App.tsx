import React, {useEffect, useState} from 'react';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from "axios";
// @ts-ignore
import Demo from "./Calendar";
import MyCalendar from "./Cal";
let config = {
  baseURL: ""
}

let http = axios.create(config)

function App() {

  const [workers, setWorkers] = useState([{
    names: '',
    id: 0,
    age: 0,
    accuracy: 0,
    endurance: 0,
    conflictability: 0,
    traumas: 0,
    mobility: 0,
    speed: 0,
    potential: 0,
    chpssh: 0,
    hansen: 0,
    communicability: 0,
    improvization: 0,
    responsibility: 0,
    scan: 0,
    workExperience: 0
  }])

  const worker = {
    names: '',
    id: 0,
    age: 0,
    accuracy: 0,
    endurance: 0,
    conflictability: 0,
    traumas: 0,
    mobility: 0,
    speed: 0,
    potential: 0,
    chpssh: 0,
    hansen: 0,
    communicability: 0,
    improvization: 0,
    responsibility: 0,
    scan: 0,
    workExperience: 0
  };

  function handleAll(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    axios.get('http://localhost:3000/get-all').then(resp => console.log(resp));
  }

  function handleForm(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'names':
        worker[event.target.name] = event.target.value
        break
      case 'age':
        worker.age = +event.target.value
        break
      case 'accuracy':
        worker.accuracy = +event.target.value
        break
      case 'endurance':
        worker.endurance = +event.target.value
        break
      case 'conflictability':
        worker.conflictability = +event.target.value
        break
      case 'traumas':
        worker.traumas = +event.target.value
        break
      case 'scan':
        worker.scan = +event.target.value
        break
      case 'mobility':
        worker.mobility = +event.target.value
        break
      case 'speed':
        worker.speed = +event.target.value
        break
      case 'potential':
        worker.potential = +event.target.value
        break
      case 'chpssh':
        worker.chpssh = +event.target.value
        break
      case 'hansen':
        worker.hansen = +event.target.value
        break
      case 'communicability':
        worker.communicability = +event.target.value
        break
      case 'improvization':
        worker.improvization = +event.target.value
        break
      case 'responsibility':
        worker.responsibility = +event.target.value
        break
      case 'workExperience':
        worker.workExperience = +event.target.value
        break
    }

  }

  function handleInput(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    axios.post('http://localhost:3000/add', worker).then(resp => {
      console.log(resp)
      getWorkers()
    });
  }

  function getWorkers() {
    axios.get('http://localhost:3000/get-all').then(resp => setWorkers(resp.data));
  }

  useEffect(() => getWorkers(), [])

  return (
    <div className="App">
      <div>
        <input type="text"  name='names' placeholder="??????" onChange={handleForm}/>
        <input type='number' name="age"  placeholder='??????????????'  onChange={handleForm}/>
        <input type='number' name="accuracy"  placeholder='????????????????????????'  onChange={handleForm}/>
        <input type='number' name="endurance"  placeholder='????????????????????????'  onChange={handleForm}/>
        <input type='number' name="conflictability"  placeholder='??????????????????????????'  onChange={handleForm}/>
        <input type='number' name="traumas"  placeholder='????????????????????????????????????????'  onChange={handleForm}/>
        <input type='number' name="mobility"  placeholder='??????????????????????'  onChange={handleForm}/>
        <input type='number' name="speed"  placeholder='????????????????'  onChange={handleForm}/>
        <input type='number' name="potential"  placeholder='??????????????????'  onChange={handleForm}/>
        <input type='number' name="chpssh"  placeholder='????????'  onChange={handleForm}/>
        <input type='number' name="hansen"  placeholder='????????????'  onChange={handleForm}/>
        <input type='number' name="communicability"  placeholder='????????????????????????????????????'  onChange={handleForm}/>
        <input type='number' name="improvization"  placeholder='????????????????????????'  onChange={handleForm}/>
        <input type='number' name="responsibility"  placeholder='??????????????????????????????'  onChange={handleForm}/>
        <input type='number' name="scan"  placeholder='????????'  onChange={handleForm}/>
        <input type='number' name="workExperience"  placeholder='????????'  onChange={handleForm}/>
      <button onClick={handleInput}>add</button>

    </div>
      <button onClick={handleAll}>get all</button>
      <div>
      <table>
        <thead>
        <td>????</td>
        <td>??????</td>
        <td>??????????????</td>
        <td>????????????????????????</td>
        <td>????????</td>
        <td>????????????????????????????????????</td>
        <td>??????????????????????????</td>
        <td>????????????????????????</td>
        <td>????????????</td>
        <td>????????????????????????</td>
        <td>??????????????????????</td>
        <td>??????????????????</td>
        <td>??????????????????????????????</td>
        <td>????????</td>
        <td>????????????????</td>
        <td>????????????????????????????????????????</td>
        <td>????????</td>
        </thead>
        <tbody>
        {!!workers && workers.map(worker => {
          return (
          <tr key={worker.id}>
            <td>{worker.id}</td>
            <td>{worker.names}</td>
            <td>{worker.age}</td>
            <td>{worker.accuracy}</td>
            <td>{worker.chpssh}</td>
            <td>{worker.communicability}</td>
            <td>{worker.conflictability}</td>
            <td>{worker.endurance}</td>
            <td>{worker.hansen}</td>
            <td>{worker.improvization}</td>
            <td>{worker.mobility}</td>
            <td>{worker.potential}</td>
            <td>{worker.responsibility}</td>
            <td>{worker.scan}</td>
            <td>{worker.speed}</td>
            <td>{worker.traumas}</td>
            <td>{worker.workExperience}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
      <MyCalendar />
    </div>
  );
}

export default App;
