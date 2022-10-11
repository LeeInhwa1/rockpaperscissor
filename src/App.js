import './App.css';
import Box from "./component/Box.js"

// 1. 박스 2개 ( 타이틀, 사진정보, 결과)
// 2. 가위 바위 보 버튼 생성
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 값을 랜덤하게 선택함
// 5. 3 4 번의 결과를 가지고 누가 이겼는지 승패를 따짐
// 6. 승패 결과에 따른 테두리 색 변경 (이기면-초록, 지면-빨강, 비기면-검정)

const choice = {
    rock: {
        name: "Rock",
        img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
    },
    scissors: {
        name: "Scissors",
        img: "https://cf.shopee.ph/file/198c79d2375fce0c97aaa836df5df9a9"

    },
    paper: {
        name: "Paper",
        img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
    }
}

function App() {
    const play = (userChoice) => {
        console.log("선택됨", userChoice);
    }
    return (
        <div>
            <div className="main">
                <Box title={"You"}></Box>
                <Box title={"Computer"}></Box>
            </div>
            <div className="main">
                {/*리액트 내에서 함수를 선언할때 콜백 형태로 넣어주어야 첫 로딩시 함수가 실행 안됨*/}
                <button onClick={() => play("scissors")}>가위</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </div>
        </div>
    );
}

export default App;
