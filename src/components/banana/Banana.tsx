const Banana = () => {
  const temp = 3
  const data = ["apple", "banana", "orange"]
  return (
    // 리턴내부에서 html이 쓰이고 중괄호 안에서 JS가 쓰일 수 있다.
    <>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      {temp ? <p>true</p> : <p>false</p>}
    </>
  )
}

export default Banana
