import logo from './logo.svg';
import './App.css';
import { add, sub } from './actions';
import { connect } from 'react-redux';

const Counter = ({ count, add, sub }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={sub}>Decrement</button>
    </div>
  );
};

 const mapStateToProps =(state)=> {
  return {
    count:state 
  }
 }
 const mapDispatchToProps = {
  add,
  sub
 }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
