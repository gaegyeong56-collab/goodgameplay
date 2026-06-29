export default function Home() {
  return (
    <div style={{
      backgroundColor: '#120e1a', 
      color: '#ffffff', 
      minHeight: '100vh',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center', 
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        padding: '40px', 
        borderRadius: '12px',
        background: 'linear-gradient(145deg, #1e1b4b, #311042)',
        border: '1px solid #4c1d95', 
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#c084fc', margin: '0 0 10px 0' }}>연결 완료</h1>
        <p style={{ color: '#cbd5e1', margin: 0 }}>정상적으로 웹사이트에 접속되었습니다.</p>
      </div>
    </div>
  );
}