## 목차

### 1. custom hook이란?
### 2. 특징
### 3. 적용법

<br />

-------------

<br />

### 1. custom hook이란?
- 상태 관리, 변경 로직을 재사용하기 위한 사용자 정의 hook
- 여러 컴포넌트에서 동일한 상태 관리 로직을 사용할 때 유용

<br />

-------------

<br />

### 2. 특징

- "use"접두사 사용
	- 작성한 custom hook은 "use" 접두사를 붙여 custom hook이라는 것을 명시
<br />

- 기존 react hook 결합 가능
	- useState, useEffect 등 기존 hook과 결합하여 상태 관리 가능
    
<br />

- 재사용 용이
	- 여러 컴포넌트에서 동일한 상태 관리 로직이 필요할 때 재사용 용이
    - 전역 상태 관리와는 달리 여러 컴포넌트에서 동일한 상태를 유지할 필요가 없을 때 사용
    - 전역 상태와 동일한 상태 관리 로직을 구분하여 생각할 것

<br />

- 유지 보수성 향상
	- 하나의 상태에 대한 코드들을 모두 custom hook에서 관리하므로 문제 발생시 살펴봐야할 부분을 한정시킬 수 있음
    
<br />

----------------------

<br />

### 3. 적용법

- "use" 접두사를 붙여 custom hook 파일 생성
	- useState로 관리하고자 하는 상태 생성
    - 상태 관리 함수 생성
    - 외부에서 사용하고 하는 변수 반환
<br />
```
//useCounter.jsx

import React, { useState } from "react";

const useCounter = () => {

// 관리하고자 하는 상태 생성
  const [count, setCount] = useState(0);

// 상태 관리 함수 생성
  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };
  
// 외부에서 사용하고자 하는 변수 반환
  return { count, handlePlus, handleMinus };
};

export default useCounter;
```

<br />

- 해당 상태를 사용하고자 하는 컴포넌트에서 반환 값 할당 받아서 사용

<br />

```
import "./App.css";
import useCounter from "./customHooks/useCounter";

function App() {

// 반환 값 할당받기
  const { count, handlePlus, handleMinus } = useCounter();

  return (
    <div className="App" style={{ display: "flex" }}>
      <button onClick={handleMinus}>-</button>
      {count}
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default App;
```
