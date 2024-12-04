export default function TabButton({children}) {

  function handleClick() {
    console.log('Hello, World!');
  }

  return (
    <li>
      <button onClick={handleClick}> {/* 함수 이름만 전달(포인터만 전달)하는 것이 선언형 프로그래밍의 방법 중 하나다. */}
        {children}
      </button>
    </li>
  );
}