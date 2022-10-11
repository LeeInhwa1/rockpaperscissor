import './App.css';
import Box from "./component/Box.js"

// 1. 박스 2개 ( 타이틀, 사진정보, 결과)
// 2. 가위 바위 보 버튼 생성
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 값을 랜덤하게 선택함
// 5. 3 4 번의 결과를 가지고 누가 이겼는지 승패를 따짐
// 6. 승패 결과에 따른 테두리 색 변경 (이기면-초록, 지면-빨강, 비기면-검정)

function App() {
    return (
        <div>
            <div className="main">
                <Box title={"You"}></Box>
                <Box title={"Computer"}></Box>
            </div>
            <div className="main">
                <button>가위</button>
                <button>바위</button>
                <button>보</button>
            </div>
        </div>
    );
}

export default App;
