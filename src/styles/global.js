import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, input. button {
  font: 14px sans-serif;
}

#root {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button {
  cursor: pointer;
  background: #7159c1;
  border: 0;
  padding: 3px 10px;
  border-radius: 0px;
}

input {

    border: none solid;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 12px;
    margin-top: 3px;

  }
`;
