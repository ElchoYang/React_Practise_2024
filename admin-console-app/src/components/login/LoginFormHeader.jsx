import { useState, useEffect } from 'react'
import useSystem from '../.././hooks/useSystem';

const LoginHeader = () => {
  const [systemName, setSystemTem] = useState('')
  const { getSystem } = useSystem();

  useEffect(() => {
    getSystemName()
  }, [])

  const getSystemName = () => {
    getSystem().then(res => {
      setSystemTem(res.title)
    })
  }
  return (
    <>
      <h3>{systemName}</h3>
    </>
  );
};

export default LoginHeader;
